import { describe, expect, it } from "vitest";
import { CONSTELLATIONS } from "../data/constellations";
import { LESSONS, lessonById } from "../data/lessons";
import { addDays, weekStart } from "./dates";
import {
  FOCUS_MAX,
  answerFocus,
  awardAchievements,
  completeLesson,
  completeReview,
  dueItems,
  freshState,
  isUnlocked,
  nextLesson,
  rhythmWeeks,
} from "./game";
import { migrateV1 } from "./storage";

const T = "2026-10-22"; // a Thursday
const lesson = lessonById("b01")!;

describe("content", () => {
  it("puts every lesson in exactly one constellation", () => {
    const placed = CONSTELLATIONS.flatMap((c) => c.lessons);
    expect(new Set(placed).size).toBe(placed.length);
    expect([...placed].sort()).toEqual(LESSONS.map((l) => l.id).sort());
  });
  it("has valid answers", () => {
    for (const l of LESSONS) for (const q of l.qs) expect(q.a).toBeLessThan(q.o.length);
  });
});

describe("lessons", () => {
  it("unlocks stars in order", () => {
    const c = CONSTELLATIONS[0];
    let s = freshState();
    expect(isUnlocked(s, c, c.lessons[0])).toBe(true);
    expect(isUnlocked(s, c, c.lessons[1])).toBe(false);
    s = completeLesson(s, lessonById(c.lessons[0])!, [true, true, true], T).state;
    expect(isUnlocked(s, c, c.lessons[1])).toBe(true);
    expect(nextLesson(s)?.id).toBe(c.lessons[1]);
  });

  it("awards XP and schedules review cards", () => {
    const { state, gained } = completeLesson(freshState(), lesson, [true, false, true], T);
    expect(gained).toBe(20);
    expect(state.xpByDay[T]).toBe(20);
    expect(state.cards["b01:0"]).toEqual({ box: 1, due: addDays(T, 2) });
    expect(state.cards["b01:1"]).toEqual({ box: 0, due: addDays(T, 1) });
  });
});

describe("focus", () => {
  it("drops on wrong lesson answers and refills on right review answers", () => {
    let s = freshState();
    s = answerFocus(s, "lesson", false);
    expect(s.focus).toBe(FOCUS_MAX - 1);
    s = answerFocus(s, "lesson", true);
    expect(s.focus).toBe(FOCUS_MAX - 1);
    s = answerFocus(s, "review", true);
    s = answerFocus(s, "review", true);
    expect(s.focus).toBe(FOCUS_MAX);
    for (let i = 0; i < 10; i++) s = answerFocus(s, "lesson", false);
    expect(s.focus).toBe(0);
  });
});

describe("review", () => {
  it("moves due cards between boxes; practice leaves schedule alone", () => {
    let s = completeLesson(freshState(), lesson, [true, false, true], T).state;
    const t2 = addDays(T, 1);
    const due = dueItems(s, t2);
    expect(due).toEqual([{ lessonId: "b01", qi: 1 }]);
    const r = completeReview(s, [...due, { lessonId: "b01", qi: 0 }], [true, true], t2);
    expect(r.state.cards["b01:1"]).toEqual({ box: 1, due: addDays(t2, 2) });
    expect(r.state.cards["b01:0"]).toEqual(s.cards["b01:0"]);
    expect(r.gained).toBe(3 + 1);
    s = completeReview(r.state, [{ lessonId: "b01", qi: 1 }], [false], addDays(t2, 2)).state;
    expect(s.cards["b01:1"].box).toBe(0);
  });
});

describe("rhythm", () => {
  const withDays = (days: string[], perWeek = 2) => {
    const s = freshState();
    s.settings.daysPerWeek = perWeek;
    days.forEach((d) => (s.xpByDay[d] = 10));
    return s;
  };
  const mon = weekStart(T);

  it("counts consecutive weeks and ignores an unfinished current week", () => {
    const lastWeek = addDays(mon, -7);
    const twoAgo = addDays(mon, -14);
    const s = withDays([lastWeek, addDays(lastWeek, 3), twoAgo, addDays(twoAgo, 1)]);
    expect(rhythmWeeks(s, T)).toBe(2);
    s.xpByDay[mon] = 5;
    s.xpByDay[addDays(mon, 1)] = 5;
    expect(rhythmWeeks(s, T)).toBe(3);
  });

  it("breaks after a missed week", () => {
    const s = withDays([addDays(mon, -14), addDays(mon, -13)]);
    expect(rhythmWeeks(s, T)).toBe(0);
  });
});

describe("achievements", () => {
  it("awards once", () => {
    const s = completeLesson(freshState(), lesson, [true, true, true], T).state;
    const a = awardAchievements(s, T);
    expect(a.earned.map((x) => x.id)).toEqual(expect.arrayContaining(["first-light", "flawless"]));
    expect(awardAchievements(a.state, T).earned).toEqual([]);
  });
});

describe("v1 migration", () => {
  it("keeps lessons, cards and XP", () => {
    const s = migrateV1({ P: { xp: 45, days: ["2026-10-20"], cards: { "b01:0": { box: 2, due: T } } }, L: { b01: { learnedOn: "2026-10-20" } } });
    expect(s?.learned).toEqual({ b01: "2026-10-20" });
    expect(s?.cards["b01:0"].box).toBe(2);
    expect(s?.xp).toBe(45);
    expect(s?.settings.onboarded).toBe(false);
    expect(migrateV1(null)).toBeNull();
  });
});
