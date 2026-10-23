import { describe, expect, it } from "vitest";
import { freshState } from "./game";
import { hasProgress, mergeStates } from "./merge";
import type { GameState } from "./types";

const make = (patch: Partial<GameState>): GameState => ({ ...freshState(), ...patch });

describe("mergeStates", () => {
  it("keeps lessons from both, with the earlier date", () => {
    const a = make({ learned: { b01: "2026-10-10", b02: "2026-10-12" } });
    const b = make({ learned: { b01: "2026-10-05", b03: "2026-10-20" } });
    expect(mergeStates(a, b).learned).toEqual({ b01: "2026-10-05", b02: "2026-10-12", b03: "2026-10-20" });
  });

  it("doesn't double-count a day both copies saw", () => {
    const a = make({ xp: 30, xpByDay: { "2026-10-20": 30 } });
    const b = make({ xp: 45, xpByDay: { "2026-10-20": 30, "2026-10-21": 15 } });
    const m = mergeStates(a, b);
    expect(m.xpByDay).toEqual({ "2026-10-20": 30, "2026-10-21": 15 });
    expect(m.xp).toBe(45);
  });

  it("adds XP from days only one copy has", () => {
    const a = make({ xp: 20, xpByDay: { "2026-10-20": 20 } });
    const b = make({ xp: 15, xpByDay: { "2026-10-22": 15 } });
    expect(mergeStates(a, b).xp).toBe(35);
  });

  it("keeps the review card that's further along", () => {
    const a = make({ cards: { "b01:0": { box: 1, due: "2026-10-22" }, "b01:1": { box: 3, due: "2026-11-01" } } });
    const b = make({ cards: { "b01:0": { box: 2, due: "2026-10-24" }, "b01:1": { box: 0, due: "2026-10-21" } } });
    expect(mergeStates(a, b).cards).toEqual({ "b01:0": { box: 2, due: "2026-10-24" }, "b01:1": { box: 3, due: "2026-11-01" } });
  });

  it("takes settings from the onboarded copy, preferring the first", () => {
    const done = { ...freshState().settings, name: "Ada", onboarded: true };
    const done2 = { ...freshState().settings, name: "Sam", onboarded: true };
    expect(mergeStates(make({}), make({ settings: done })).settings.name).toBe("Ada");
    expect(mergeStates(make({ settings: done2 }), make({ settings: done })).settings.name).toBe("Sam");
  });

  it("unites daily answers and achievements", () => {
    const a = make({ daily: { "2026-10-22": false }, achievements: { "first-light": "2026-10-20" } });
    const b = make({
      daily: { "2026-10-22": true, "2026-10-23": false },
      achievements: { "first-light": "2026-10-18", flawless: "2026-10-19" },
    });
    const m = mergeStates(a, b);
    expect(m.daily).toEqual({ "2026-10-22": true, "2026-10-23": false });
    expect(m.achievements).toEqual({ "first-light": "2026-10-18", flawless: "2026-10-19" });
  });

  it("is a no-op when merging a state with itself", () => {
    const s = make({
      xp: 40,
      xpByDay: { "2026-10-20": 40 },
      learned: { b01: "2026-10-20" },
      cards: { "b01:0": { box: 1, due: "2026-10-22" } },
    });
    expect(mergeStates(s, s)).toEqual(s);
  });
});

describe("hasProgress", () => {
  it("is false for a fresh state and true once anything is done", () => {
    expect(hasProgress(freshState())).toBe(false);
    expect(hasProgress(make({ daily: { "2026-10-22": true } }))).toBe(true);
  });
});
