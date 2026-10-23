import { useMemo, useState } from "react";

/**
 * A light check that a grown-up is at the screen before opening the parent's profile or account settings.
 * It isn't security, just enough to stop a young child wandering into settings by accident.
 */
export function ParentGate({ onPass, onCancel }: { onPass: () => void; onCancel: () => void }) {
  const [a, b] = useMemo(() => [6 + Math.floor(Math.random() * 4), 3 + Math.floor(Math.random() * 7)], []);
  const [answer, setAnswer] = useState("");
  const [wrong, setWrong] = useState(false);

  return (
    <section className="card stack-sm" role="dialog" aria-label="Grown-ups only">
      <span className="label">Grown-ups only</span>
      <h2>
        What is {a} × {b}?
      </h2>
      <form
        className="stack-sm"
        onSubmit={(e) => {
          e.preventDefault();
          if (Number(answer) === a * b) onPass();
          else setWrong(true);
        }}
      >
        <input
          className="search"
          inputMode="numeric"
          value={answer}
          onChange={(e) => (setAnswer(e.target.value.replace(/\D/g, "")), setWrong(false))}
          aria-label="Answer"
          autoFocus
        />
        {wrong && <p className="note bad-text">That's not right. Ask a grown-up to help.</p>}
        <div className="row">
          <button className="btn" disabled={!answer}>
            Continue
          </button>
          <button type="button" className="btn ghost" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}
