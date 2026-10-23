import { today, weekDays, weekStart } from "./dates";
import { xpOn } from "./game";
import { supabase } from "./supabase";
import type { Account, GameState, Profile } from "./types";

export type CircleKind = "friends" | "family";

export interface Circle {
  id: string;
  name: string;
  kind: CircleKind;
  code: string;
  weekly_goal: number;
  owner: string;
  created_at: string;
}

export interface Member {
  circle_id: string;
  user_id: string;
  profile_id: string;
  display_name: string;
  avatar: string;
  is_child: boolean;
  week_start: string | null;
  week_xp: number;
}

export interface CirclePreview {
  name: string;
  kind: CircleKind;
  members: number;
}

export const MAX_MEMBERS = 8;
export const GOALS = [100, 150, 250, 400];

/** XP earned so far this week (Monday to Sunday). */
export const weekXp = (s: GameState, day = today()) => weekDays(day).reduce((n, d) => n + xpOn(s, d), 0);

/** A member's XP for the current week; stale rows from an earlier week count as 0. */
export const memberWeekXp = (m: Member, day = today()) => (m.week_start === weekStart(day) ? m.week_xp : 0);

export const circleTotal = (members: Member[], day = today()) => members.reduce((n, m) => n + memberWeekXp(m, day), 0);

/** Highest XP first, ties by name; or alphabetical when the ranking is hidden. */
export function sortMembers(members: Member[], ranked: boolean, day = today()): Member[] {
  const byName = (a: Member, b: Member) => a.display_name.localeCompare(b.display_name);
  return [...members].sort(ranked ? (a, b) => memberWeekXp(b, day) - memberWeekXp(a, day) || byName(a, b) : byName);
}

/** Turns Supabase/Postgres errors into short, friendly messages. */
const friendly = (message: string) =>
  /full/i.test(message)
    ? "This circle is full (8 people at most)."
    : /no circle/i.test(message)
      ? "No circle has that code. Check it and try again."
      : /children can only/i.test(message)
        ? "Children can only join family circles."
        : /up to 10/i.test(message)
          ? "You can start up to 10 circles."
          : /fetch|network/i.test(message)
            ? "Couldn't reach the server. Check your connection and try again."
            : message;

type Result<T> = { data: T; error: null } | { data: null; error: string };
const ok = <T>(data: T): Result<T> => ({ data, error: null });
const fail = <T>(message: string): Result<T> => ({ data: null, error: friendly(message) });
const client = () => {
  if (!supabase) throw new Error("Accounts aren't available.");
  return supabase;
};

const memberFields = (p: Profile) => ({
  p_profile_id: p.id,
  p_display_name: p.state.settings.name.trim() || "Learner",
  p_avatar: p.state.settings.avatar ?? "",
});

/** Every circle the signed-in account belongs to, with all of each circle's members. */
export async function loadCircles(): Promise<Result<{ circles: Circle[]; members: Member[] }>> {
  const db = client();
  const [c, m] = await Promise.all([
    db.from("circles").select("*").order("created_at"),
    db.from("circle_members").select("*").order("joined_at"),
  ]);
  if (c.error) return fail(c.error.message);
  if (m.error) return fail(m.error.message);
  return ok({ circles: c.data as Circle[], members: m.data as Member[] });
}

export async function createCircle(name: string, kind: CircleKind, goal: number, creator: Profile): Promise<Result<Circle>> {
  const { data, error } = await client().rpc("create_circle", {
    p_name: name.trim(),
    p_kind: kind,
    p_goal: goal,
    ...memberFields(creator),
  });
  return error ? fail(error.message) : ok(data as Circle);
}

export async function previewCircle(code: string): Promise<Result<CirclePreview | null>> {
  const { data, error } = await client().rpc("circle_preview", { p_code: code });
  if (error) return fail(error.message);
  return ok(((data as CirclePreview[] | null) ?? [])[0] ?? null);
}

export async function joinCircle(code: string, profile: Profile): Promise<Result<string>> {
  const { data, error } = await client().rpc("join_circle", {
    p_code: code,
    ...memberFields(profile),
    p_is_child: profile.kind === "child",
  });
  return error ? fail(error.message) : ok(data as string);
}

/** Leave a circle (for one of this account's profiles), or as the owner remove someone. */
export async function removeMember(m: Pick<Member, "circle_id" | "user_id" | "profile_id">): Promise<Result<true>> {
  const { error } = await client()
    .from("circle_members")
    .delete()
    .eq("circle_id", m.circle_id)
    .eq("user_id", m.user_id)
    .eq("profile_id", m.profile_id);
  return error ? fail(error.message) : ok(true);
}

/** Takes a profile out of every circle, e.g. when a parent removes a child's profile. */
export async function removeProfileFromCircles(userId: string, profileId: string): Promise<void> {
  await client().from("circle_members").delete().eq("user_id", userId).eq("profile_id", profileId);
}

export async function updateCircle(id: string, patch: Partial<Pick<Circle, "name" | "weekly_goal">>): Promise<Result<true>> {
  const { error } = await client().from("circles").update(patch).eq("id", id);
  return error ? fail(error.message) : ok(true);
}

export async function deleteCircle(id: string): Promise<Result<true>> {
  const { error } = await client().from("circles").delete().eq("id", id);
  return error ? fail(error.message) : ok(true);
}

/** What each of this account's profiles should currently show to its circles. */
export function memberSnapshot(account: Account, day = today()) {
  const start = weekStart(day);
  return account.profiles.map((p) => ({
    profile_id: p.id,
    display_name: p.state.settings.name.trim() || "Learner",
    avatar: p.state.settings.avatar ?? "",
    week_start: start,
    week_xp: Math.min(100_000, weekXp(p.state, day)),
  }));
}

/** Sends one profile's weekly XP, name and picture to every circle it's in. Rows for other circles are untouched. */
export async function pushMember(userId: string, snap: ReturnType<typeof memberSnapshot>[number]): Promise<boolean> {
  const { profile_id, ...fields } = snap;
  const { error } = await client().from("circle_members").update(fields).eq("user_id", userId).eq("profile_id", profile_id);
  return !error;
}

export const inviteText = (c: Pick<Circle, "name" | "code">) =>
  `Join my Geek.me circle, “${c.name}”. We learn one short thing a day and share a weekly goal. Code: ${c.code}`;
