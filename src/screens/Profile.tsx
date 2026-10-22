import { useState } from "react";
import { LESSONS } from "../data/lessons";
import { AGE_BANDS, defaultsForAge } from "../lib/content";
import { today } from "../lib/dates";
import { rhythmWeeks } from "../lib/game";
import { useGame } from "../lib/useGame";
import type { AgeBand, Level, Look, TextSize } from "../lib/types";

export function Profile() {
  const { state, store, updateSettings, reset } = useGame();
  const { name, age, level, look, textSize, daysPerWeek, dailyGoal } = state.settings;
  const [confirming, setConfirming] = useState(false);

  const exportProgress = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `geekme-progress-${today()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="stack">
      <h1>Profile</h1>

      <section className="card">
        <span className="label">Account</span>
        {store.kind === "local" ? (
          <>
            <h2>Learning as a guest</h2>
            <p className="note">
              Your progress is saved in this browser only. Sign-in is on the way. When it arrives, you'll be able to use more than
              one device and join a circle, and you'll keep the progress you have now.
            </p>
          </>
        ) : (
          <h2>Signed in</h2>
        )}
      </section>

      <section className="card tiles">
        <div>
          <b className="big">{state.xp}</b>
          <span className="label">XP</span>
        </div>
        <div>
          <b className="big">
            {Object.keys(state.learned).length}/{LESSONS.length}
          </b>
          <span className="label">Lessons</span>
        </div>
        <div>
          <b className="big">{rhythmWeeks(state, today())}</b>
          <span className="label">Weeks in a row</span>
        </div>
      </section>

      <section className="card stack-sm">
        <label className="field">
          <span className="label">Name</span>
          <input value={name} maxLength={40} onChange={(e) => updateSettings({ name: e.target.value })} />
        </label>
        <label className="field">
          <span className="label">Age</span>
          <select
            value={age ?? ""}
            onChange={(e) => {
              const band = e.target.value as AgeBand;
              updateSettings({ age: band, ...defaultsForAge(band) });
            }}
          >
            {!age && <option value="">Not set</option>}
            {AGE_BANDS.map((a) => (
              <option key={a.band} value={a.band}>
                {a.label}
              </option>
            ))}
          </select>
          <span className="note">Changing your age also resets the three settings below.</span>
        </label>
        <label className="field">
          <span className="label">Lessons</span>
          <select value={level} onChange={(e) => updateSettings({ level: e.target.value as Level })}>
            <option value="young">Simpler (about ages 6–12)</option>
            <option value="standard">Standard</option>
          </select>
        </label>
        <label className="field">
          <span className="label">Look</span>
          <select value={look} onChange={(e) => updateSettings({ look: e.target.value as Look })}>
            <option value="calm">Calm (follows your device's light or dark mode)</option>
            <option value="bright">Bright</option>
          </select>
        </label>
        <label className="field">
          <span className="label">Text size</span>
          <select value={textSize} onChange={(e) => updateSettings({ textSize: e.target.value as TextSize })}>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
          </select>
        </label>
        <label className="field">
          <span className="label">Days per week</span>
          <select value={daysPerWeek} onChange={(e) => updateSettings({ daysPerWeek: Number(e.target.value) })}>
            {[2, 3, 4, 5, 6, 7].map((n) => (
              <option key={n} value={n}>
                {n === 7 ? "Every day" : `${n} days a week`}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span className="label">Daily goal</span>
          <select value={dailyGoal} onChange={(e) => updateSettings({ dailyGoal: Number(e.target.value) })}>
            {[15, 30, 50, 80].map((n) => (
              <option key={n} value={n}>
                {n} XP
              </option>
            ))}
          </select>
        </label>
      </section>

      <section className="card stack-sm">
        <span className="label">Your data</span>
        <button className="btn ghost" onClick={exportProgress}>
          Download my progress
        </button>
        {confirming ? (
          <div className="row">
            <button
              className="btn danger"
              onClick={async () => {
                await reset();
                setConfirming(false);
                window.location.hash = "/";
              }}
            >
              Yes, erase everything
            </button>
            <button className="btn ghost" onClick={() => setConfirming(false)}>
              Cancel
            </button>
          </div>
        ) : (
          <button className="btn ghost" onClick={() => setConfirming(true)}>
            Start over
          </button>
        )}
      </section>
    </div>
  );
}
