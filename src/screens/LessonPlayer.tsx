import { useState } from "react";
import { ListenButton, ShareButton } from "../components/Actions";
import { Chip } from "../components/Bits";
import { IconClose } from "../components/Icons";
import { Quiz } from "../components/Quiz";
import { Result } from "../components/Result";
import { constellationOf } from "../data/constellations";
import { isChild, lessonView } from "../lib/content";
import { isLearned, isUnlocked } from "../lib/game";
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
        share={<ShareButton text={`Today I learned: ${lesson.takeaway}`} url={appUrl()} />}
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
    <article className="stack lesson">
      <button className="icon-btn" onClick={() => history.back()} aria-label="Close lesson">
        <IconClose />
      </button>
      <LessonBody lesson={lesson} />
      {state.focus > 0 ? (
        <button
          className="btn wide"
          onClick={() => {
            setPhase("quiz");
            window.scrollTo(0, 0);
          }}
        >
          Quiz me: 3 questions
        </button>
      ) : (
        <div className="card">
          <p className="note">You're out of focus, so the quiz is paused. A few right answers in Review will refill it.</p>
          <button className="btn" onClick={() => go("review")}>
            Refill in Review
          </button>
        </div>
      )}
    </article>
  );
}
