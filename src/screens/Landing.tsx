import { useEffect, useRef, useState } from "react";
import { Daily } from "../components/Daily";
import { CONSTELLATIONS, TOPIC_ICONS } from "../data/constellations";
import { LESSONS } from "../data/lessons";
import { go } from "../lib/router";

const CONTACT = "cewinsm@gmail.com";

/*
 * Tap-to-reveal examples of the kind of thing you'd learn. Keep these accurate and respectful;
 * sources for the Maasai facts are in docs/growth-plan.md.
 */
const TEASERS = [
  {
    q: "Why do young Maasai warriors colour their braids red?",
    a: "Among the Maasai of Kenya and Tanzania, only the young warriors, the moran, traditionally grow their hair long. They braid it and colour it with red ochre mixed with animal fat. Red stands for bravery and strength. When they move on to the next stage of life, at a ceremony called Eunoto, their heads are shaved.",
  },
  {
    q: "Why do the Maasai traditionally drink cattle blood?",
    a: "For a people whose wealth is their cattle, it's a way to get nourishment without killing the animal. Blood is drawn from a cow's neck with an arrow shot at close range, the wound is sealed, and the cow recovers. It's usually mixed with milk and given at births, ceremonies and to people recovering from illness. It's less common today.",
  },
  {
    q: "Who lived closer in time to the Moon landing: Cleopatra, or the builders of the Great Pyramid?",
    a: "Cleopatra. The Great Pyramid was built around 2560 BC, about 2,500 years before her. She died in 30 BC, about 2,000 years before Apollo 11. To her, the pyramids were already ancient.",
  },
];

const STEPS = [
  { icon: "📖", title: "Read", text: "One idea as a short story, a few taps long." },
  { icon: "🤔", title: "Recall", text: "Three quick questions, so it moves into your head." },
  { icon: "🔁", title: "Keep", text: "They come back days, then weeks later, until you just know it." },
];

const PROMISES = ["No feed", "No autoplay", "A missed day resets nothing"];

const STATS = [
  { figure: "47 sec", text: "How long people stay on one screen before switching, on average. In 2004 it was about 2½ minutes." },
  { figure: "16%", text: "Americans who read for pleasure on an average day in 2023, about 40% fewer than twenty years earlier." },
  { figure: "1 in 3", text: "UK 8 to 18-year-olds who enjoy reading in their free time, the lowest in twenty years." },
];

