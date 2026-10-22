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

export interface Settings {
  name: string;
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
}

export interface QuizItem {
  lessonId: string;
  qi: number;
}
