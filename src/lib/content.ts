import { LESSONS, lessonById } from "../data/lessons";
import { parseYmd } from "./dates";
import type { AgeBand, Lesson, Level, Look, QuizItem, Settings, TextSize } from "./types";

/** The lesson as this reader should see it: the simpler version for young readers when one exists. */
export function lessonView(id: string, level: Level): Lesson | undefined {
  const base = lessonById(id);
  if (!base) return undefined;
  if (level !== "young") return base;
  return { ...base, ...base.young, title: base.young.title ?? base.title };
}

export const AGE_BANDS: { band: AgeBand; label: string }[] = [
  { band: "6-9", label: "6–9" },
  { band: "10-12", label: "10–12" },
  { band: "13-15", label: "13–15" },
  { band: "16-17", label: "16–17" },
  { band: "18-64", label: "18–64" },
  { band: "65+", label: "65+" },
];
/** Under 16: no account of their own, only a profile on a parent's account. */
export const isUnder16 = (age: AgeBand | null) => age === "6-9" || age === "10-12" || age === "13-15";
/** Ages that can have their own account. */
export const SELF_AGES = AGE_BANDS.filter((a) => !isUnder16(a.band));
/** Ages for child profiles on a parent account. */
export const CHILD_AGES = AGE_BANDS.filter((a) => isUnder16(a.band));

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

/** Under-13s get simpler lessons by default and no links out of the app. (Under-16s have no account of their own: see isUnder16.) */
export const isChild = (s: Settings) => s.age === "6-9" || s.age === "10-12";

/* ---------- daily question: the same question for everyone on a given date ---------- */

export const DAILY_EPOCH = "2026-10-22";

export const dailyNumber = (day: string) =>
  Math.round((parseYmd(day).getTime() - parseYmd(DAILY_EPOCH).getTime()) / 86_400_000) + 1;

/** Questions marked as stand-alone (`daily` on each lesson), as "lessonId:questionIndex". */
export const DAILY_POOL: string[] = LESSONS.flatMap((l) => (l.daily ?? []).map((qi) => `${l.id}:${qi}`));

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

/* ---------- lessons as story cards ---------- */

const BEAT_WORDS = 34;
const words = (t: string) => t.split(/\s+/).filter(Boolean).length;

/**
 * Splits a lesson's paragraphs into short "beats", one per screen: a sentence or two each,
 * never mixing paragraphs, so the lesson reads like a story rather than a page of text.
 */
export function toBeats(body: string[]): string[] {
  const beats: string[] = [];
  for (const p of body) {
    const sentences = p.split(/(?<=[.!?][’'"”)]?)\s+(?=[A-Z0-9“"‘'(À-ÿ])/);
    let cur = "";
    for (const sentence of sentences) {
      if (cur && words(cur) + words(sentence) > BEAT_WORDS) {
        beats.push(cur);
        cur = sentence;
      } else cur = cur ? `${cur} ${sentence}` : sentence;
    }
    if (cur) beats.push(cur);
  }
  return beats;
}