/** Marks elements with class "rv" as they scroll into view, so sections arrive one by one. */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".lp .rv");
    if (!("IntersectionObserver" in window)) return void els.forEach((e) => e.classList.add("in"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

/**
 * An illustration of the forgetting curve, not measured data: memory of something seen once fades fast,
 * while each spaced review lifts it back up and slows the next drop.
 */
function MemoryChart() {
  const W = 320;
  const H = 160;
  const x = (day: number) => 30 + (day / 30) * (W - 44);
  const y = (pct: number) => 14 + (1 - pct / 100) * (H - 42);
  const once = Array.from({ length: 61 }, (_, i) => i / 2).map((d) => `${x(d)},${y(100 * Math.exp(-d / 1.6) * 0.85 + 8)}`);
  const reviews = [0, 1, 3, 7, 15];
  const kept: string[] = [];
  reviews.forEach((r, k) => {
    const end = reviews[k + 1] ?? 30;
    const decay = 1.6 * 2.6 ** k;
    for (let d = r; d <= end; d += 0.25) kept.push(`${x(d)},${y(100 - (100 - 8) * (1 - Math.exp(-(d - r) / decay)) * 0.5)}`);
  });
  return (
    <figure className="lp-chart">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Illustration: memory of a video fades within days; memory with spaced reviews stays high">
        <line x1={30} x2={W - 14} y1={y(0)} y2={y(0)} className="axis" />
        <line x1={30} x2={30} y1={y(100)} y2={y(0)} className="axis" />
        <polyline points={once.join(" ")} className="once" />
        <polyline points={kept.join(" ")} className="kept" />
        {reviews.slice(1).map((r) => (
          <circle key={r} cx={x(r)} cy={y(100)} r={4} className="dot" />
        ))}
        <text x={30} y={H - 8} className="tick">
          Today
        </text>
        <text x={W - 14} y={H - 8} className="tick" textAnchor="end">
          A month later
        </text>
        <text x={24} y={y(100) + 4} className="tick" textAnchor="end">
          All
        </text>
      </svg>
      <figcaption>
        <span className="key-kept">With quick reviews</span>
        <span className="key-once">Watched once</span>
        <span className="note">An illustration of the forgetting curve. Each dot is a review.</span>
      </figcaption>
    </figure>
  );
}

const ACCOUNT_GETS = [
  "Your progress is safe if you lose or change your phone",
  "Pick up where you left off on any device",
  "Add your children, with lessons pitched at their age",
  "Start or join a circle with friends or family",
];

/** What a new visitor sees before signing up. Returning users go straight to the app. */
export function Landing() {
  useReveal();
  const hero = useRef<HTMLElement>(null);
  const [pastHero, setPastHero] = useState(false);
  useEffect(() => {
    const el = hero.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setPastHero(!e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="lp">
      <header className="lp-top">
        <a className="brand" href="#/">
          Geek<span>.me</span>
        </a>
        <a className="link-btn" href="#/start/signin">
          Sign in
        </a>
      </header>

      <section className="lp-hero" ref={hero}>
        <div className="lp-hero-text">
          <span className="label">For the curious</span>
          <h1>You know that person who seems to know something about everything?</h1>
          <p className="lede">
            Why sunsets are red. Where the word “robot” comes from. Why Maasai warriors colour their braids red. They weren't born knowing it.
            They stayed curious, and they <em>kept</em> what they learned.
          </p>
          <p className="lp-punch">Geek.me makes you that person, two minutes at a time.</p>
          <div className="row">
            <button className="btn" onClick={() => go("start")}>
              Start learning, it's free
            </button>
            <button className="btn ghost" onClick={() => scrollTo("teasers")}>
              Show me one ↓
            </button>
          </div>
          <p className="note">No card. No password. Under a minute to start.</p>
        </div>
        <div className="lp-hero-card" aria-hidden>
          <div className="lp-phone">
            <div className="lp-phone-segs">
              <i className="done" />
              <i className="done" />
              <i className="now" />
              <i />
              <i />
            </div>
            <span className="label">3 / 5</span>
            <p>
              The moran braid their hair into thin plaits and colour it with <mark className="hl">red ochre</mark>, a clay rich in iron, mixed
              with animal fat.
            </p>
            <span className="lp-phone-tap">Tap to keep going →</span>
          </div>
          <div className="lp-review card">
            <span className="label">Back for review in 2 days</span>
            <b>What gives Maasai braids their red colour?</b>
          </div>
        </div>
      </section>

      <section className="lp-section rv" id="teasers">
        <span className="label">Try it</span>
        <h2>Here's one for your next conversation.</h2>
        <p>A first date, a family dinner, a quiet moment at work. Imagine actually being able to explain it.</p>
        <div className="lp-teasers">
          {TEASERS.map((t, i) => (
            <details key={t.q} className="card lp-teaser rv" style={{ transitionDelay: `${i * 90}ms` }}>
              <summary>
                <span className="lp-teaser-n mono">0{i + 1}</span>
                <b>{t.q}</b>
                <span className="lp-teaser-tap">Tap to find out</span>
              </summary>
              <p>{t.a}</p>
            </details>
          ))}
        </div>
        <p className="note">Both Maasai stories are full lessons inside, in People &amp; cultures.</p>
      </section>

      <section className="lp-section lp-split rv">
        <div>
          <span className="label">The problem</span>
          <h2>Scrolling feels like learning. It mostly isn't.</h2>
          <p>A reel makes you curious. An hour later, most of it is gone. What makes things stick is recalling them, then meeting them again just as they fade.</p>
          <div className="lp-stats">
            {STATS.map((s, i) => (
              <div key={s.figure} className="lp-stat rv" style={{ transitionDelay: `${i * 90}ms` }}>
                <b className="lp-figure">{s.figure}</b>
                <span className="note">{s.text}</span>
              </div>
            ))}
          </div>
          <a className="link-btn" href="#/why">
            The research behind this →
          </a>
        </div>
        <MemoryChart />
      </section>

      <section className="lp-section rv">
        <span className="label">How it works</span>
        <h2>Five minutes. Then you're done.</h2>
        <ol className="lp-steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="rv" style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="lp-step-icon" aria-hidden>
                {s.icon}
              </span>
              <b>{s.title}</b>
              <span className="note">{s.text}</span>
            </li>
          ))}
        </ol>
        <div className="lp-promises">
          {PROMISES.map((p) => (
            <span key={p}>✓ {p}</span>
          ))}
        </div>
      </section>

      <section className="lp-section rv">
        <span className="label">{LESSONS.length} lessons and growing</span>
        <h2>Go deep on what excites you.</h2>
        <p>Follow a topic lesson by lesson, from “I saw a video about that” to being the one who can explain it.</p>
        <ul className="lp-topics">
          {CONSTELLATIONS.map((c, i) => (
            <li key={c.id} className="rv" style={{ transitionDelay: `${(i % 6) * 50}ms` }}>
              <span aria-hidden>{TOPIC_ICONS[c.id] ?? "✦"}</span>
              {c.theme}
            </li>
          ))}
        </ul>
      </section>

      <section className="lp-section lp-split rv">
        <div>
          <span className="label">Better with people</span>
          <h2>Learn with the people you like.</h2>
          <p>Start a circle with friends or family, anywhere in the world. One shared weekly goal, and plenty to talk about. Children get their own profiles, pitched at their age.</p>
        </div>
        <div className="card lp-circle" aria-hidden>
          <span className="label">Sunday dinner circle</span>
          <div className="lp-avatars">
            {["🦊", "🐢", "🦉", "🐙"].map((a) => (
              <span key={a}>{a}</span>
            ))}
          </div>
          <div className="lp-goal">
            <i />
          </div>
          <span className="note">
            <b>140</b> of 200 XP this week · 2 days to go
          </span>
        </div>
      </section>

      <section className="lp-section rv" id="try">
        <span className="label">Today's question</span>
        <h2>Everyone gets the same one today.</h2>
        <Daily standalone />
      </section>

      <section className="lp-section rv">
        <div className="card lp-email">
          <h2>Why add your email?</h2>
          <ul className="ticks">
            {ACCOUNT_GETS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="note">
            Just your email, no password. We only send sign-in codes: no ads, no newsletters, never sold. Download or delete everything any
            time. Under 16s join through a parent's account.
          </p>
          <div className="row">
            <button className="btn" onClick={() => go("start")}>
              Start learning
            </button>
            <a className="link-btn" href="#/privacy">
              How we handle your data
            </a>
          </div>
        </div>
      </section>

      <section className="lp-section lp-final rv">
        <h2>Become the one with the story.</h2>
        <p className="note">Your first lesson takes about two minutes.</p>
        <button className="btn" onClick={() => go("start")}>
          Start learning, it's free
        </button>
      </section>

      <footer className="lp-footer">
        <span>Geek.me</span>
        <a href="#/why">Why Geek.me</a>
        <a href="#/privacy">Privacy</a>
        <a href={`mailto:${CONTACT}`}>Contact</a>
      </footer>

      <div className={`lp-sticky ${pastHero ? "show" : ""}`}>
        <button className="btn wide" onClick={() => go("start")} tabIndex={pastHero ? 0 : -1}>
          Start learning, it's free
        </button>
      </div>
    </div>
  );
}
