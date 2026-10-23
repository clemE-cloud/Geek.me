-- Geek.me database setup.
-- Run once in the Supabase dashboard: SQL Editor → New query → paste this file → Run.
-- Safe to run again: it only creates what's missing.

-- One row per account, holding that person's whole progress as JSON
-- (the same shape the app keeps in the browser).
create table if not exists public.progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  state jsonb not null,
  updated_at timestamptz not null default now(),
  -- Guard against junk uploads; real progress is a few tens of KB at most.
  constraint progress_state_size check (pg_column_size(state) < 500000)
);

-- Row-level security: without a matching policy, nobody can read or write a row.
alter table public.progress enable row level security;

drop policy if exists "Read own progress" on public.progress;
create policy "Read own progress" on public.progress
  for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Create own progress" on public.progress;
create policy "Create own progress" on public.progress
  for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Update own progress" on public.progress;
create policy "Update own progress" on public.progress
  for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "Delete own progress" on public.progress;
create policy "Delete own progress" on public.progress
  for delete to authenticated
  using ((select auth.uid()) = user_id);

-- Lets a signed-in person delete their own account (Profile → Your data → Delete my account).
-- Their progress row goes too, through the foreign key's ON DELETE CASCADE.
-- It can only ever act on the caller (auth.uid()), and signed-out visitors can't run it.
create or replace function public.delete_my_account()
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  me uuid := auth.uid();
begin
  if me is null then
    raise exception 'Not signed in' using errcode = '42501';
  end if;
  delete from auth.users where id = me;
end;
$$;

revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;

-- ---------------------------------------------------------------------------
-- Circles: small groups (up to 8 profiles) with a shared weekly XP goal.
-- Members see each other's first name, picture and XP for the week, nothing else.
-- Friends circles are for ages 16+; children's profiles can only join family circles.
-- ---------------------------------------------------------------------------
create table if not exists public.circles (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 1 and 40),
  kind text not null default 'friends' check (kind in ('friends', 'family')),
  code text not null unique check (code ~ '^[A-Z0-9]{6}$'),
  weekly_goal int not null default 150 check (weekly_goal between 20 and 5000),
  owner uuid not null references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.circle_members (
  circle_id uuid not null references public.circles (id) on delete cascade,
  user_id uuid not null references auth.users (id) on delete cascade,
  profile_id text not null check (char_length(profile_id) between 1 and 64),
  display_name text not null check (char_length(btrim(display_name)) between 1 and 40),
  avatar text not null default '' check (char_length(avatar) <= 16),
  is_child boolean not null default false,
  week_start date,
  week_xp int not null default 0 check (week_xp between 0 and 100000),
  joined_at timestamptz not null default now(),
  primary key (circle_id, user_id, profile_id)
);
create index if not exists circle_members_user_id_idx on public.circle_members (user_id);

alter table public.circles enable row level security;
alter table public.circle_members enable row level security;

create or replace function public.is_circle_member(cid uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.circle_members m where m.circle_id = cid and m.user_id = (select auth.uid()));
$$;

drop policy if exists "Members can see their circles" on public.circles;
create policy "Members can see their circles" on public.circles
  for select to authenticated using (public.is_circle_member(id));
drop policy if exists "Owners can edit their circles" on public.circles;
create policy "Owners can edit their circles" on public.circles
  for update to authenticated using ((select auth.uid()) = owner) with check ((select auth.uid()) = owner);
drop policy if exists "Owners can remove their circles" on public.circles;
create policy "Owners can remove their circles" on public.circles
  for delete to authenticated using ((select auth.uid()) = owner);

drop policy if exists "Members can see each other" on public.circle_members;
create policy "Members can see each other" on public.circle_members
  for select to authenticated using (public.is_circle_member(circle_id));
drop policy if exists "Members update their own rows" on public.circle_members;
create policy "Members update their own rows" on public.circle_members
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
drop policy if exists "Members leave, owners remove" on public.circle_members;
create policy "Members leave, owners remove" on public.circle_members
  for delete to authenticated using (
    (select auth.uid()) = user_id
    or exists (select 1 from public.circles c where c.id = circle_id and c.owner = (select auth.uid()))
  );

-- Only these columns can be changed directly; joining and creating go through the functions below.
revoke update on public.circles from authenticated, anon;
grant update (name, weekly_goal) on public.circles to authenticated;
revoke update on public.circle_members from authenticated, anon;
grant update (display_name, avatar, week_start, week_xp) on public.circle_members to authenticated;

create or replace function public.create_circle(p_name text, p_kind text, p_goal int, p_profile_id text, p_display_name text, p_avatar text)
returns public.circles language plpgsql security definer set search_path = '' as $$
declare
  me uuid := auth.uid();
  new_code text;
  result public.circles;
begin
  if me is null then raise exception 'Not signed in' using errcode = '42501'; end if;
  if (select count(*) from public.circles where owner = me) >= 10 then
    raise exception 'You can start up to 10 circles' using errcode = 'P0001';
  end if;
  loop
    new_code := upper(substr(md5(random()::text || clock_timestamp()::text), 1, 6));
    exit when not exists (select 1 from public.circles where code = new_code);
  end loop;
  insert into public.circles (name, kind, code, weekly_goal, owner)
    values (btrim(p_name), p_kind, new_code, p_goal, me) returning * into result;
  insert into public.circle_members (circle_id, user_id, profile_id, display_name, avatar, is_child)
    values (result.id, me, p_profile_id, btrim(p_display_name), coalesce(p_avatar, ''), false);
  return result;
end;
$$;

create or replace function public.circle_preview(p_code text)
returns table (name text, kind text, members int) language sql stable security definer set search_path = '' as $$
  select c.name, c.kind, (select count(*)::int from public.circle_members m where m.circle_id = c.id)
  from public.circles c where c.code = upper(btrim(p_code));
$$;

create or replace function public.join_circle(p_code text, p_profile_id text, p_display_name text, p_avatar text, p_is_child boolean)
returns uuid language plpgsql security definer set search_path = '' as $$
declare
  me uuid := auth.uid();
  c public.circles;
begin
  if me is null then raise exception 'Not signed in' using errcode = '42501'; end if;
  select * into c from public.circles where code = upper(btrim(p_code));
  if not found then raise exception 'No circle has that code' using errcode = 'P0002'; end if;
  if exists (select 1 from public.circle_members where circle_id = c.id and user_id = me and profile_id = p_profile_id) then
    return c.id;
  end if;
  if p_is_child and c.kind <> 'family' then
    raise exception 'Children can only join family circles' using errcode = 'P0001';
  end if;
  if (select count(*) from public.circle_members where circle_id = c.id) >= 8 then
    raise exception 'This circle is full' using errcode = 'P0001';
  end if;
  insert into public.circle_members (circle_id, user_id, profile_id, display_name, avatar, is_child)
    values (c.id, me, p_profile_id, btrim(p_display_name), coalesce(p_avatar, ''), p_is_child);
  return c.id;
end;
$$;

revoke all on function public.is_circle_member(uuid) from public, anon;
revoke all on function public.create_circle(text, text, int, text, text, text) from public, anon;
revoke all on function public.circle_preview(text) from public, anon;
revoke all on function public.join_circle(text, text, text, text, boolean) from public, anon;
grant execute on function public.is_circle_member(uuid) to authenticated;
grant execute on function public.create_circle(text, text, int, text, text, text) to authenticated;
grant execute on function public.circle_preview(text) to authenticated;
grant execute on function public.join_circle(text, text, text, text, boolean) to authenticated;
