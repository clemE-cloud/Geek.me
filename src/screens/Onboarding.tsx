import { useState } from "react";
import { useGame } from "../lib/useGame";

const PACES = [
  { days: 3, label: "3 days a week", note: "Light. Leaves room for life." },
  { days: 4, label: "4 days a week", note: "A steady habit with rest days built in." },
  { days: 5, label: "5 days a week", note: "Weekdays, weekends off." },
  { days: 7, label: "Every day", note: "For the very curious." },
];
const GOALS = [
  { xp: 15, label: "Quick", note: "About one lesson" },
  { xp: 30, label: "Regular", note: "A lesson and some review" },
  { xp: 50, label: "Deep", note: "Two lessons, or one and a long review" },
];

export function Onboarding() {
  const { state, updateSettings } = useGame();
  const [step, setStep] = useState(0);
  const [name, setName] = useState(state.settings.name);
  const [days, setDays] = useState(state.settings.daysPerWeek);
  const [goal, setGoal] = useState(state.settings.dailyGoal);

  const finish = () => {
    updateSettings({ name: name.trim(), daysPerWeek: days, dailyGoal: goal, onboarded: true });
    window.location.hash = "/today";
  };

  return (
    <main className="wrap onboarding">
      <div className="brand big">
        Geek<span>.me</span>
      </div>

      {step === 0 && (
        <section className="stack">
          <h1>One curious idea at a time.</h1>
          <p className="lede">
            Short lessons on science, history, the mind and more. No owl, no guilt, no lost streaks. You set the pace.
          </p>
          <label className="field">
            <span className="label">What should we call you?</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your first name"
              autoComplete="given-name"
              maxLength={40}
              onKeyDown={(e) => e.key === "Enter" && setStep(1)}
            />
          </label>
          <button className="btn wide" onClick={() => setStep(1)}>
            Continue
          </button>
        </section>
      )}

      {step === 1 && (
        <section className="stack">
          <h1>Pick your rhythm.</h1>
          <p className="lede">
            Instead of a streak that breaks the day you miss, you get a weekly rhythm. Hit it any days you like.
          </p>
          <div className="choices" role="radiogroup" aria-label="Days per week">
            {PACES.map((p) => (
              <button key={p.days} role="radio" aria-checked={days === p.days} className="choice" onClick={() => setDays(p.days)}>
                <b>{p.label}</b>
                <span className="note">{p.note}</span>
              </button>
            ))}
          </div>
          <button className="btn wide" onClick={() => setStep(2)}>
            Continue
          </button>
        </section>
      )}

      {step === 2 && (
        <section className="stack">
          <h1>And on the days you show up?</h1>
          <p className="lede">A daily goal in XP. A lesson is worth 10–25.</p>
          <div className="choices" role="radiogroup" aria-label="Daily goal">
            {GOALS.map((g) => (
              <button key={g.xp} role="radio" aria-checked={goal === g.xp} className="choice" onClick={() => setGoal(g.xp)}>
                <b>
                  {g.label} <span className="mono">· {g.xp} XP</span>
                </b>
                <span className="note">{g.note}</span>
              </button>
            ))}
          </div>
          <button className="btn wide" onClick={finish}>
            Light the first star
          </button>
        </section>
      )}

      <div className="steps" aria-hidden>
        {[0, 1, 2].map((i) => (
          <i key={i} className={i === step ? "on" : ""} />
        ))}
      </div>
    </main>
  );
}
