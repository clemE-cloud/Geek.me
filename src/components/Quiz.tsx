import { useEffect, useState } from "react";
import { lessonById } from "../data/lessons";
import { useGame } from "../lib/useGame";
import type { QuizItem } from "../lib/types";
import { Chip, FocusMeter } from "./Bits";
import { IconClose } from "./Icons";

interface Props {
  items: QuizItem[];
  kind: "lesson" | "review";
  onQuit: () => void;
  onDone: (results: boolean[]) => void;
}

export function Quiz({ items, kind, onQuit, onDone }: Props) {
  const { state, answer } = useGame();
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [results, setResults] = useState<boolean[]>([]);

  const it = items[i];
  const lesson = lessonById(it.lessonId)!;
  const q = lesson.qs[it.qi];

  const pick = (k: number) => {
    if (picked !== null) return;
    const ok = k === q.a;
    setPicked(k);
    setResults((r) => [...r, ok]);
    answer(kind, ok);
  };
  const next = () => {
    if (picked === null) return;
    if (i + 1 < items.length) {
      setI(i + 1);
      setPicked(null);
    } else onDone(results);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
      const k = "abcd".indexOf(e.key.toLowerCase());
      if (picked === null && k >= 0 && k < q.o.length) pick(k);
      else if (picked !== null && e.key === "Enter") {
        // Stop the same keypress from also activating whichever button gets focus next (e.g. "Continue" on the results).
        e.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const pct = ((i + (picked !== null ? 1 : 0)) / items.length) * 100;
  const ok = picked === q.a;

  return (
    <div className="quiz">
      <div className="quiz-top">
        <button className="icon-btn" onClick={onQuit} aria-label="Leave">
          <IconClose />
        </button>
        <div className="bar" role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100}>
          <i style={{ width: `${pct}%` }} />
        </div>
        <FocusMeter focus={state.focus} label={false} />
      </div>

      <section className="card">
        <div className="meta">
          <Chip subject={lesson.subject} />
          <span className="label">{kind === "review" ? lesson.title : `Question ${i + 1} of ${items.length}`}</span>
        </div>
        <p className="q">{q.q}</p>
        <div className="opts">
          {q.o.map((o, k) => {
            const cls = picked === null ? "" : k === q.a ? "right" : k === picked ? "wrong" : "dim";
            return (
              <button key={k} className={`opt ${cls}`} onClick={() => pick(k)} disabled={picked !== null}>
                <span className="key mono">{"ABCD"[k]}</span>
                <span>{o}</span>
              </button>
            );
          })}
        </div>
      </section>

      {picked !== null && (
        <div className={`feedback ${ok ? "ok" : "no"} pop`} role="status">
          <div>
            <b>{ok ? "Yes." : `It's “${q.o[q.a]}”.`}</b> {q.why}
            {kind === "lesson" && !ok && <span className="note"> −1 focus</span>}
            {kind === "review" && ok && <span className="note"> Focus refills.</span>}
          </div>
          <button className="btn" onClick={next} autoFocus>
            {i + 1 < items.length ? "Next" : "Finish"}
          </button>
        </div>
      )}
    </div>
  );
}
