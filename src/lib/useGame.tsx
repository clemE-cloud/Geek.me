import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useAuth } from "./auth";
import { cacheOwner, createCloudStore, setCacheOwner, type CloudStore, type SyncStatus } from "./cloud";
import { today } from "./dates";
import {
  answerDaily,
  answerFocus,
  awardAchievements,
  completeLesson,
  completeReview,
  freshState,
  type Achievement,
} from "./game";
import { mergeStates } from "./merge";
import { localStore, type ProgressStore } from "./storage";
import { supabase } from "./supabase";
import type { GameState, Lesson, QuizItem, Settings } from "./types";

export interface SessionResult {
  gained: number;
  earned: Achievement[];
}

interface GameApi {
  state: GameState;
  ready: boolean;
  store: ProgressStore;
  /** Cloud sync state while signed in; "idle" for guests. */
  sync: SyncStatus;
  answer(kind: "lesson" | "review", correct: boolean): void;
  finishLesson(lesson: Lesson, results: boolean[]): SessionResult;
  finishReview(items: QuizItem[], results: boolean[]): SessionResult;
  finishDaily(correct: boolean): SessionResult;
  updateSettings(patch: Partial<Settings>): void;
  reset(): Promise<void>;
  /** Saves anything pending, signs out and clears this device's copy. */
  signOut(): Promise<void>;
}

const Ctx = createContext<GameApi | null>(null);

const SYNC_RETRY = 20_000;

export function GameProvider({ children }: { children: ReactNode }) {
  const auth = useAuth();
  const [state, setState] = useState<GameState>(freshState);
  const [ready, setReady] = useState(false);
  const [store, setStore] = useState<ProgressStore>(localStore);
  const [sync, setSync] = useState<SyncStatus>("idle");
  const [attempt, setAttempt] = useState(0);
  // Actions read the latest state and store synchronously so they can return results to the caller.
  const ref = useRef(state);
  const storeRef = useRef<ProgressStore>(store);

  const commit = useCallback((next: GameState) => {
    ref.current = next;
    setState(next);
    void storeRef.current.save(next);
  }, []);

  const switchStore = (s: ProgressStore) => {
    storeRef.current = s;
    setStore(s);
  };

  // 1. Start from this device's copy, so the app is usable straight away and offline.
  useEffect(() => {
    let live = true;
    localStore.load().then((saved) => {
      if (!live) return;
      if (saved) {
        ref.current = saved;
        setState(saved);
      }
      setReady(true);
    });
    return () => {
      live = false;
    };
  }, []);

  // 2. When someone is signed in, fetch their account's copy, merge it with this device's, and switch to saving there.
  const userId = auth.user?.id;
  useEffect(() => {
    if (!ready || !userId || !supabase) return;
    let live = true;
    const cloud: CloudStore = createCloudStore(supabase, userId, (s) => live && setSync(s));
    setSync("syncing");
    cloud
      .load()
      .then((remote) => {
        if (!live) return;
        const owner = cacheOwner();
        // Guest progress on this device joins the account; another account's leftovers never do.
        const localIsMine = !owner || owner === "guest" || owner === userId;
        const local = localIsMine ? ref.current : null;
        const next = remote && local ? mergeStates(remote, local) : (remote ?? local ?? freshState());
        setCacheOwner(userId);
        switchStore(cloud);
        commit(next);
      })
      .catch(() => {
        if (!live) return;
        // Offline or server trouble: keep saving on this device and try again shortly.
        setSync("offline");
        setTimeout(() => live && setAttempt((n) => n + 1), SYNC_RETRY);
      });
    return () => {
      live = false;
      void cloud.flush();
    };
  }, [ready, userId, attempt, commit]);

  // Send pending changes before the page is hidden or closed.
  useEffect(() => {
    const flush = () => void (storeRef.current as Partial<CloudStore>).flush?.();
    const onVisibility = () => document.visibilityState === "hidden" && flush();
    window.addEventListener("pagehide", flush);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("pagehide", flush);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const api = useMemo<GameApi>(
    () => ({
      state,
      ready,
      store,
      sync,
      answer(kind, correct) {
        commit(answerFocus(ref.current, kind, correct));
      },
      finishLesson(lesson, results) {
        const t = today();
        const done = completeLesson(ref.current, lesson, results, t);
        const award = awardAchievements(done.state, t);
        commit(award.state);
        return { gained: done.gained, earned: award.earned };
      },
      finishReview(items, results) {
        const t = today();
        const done = completeReview(ref.current, items, results, t);
        const award = awardAchievements(done.state, t);
        commit(award.state);
        return { gained: done.gained, earned: award.earned };
      },
      finishDaily(correct) {
        const t = today();
        const before = ref.current.xp;
        const award = awardAchievements(answerDaily(ref.current, t, correct), t);
        commit(award.state);
        return { gained: award.state.xp - before, earned: award.earned };
      },
      updateSettings(patch) {
        commit({ ...ref.current, settings: { ...ref.current.settings, ...patch } });
      },
      async reset() {
        await storeRef.current.clear();
        commit(freshState());
      },
      async signOut() {
        await (storeRef.current as Partial<CloudStore>).flush?.();
        await auth.signOut();
        await localStore.clear();
        setCacheOwner("guest");
        switchStore(localStore);
        setSync("idle");
        commit(freshState());
      },
    }),
    [state, ready, store, sync, commit, auth],
  );

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useGame(): GameApi {
  const api = useContext(Ctx);
  if (!api) throw new Error("useGame must be used inside <GameProvider>");
  return api;
}
