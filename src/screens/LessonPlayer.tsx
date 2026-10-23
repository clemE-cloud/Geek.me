import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AccountCard } from "../components/Account";
import { ListenButton, ShareButton } from "../components/Actions";
import { Chip, subjectColor } from "../components/Bits";
import { IconClose } from "../components/Icons";
import { Quiz } from "../components/Quiz";
import { Result } from "../components/Result";
import { constellationOf } from "../data/constellations";
import { useAuth } from "../lib/auth";
import { isChild, lessonView, toBeats } from "../lib/content";
import { isLearned, isUnlocked, nextLesson } from "../lib/game";
import { go } from "../lib/router";
import { appUrl } from "../lib/share";
import { useGame, type SessionResult } from "../lib/useGame";
import type { Lesson } from "../lib/types";

/** "Wikipedia: Rayleigh scattering" for Wikipedia links, otherwise the site's host name. */
export function sourceLabel(url: string): string {
  try {
    const u = new URL(url);
    if (u.hostname.endsWith("wikipedia.org") && u.pathname.startsWith("/wiki/"))
      return `Wikipedia: ${decodeURIComponent(u.pathname.slice(6)).replace(/_/g, " ")}`;
    return u.hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function LessonBody({ lesson }: { lesson: Lesson }) {
  const { state } = useGame();
  const c = constellationOf(lesson.id);
  const young = state.settings.level === "young";
  return (
    <>
      <div className="meta">
        <Chip subject={lesson.subject} />
        {c && <span className="label">{c.name}</span>}
      </div>
      <h1 className="lesson-title">{lesson.title}</h1>
      <ListenButton text={[lesson.title, ...lesson.body, lesson.takeaway].join(" ")} slow={young} />
      <div className="prose">
        {lesson.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="takeaway">
        <span className="label">Remember this</span>
        <p>{lesson.takeaway}</p>
      </div>
      {!isChild(state.settings) && lesson.sources.length > 0 && (
        <div className="sources">
          <span className="label">Read more</span>
          <ul>
            {lesson.sources.map((s) => (
              <li key={s}>
                <a className="rabbit" href={s} target="_blank" rel="noopener noreferrer">
                  {sourceLabel(s)} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

/** Numbers, years and quoted words stand out, so a beat can be skimmed. */
function Highlight({ text }: { text: string }) {
  const parts = text.split(/((?:about |around )?\d[\d,.]*(?:\s?(?:%|BC|AD|million|billion|km|metres|years|degrees))?|“[^”]+”|"[^"]+")/);
  return (
    <>
      {parts.map((p, i) =>
        i % 2 ? (
          <mark key={i} className="hl">
            {p}
          </mark>
        ) : (
          p
        ),
      )}
    </>
  );
}

type Screen = { kind: "hook" } | { kind: "beat"; text: string; n: number } | { kind: "remember" };

/**
 * A lesson read as a short run of story cards: guess first, then one beat per screen, then what to remember.
 * Guessing before reading makes the answer stick better, even when the guess is wrong.
 */
function Story({ lesson, onQuiz }: { lesson: Lesson; onQuiz: () => void }) {
  const { state } = useGame();
  const young = state.settings.level === "young";
  const c = constellationOf(lesson.id);
  const beats = toBeats(lesson.body);
  const screens: Screen[] = [{ kind: "hook" }, ...beats.map((text, n) => ({ kind: "beat" as const, text, n })), { kind: "remember" }];
  const [i, setI] = useState(0);
  const [guess, setGuess] = useState<number | null>(null);
  const touch = useRef<number | null>(null);
  const sc = screens[i];
  const gq = lesson.qs[0];

  const next = () => setI((x) => Math.min(x + 1, screens.length - 1));
  const back = () => setI((x) => Math.max(x - 1, 0));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "ArrowRight" && sc.kind !== "hook") next();
      else if (e.key === "ArrowLeft") back();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // Tap the right of a beat to go on, the left to go back, or swipe.
  const tapNav = sc.kind === "beat";
  return (
    <div className="story" style={{ "--c": subjectColor(lesson.subject) } as CSSProperties}>
      <div className="story-top">
        <button className="icon-btn" onClick={() => history.back()} aria-label="Close lesson">
          <IconClose />
        </button>
        <div className="story-segs" aria-label={`Part ${i + 1} of ${screens.length}`}>
          {screens.map((_, k) => (
            <i key={k} className={k < i ? "done" : k === i ? "now" : ""} />
          ))}
        </div>
      </div>

      <div
        className={`story-stage ${tapNav ? "tappable" : ""}`}
        onClick={(e) => {
          if (!tapNav) return;
          const r = e.currentTarget.getBoundingClientRect();
          if (e.clientX - r.left < r.width / 3) back();
          else next();
        }}
        onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touch.current === null || sc.kind === "hook") return;
          const dx = e.changedTouches[0].clientX - touch.current;
          touch.current = null;
          if (dx < -50) next();
          else if (dx > 50) back();
        }}
      >
        <div key={i} className="story-card">
          {sc.kind === "hook" && (
            <>
              <div className="meta">
                <Chip subject={lesson.subject} />
                {c && <span className="label">{c.name}</span>}
              </div>
              <h1 className="story-title">{lesson.title}</h1>
              <div className="guess">
                <span className="label">Guess first</span>
                <p className="q">{gq.q}</p>
                <div className="opts">
                  {gq.o.map((o, k) => (
                    <button
                      key={k}
                      className={`opt ${guess === null ? "" : guess === k ? "picked" : "dim"}`}
                      onClick={() => setGuess(k)}
                      disabled={guess !== null}
                    >
                      <span className="key mono">{"ABCD"[k]}</span>
                      <span>{o}</span>
                    </button>
                  ))}
                </div>
                {guess !== null && <p className="note pop">Hold that thought. You'll find out in a minute.</p>}
              </div>
            </>
          )}

          {sc.kind === "beat" && (
            <>
              <span className="label">
                {sc.n + 1} / {beats.length}
              </span>
              <p className="beat">
                <Highlight text={sc.text} />
              </p>
              {i === 1 && <span className="note tap-hint">Tap or swipe to keep going</span>}
            </>
          )}

          {sc.kind === "remember" && (
            <>
              <span className="label">Remember this</span>
              <p className="beat remember">{lesson.takeaway}</p>
              {guess !== null && (
                <div className={`guess-result ${guess === gq.a ? "ok" : "no"} pop`}>
                  <span className="label">{guess === gq.a ? "Your guess was right" : "Your guess"}</span>
                  <span className="note">{gq.q}</span>
                  <b>{guess === gq.a ? `“${gq.o[gq.a]}”. Nice.` : `You said “${gq.o[guess]}”. It's “${gq.o[gq.a]}”.`}</b>
                </div>
              )}
              {!isChild(state.settings) && lesson.sources.length > 0 && (
                <div className="sources">
                  <span className="label">Read more</span>
                  <ul>
                    {lesson.sources.map((s) => (
                      <li key={s}>
                        <a className="rabbit" href={s} target="_blank" rel="noopener noreferrer">
                          {sourceLabel(s)} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className="story-nav">
        {sc.kind === "hook" && (
          <>
            <ListenButton text={[lesson.title, ...lesson.body, lesson.takeaway].join(" ")} slow={young} />
            <button className="btn" onClick={next} autoFocus={guess !== null}>
              {guess === null ? "Skip, just read" : "Find out"} →
            </button>
          </>
        )}
        {sc.kind === "beat" && (
          <>
            <button className="btn ghost" onClick={back}>
              ←
            </button>
            <button className="btn" onClick={next}>
              {sc.n + 1 === beats.length ? "What to remember" : "Next"} →
            </button>
          </>
        )}
        {sc.kind === "remember" &&
          (state.focus > 0 ? (
            <button className="btn wide" onClick={onQuiz}>
              Lock it in: 3 quick questions
            </button>
          ) : (
            <div className="card">
              <p className="note">You're out of focus, so the quiz is paused. A few right answers in Review will refill it.</p>
              <button className="btn" onClick={() => go("review")}>
                Refill in Review
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

/** After a lesson: what's next, as a teaser, plus a nudge for guests to keep what they've learned. */
function AfterLesson({ just }: { just: string }) {
  const { state, profile } = useGame();
  const auth = useAuth();
  const next = nextLesson(state);
  const view = next && next.id !== just ? lessonView(next.id, state.settings.level) : undefined;
  const nc = view && constellationOf(view.id);
  const count = Object.keys(state.learned).length;
  return (
    <>
      {auth.available && !auth.user && profile?.kind === "self" && (
        <section className="card stack-sm save-nudge">
          <span className="label">{count === 1 ? "Your first card" : `${count} cards so far`}</span>
          <h3>Keep {count === 1 ? "it" : "them"}.</h3>
          <p className="note">Right now this lives only in this browser. Add your email and it's safe on any device. No password.</p>
          <AccountCard compact />
        </section>
      )}
      {view && nc && state.focus > 0 && (
        <button className="card up-next" onClick={() => go(`lesson/${view.id}`)}>
          <span className="label">Up next · {nc.theme}</span>
          <b>{view.title}</b>
          <span className="note">About two minutes</span>
        </button>
      )}
    </>
  );
}

export function LessonPlayer({ id }: { id: string }) {
  const { state, finishLesson } = useGame();
  const [phase, setPhase] = useState<"read" | "quiz" | "done">("read");
  const [outcome, setOutcome] = useState<(SessionResult & { results: boolean[] }) | null>(null);
  const lesson = lessonView(id, state.settings.level);
  const c = lesson && constellationOf(lesson.id);

  if (!lesson || !c) {
    return (
      <div className="stack">
        <h1>Lesson not found</h1>
        <button className="btn" onClick={() => go("sky")}>
          Back to the sky
        </button>
      </div>
    );
  }

  if (phase === "done" && outcome) {
    return (
      <Result
        title="Lesson complete"
        gained={outcome.gained}
        right={outcome.results.filter(Boolean).length}
        total={outcome.results.length}
        earned={outcome.earned}
        card={lesson}
        note="These questions will come back in Review: right ones in 2 days, missed ones tomorrow."
        onContinue={() => go("today")}
        continueLabel="Done for now"
        share={<ShareButton text={`Today I learned: ${lesson.takeaway}`} url={appUrl()} />}
        after={<AfterLesson just={lesson.id} />}
      />
    );
  }

  if (isLearned(state, id)) {
    go(`card/${id}`);
    return null;
  }
  if (!isUnlocked(state, c, id)) {
    return (
      <div className="stack">
        <h1>Not yet</h1>
        <p className="note">Finish the earlier stars in {c.name} first.</p>
        <button className="btn" onClick={() => go("sky")}>
          Back to the sky
        </button>
      </div>
    );
  }

  if (phase === "quiz") {
    return (
      <Quiz
        kind="lesson"
        items={lesson.qs.map((_, qi) => ({ lessonId: lesson.id, qi }))}
        onQuit={() => setPhase("read")}
        onDone={(results) => {
          setOutcome({ ...finishLesson(lesson, results), results });
          setPhase("done");
          window.scrollTo(0, 0);
        }}
      />
    );
  }

  return (
    <Story
      lesson={lesson}
      onQuiz={() => {
        setPhase("quiz");
        window.scrollTo(0, 0);
      }}
    />
  );
}
