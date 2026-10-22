import { useState } from "react";
import { dailyItem, dailyNumber, lessonView } from "../lib/content";
import { today } from "../lib/dates";
import { go } from "../lib/router";
import { appUrl } from "../lib/share";
import { useGame } from "../lib/useGame";
import { ShareButton } from "./Actions";
import { Chip } from "./Bits";

/** One question a day, the same for everyone, so people can compare and share. */
export function Daily({ standalone = false }: { standalone?: boolean }) {
  const { state, finishDaily } = useGame();
  const [picked, setPicked] = useState<number | null>(null);
  const t = today();
  const n = dailyNumber(t);
  const item = dailyItem(t);
  const lesson = lessonView(item.lessonId, state.settings.level);
  if (!lesson) return null;
  const q = lesson.qs[item.qi];

  const answered = t in state.daily;
  const correct = state.daily[t];

  const pick = (k: number) => {
    if (answered) return;
    setPicked(k);
    finishDaily(k === q.a);
  };

  const shareText = `Geek.me daily #${n} ${correct ? "✓" : "✗"}\n“${q.q}”\n${correct ? "I got it. Can you?" : "I missed it. Can you get it?"}`;

  return (
    <section className="card daily">
      <div className="meta">
        <span className="label">Daily question · #{n}</span>
        <Chip subject={lesson.subject} />
      </div>
      <p className="q">{q.q}</p>
      <div className="opts">
        {q.o.map((o, k) => {
          const cls = !answered ? "" : k === q.a ? "right" : k === picked ? "wrong" : "dim";
          return (
            <button key={k} className={`opt ${cls}`} disabled={answered} onClick={() => pick(k)}>
              <span className="key mono">{"ABCD"[k]}</span>
              <span>{o}</span>
            </button>
          );
        })}
      </div>
      {answered && (
        <>
          <p className="note" role="status">
            <b className={correct ? "ok-text" : "bad-text"}>{correct ? "Right." : "Not this time."}</b> {q.why}
          </p>
          <p className="note">Everyone gets the same question today. A new one arrives tomorrow.</p>
          <div className="row">
            <ShareButton text={shareText} url={`${appUrl()}#/daily`} label="Challenge a friend" />
            {standalone && state.settings.onboarded && (
              <button className="btn" onClick={() => go("today")}>
                Go to today's lesson
              </button>
            )}
          </div>
          {standalone && !state.settings.onboarded && (
            <div className="notice stack-sm">
              <b>Want a short lesson like this most days?</b>
              <span>It takes about two minutes. No sign-up needed.</span>
              <button className="btn" onClick={() => go("")}>
                Start learning
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
