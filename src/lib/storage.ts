import { FOCUS_MAX, freshState } from "./game";
import { normalizeAccount } from "./account";
import type { Account, GameState } from "./types";

/**
 * Where an account's progress lives: the browser (localStorage) for guests, or Supabase when signed in (cloud.ts).
 */
export interface ProgressStore {
  readonly kind: "local" | "cloud";
  load(): Promise<Account | null>;
  save(account: Account): Promise<void>;
  clear(): Promise<void>;
}

const KEY = "geekme-account";
/** Single-learner saves from before accounts, and from the original Daily Spark page. */
const V2_KEY = "geekme-v2";
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
    const saved = normalizeAccount(readJson(KEY)) ?? normalizeAccount(readJson(V2_KEY));
    if (saved) return saved;
    const v1 = migrateV1(readJson(V1_KEY));
    return v1 ? normalizeAccount(v1) : null;
  },
  async save(account) {
    try {
      localStorage.setItem(KEY, JSON.stringify(account));
    } catch {
      /* storage full or blocked: keep playing in memory */
    }
  },
  async clear() {
    try {
      for (const k of [KEY, V2_KEY, V1_KEY]) localStorage.removeItem(k);
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
