import { useState } from "react";
import { Chip } from "../components/Bits";
import { IconClose } from "../components/Icons";
import { CONSTELLATIONS } from "../data/constellations";
import { lessonById } from "../data/lessons";
import { fmt } from "../lib/dates";
import { ACHIEVEMENTS, isComplete, isLearned } from "../lib/game";
import { go } from "../lib/router";
import type { Lesson } from "../lib/types";
import { useGame } from "../lib/useGame";
import { LessonBody } from "./LessonPlayer";

export function Collection() {
  const { state } = useGame();
  const [view, setView] = useState<"cards" | "badges">("cards");
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const owned = Object.keys(state.learned).filter((id) => lessonById(id)).length;
  const badges = Object.keys(state.achievements).length;
  const matches = (l: Lesson) =>
    !query || (isLearned(state, l.id) && `${l.title} ${l.takeaway} ${l.body.join(" ")}`.toLowerCase().includes(query));
  const groups = CONSTELLATIONS.map((c) => ({
    c,
    cards: c.lessons.map((id) => lessonById(id)).filter((l): l is Lesson => !!l && matches(l)),
  })).filter((g) => g.cards.length);

  return (
    <div className="stack">
      <h1>Collection</h1>
      <div className="seg" role="tablist">
        <button role="tab" aria-selected={view === "cards"} onClick={() => setView("cards")}>
          Cards · {owned}
        </button>
        <button role="tab" aria-selected={view === "badges"} onClick={() => setView("badges")}>
          Badges · {badges}/{ACHIEVEMENTS.length}
        </button>
      </div>

      {view === "cards" ? (
        <>
          {owned > 0 && (
            <input
              className="search"
              type="search"
              placeholder="Search what you've learned"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Search your cards"
            />
          )}
          {groups.map(({ c, cards }) => {
            return (
              <section key={c.id} className="stack-sm">
                <div className="meta">
                  <span className="label">{c.name}</span>
                  {isComplete(state, c) && <span className="label gold">✦ Complete</span>}
                </div>
                <div className="card-grid">
                  {cards.map((l) =>
                    isLearned(state, l.id) ? (
                      <button key={l.id} className="fact-card" onClick={() => go(`card/${l.id}`)}>
                        <Chip subject={l.subject} />
                        <h3>{l.title}</h3>
                        <p>{l.takeaway}</p>
                      </button>
                    ) : (
                      <div key={l.id} className="fact-card locked" aria-label="Card not collected yet">
                        <span className="q-mark">?</span>
                      </div>
                    ),
                  )}
                </div>
              </section>
            );
          })}
          {!groups.length && <p className="note">No cards match “{q}”.</p>}
        </>
      ) : (
        <div className="badge-grid">
          {ACHIEVEMENTS.map((a) => {
            const on = state.achievements[a.id];
            return (
              <div key={a.id} className={`badge-tile ${on ? "on" : ""}`}>
                <span className="glyph">{a.glyph}</span>
                <b>{a.title}</b>
                <span className="note">{a.desc}</span>
                {on && <span className="label">{fmt(on, { day: "numeric", month: "short" })}</span>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function CardView({ id }: { id: string }) {
  const { state } = useGame();
  const lesson = lessonById(id);
  if (!lesson || !isLearned(state, id)) {
    return (
      <div className="stack">
        <h1>Card not collected yet</h1>
        <button className="btn" onClick={() => go("collection")}>
          Back to collection
        </button>
      </div>
    );
  }
  return (
    <article className="stack lesson">
      <button className="icon-btn" onClick={() => history.back()} aria-label="Close">
        <IconClose />
      </button>
      <LessonBody lesson={lesson} />
      <span className="label">Collected {fmt(state.learned[id], { day: "numeric", month: "long", year: "numeric" })}</span>
    </article>
  );
}
