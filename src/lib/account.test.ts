import { describe, expect, it } from "vitest";
import { accountFromState, emptyAccount, makeProfile, mergeAccounts, normalizeAccount } from "./account";
import { CHILD_AGES, SELF_AGES, isUnder16 } from "./content";
import { freshState } from "./game";
import type { Account, GameState } from "./types";

const onboarded = (patch: Partial<GameState["settings"]> = {}, extra: Partial<GameState> = {}): GameState => ({
  ...freshState(),
  ...extra,
  settings: { ...freshState().settings, name: "Ada", age: "18-64", onboarded: true, ...patch },
});

describe("age rules", () => {
  it("gives under-16s child profiles only", () => {
    expect(SELF_AGES.map((a) => a.band)).toEqual(["16-17", "18-64", "65+"]);
    expect(CHILD_AGES.map((a) => a.band)).toEqual(["6-9", "10-12", "13-15"]);
    expect(isUnder16("13-15")).toBe(true);
    expect(isUnder16("16-17")).toBe(false);
  });

  it("sets up child profiles from their age", () => {
    const young = makeProfile("child", " Mia ", "6-9");
    expect(young.kind).toBe("child");
    expect(young.state.settings).toMatchObject({ name: "Mia", level: "young", look: "bright", onboarded: true, dailyGoal: 15 });
    const teen = makeProfile("child", "Leo", "13-15");
    expect(teen.state.settings).toMatchObject({ level: "standard", look: "calm" });
  });
});

describe("older saves", () => {
  it("wrap a single learner as a learner account", () => {
    const a = accountFromState(onboarded())!;
    expect(a.type).toBe("learner");
    expect(a.profiles.map((p) => p.kind)).toEqual(["self"]);
    expect(a.setupDone).toBe(true);
  });

  it("move the old 13–17 band to 16–17", () => {
    const a = accountFromState(onboarded({ age: "13-17" as never }))!;
    expect(a.profiles[0].state.settings.age).toBe("16-17");
    expect(a.profiles[0].kind).toBe("self");
  });

  it("turn a child's save into a child profile", () => {
    const a = accountFromState(onboarded({ age: "6-9" }))!;
    expect(a.type).toBe("parent");
    expect(a.profiles[0].kind).toBe("child");
  });

  it("ignore a save that never finished onboarding", () => {
    expect(accountFromState(freshState())).toBeNull();
    expect(normalizeAccount({ ...freshState() })).toBeNull();
  });

  it("normalise an Account and fill in missing settings", () => {
    const raw = {
      version: 2,
      type: "parent",
      setupDone: true,
      profiles: [{ id: "x", kind: "child", state: { settings: { name: "Mia" } } }],
    };
    const a = normalizeAccount(raw)!;
    expect(a.profiles[0].state.settings.daysPerWeek).toBe(4);
    expect(a.profiles[0].state.xp).toBe(0);
    expect(normalizeAccount(null)).toBeNull();
  });
});

describe("mergeAccounts", () => {
  const account = (type: Account["type"], ...profiles: Account["profiles"]): Account => ({
    version: 2,
    type,
    profiles,
    setupDone: true,
  });

  it("treats the two 'self' profiles as the same person", () => {
    const remote = account("learner", { id: "r", kind: "self", state: onboarded({}, { xp: 20, xpByDay: { "2026-10-20": 20 } }) });
    const guest = account("learner", { id: "g", kind: "self", state: onboarded({}, { xp: 10, xpByDay: { "2026-10-23": 10 } }) });
    const m = mergeAccounts(remote, guest);
    expect(m.profiles).toHaveLength(1);
    expect(m.profiles[0].id).toBe("r");
    expect(m.profiles[0].state.xp).toBe(30);
  });

  it("matches children by name and adds new ones", () => {
    const mia = makeProfile("child", "Mia", "6-9");
    const remote = account("parent", makeProfile("self", "Ada", "18-64"), mia);
    const guestMia = { ...makeProfile("child", "mia", "6-9"), state: { ...mia.state, xp: 15, xpByDay: { "2026-10-23": 15 } } };
    const leo = makeProfile("child", "Leo", "13-15");
    const guest = account("parent", makeProfile("self", "Ada", "18-64"), guestMia, leo);
    const m = mergeAccounts(remote, guest);
    expect(m.profiles.map((p) => p.state.settings.name)).toEqual(["Ada", "Mia", "Leo"]);
    expect(m.profiles[1].state.xp).toBe(15);
    expect(m.type).toBe("parent");
  });

  it("keeps setup finished if either copy finished it", () => {
    expect(mergeAccounts({ ...emptyAccount(), setupDone: true }, emptyAccount()).setupDone).toBe(true);
  });
});
