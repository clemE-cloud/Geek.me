import { FOCUS_MAX, freshState } from "./game";
import type { GameState } from "./types";

/**
 * Where progress lives. Today it's the browser (localStorage). An account-backed
 * store (e.g. Supabase) only needs to implement this interface.
 */
export interface ProgressStore {
  readonly kind: "local" | "cloud";
  load(): Promise<GameState | null>;
  save(state: GameState): Promise<void>;
  clear(): Promise<void>;
}

const KEY = "geekme-v2";
const V1_KEY = "daily-spark-v1";

function readJson(key: string): unknown {
  try {
    return JSON.parse(localStorage.getItem(key) ?? "null");
  } catch {
    return null;
  }
}

export const localStore: ProgressStore = {
  kind: "local",
  async load() {
    const saved = readJson(KEY) as GameState | null;
    if (saved && saved.version === 1) return { ...freshState(), ...saved, settings: { ...freshState().settings, ...saved.settings } };
    return migrateV1(readJson(V1_KEY));
  },
  async save(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* storage full or blocked: keep playing in memory */
    }
  },
  async clear() {
    try {
      localStorage.removeItem(KEY);
      localStorage.removeItem(V1_KEY);
    } catch {
      /* ignore */
    }
  },
};

interface V1Data {
  P?: { xp?: number; days?: string[]; cards?: GameState["cards"] };
  L?: Record<string, { learnedOn?: string }>;
}

/** Carry over lessons, review cards and XP from the original single-page Daily Spark. */
export function migrateV1(raw: unknown): GameState | null {
  const v1 = raw as V1Data | null;
  if (!v1?.P || !v1.L) return null;
  const s = freshState();
  for (const [id, l] of Object.entries(v1.L)) s.learned[id] = l.learnedOn ?? "2000-01-01";
  s.cards = { ...(v1.P.cards ?? {}) };
  s.xp = v1.P.xp ?? 0;
  // v1 only kept a list of active days, so give each one a nominal 1 XP to preserve the rhythm history.
  for (const d of v1.P.days ?? []) s.xpByDay[d] = 1;
  s.focus = FOCUS_MAX;
  return s;
}
