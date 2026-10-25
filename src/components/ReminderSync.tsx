import { useEffect, useState } from "react";
import { today } from "../lib/dates";
import { isNative, onNativeEvents, scheduleReminders } from "../lib/native";
import { planReminders } from "../lib/reminders";
import { go } from "../lib/router";
import { useGame } from "../lib/useGame";

/**
 * In the phone apps, keeps the scheduled reminders in step with progress: learning today
 * cancels today's nudge, and a break or a met week silences them. Tapping one opens today's question.
 */
export function ReminderSync() {
  const { state } = useGame();
  const [opened, setOpened] = useState(0);

  useEffect(
    () =>
      onNativeEvents({
        tapped: () => go("daily"),
        resumed: () => setOpened((n) => n + 1),
      }),
    [],
  );

  const t = today();
  const key = JSON.stringify([t, state.settings.reminder, state.settings.daysPerWeek, state.settings.level, state.xpByDay, state.breaks]);
  useEffect(() => {
    if (!isNative) return;
    const timer = setTimeout(() => void scheduleReminders(planReminders(state, t, new Date())).catch(() => {}), 1000);
    return () => clearTimeout(timer);
    // `key` stands in for everything the plan depends on.
  }, [key, opened]);

  return null;
}
