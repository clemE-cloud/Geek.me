import { defaultsForAge, isUnder16 } from "./content";
import { freshState } from "./game";
import { mergeStates } from "./merge";
import type { Account, AgeBand, GameState, Profile, Settings } from "./types";

export const newId = (): string =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2) + Date.now().toString(36);

export const emptyAccount = (): Account => ({ version: 2, type: "learner", profiles: [], setupDone: false });

/** A new profile with settings filled in from its age. */
export function makeProfile(kind: Profile["kind"], name: string, age: AgeBand, extra: Partial<Settings> = {}): Profile {
  const state = freshState();
  state.settings = {
    ...state.settings,
    name: name.trim(),
    age,
    ...defaultsForAge(age),
    ...(kind === "child" ? { dailyGoal: 15 } : {}),
    ...extra,
    onboarded: true,
  };
  return { id: newId(), kind, state };
}

/** Wraps a single-learner state from before accounts existed. A not-yet-onboarded state carries nothing worth keeping. */
export function accountFromState(s: GameState): Account | null {
  if (!s.settings.onboarded) return null;
  // The old 13–17 band predates the under-16 rule; treat those saves as 16–17 learners.
  if ((s.settings.age as string) === "13-17") s = { ...s, settings: { ...s.settings, age: "16-17" } };
  const kind = isUnder16(s.settings.age) ? "child" : "self";
  return {
    version: 2,
    type: kind === "child" ? "parent" : "learner",
    profiles: [{ id: newId(), kind, state: s }],
    setupDone: true,
  };
}

/** Accepts anything we may have stored (an Account, or an older single GameState) and returns an Account, or null. */
export function normalizeAccount(raw: unknown): Account | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Partial<Account> & Partial<GameState>;
  if (r.version === 2 && Array.isArray(r.profiles)) {
    const fresh = freshState();
    return {
      version: 2,
      type: r.type === "parent" ? "parent" : "learner",
      setupDone: !!r.setupDone,
      profiles: r.profiles.map((p) => ({
        ...p,
        state: { ...fresh, ...p.state, settings: { ...fresh.settings, ...p.state.settings } },
      })),
    };
  }
  if (r.version === 1 && r.settings) {
    const fresh = freshState();
    return accountFromState({ ...fresh, ...(r as GameState), settings: { ...fresh.settings, ...r.settings } });
  }
  return null;
}

const sameName = (a: Profile, b: Profile) =>
  a.state.settings.name.trim().toLowerCase() === b.state.settings.name.trim().toLowerCase();

/**
 * Combines two copies of an account, e.g. a guest family set up on this device and the account they sign in to.
 * Profiles are matched by id, then the two "self" profiles are treated as the same person, and children are
 * matched by name. Anything unmatched is added, so no one's progress is lost.
 */
export function mergeAccounts(primary: Account, other: Account): Account {
  const profiles = primary.profiles.map((p) => ({ ...p }));
  for (const o of other.profiles) {
    const match =
      profiles.find((p) => p.id === o.id) ??
      (o.kind === "self" ? profiles.find((p) => p.kind === "self") : profiles.find((p) => p.kind === "child" && sameName(p, o)));
    if (match) match.state = mergeStates(match.state, o.state);
    else profiles.push(o);
  }
  return {
    version: 2,
    type: primary.type === "parent" || other.type === "parent" ? "parent" : "learner",
    profiles,
    setupDone: primary.setupDone || other.setupDone,
  };
}

export const hasChildren = (a: Account) => a.profiles.some((p) => p.kind === "child");
