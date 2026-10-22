import type { CSSProperties } from "react";
import { fmt, today, weekDays } from "../lib/dates";
import { FOCUS_MAX, isActive } from "../lib/game";
import type { GameState } from "../lib/types";
import { IconCheck, IconFocus } from "./Icons";

const HUES = 6;
export const subjectColor = (subject: string) => {
  const h = [...subject].reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) | 0, 7);
  return `var(--h${(Math.abs(h) % HUES) + 1})`;
};

export const Chip = ({ subject }: { subject: string }) => (
  <span className="chip" style={{ "--c": subjectColor(subject) } as CSSProperties}>
    {subject}
  </span>
);

export function FocusMeter({ focus, label = true }: { focus: number; label?: boolean }) {
  return (
    <span className="focus" title={`Focus ${focus} of ${FOCUS_MAX}`} aria-label={`Focus ${focus} of ${FOCUS_MAX}`}>
      {Array.from({ length: FOCUS_MAX }, (_, i) => (
        <IconFocus key={i} width={14} height={14} className={i < focus ? "on" : ""} />
      ))}
      {label && <span className="mono">{focus}</span>}
    </span>
  );
}

export function GoalRing({ value, goal, size = 92 }: { value: number; goal: number; size?: number }) {
  const r = size / 2 - 7;
  const c = 2 * Math.PI * r;
  const p = Math.min(1, value / goal);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="ring" role="img" aria-label={`${value} of ${goal} XP today`}>
      <circle cx={size / 2} cy={size / 2} r={r} className="ring-bg" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        className="ring-fg"
        strokeDasharray={`${c * p} ${c}`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text x="50%" y="47%" textAnchor="middle" className="ring-num">
        {value}
      </text>
      <text x="50%" y="66%" textAnchor="middle" className="ring-sub">
        / {goal} XP
      </text>
    </svg>
  );
}

/** This week, Monday to Sunday. Filled = active day. No red marks: missed days are just empty. */
export function WeekStrip({ state }: { state: GameState }) {
  const t = today();
  return (
    <div className="week" aria-label="This week">
      {weekDays(t).map((d) => (
        <div key={d} className="day">
          <span className={`dot ${isActive(state, d) ? "on" : ""} ${d === t ? "today" : ""} ${d > t ? "future" : ""}`}>
            {isActive(state, d) && <IconCheck width={12} height={12} />}
          </span>
          <span className="label">{fmt(d, { weekday: "narrow" })}</span>
        </div>
      ))}
    </div>
  );
}
