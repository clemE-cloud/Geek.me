import { useEffect, useState } from "react";
import { share, type ShareOutcome } from "../lib/share";

export function ShareButton({ text, url, label = "Share" }: { text: string; url: string; label?: string }) {
  const [outcome, setOutcome] = useState<ShareOutcome | null>(null);
  return (
    <button className="btn ghost" onClick={async () => setOutcome(await share(text, url))}>
      {outcome === "copied" ? "Copied" : outcome === "failed" ? "Couldn't share" : label}
    </button>
  );
}

const canSpeak = () => typeof window !== "undefined" && "speechSynthesis" in window;

/** Reads text aloud with the device's built-in voice. Hidden where speech isn't supported. */
export function ListenButton({ text, slow = false }: { text: string; slow?: boolean }) {
  const [on, setOn] = useState(false);
  useEffect(() => () => void (canSpeak() && speechSynthesis.cancel()), []);
  if (!canSpeak()) return null;

  const toggle = () => {
    speechSynthesis.cancel();
    if (on) return setOn(false);
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en";
    u.rate = slow ? 0.9 : 1;
    u.onend = u.onerror = () => setOn(false);
    speechSynthesis.speak(u);
    setOn(true);
  };
  return (
    <button className="btn ghost small-btn" onClick={toggle} aria-pressed={on}>
      {on ? "■ Stop" : "▶ Listen"}
    </button>
  );
}
