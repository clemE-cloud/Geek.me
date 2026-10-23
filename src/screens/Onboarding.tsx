import { useState } from "react";
import { AccountCard } from "../components/Account";
import { AddChildForm } from "../components/Family";
import { makeProfile } from "../lib/account";
import { useAuth } from "../lib/auth";
import { AGE_BANDS, SELF_AGES } from "../lib/content";
import { useGame } from "../lib/useGame";
import type { AgeBand, Profile } from "../lib/types";

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

type Step = "start" | "signin" | "me-name" | "me-age" | "me-days" | "me-goal" | "parent-name" | "kids" | "save";

const ageLabel = (band: AgeBand | null) => AGE_BANDS.find((a) => a.band === band)?.label ?? "";

export function Onboarding() {
  const { account, setupAccount, finishSetup } = useGame();
  const auth = useAuth();
  const [step, setStep] = useState<Step>(account.profiles.length ? "save" : "start");
  const [name, setName] = useState("");
  const [age, setAge] = useState<AgeBand | null>(null);
  const [days, setDays] = useState(4);
  const [goal, setGoal] = useState(30);
  const [kids, setKids] = useState<Profile[]>([]);
  const family = account.type === "parent";

  const finishMe = () => {
    setupAccount("learner", [makeProfile("self", name, age ?? "18-64", { daysPerWeek: days, dailyGoal: goal })]);
    setStep("save");
  };
  const finishFamily = () => {
    setupAccount("parent", [makeProfile("self", name, "18-64"), ...kids]);
    setStep("save");
  };
  const done = () => {
    finishSetup();
    window.location.hash = "/today";
  };

  return (
    <main className="wrap onboarding">
      <div className="brand big">
        Geek<span>.me</span>
      </div>

      {step === "start" && (
        <section className="stack">
          <h1>Learn something new in two minutes.</h1>
          <p className="lede">
            Read a short lesson, answer three questions, and you're done. Science, history, how your brain works and more.
          </p>
          <span className="label">Who's it for?</span>
          <div className="choices">
            <button className="choice" onClick={() => setStep("me-name")}>
              <b>Just me</b>
              <span className="note">For ages 16 and up</span>
            </button>
            <button className="choice" onClick={() => setStep("parent-name")}>
              <b>Me and my children</b>
              <span className="note">Add a profile for each child under 16. You manage them from your account.</span>
            </button>
          </div>
          {auth.available && (
            <button className="btn ghost wide" onClick={() => setStep("signin")}>
              I already have an account
            </button>
          )}
        </section>
      )}

      {step === "signin" && (
        <section className="stack">
          <h1>Welcome back.</h1>
          <AccountCard />
          {auth.user ? (
            <>
              <p className="note">No saved progress was found for this account yet, so let's set it up.</p>
              <button className="btn wide" onClick={() => setStep("start")}>
                Set up
              </button>
            </>
          ) : (
            <button className="btn ghost wide" onClick={() => setStep("start")}>
              Back
            </button>
          )}
        </section>
      )}

      {step === "me-name" && (
        <section className="stack">
          <h1>What should we call you?</h1>
          <label className="field">
            <span className="label">First name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name"
              autoComplete="given-name"
              maxLength={40}
              autoFocus
              onKeyDown={(e) => e.key === "Enter" && name.trim() && setStep("me-age")}
            />
          </label>
          <button className="btn wide" onClick={() => setStep("me-age")} disabled={!name.trim()}>
            Continue
          </button>
          <button className="btn ghost wide" onClick={() => setStep("start")}>
            Back
          </button>
        </section>
      )}

      {step === "me-age" && (
        <section className="stack">
          <h1>How old are you?</h1>
          <p className="lede">This sets how lessons are written and how the app looks. You can change both later.</p>
          <div className="choices grid" role="radiogroup" aria-label="Age">
            {SELF_AGES.map((a) => (
              <button key={a.band} role="radio" aria-checked={age === a.band} className="choice" onClick={() => setAge(a.band)}>
                <b>{a.label}</b>
              </button>
            ))}
          </div>
          <p className="note">
            Under 16? Ask a parent to set up Geek.me and add you to their account.{" "}
            <button className="link-btn" onClick={() => setStep("start")}>
              Go back
            </button>
          </p>
          <button className="btn wide" onClick={() => setStep("me-days")} disabled={!age}>
            Continue
          </button>
        </section>
      )}

      {step === "me-days" && (
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
          <button className="btn wide" onClick={() => setStep("me-goal")}>
            Continue
          </button>
        </section>
      )}

      {step === "me-goal" && (
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
          <button className="btn wide" onClick={finishMe}>
            Continue
          </button>
        </section>
      )}

      {step === "parent-name" && (
        <section className="stack">
          <h1>First, your name.</h1>
          <p className="lede">You'll have your own profile too, for your lessons and for managing your children's.</p>
          <label className="field">
            <span className="label">Your first name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name"
              autoComplete="given-name"
              maxLength={40}
              autoFocus
              onKeyDown={(e) => e.key === "Enter" && name.trim() && setStep("kids")}
            />
          </label>
          <button className="btn wide" onClick={() => setStep("kids")} disabled={!name.trim()}>
            Continue
          </button>
          <button className="btn ghost wide" onClick={() => setStep("start")}>
            Back
          </button>
        </section>
      )}

      {step === "kids" && (
        <section className="stack">
          <h1>{kids.length ? "Anyone else?" : "Add your first child."}</h1>
          <p className="lede">
            Lessons and the look of the app adjust to each child's age. Younger children get simpler lessons.
          </p>
          {kids.length > 0 && (
            <ul className="kid-list">
              {kids.map((k) => (
                <li key={k.id}>
                  <b>{k.state.settings.name}</b> <span className="note">age {ageLabel(k.state.settings.age)}</span>
                  <button className="link-btn" onClick={() => setKids(kids.filter((x) => x.id !== k.id))}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
          <AddChildForm onAdd={(p) => setKids([...kids, p])} submitLabel={kids.length ? "Add another child" : "Add child"} />
          <button className="btn wide" onClick={finishFamily} disabled={!kids.length}>
            Continue
          </button>
        </section>
      )}

      {step === "save" && (
        <section className="stack">
          <h1>{family ? "Create your parent account." : "Save your progress."}</h1>
          <p className="lede">
            {family
              ? "Your children's progress is kept in your account, so it's safe if this device is lost and you can use it on others. It only takes your email."
              : "Keep your progress safe and use it on any device. It only takes your email."}
          </p>
          <AccountCard compact />
          <button className={auth.user ? "btn wide" : "btn ghost wide"} onClick={done}>
            {auth.user ? "Continue" : "Skip for now"}
          </button>
          {!auth.user && <p className="note">You can do this later from your profile.</p>}
        </section>
      )}
    </main>
  );
}
