import type { SupabaseClient } from "@supabase/supabase-js";
import { normalizeAccount } from "./account";
import { localStore, type ProgressStore } from "./storage";
import type { Account } from "./types";

export type SyncStatus = "idle" | "syncing" | "synced" | "offline";

export interface CloudStore extends ProgressStore {
  /** Send any pending change now (e.g. when the page is being hidden). */
  flush(): Promise<void>;
}

const SAVE_DELAY = 1500;
const RETRY_DELAY = 20_000;

/**
 * Progress saved to the signed-in account. Every change is written to the browser at once (so the app
 * works offline and loads instantly), then sent to Supabase after a short pause, batching quick answers.
 */
export function createCloudStore(client: SupabaseClient, userId: string, onStatus: (s: SyncStatus) => void): CloudStore {
  let pending: Account | null = null;
  let timer: ReturnType<typeof setTimeout> | undefined;

  const schedule = (ms: number) => {
    clearTimeout(timer);
    timer = setTimeout(() => void push(), ms);
  };

  async function push() {
    if (!pending) return;
    const state = pending;
    pending = null;
    onStatus("syncing");
    const { error } = await client
      .from("progress")
      .upsert({ user_id: userId, state, updated_at: new Date().toISOString() }, { onConflict: "user_id" });
    if (error) {
      pending ??= state;
      onStatus("offline");
      schedule(RETRY_DELAY);
    } else if (!pending) {
      onStatus("synced");
    }
  }

  return {
    kind: "cloud",
    async load() {
      const { data, error } = await client.from("progress").select("state").eq("user_id", userId).maybeSingle();
      if (error) throw error;
      return normalizeAccount(data?.state);
    },
    async save(account) {
      await localStore.save(account);
      pending = account;
      schedule(SAVE_DELAY);
    },
    async flush() {
      clearTimeout(timer);
      await push();
    },
    async clear() {
      clearTimeout(timer);
      pending = null;
      await localStore.clear();
      await client.from("progress").delete().eq("user_id", userId);
    },
  };
}

/* Which account the progress cached in this browser belongs to, so one person's data is never merged into another's. */
const OWNER_KEY = "geekme-owner";
export function cacheOwner(): string | null {
  try {
    return localStorage.getItem(OWNER_KEY);
  } catch {
    return null;
  }
}
export function setCacheOwner(owner: string) {
  try {
    localStorage.setItem(OWNER_KEY, owner);
  } catch {
    /* ignore */
  }
}
