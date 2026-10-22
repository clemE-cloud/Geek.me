import { StarMap } from "../components/StarMap";
import { IconCheck, IconLock } from "../components/Icons";
import { CONSTELLATIONS } from "../data/constellations";
import { LESSONS, lessonById } from "../data/lessons";
import { constellationProgress, isLearned, isUnlocked } from "../lib/game";
import { go } from "../lib/router";
import { useGame } from "../lib/useGame";

export function Sky() {
  const { state } = useGame();
  const lit = Object.keys(state.learned).filter((id) => lessonById(id)).length;
  const pick = (id: string) => go(isLearned(state, id) ? `card/${id}` : `lesson/${id}`);

  return (
    <div className="stack">
      <div>
        <h1>Your sky</h1>
        <p className="note">
          {lit} of {LESSONS.length} stars lit. Start any constellation; each one unlocks star by star.
        </p>
      </div>

      {CONSTELLATIONS.map((c) => {
        const done = constellationProgress(state, c);
        return (
          <section key={c.id} className="card constellation">
            <div className="meta">
              <span className="label">{c.theme}</span>
              <span className="label mono">
                {done}/{c.lessons.length}
              </span>
            </div>
            <h2>{c.name}</h2>
            <p className="note">{c.blurb}</p>
            <StarMap c={c} state={state} onPick={pick} />
            <ol className="star-list">
              {c.lessons.map((id) => {
                const l = lessonById(id);
                if (!l) return null;
                const learned = isLearned(state, id);
                const open = isUnlocked(state, c, id);
                return (
                  <li key={id}>
                    <button className={learned ? "learned" : open ? "open" : "locked"} disabled={!learned && !open} onClick={() => pick(id)}>
                      <span className="state">
                        {learned ? <IconCheck width={12} height={12} /> : open ? "●" : <IconLock width={12} height={12} />}
                      </span>
                      {open || learned ? l.title : "Locked"}
                    </button>
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
