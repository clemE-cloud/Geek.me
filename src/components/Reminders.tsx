import { useState } from "react";
import { allowReminders, isNative } from "../lib/native";
import { useGame } from "../lib/useGame";

export const REMINDER_TIMES = [
  { time: "08:00", label: "Morning", note: "8:00" },
  { time: "12:30", label: "Lunch", note: "12:30" },
  { time: "19:00", label: "Evening", note: "19:00" },
];

/** Turns reminders on at a time, asking the phone for permission first. Returns an error message, or null. */
function useTurnOn() {
  const { updateSettings } = useGame();
  return async (time: string): Promise<string | null> => {
    if (!(await allowReminders())) return "Notifications are off for Geek.me. You can turn them on in your phone's Settings.";
    updateSettings({ reminder: { on: true, time } });
    return null;
  };
}

/** Profile setting. Only shown in the phone apps; the website can't schedule notifications reliably. */
export function ReminderSettings() {
  const { state, updateSettings } = useGame();
  const turnOn = useTurnOn();
  const [error, setError] = useState<string | null>(null);
  if (!isNative) return null;
  const r = state.settings.reminder;
  return (
    <section className="card stack-sm">
      <span className="label">Reminders</span>
      <p className="note">One gentle nudge with the day's question, only on days you haven't learned yet. None during a break, and none once your week is done.</p>
      <label className="switch-row">
        <span>Remind me</span>
        <input
          type="checkbox"
          role="switch"
          checked={!!r?.on}
          onChange={async (e) => {
            setError(null);
            if (e.target.checked) setError(await turnOn(r?.time ?? "19:00"));
            else updateSettings({ reminder: { on: false, time: r?.time ?? "19:00" } });
          }}
        />
      </label>
      {r?.on && (
        <label className="field">
          <span className="label">At</span>
          <input type="time" value={r.time} onChange={(e) => e.target.value && updateSettings({ reminder: { on: true, time: e.target.value } })} />
        </label>
      )}
      {error && <p className="note bad-text">{error}</p>}
    </section>
  );
}

/** Offered once, after a lesson, in the phone apps: the moment a nudge feels most useful. */
export function ReminderOffer() {
  const { state, updateSettings } = useGame();
  const turnOn = useTurnOn();
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);
  if (!isNative || (state.settings.reminder && !done)) return null;
  if (done) return <p className="note pop">{done}</p>;
  return (
    <section className="card stack-sm">
      <span className="label">Want a nudge?</span>
      <h3>When should tomorrow's question find you?</h3>
      <div className="row">
        {REMINDER_TIMES.map((t) => (
          <button
            key={t.time}
            className="btn ghost small-btn"
            onClick={async () => {
              const err = await turnOn(t.time);
              if (err) setError(err);
              else setDone(`Done. We'll nudge you at ${t.note} on days you haven't learned yet.`);
            }}
          >
            {t.label} <span className="note">{t.note}</span>
          </button>
        ))}
      </div>
      <button className="link-btn" onClick={() => updateSettings({ reminder: { on: false, time: "19:00" } })}>
        No thanks
      </button>
      {error && <p className="note bad-text">{error}</p>}
    </section>
  );
}
