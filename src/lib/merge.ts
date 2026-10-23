import type { GameState, ReviewCard } from "./types";

const earlier = (a: string | undefined, b: string | undefined) => (!a ? b : !b ? a : a < b ? a : b);

/** Keys of either record, with a chooser for keys present in both. */
function unite<T>(a: Record<string, T>, b: Record<string, T>, pick: (x: T, y: T) => T): Record<string, T> {
  const out: Record<string, T> = { ...a };
  for (const [k, v] of Object.entries(b)) out[k] = k in out ? pick(out[k], v) : v;
  return out;
}

/** The card that's further along in review; on a tie, the one due later. */
const furtherCard = (x: ReviewCard, y: ReviewCard) => (x.box !== y.box ? (x.box > y.box ? x : y) : x.due >= y.due ? x : y);

/**
 * Combines two copies of someone's progress, e.g. guest progress on this device and what's in their account,
 * or two devices that were used offline. Nothing learned is lost, and the same work isn't counted twice:
 * per-day XP takes the higher figure rather than adding, because both copies may contain the same day.
 * Settings come from the copy that has finished onboarding, preferring `primary`.
 */
export function mergeStates(primary: GameState, other: GameState): GameState {
  const xpByDay = unite(primary.xpByDay, other.xpByDay, Math.max);
  const dayTotal = Object.values(xpByDay).reduce((n, x) => n + x, 0);
  return {
    version: 1,
    settings: primary.settings.onboarded || !other.settings.onboarded ? primary.settings : other.settings,
    xp: Math.max(primary.xp, other.xp, dayTotal),
    xpByDay,
    learned: unite(primary.learned, other.learned, (x, y) => earlier(x, y)!),
    cards: unite(primary.cards, other.cards, furtherCard),
    focus: Math.max(primary.focus, other.focus),
    perfectLessons: Math.max(primary.perfectLessons, other.perfectLessons),
    reviewsCorrect: Math.max(primary.reviewsCorrect, other.reviewsCorrect),
    achievements: unite(primary.achievements, other.achievements, (x, y) => earlier(x, y)!),
    daily: unite(primary.daily, other.daily, (x, y) => x || y),
  };
}

/** True if the state has any progress worth keeping (used to skip merging an empty guest session). */
export const hasProgress = (s: GameState) => s.xp > 0 || Object.keys(s.learned).length > 0 || Object.keys(s.daily).length > 0;
