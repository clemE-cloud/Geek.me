import { useState } from "react";
import { AccountCard } from "../components/Account";
import { useAuth } from "../lib/auth";
import { AGE_BANDS, defaultsForAge } from "../lib/content";
import { useGame } from "../lib/useGame";
import type { AgeBand } from "../lib/types";

const PACES = [
  { days: 3, label: "3 days a week", note: "Easy to fit in" },
  { days: 4, label: "4 days a week", note: "Most people pick this" },
  { days: 5, label: "5 days a week", note: "Weekdays, weekends off" },
  { days: 7, label: "Every day", note: "One lesson a day" },
];
const GOALS = [
  { xp: 15, label: "Short", note: "About one lesson" },
  { xp: 30, label: "Regular", note: "A lesson and some review" },
  { xp: 50, label: "Long", note: "Two lessons, or one and a longer review" },
];

export function Onboarding() {
  const { state, updateSettings } = useGame();
  const auth = useAuth();
  const [step, setStep] = useState(0);
  const [name, setName] = useState(state.settings.name);
  const [age, setAge] = useState<AgeBand | null>(state.settings.age);
  const [days, setDays] = useState(state.settings.daysPerWeek);
  const [goal, setGoal] = useState(state.settings.dailyGoal);

  const finish = () => {
    updateSettings({
      name: name.trim(),
      age,
      ...defaultsForAge(age ?? "18-64"),
      daysPerWeek: days,
      dailyGoal: goal,
      onboarded: true,
    });
    window.location.hash = "/today";
  };

  return (
    <main className="wrap onboarding">
      <div className="brand big">
        Geek<span>.me</span>
      </div>

      {step === 0 && (
        <section className="stack">
          <h1>Learn something new in two minutes.</h1>
          <p className="lede">
            Read a short lesson, answer three questions, and you're done. Science, history, how your brain works and more.
          </p>
          <label className="field">
            <span className="label">What should we call you?</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name"
              autoComplete="given-name"
              maxLength={40}
              onKeyDown={(e) => e.key === "Enter" && setStep(1)}
            />
          </label>
          <button className="btn wide" onClick={() => setStep(1)}>
            Continue
          </button>
          {auth.available && (
            <button className="btn ghost wide" onClick={() => setStep(-1)}>
              I already have an account
            </button>
          )}
        </section>
      )}

      {step === -1 && (
        <section className="stack">
          <h1>Welcome back.</h1>
          <AccountCard />
          <p className="note">
            {auth.user
              ? "No saved progress was found for this account, so let's set it up."
              : "Your progress will load once you're signed in."}
          </p>
          <button className="btn ghost wide" onClick={() => setStep(0)}>
            {auth.user ? "Continue setting up" : "Back"}
          </button>
        </section>
      )}

      {step === 1 && (
        <section className="stack">
          <h1>How old are you?</h1>
          <p className="lede">This sets how lessons are written and how the app looks. You can change both later.</p>
          <div className="choices grid" role="radiogroup" aria-label="Age">
            {AGE_BANDS.map((a) => (
              <button key={a.band} role="radio" aria-checked={age === a.band} className="choice" onClick={() => setAge(a.band)}>
                <b>{a.label}</b>
              </button>
            ))}
          </div>
          {(age === "6-9" || age === "10-12") && (
            <p className="note">Lessons will use shorter sentences and simpler questions. There are no links out of the app.</p>
          )}
          <button className="btn wide" onClick={() => setStep(2)} disabled={!age}>
            Continue
          </button>
        </section>
      )}

      {step === 2 && (
        <section className="stack">
          <h1>How many days a week?</h1>
          <p className="lede">Any days count. Missing one doesn't reset anything.</p>
          <div className="choices" role="radiogroup" aria-label="Days per week">
            {PACES.map((p) => (
              <button key={p.days} role="radio" aria-checked={days === p.days} className="choice" onClick={() => setDays(p.days)}>
                <b>{p.label}</b>
                <span className="note">{p.note}</span>
              </button>
            ))}
          </div>
          <button className="btn wide" onClick={() => setStep(3)}>
            Continue
          </button>
        </section>
      )}

      {step === 3 && (
        <section className="stack">
          <h1>How long on those days?</h1>
          <p className="lede">This is your daily goal in XP. A lesson is worth 10 to 25.</p>
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
            Start
          </button>
        </section>
      )}

      <div className="steps" aria-hidden>
        {[0, 1, 2, 3].map((i) => (
          <i key={i} className={i === step ? "on" : ""} />
        ))}
      </div>
    </main>
  );
}
