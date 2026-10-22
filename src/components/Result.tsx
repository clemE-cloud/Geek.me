import type { ReactNode } from "react";
import type { Achievement } from "../lib/game";
import type { Lesson } from "../lib/types";
import { Chip } from "./Bits";

interface Props {
  title: string;
  gained: number;
  right: number;
  total: number;
  earned: Achievement[];
  card?: Lesson;
  note: string;
  share?: ReactNode;
  onContinue: () => void;
}

export function Result({ title, gained, right, total, earned, card, note, share, onContinue }: Props) {
  return (
    <section className="result">
      <span className="label">{title}</span>
      <div className="big-xp pop">+{gained} XP</div>
      <p className="note">
        {right} of {total} right. {note}
      </p>

      {card && (
        <div className="fact-card reveal">
          <div className="meta">
            <Chip subject={card.subject} />
            <span className="label">New card</span>
          </div>
          <h3>{card.title}</h3>
          <p>{card.takeaway}</p>
          {share}
        </div>
      )}

      {earned.map((a) => (
        <div key={a.id} className="earned pop">
          <span className="glyph">{a.glyph}</span>
          <div>
            <span className="label">Badge earned</span>
            <b>{a.title}</b>
            <span className="note">{a.desc}</span>
          </div>
        </div>
      ))}

      <button className="btn wide" onClick={onContinue} autoFocus>
        Continue
      </button>
    </section>
  );
}
