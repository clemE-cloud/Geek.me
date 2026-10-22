import { describe, expect, it } from "vitest";
import { LESSONS } from "../data/lessons";
import { DAILY_EPOCH, DAILY_POOL, dailyItem, dailyNumber, defaultsForAge, isChild, lessonView } from "./content";
import { addDays } from "./dates";
import { answerDaily, freshState } from "./game";

describe("lesson library", () => {
  it("has 100 lessons with unique ids", () => {
    expect(LESSONS.length).toBe(100);
    expect(new Set(LESSONS.map((l) => l.id)).size).toBe(LESSONS.length);
  });

  it("gives every lesson at least one https source", () => {
    for (const l of LESSONS) {
      expect(l.sources.length, l.id).toBeGreaterThan(0);
      for (const s of l.sources) expect(s, l.id).toMatch(/^https:\/\//);
    }
  });

  it("uses 3 questions with 4 options and valid answers", () => {
    for (const l of LESSONS) {
      expect(l.qs.length, l.id).toBe(3);
      for (const q of l.qs) {
        expect(q.o.length, `${l.id}: ${q.q}`).toBe(4);
        expect(q.a).toBeLessThan(q.o.length);
      }
    }
  });

  it("keeps lessons short", () => {
    for (const l of LESSONS) {
      const words = l.body.join(" ").split(/\s+/).length;
      expect(words, l.id).toBeGreaterThanOrEqual(75);
      expect(words, l.id).toBeLessThanOrEqual(230);
    }
  });

  it("doesn't put every right answer in the same slot", () => {
    for (const l of LESSONS) {
      expect(new Set(l.qs.map((q) => q.a)).size, l.id).toBeGreaterThan(1);
      expect(new Set(l.young.qs.map((q) => q.a)).size, `${l.id} young`).toBeGreaterThan(1);
    }
  });

  it("marks only real questions for the daily pool", () => {
    for (const l of LESSONS) for (const qi of l.daily ?? []) expect(l.qs[qi], l.id).toBeDefined();
  });
});

describe("young lessons", () => {
  it("have the same number of questions, with 3 options each", () => {
    for (const l of LESSONS) {
      expect(l.young.qs.length, l.id).toBe(l.qs.length);
      for (const q of l.young.qs) {
        expect(q.o.length, `${l.id}: ${q.q}`).toBe(3);
        expect(q.a).toBeLessThan(q.o.length);
      }
    }
  });

  it("keep sentences short", () => {
    for (const l of LESSONS)
      for (const p of l.young.body)
        for (const sentence of p.split(/(?<=[.!?][’'"”]?)\s+/))
          expect(sentence.split(/\s+/).length, `${l.id}: ${sentence}`).toBeLessThanOrEqual(24);
  });

  it("are used only at the young level", () => {
    expect(lessonView("b02", "young")?.title).toBe("Little and often");
    expect(lessonView("b02", "standard")?.title).toBe("The spacing effect");
    expect(lessonView("b01", "young")?.title).toBe("Why the sky is blue");
  });
});

describe("age defaults", () => {
  it("adapt level, look and text size", () => {
    expect(defaultsForAge("6-9")).toEqual({ level: "young", look: "bright", textSize: "large" });
    expect(defaultsForAge("10-12").level).toBe("young");
    expect(defaultsForAge("18-64")).toEqual({ level: "standard", look: "calm", textSize: "normal" });
    expect(defaultsForAge("65+").textSize).toBe("large");
    expect(isChild({ ...freshState().settings, age: "10-12" })).toBe(true);
    expect(isChild({ ...freshState().settings, age: "13-17" })).toBe(false);
  });
});

describe("daily question", () => {
  it("numbers days from the launch date", () => {
    expect(dailyNumber(DAILY_EPOCH)).toBe(1);
    expect(dailyNumber(addDays(DAILY_EPOCH, 30))).toBe(31);
  });

  it("only uses questions that exist at both levels", () => {
    expect(new Set(DAILY_POOL).size).toBe(DAILY_POOL.length);
    for (const k of DAILY_POOL) {
      const [id, qi] = k.split(":");
      expect(lessonView(id, "standard")?.qs[Number(qi)], k).toBeDefined();
      expect(lessonView(id, "young")?.qs[Number(qi)], k).toBeDefined();
    }
  });

  it("is the same for a given date and doesn't repeat until the pool runs out", () => {
    expect(dailyItem("2026-11-05")).toEqual(dailyItem("2026-11-05"));
    const seen = new Set<string>();
    for (let i = 0; i < DAILY_POOL.length; i++) {
      const it = dailyItem(addDays(DAILY_EPOCH, i));
      seen.add(`${it.lessonId}:${it.qi}`);
    }
    expect(seen.size).toBe(DAILY_POOL.length);
  });

  it("can be answered once a day", () => {
    let s = answerDaily(freshState(), DAILY_EPOCH, true);
    expect(s.xp).toBe(5);
    s = answerDaily(s, DAILY_EPOCH, false);
    expect(s.daily[DAILY_EPOCH]).toBe(true);
    expect(s.xp).toBe(5);
    expect(answerDaily(s, addDays(DAILY_EPOCH, 1), false).xp).toBe(5);
  });
});
