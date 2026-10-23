import { useEffect, useState } from "react";
import { AccountCard } from "../components/Account";
import { AddChildForm } from "../components/Family";
import { CONSTELLATIONS, TOPIC_ICONS } from "../data/constellations";
import { lessonById } from "../data/lessons";
import { makeProfile } from "../lib/account";
import { useAuth } from "../lib/auth";
import { AGE_BANDS, SELF_AGES, lessonView } from "../lib/content";
import { useGame } from "../lib/useGame";
import type { AgeBand, Profile } from "../lib/types";

const PACES = [
  { days: 3, label: "3 days a week", note: "Easy to fit in" },
  { days: 4, label: "4 days a week", note: "Most people pick this" },
  { days: 5, label: "5 days a week", note: "Weekdays, weekends off" },
  { days: 7, label: "Every day", note: "One lesson a day" },
];

type Step = "start" | "signin" | "topics" | "me-name" | "me-age" | "me-days" | "plan" | "parent-name" | "kids" | "save";

/** The "Just me" path, for the progress bar. It starts part-filled: choosing "Just me" already counts. */
const ME_STEPS: Step[] = ["topics", "me-name", "me-age", "me-days", "plan"];
const MAX_TOPICS = 3;

const ageLabel = (band: AgeBand | null) => AGE_BANDS.find((a) => a.band === band)?.label ?? "";

export function Onboarding({ initialStep }: { initialStep?: "signin" } = {}) {
  const { account, setupAccount, finishSetup } = useGame();
  const auth = useAuth();
  const [step, setStep] = useState<Step>(account.profiles.length ? "save" : (initialStep ?? "start"));
  const [name, setName] = useState("");
  const [age, setAge] = useState<AgeBand | null>(null);
  const [days, setDays] = useState(4);
  const [topics, setTopics] = useState<string[]>([]);
  const [kids, setKids] = useState<Profile[]>([]);
  const family = account.type === "parent";

  const firstLesson = () => {
    const c = CONSTELLATIONS.find((x) => x.id === topics[0]) ?? CONSTELLATIONS[0];
    return lessonView(c.lessons[0], "standard")!;
  };
  const startLearning = () => {
    setupAccount("learner", [makeProfile("self", name, age ?? "18-64", { daysPerWeek: days, interests: topics })]);
    done(`lesson/${firstLesson().id}`);
  };
  const finishFamily = () => {
    setupAccount("parent", [makeProfile("self", name, "18-64"), ...kids]);
    setStep("save");
  };
  const done = (to = "today") => {
    finishSetup();
    // Back to a circle invite if that's how they arrived.
    const join = sessionStorage.getItem("geekme-join");
    sessionStorage.removeItem("geekme-join");
    window.location.hash = join ? `/join/${join}` : `/${to}`;
  };
  const meStep = ME_STEPS.indexOf(step);

  return (
    <main className="wrap onboarding">
      <div className="brand big">
        Geek<span>.me</span>
      </div>
      {meStep >= 0 && (
        <div className="ob-progress" role="progressbar" aria-valuenow={meStep + 2} aria-valuemin={0} aria-valuemax={ME_STEPS.length + 2}>
          <i style={{ width: `${((meStep + 2) / (ME_STEPS.length + 2)) * 100}%` }} />
        </div>
      )}

      {step === "start" && (
        <section className="stack">
          <h1>Who's Geek.me for?</h1>
          <p className="lede">This sets up your profile. It takes under a minute.</p>
          <div className="choices">
            <button className="choice" onClick={() => setStep("topics")}>
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
          <a className="link-btn" href="#/">
            ← Back
          </a>
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

      {step === "topics" && (
        <section className="stack">
          <h1>What are you curious about?</h1>
          <p className="lede">Pick up to {MAX_TOPICS}. Your first lesson comes from your top pick, and you can explore everything else later.</p>
          <div className="topic-grid" role="group" aria-label="Topics">
            {CONSTELLATIONS.map((c) => {
              const rank = topics.indexOf(c.id);
              const first = lessonById(c.lessons[0]);
              return (
                <button
                  key={c.id}
                  className="topic"
                  aria-pressed={rank >= 0}
                  disabled={rank < 0 && topics.length >= MAX_TOPICS}
                  onClick={() => setTopics(rank >= 0 ? topics.filter((t) => t !== c.id) : [...topics, c.id])}
                >
                  <span className="topic-icon" aria-hidden>
                    {TOPIC_ICONS[c.id] ?? "✦"}
                  </span>
                  <b>{c.theme}</b>
                  {first && <span className="note">{first.title}</span>}
                  {rank >= 0 && <span className="topic-rank mono">{rank + 1}</span>}
                </button>
              );
            })}
          </div>
          <div className="ob-sticky">
            <button className="btn wide" onClick={() => setStep("me-name")} disabled={!topics.length}>
              {topics.length ? "Continue" : "Pick at least one"}
            </button>
          </div>
        </section>
      )}

      {step === "me-name" && (
        <section className="stack">
          <h1>Nice picks. What should we call you?</h1>
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
          <button className="btn ghost wide" onClick={() => setStep("topics")}>
            Back
          </button>
        </section>
      )}

      {step === "me-age" && (
        <section className="stack">
          <h1>How old are you, {name.trim()}?</h1>
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
          <button className="btn wide" onClick={() => setStep("plan")}>
            Build my plan
          </button>
        </section>
      )}

      {step === "plan" && <Plan name={name} topics={topics} days={days} first={firstLesson().title} onStart={startLearning} />}

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
          <button className={auth.user ? "btn wide" : "btn ghost wide"} onClick={() => done()}>
            {auth.user ? "Continue" : "Skip for now"}
          </button>
          {!auth.user && <p className="note">You can do this later from your profile.</p>}
        </section>
      )}
    </main>
  );
}

