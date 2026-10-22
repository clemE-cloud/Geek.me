export interface Question {
  q: string;
  o: string[];
  /** Index of the correct option in `o`. */
  a: number;
  why: string;
}

export interface Lesson {
  id: string;
  subject: string;
  title: string;
  body: string[];
  takeaway: string;
  qs: Question[];
}

/** The parts of a lesson that change with reading level. */
export interface LessonVersion {
  title?: string;
  body: string[];
  takeaway: string;
  qs: Question[];
}

export interface Constellation {
  id: string;
  name: string;
  theme: string;
  blurb: string;
  /** Lesson ids, in the order they unlock. */
  lessons: string[];
}

/** One quiz question in spaced review (Leitner box + next due date). */
export interface ReviewCard {
  box: number;
  due: string;
}

export type AgeBand = "6-9" | "10-12" | "13-17" | "18-64" | "65+";
/** "young" = simpler lessons for about 6–12; "standard" for everyone else. */
export type Level = "young" | "standard";
export type Look = "calm" | "bright";
export type TextSize = "normal" | "large";

export interface Settings {
  name: string;
  age: AgeBand | null;
  level: Level;
  look: Look;
  textSize: TextSize;
  /** Target active days per week: the "rhythm". */
  daysPerWeek: number;
  /** Daily XP goal. */
  dailyGoal: number;
  onboarded: boolean;
}

export interface GameState {
  version: 1;
  settings: Settings;
  xp: number;
  /** XP earned per local date (YYYY-MM-DD). A day with XP counts as an active day. */
  xpByDay: Record<string, number>;
  /** Lesson id -> date it was learned. */
  learned: Record<string, string>;
  /** "lessonId:questionIndex" -> review card. */
  cards: Record<string, ReviewCard>;
  focus: number;
  perfectLessons: number;
  reviewsCorrect: number;
  /** Achievement id -> date earned. */
  achievements: Record<string, string>;
  /** Daily question results: date -> answered correctly. */
  daily: Record<string, boolean>;
}

export interface QuizItem {
  lessonId: string;
  qi: number;
}
