import { CONSTELLATIONS } from "../data/constellations";
import { LESSONS, lessonById } from "../data/lessons";
import { addDays, weekDays, weekStart } from "./dates";
import type { Constellation, GameState, Lesson, QuizItem } from "./types";

export const FOCUS_MAX = 5;
/** Days until a question comes back, by Leitner box. */
export const BOX_DAYS = [1, 2, 4, 7, 15, 30, 60];
export const XP = { lesson: 10, lessonCorrect: 5, review: 3, practice: 1, daily: 5 };
export const REVIEW_BATCH = 8;

export const freshState = (): GameState => ({
  version: 1,
  settings: {
    name: "",
    age: null,
    level: "standard",
    look: "calm",
    textSize: "normal",
    daysPerWeek: 4,
    dailyGoal: 30,
    onboarded: false,
    avatar: "",
  },
  xp: 0,
  xpByDay: {},
  learned: {},
  cards: {},
  focus: FOCUS_MAX,
  perfectLessons: 0,
  reviewsCorrect: 0,
  achievements: {},
  daily: {},
  breaks: [],
  circleWins: [],
});

/* ---------- lessons and the map ---------- */

export const isLearned = (s: GameState, id: string) => id in s.learned;

/** A lesson is open once every earlier lesson in its constellation is learned. */
export const isUnlocked = (s: GameState, c: Constellation, id: string) => {
  const i = c.lessons.indexOf(id);
  return i >= 0 && c.lessons.slice(0, i).every((x) => isLearned(s, x));
};

export const constellationProgress = (s: GameState, c: Constellation) => c.lessons.filter((id) => isLearned(s, id)).length;

export const isComplete = (s: GameState, c: Constellation) => constellationProgress(s, c) === c.lessons.length;

/** Suggested next lesson: continue a constellation already started, otherwise open the next one. */
export function nextLesson(s: GameState): Lesson | undefined {
  const started = CONSTELLATIONS.find((c) => !isComplete(s, c) && constellationProgress(s, c) > 0);
  const c = started ?? CONSTELLATIONS.find((x) => !isComplete(s, x));
  const id = c?.lessons.find((x) => !isLearned(s, x));
  return id ? lessonById(id) : undefined;
}

export const allLearned = (s: GameState) => LESSONS.every((l) => isLearned(s, l.id));

/* ---------- daily goal and weekly rhythm ---------- */

export const xpOn = (s: GameState, day: string) => s.xpByDay[day] ?? 0;
export const isActive = (s: GameState, day: string) => xpOn(s, day) > 0;

export const activeDaysInWeek = (s: GameState, day: string) => weekDays(day).filter((d) => isActive(s, d)).length;

export const rhythmMet = (s: GameState, day: string) => activeDaysInWeek(s, day) >= s.settings.daysPerWeek;

/**
 * Consecutive weeks that hit the rhythm. The current week counts once it is met;
 * until then it doesn't break the run, so a rest day never costs anything.
 */
export function rhythmWeeks(s: GameState, t: string): number {
  let n = rhythmMet(s, t) ? 1 : 0;
  let w = addDays(weekStart(t), -7);
  // Weeks during a break are skipped: they neither add to the run nor end it.
  for (let i = 0; i < 520; i++, w = addDays(w, -7)) {
    if (rhythmMet(s, w)) n++;
    else if (!weekOnBreak(s, w)) break;
  }
  return n;
}

/* ---------- breaks ---------- */

/** The break covering day `t`, if any. */
export const breakOn = (s: GameState, t: string) =>
  (s.breaks ?? []).find((b) => b.start <= t && (b.end === null || t <= b.end)) ?? null;

const weekOnBreak = (s: GameState, day: string) => weekDays(day).some((d) => !!breakOn(s, d));

/** Starts a break today. `until` is the last day of the break, or null for "until I resume". */
export function startBreak(s: GameState, t: string, until: string | null): GameState {
  const others = (s.breaks ?? []).filter((b) => !(b.start <= t && (b.end === null || t <= b.end)));
  return { ...s, breaks: [...others, { start: t, end: until }] };
}

/** Ends any current break as of yesterday, so today counts normally. */
export function endBreak(s: GameState, t: string): GameState {
  const y = addDays(t, -1);
  return {
    ...s,
    breaks: (s.breaks ?? [])
      .map((b) => (b.start <= t && (b.end === null || t <= b.end) ? { ...b, end: y } : b))
      .filter((b) => b.end === null || b.start <= b.end),
  };
}

/* ---------- review ---------- */

export function dueItems(s: GameState, t: string): QuizItem[] {
  return Object.entries(s.cards)
    .filter(([, c]) => c.due <= t)
    .sort(([, a], [, b]) => (a.due < b.due ? -1 : a.due > b.due ? 1 : 0))
    .map(([k]) => toItem(k))
    .filter((it) => !!lessonById(it.lessonId)?.qs[it.qi]);
}

/** Any learned questions, weakest first: used for practice when nothing is due. */
export function practiceItems(s: GameState): QuizItem[] {
  return Object.entries(s.cards)
    .sort(([, a], [, b]) => a.box - b.box)
    .map(([k]) => toItem(k))
    .filter((it) => !!lessonById(it.lessonId)?.qs[it.qi]);
}

const toItem = (k: string): QuizItem => {
  const [lessonId, qi] = k.split(":");
  return { lessonId, qi: Number(qi) };
};
const keyOf = (it: QuizItem) => `${it.lessonId}:${it.qi}`;