const BUILDING = ["Choosing your topics", "Fitting it to your week", "Picking your first lesson"];

/** A short "building your plan" moment, then the plan itself, so the first lesson feels made for you. */
function Plan({ name, topics, days, first, onStart }: { name: string; topics: string[]; days: number; first: string; onStart: () => void }) {
  const [ticks, setTicks] = useState(0);
  useEffect(() => {
    if (ticks > BUILDING.length) return;
    const t = setTimeout(() => setTicks((n) => n + 1), ticks === 0 ? 300 : 550);
    return () => clearTimeout(t);
  }, [ticks]);
  const ready = ticks > BUILDING.length;
  const themes = topics.map((id) => CONSTELLATIONS.find((c) => c.id === id)).filter((c) => !!c);

  if (!ready) {
    return (
      <section className="stack">
        <h1>Building your plan…</h1>
        <ul className="building">
          {BUILDING.map((b, i) => (
            <li key={b} className={i < ticks ? "on" : ""}>
              <span className="tick" aria-hidden>
                {i < ticks ? "✓" : ""}
              </span>
              {b}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  return (
    <section className="stack">
      <h1>{name.trim() ? `${name.trim()}, here's your plan.` : "Here's your plan."}</h1>
      <div className="card plan pop">
        <div className="plan-row">
          <span className="label">Your topics</span>
          <div className="plan-topics">
            {themes.map((c) => (
              <span key={c.id} className="plan-chip">
                {TOPIC_ICONS[c.id]} {c.theme}
              </span>
            ))}
          </div>
        </div>
        <div className="plan-row">
          <span className="label">Your rhythm</span>
          <b>{days === 7 ? "Every day" : `${days} days a week`}, about 5 minutes</b>
        </div>
        <div className="plan-row first">
          <span className="label">First lesson · ready now</span>
          <b>{first}</b>
        </div>
      </div>
      <p className="note">Two minutes to read, three quick questions, and it's yours to keep.</p>
      <button className="btn wide" onClick={onStart} autoFocus>
        Start my first lesson →
      </button>
    </section>
  );
}
