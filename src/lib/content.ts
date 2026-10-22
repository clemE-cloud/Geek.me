import { lessonById } from "../data/lessons";
import { YOUNG } from "../data/lessons-young";
import { parseYmd } from "./dates";
import type { AgeBand, Lesson, Level, Look, QuizItem, Settings, TextSize } from "./types";

/** The lesson as this reader should see it: the simpler version for young readers when one exists. */
export function lessonView(id: string, level: Level): Lesson | undefined {
  const base = lessonById(id);
  if (!base) return undefined;
  const young = level === "young" ? YOUNG[id] : undefined;
  return young ? { ...base, ...young, title: young.title ?? base.title } : base;
}

export const AGE_BANDS: { band: AgeBand; label: string }[] = [
  { band: "6-9", label: "6–9" },
  { band: "10-12", label: "10–12" },
  { band: "13-17", label: "13–17" },
  { band: "18-64", label: "18–64" },
  { band: "65+", label: "65+" },
];

/** Starting level, look and text size for an age band. People can change each one in Profile. */
export function defaultsForAge(age: AgeBand): { level: Level; look: Look; textSize: TextSize } {
  switch (age) {
    case "6-9":
      return { level: "young", look: "bright", textSize: "large" };
    case "10-12":
      return { level: "young", look: "calm", textSize: "normal" };
    case "65+":
      return { level: "standard", look: "calm", textSize: "large" };
    default:
      return { level: "standard", look: "calm", textSize: "normal" };
  }
}

/** Under-13s get no links out of the app (and, later, no open social features). */
export const isChild = (s: Settings) => s.age === "6-9" || s.age === "10-12";

/* ---------- daily question: the same question for everyone on a given date ---------- */

export const DAILY_EPOCH = "2026-10-22";

export const dailyNumber = (day: string) =>
  Math.round((parseYmd(day).getTime() - parseYmd(DAILY_EPOCH).getTime()) / 86_400_000) + 1;

/**
 * Questions that make sense without reading the lesson first, in both the standard and young versions.
 * When adding lessons, add their stand-alone questions here as "lessonId:questionIndex".
 */
export const DAILY_POOL = [
  "b01:1",
  "b02:0",
  "b02:1",
  "b03:0",
  "b03:2",
  "b04:0",
  "b05:0",
  "b05:1",
  "b05:2",
  "b06:0",
  "b06:1",
  "b07:1",
  "b08:1",
  "b08:2",
  "b09:0",
  "b11:0",
  "b11:2",
  "b12:0",
  "b12:2",
  "b13:0",
  "b14:0",
  "b14:1",
  "b15:0",
  "b17:0",
  "b17:2",
  "b18:0",
  "b19:1",
  "b20:0",
  "b20:1",
  "b21:0",
  "b21:1",
];

/** The pool in a fixed shuffled order, so consecutive days jump between subjects. */
const DAILY_ORDER: QuizItem[] = (() => {
  const all = DAILY_POOL.map((k) => {
    const [lessonId, qi] = k.split(":");
    return { lessonId, qi: Number(qi) };
  });
  let seed = 20261023;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 2 ** 32;
  };
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all;
})();

export function dailyItem(day: string): QuizItem {
  const n = dailyNumber(day) - 1;
  const len = DAILY_ORDER.length;
  return DAILY_ORDER[((n % len) + len) % len];
}