/* ---------- state transitions (pure) ---------- */

const addXp = (s: GameState, t: string, n: number): GameState => ({
  ...s,
  xp: s.xp + n,
  xpByDay: { ...s.xpByDay, [t]: xpOn(s, t) + n },
});

/** Focus drops on a wrong lesson answer and refills on a correct review answer. */
export function answerFocus(s: GameState, kind: "lesson" | "review", correct: boolean): GameState {
  if (kind === "lesson" && !correct) return { ...s, focus: Math.max(0, s.focus - 1) };
  if (kind === "review" && correct) return { ...s, focus: Math.min(FOCUS_MAX, s.focus + 1) };
  return s;
}

export function completeLesson(s: GameState, lesson: Lesson, results: boolean[], t: string) {
  const right = results.filter(Boolean).length;
  const gained = XP.lesson + XP.lessonCorrect * right;
  const cards = { ...s.cards };
  lesson.qs.forEach((_, qi) => {
    const ok = results[qi];
    cards[`${lesson.id}:${qi}`] = { box: ok ? 1 : 0, due: addDays(t, ok ? BOX_DAYS[1] : BOX_DAYS[0]) };
  });
  const next: GameState = {
    ...addXp(s, t, gained),
    learned: { ...s.learned, [lesson.id]: t },
    cards,
    perfectLessons: s.perfectLessons + (right === lesson.qs.length ? 1 : 0),
  };
  return { state: next, gained };
}

/**
 * Due questions move up a box when right and drop to box 0 when wrong.
 * Practice (questions not yet due) earns a little XP but leaves the schedule alone.
 */
export function completeReview(s: GameState, items: QuizItem[], results: boolean[], t: string) {
  const cards = { ...s.cards };
  let gained = 0;
  items.forEach((it, i) => {
    const k = keyOf(it);
    const c = cards[k];
    const ok = results[i];
    if (!c) return;
    if (c.due <= t) {
      const box = ok ? Math.min(c.box + 1, BOX_DAYS.length - 1) : 0;
      cards[k] = { box, due: addDays(t, BOX_DAYS[box]) };
      if (ok) gained += XP.review;
    } else if (ok) {
      gained += XP.practice;
    }
  });
  const right = results.filter(Boolean).length;
  return { state: { ...addXp(s, t, gained), cards, reviewsCorrect: s.reviewsCorrect + right }, gained };
}

/** The daily question can be answered once per day; a right answer earns a little XP. */
export function answerDaily(s: GameState, t: string, correct: boolean): GameState {
  if (t in s.daily) return s;
  const next = { ...s, daily: { ...s.daily, [t]: correct } };
  return correct ? addXp(next, t, XP.daily) : next;
}

/* ---------- achievements ---------- */

export interface Achievement {
  id: string;
  title: string;
  desc: string;
  glyph: string;
  test: (s: GameState, t: string) => boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "first-light",
    title: "First light",
    desc: "Finish your first lesson",
    glyph: "✦",
    test: (s) => Object.keys(s.learned).length >= 1,
  },
  {
    id: "five-stars",
    title: "Five stars",
    desc: "Finish 5 lessons",
    glyph: "✶",
    test: (s) => Object.keys(s.learned).length >= 5,
  },
  {
    id: "flawless",
    title: "Flawless",
    desc: "Get every question right in a lesson",
    glyph: "◆",
    test: (s) => s.perfectLessons >= 1,
  },
  {
    id: "daily-goal",
    title: "Goal met",
    desc: "Reach your daily XP goal",
    glyph: "◎",
    test: (s, t) => xpOn(s, t) >= s.settings.dailyGoal,
  },
  { id: "in-rhythm", title: "In rhythm", desc: "Hit your weekly rhythm", glyph: "♪", test: (s, t) => rhythmMet(s, t) },
  { id: "steady", title: "Steady", desc: "Hit your rhythm 3 weeks in a row", glyph: "♫", test: (s, t) => rhythmWeeks(s, t) >= 3 },
  {
    id: "join-dots",
    title: "Join the dots",
    desc: "Complete a constellation",
    glyph: "⟡",
    test: (s) => CONSTELLATIONS.some((c) => isComplete(s, c)),
  },
  {
    id: "recall",
    title: "Total recall",
    desc: "Answer 25 review questions right",
    glyph: "↻",
    test: (s) => s.reviewsCorrect >= 25,
  },
  {
    id: "daily-5",
    title: "Regular",
    desc: "Answer 5 daily questions",
    glyph: "☾",
    test: (s) => Object.keys(s.daily).length >= 5,
  },
  {
    id: "circle-goal",
    title: "Better together",
    desc: "Reach a weekly goal with your circle",
    glyph: "◍",
    test: (s) => (s.circleWins ?? []).length >= 1,
  },
  { id: "xp-250", title: "250 XP", desc: "Earn 250 XP", glyph: "⚡", test: (s) => s.xp >= 250 },
  { id: "full-sky", title: "Full sky", desc: "Finish every lesson", glyph: "☼", test: (s) => allLearned(s) },
];

/** Award any newly earned achievements; returns the new state and what was just earned. */
export function awardAchievements(s: GameState, t: string) {
  const earned = ACHIEVEMENTS.filter((a) => !s.achievements[a.id] && a.test(s, t));
  if (!earned.length) return { state: s, earned };
  const achievements = { ...s.achievements };
  earned.forEach((a) => (achievements[a.id] = t));
  return { state: { ...s, achievements }, earned };
}
