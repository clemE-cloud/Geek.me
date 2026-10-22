import type { CSSProperties } from "react";
import { GoalRing, Chip, WeekStrip, subjectColor } from "../components/Bits";
import { IconArrow } from "../components/Icons";
import { constellationOf } from "../data/constellations";
import { today } from "../lib/dates";
import { activeDaysInWeek, dueItems, nextLesson, rhythmMet, rhythmWeeks, xpOn } from "../lib/game";
import { go } from "../lib/router";
import { useGame } from "../lib/useGame";

const greeting = () => {
  const h = new Date().getHours();
  return h < 5 ? "Up late" : h < 12 ? "Morning" : h < 18 ? "Afternoon" : "Evening";
};
const mins = (words: string[]) => Math.max(1, Math.round(words.join(" ").split(/\s+/).length / 200));

export function Today() {
  const { state } = useGame();
  const t = today();
  const { daysPerWeek, dailyGoal, name } = state.settings;
  const active = activeDaysInWeek(state, t);
  const met = rhythmMet(state, t);
  const weeks = rhythmWeeks(state, t);
  const due = dueItems(state, t).length;
  const lesson = nextLesson(state);
  const c = lesson && constellationOf(lesson.id);

  return (
    <div className="stack">
      <h1 className="hello">
        {greeting()}
        {name ? `, ${name}` : ""}.
      </h1>

      <section className="card rhythm">
        <GoalRing value={xpOn(state, t)} goal={dailyGoal} />
        <div className="rhythm-info">
          <span className="label">Weekly rhythm</span>
          <b>
            {Math.min(active, daysPerWeek)} of {daysPerWeek} days
          </b>
          <WeekStrip state={state} />
          <span className="note">
            {met
              ? "Rhythm met this week. Anything more is a bonus."
              : weeks > 0
                ? `${weeks}-week run. Rest days don't break it.`
                : "Any days count. Rest days never break anything."}
          </span>
        </div>
      </section>

      {lesson && c ? (
        <section className="card next" style={{ "--c": subjectColor(lesson.subject) } as CSSProperties}>
          <div className="meta">
            <Chip subject={lesson.subject} />
            <span className="label">
              {c.name} · {mins(lesson.body)} min
            </span>
          </div>
          <h2>{lesson.title}</h2>
          {state.focus > 0 ? (
            <button className="btn" onClick={() => go(`lesson/${lesson.id}`)}>
              Start lesson <IconArrow width={18} height={18} />
            </button>
          ) : (
            <>
              <p className="note">You're out of focus. Answer a few review questions to refill it, then come back.</p>
              <button className="btn" onClick={() => go("review")}>
                Refill in Review
              </button>
            </>
          )}
        </section>
      ) : (
        <section className="card">
          <span className="label">Library complete</span>
          <h2>You've lit the whole sky.</h2>
          <p className="note">
            Every lesson is done. Keep going in Review: spaced practice is what makes them stick. New lessons will appear here
            as they're added.
          </p>
          <button className="btn" onClick={() => go("review")}>
            Go to Review
          </button>
        </section>
      )}

      {due > 0 && (
        <button className="card row-card" onClick={() => go("review")}>
          <div>
            <span className="label">Review</span>
            <b>
              {due} question{due > 1 ? "s" : ""} ready
            </b>
            <span className="note">Recall them before they fade. Each right answer refills focus.</span>
          </div>
          <IconArrow />
        </button>
      )}
    </div>
  );
}
