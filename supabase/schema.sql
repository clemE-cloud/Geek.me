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
