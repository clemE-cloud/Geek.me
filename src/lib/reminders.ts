import { dailyItem, lessonView } from "./content";
import { addDays, parseYmd, weekStart } from "./dates";
import { activeDaysInWeek, breakOn, xpOn } from "./game";
import type { GameState } from "./types";

/** How far ahead to schedule. Reminders are rebuilt whenever the app opens or progress changes. */
export const REMINDER_DAYS = 14;

export interface PlannedReminder {
  id: number;
  at: Date;
  title: string;
  body: string;
}

const at = (day: string, time: string) => {
  const [h, m] = time.split(":").map(Number);
  const d = parseYmd(day);
  d.setHours(h, m, 0, 0);
  return d;
};

/**
 * The reminders to schedule from now: at most one a day, never on a day you've already learned,
 * never during a break, and not once this week's rhythm is met. Each one leads with that day's question.
 */
export function planReminders(s: GameState, t: string, now: Date): PlannedReminder[] {
  const r = s.settings.reminder;
  if (!r?.on) return [];
  const out: PlannedReminder[] = [];
  // Once this week's days are done, stay quiet until next week.
  const quietUntil = activeDaysInWeek(s, t) >= s.settings.daysPerWeek ? addDays(weekStart(t), 6) : "";
  for (let i = 0; i < REMINDER_DAYS; i++) {
    const day = addDays(t, i);
    const when = at(day, r.time);
    if (when <= now || breakOn(s, day) || day <= quietUntil) continue;
    if (i === 0 && xpOn(s, day) > 0) continue;
    const item = dailyItem(day);
    const q = lessonView(item.lessonId, s.settings.level)?.qs[item.qi].q;
    out.push({
      id: Number(day.replace(/-/g, "")),
      at: when,
      title: "Today's question is ready",
      body: q ?? "A two-minute lesson is waiting for you.",
    });
  }
  return out;
}
