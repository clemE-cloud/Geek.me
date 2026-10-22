import { lessonView } from "../lib/content";
import { isLearned, isUnlocked } from "../lib/game";
import type { Constellation, GameState } from "../lib/types";

const W = 320;
const H = 150;

/** Deterministic, slightly irregular star positions so each constellation has its own shape. */
function layout(c: Constellation) {
  let seed = [...c.id].reduce((a, ch) => a * 33 + ch.charCodeAt(0), 5381) >>> 0;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 2 ** 32;
  };
  const n = c.lessons.length;
  return c.lessons.map((_, i) => ({
    x: 34 + (i * (W - 68)) / Math.max(1, n - 1) + (rand() - 0.5) * 18,
    y: 30 + rand() * (H - 60),
  }));
}

export function StarMap({ c, state, onPick }: { c: Constellation; state: GameState; onPick: (id: string) => void }) {
  const pts = layout(c);
  return (
    <svg className="starmap" viewBox={`0 0 ${W} ${H}`} role="group" aria-label={`${c.name} star map`}>
      {pts.slice(1).map((p, i) => {
        const lit = isLearned(state, c.lessons[i]) && isLearned(state, c.lessons[i + 1]);
        return <line key={i} x1={pts[i].x} y1={pts[i].y} x2={p.x} y2={p.y} className={lit ? "edge lit" : "edge"} />;
      })}
      {pts.map((p, i) => {
        const id = c.lessons[i];
        const learned = isLearned(state, id);
        const open = isUnlocked(state, c, id);
        const cls = learned ? "star learned" : open ? "star open" : "star locked";
        const title = lessonView(id, state.settings.level)?.title ?? id;
        return (
          <g
            key={id}
            className={cls}
            transform={`translate(${p.x} ${p.y})`}
            role="button"
            tabIndex={open || learned ? 0 : -1}
            aria-label={`${title}${learned ? ", learned" : open ? ", ready" : ", locked"}`}
            aria-disabled={!open && !learned}
            onClick={() => (open || learned) && onPick(id)}
            onKeyDown={(e) => {
              if ((e.key === "Enter" || e.key === " ") && (open || learned)) {
                e.preventDefault();
                onPick(id);
              }
            }}
          >
            <circle r="18" className="hit" />
            {open && !learned && <circle r="13" className="halo" />}
            <circle r={learned ? 7 : open ? 6 : 3.5} className="core" />
          </g>
        );
      })}
    </svg>
  );
}
