import { useState } from "react";
import { Chip } from "../components/Bits";
import { IconClose } from "../components/Icons";
import { Quiz } from "../components/Quiz";
import { Result } from "../components/Result";
import { constellationOf } from "../data/constellations";
import { lessonById } from "../data/lessons";
import { isLearned, isUnlocked } from "../lib/game";
import { go } from "../lib/router";
import { useGame, type SessionResult } from "../lib/useGame";
import type { Lesson } from "../lib/types";

export const digDeeper = (l: Lesson) => `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(l.title)}`;

export function LessonBody({ lesson }: { lesson: Lesson }) {
  const c = constellationOf(lesson.id);
  return (
    <>
      <div className="meta">
        <Chip subject={lesson.subject} />
        {c && <span className="label">{c.name}</span>}
      </div>
      <h1 className="lesson-title">{lesson.title}</h1>
      <div className="prose">
        {lesson.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="takeaway">
        <span className="label">Remember this</span>
        <p>{lesson.takeaway}</p>
      </div>
      <a className="rabbit" href={digDeeper(lesson)} target="_blank" rel="noopener noreferrer">
        Down the rabbit hole: read more on Wikipedia ↗
      </a>
    </>
  );
}

export function LessonPlayer({ id }: { id: string }) {
  const { state, finishLesson } = useGame();
  const [phase, setPhase] = useState<"read" | "quiz" | "done">("read");
  const [outcome, setOutcome] = useState<(SessionResult & { results: boolean[] }) | null>(null);
  const lesson = lessonById(id);
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
