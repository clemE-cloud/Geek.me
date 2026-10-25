import { describe, expect, it } from "vitest";
import { addDays } from "./dates";
import { freshState } from "./game";
import { planReminders, REMINDER_DAYS } from "./reminders";

// A Wednesday.
const T = "2026-10-28";
const morning = new Date(2026, 9, 28, 7, 0);
const withReminder = (time = "19:00") => {
  const s = freshState();
  s.settings.reminder = { on: true, time };
  return s;
};

describe("reminders", () => {
  it("are off unless switched on", () => {
    expect(planReminders(freshState(), T, morning)).toEqual([]);
    const s = withReminder();
    s.settings.reminder = { on: false, time: "19:00" };
    expect(planReminders(s, T, morning)).toEqual([]);
  });

  it("schedule one a day, at the chosen time, leading with that day's question", () => {
    const plan = planReminders(withReminder("19:30"), T, morning);
    expect(plan).toHaveLength(REMINDER_DAYS);
    expect(plan[0].at.getHours()).toBe(19);
    expect(plan[0].at.getMinutes()).toBe(30);
    expect(plan[0].body.endsWith("?")).toBe(true);
    expect(new Set(plan.map((p) => p.id)).size).toBe(plan.length);
  });

  it("skip today once you've learned, or once the time has passed", () => {
    const s = withReminder();
    s.xpByDay[T] = 10;
    expect(planReminders(s, T, morning)[0].id).toBe(20261029);
    expect(planReminders(withReminder("06:00"), T, morning)[0].id).toBe(20261029);
  });

  it("stay quiet for the rest of the week once its days are done", () => {
    const s = withReminder();
    s.settings.daysPerWeek = 2;
    s.xpByDay["2026-10-26"] = 10;
    s.xpByDay["2026-10-27"] = 10;
    expect(planReminders(s, T, morning)[0].id).toBe(20261102);
  });

  it("stay quiet during a break", () => {
    const s = withReminder();
    s.breaks = [{ start: T, end: addDays(T, 4) }];
    expect(planReminders(s, T, morning)[0].id).toBe(20261102);
  });
});
