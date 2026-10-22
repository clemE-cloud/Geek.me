import { useState } from "react";
import { FocusMeter } from "../components/Bits";
import { Quiz } from "../components/Quiz";
import { Result } from "../components/Result";
import { fmt, today } from "../lib/dates";
import { BOX_DAYS, FOCUS_MAX, REVIEW_BATCH, dueItems, practiceItems } from "../lib/game";
import { go } from "../lib/router";
import { useGame, type SessionResult } from "../lib/useGame";
import type { QuizItem } from "../lib/types";

export function Review() {
  const { state, finishReview } = useGame();
  const [session, setSession] = useState<{ items: QuizItem[]; practice: boolean } | null>(null);
  const [outcome, setOutcome] = useState<(SessionResult & { results: boolean[]; practice: boolean }) | null>(null);
  const t = today();
  const due = dueItems(state, t);
  const all = practiceItems(state);

  if (outcome) {
    return (
      <Result
        title={outcome.practice ? "Practice complete" : "Review complete"}
        gained={outcome.gained}
        right={outcome.results.filter(Boolean).length}
        total={outcome.results.length}
        earned={outcome.earned}
        note={
          outcome.practice
            ? "Practice keeps your focus up without changing your review schedule."
            : "Right answers move further out. Missed ones come back tomorrow."
        }
        onContinue={() => setOutcome(null)}
      />
    );
  }

  if (session) {
    return (
      <Quiz
        kind="review"
        items={session.items}
        onQuit={() => setSession(null)}
        onDone={(results) => {
          setOutcome({ ...finishReview(session.items, results), results, practice: session.practice });
          setSession(null);
          window.scrollTo(0, 0);
        }}
      />
    );
  }

  const counts = BOX_DAYS.map((_, b) => Object.values(state.cards).filter((c) => c.box === b).length);
  const max = Math.max(1, ...counts);
  const nextDue = Object.values(state.cards)
    .map((c) => c.due)
    .filter((d) => d > t)
    .sort()[0];

  return (
    <div className="stack">
      <h1>Review</h1>

      <section className="card">
        <span className="label">Spaced recall</span>
        {due.length > 0 ? (
          <>
            <h2>
              {due.length} question{due.length > 1 ? "s" : ""} ready
            </h2>
            <p className="note">
              Answer from memory. Right answers come back later and later; missed ones come back tomorrow.
            </p>
            <button className="btn" onClick={() => setSession({ items: due.slice(0, REVIEW_BATCH), practice: false })}>
              Start review{due.length > REVIEW_BATCH ? ` (${REVIEW_BATCH} at a time)` : ""}
            </button>
          </>
        ) : all.length > 0 ? (
          <>
            <h2>All caught up</h2>
            <p className="note">
              Next review {nextDue ? `on ${fmt(nextDue, { weekday: "long", day: "numeric", month: "short" })}` : "soon"}. You can
              still practise your weakest questions.
            </p>
            <button className="btn ghost" onClick={() => setSession({ items: all.slice(0, 5), practice: true })}>
              Practise 5 questions
            </button>
          </>
        ) : (
          <>
            <h2>Nothing to recall yet</h2>
            <p className="note">Finish your first lesson and its questions will start showing up here.</p>
            <button className="btn" onClick={() => go("today")}>
              Go to today's lesson
            </button>
          </>
        )}
      </section>

      <section className="card">
        <div className="meta">
          <span className="label">Focus</span>
          <FocusMeter focus={state.focus} />
        </div>
        <p className="note">
          {state.focus < FOCUS_MAX
            ? "Wrong answers in a new lesson cost focus. Every right answer here earns it back. No timers, no paying."
            : "Focus is full. Wrong answers in new lessons use it up; right answers here refill it."}
        </p>
      </section>

      {all.length > 0 && (
        <section className="card">
          <span className="label">Memory boxes · {all.length} questions</span>
          <div className="boxes">
            {counts.map((n, b) => (
              <div key={b}>
                <span className="mono small">{n}</span>
                <i style={{ height: `${Math.round((n / max) * 56)}px`, opacity: 0.35 + b * 0.1 }} />
                <span className="mono small">{BOX_DAYS[b]}d</span>
              </div>
            ))}
          </div>
          <p className="note">Each box is a review gap. Questions climb from 1 day to 60 days as you keep remembering them.</p>
        </section>
      )}
    </div>
  );
}
