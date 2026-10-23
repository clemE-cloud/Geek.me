import { Daily } from "../components/Daily";
import { CONSTELLATIONS } from "../data/constellations";
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
  { n: "1", title: "Read", text: "One idea, explained properly, in about two minutes." },
  { n: "2", title: "Recall", text: "Three questions straight after, so it moves from the page into your head." },
  { n: "3", title: "Keep", text: "The questions come back after days, then weeks, until you just know it." },
];

const STATS = [
  { figure: "47 sec", text: "How long people stay on one screen before switching, on average. In 2004 it was about 2½ minutes." },
  { figure: "16%", text: "Americans who read for pleasure on an average day in 2023, about 40% fewer than twenty years earlier." },
  { figure: "1 in 3", text: "UK 8 to 18-year-olds who enjoy reading in their free time, the lowest in twenty years." },
];

const ACCOUNT_GETS = [
  "Your progress is safe if you lose or change your phone",
  "Pick up where you left off on any device",
  "Add your children, with lessons pitched at their age",
  "Start or join a circle with friends or family",
];

/** What a new visitor sees before signing up. Returning users go straight to the app. */
export function Landing() {
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

      <section className="lp-hero">
        <div className="lp-hero-text">
          <span className="label">For the curious</span>
          <h1>You know that person who seems to know something about everything?</h1>
          <p className="lede">
            They can tell you why sunsets are red, where the word “robot” comes from, and why Maasai warriors colour their braids red. They
            weren't born knowing it. They stayed curious, and they held on to what they learned.
          </p>
          <p className="lede">Geek.me helps you become that person, two minutes at a time.</p>
          <div className="row">
            <button className="btn" onClick={() => go("start")}>
              Start learning, it's free
            </button>
            <button className="btn ghost" onClick={() => document.getElementById("teasers")?.scrollIntoView({ behavior: "smooth" })}>
              Show me an example
            </button>
          </div>
          <p className="note">No card needed. You can start without an email.</p>
        </div>
        <div className="lp-hero-card" aria-hidden>
          <div className="fact-card">
            <span className="label">Today you learned</span>
            <h3>Why the sky is blue</h3>
            <p>Air scatters blue light far more than red, which paints the day sky blue and the sunset red.</p>
          </div>
          <div className="lp-review card">
            <span className="label">Back for review in 2 days</span>
            <b>Why are sunsets red and orange?</b>
          </div>
        </div>
      </section>

      <section className="lp-section" id="teasers">
        <h2>Here's one for your next conversation</h2>
        <p>
          Imagine dropping one of these into a first date, a family dinner or a quiet moment at work, and actually being able to explain it.
        </p>
        <div className="lp-teasers">
          {TEASERS.map((t) => (
            <details key={t.q} className="card lp-teaser">
              <summary>
                <b>{t.q}</b>
                <span className="note">Tap to find out</span>
              </summary>
              <p>{t.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="lp-section">
        <h2>Why scrolling doesn't stick</h2>
        <p>
          A 30-second reel can make you curious. An hour later, most of it has gone. In studies, people keep less from a stream of short clips
          than from the same content in one piece, and a confident presenter makes us feel we've learned more than we have.
        </p>
        <p>
          Knowing something well enough to explain it takes a little effort: recalling it, then coming back to it just as it starts to fade.
          That's what Geek.me is built around.
        </p>
        <div className="lp-stats">
          {STATS.map((s) => (
            <div key={s.figure} className="card">
              <b className="lp-figure">{s.figure}</b>
              <span className="note">{s.text}</span>
            </div>
          ))}
        </div>
        <a className="link-btn" href="#/why">
          Read the research and sources
        </a>
      </section>

      <section className="lp-section">
        <h2>How it works</h2>
        <ol className="lp-steps">
          {STEPS.map((s) => (
            <li key={s.n}>
              <span className="lp-step-n mono">{s.n}</span>
              <div>
                <b>{s.title}</b>
                <p className="note">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="note">
          A lesson and a few review questions take about five minutes. There's no feed and no autoplay, so when you're done, you're done. Pick
          how many days a week suit you; missing one doesn't reset anything.
        </p>
      </section>

      <section className="lp-section">
        <h2>Go deep on what excites you</h2>
        <p>
          Follow a topic lesson by lesson. Each one builds on the last, so over a few weeks you go from “I saw a video about that” to being the
          one who can explain it. There are {LESSONS.length} lessons to start with, and more on the way.
        </p>
        <ul className="lp-topics">
          {CONSTELLATIONS.map((c) => (
            <li key={c.id}>
              <b>{c.theme}</b>
              <span className="note">{c.blurb}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="lp-section">
        <h2>Better with people</h2>
        <p>
          Start a circle with friends or family, wherever they live. Everyone's learning adds up to one weekly goal, and you'll find yourselves
          swapping what you've learned. Children get their own profiles with lessons pitched at their age, so the whole family can learn the
          same idea and talk about it afterwards.
        </p>
      </section>

      <section className="lp-section" id="try">
        <h2>Try today's question</h2>
        <p className="note">Everyone who opens Geek.me today gets the same one. No sign-up needed.</p>
        <Daily standalone />
      </section>

      <section className="lp-section">
        <div className="card lp-email">
          <h2>Why sign up with your email?</h2>
          <p className="note">You can try Geek.me without one. An account needs just your email, with no password, and it means:</p>
          <ul className="ticks">
            {ACCOUNT_GETS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="note">
            We only email you sign-in codes. No ads, no newsletters you didn't ask for, and we never sell your data. You can download or delete
            everything at any time. Children under 16 don't sign up themselves; a parent adds them to their own account.
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

      <section className="lp-section lp-final">
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
    </div>
  );
}
