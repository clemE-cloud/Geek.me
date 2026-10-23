import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { emptyAccount, mergeAccounts } from "./account";
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
  startBreak,
  endBreak as endBreakOn,
} from "./game";
import { localStore, type ProgressStore } from "./storage";
import { supabase } from "./supabase";
import type { Account, GameState, Lesson, Profile, QuizItem, Settings } from "./types";

export interface SessionResult {
  gained: number;
  earned: Achievement[];
}

interface GameApi {
  /** The active profile's progress. All lesson and review screens work on this. */
  state: GameState;
  account: Account;
  profile: Profile | null;
  /** True when several people share this account and nobody has been picked in this visit yet. */
  needsPicker: boolean;
  ready: boolean;
  store: ProgressStore;
  /** Cloud sync state while signed in; "idle" for guests. */
  sync: SyncStatus;
  answer(kind: "lesson" | "review", correct: boolean): void;
  finishLesson(lesson: Lesson, results: boolean[]): SessionResult;
  finishReview(items: QuizItem[], results: boolean[]): SessionResult;
  finishDaily(correct: boolean): SessionResult;
  updateSettings(patch: Partial<Settings>): void;
  /** Changes another profile's settings, e.g. a parent updating a child's age. */
  updateProfileSettings(id: string, patch: Partial<Settings>): void;
  /** Clears the active profile's progress but keeps its name and settings. */
  reset(): Promise<void>;
  /** Replaces the account during onboarding, before sign-up is offered. */
  setupAccount(type: Account["type"], profiles: Profile[]): void;
  finishSetup(): void;
  chooseProfile(id: string): void;
  /** Goes back to "Who's learning?". */
  showPicker(): void;
  addProfile(profile: Profile): void;
  removeProfile(id: string): void;
  /** Saves anything pending, signs out and clears this device's copy. */
  signOut(): Promise<void>;
  /** Deletes the account (if signed in) and everything stored on this device. Returns an error message, or null. */
  deleteEverything(): Promise<string | null>;
  /** Starts a break for the active profile; `until` is the last day, or null for "until I resume". */
  takeBreak(until: string | null): void;
  endBreak(): void;
  /** Records a reached circle goal for these profiles (any on this account) and awards the badge. */
  markCircleWin(profileIds: string[], key: string): void;
}

const Ctx = createContext<GameApi | null>(null);

const SYNC_RETRY = 20_000;
/** The profile last used on this device (kept across visits). */
const ACTIVE_KEY = "geekme-active";
/** Set once someone picks a profile in this browser session, so a shared device asks "Who's learning?" on each new visit. */
const PICKED_KEY = "geekme-picked";

const read = (where: () => Storage, key: string) => {
  try {
    return where().getItem(key);
  } catch {
    return null;
  }
};
const write = (where: () => Storage, key: string, value: string | null) => {
  try {
    if (value === null) where().removeItem(key);
    else where().setItem(key, value);
  } catch {
    /* ignore */
  }
};
const local = () => localStorage;
const session = () => sessionStorage;

const profileOf = (a: Account, id: string | null) => a.profiles.find((p) => p.id === id) ?? a.profiles[0] ?? null;

export function GameProvider({ children }: { children: ReactNode }) {
  const auth = useAuth();
  const [account, setAccount] = useState<Account>(emptyAccount);
  const [activeId, setActiveId] = useState<string | null>(() => read(local, ACTIVE_KEY));
  const [picked, setPicked] = useState(() => !!read(session, PICKED_KEY));
  const [ready, setReady] = useState(false);
  const [store, setStore] = useState<ProgressStore>(localStore);
  const [sync, setSync] = useState<SyncStatus>("idle");
  const [attempt, setAttempt] = useState(0);
  // Actions read the latest values synchronously so they can return results to the caller.
  const accountRef = useRef(account);
  const activeRef = useRef(activeId);
  const storeRef = useRef<ProgressStore>(store);

  const profile = profileOf(account, activeId);
  const state = profile?.state ?? freshState();

  const commitAccount = useCallback((next: Account) => {
    accountRef.current = next;
    setAccount(next);
    void storeRef.current.save(next);
  }, []);

  /** Updates the active profile's progress. */
  const commit = useCallback(
    (next: GameState) => {
      const a = accountRef.current;
      const p = profileOf(a, activeRef.current);
      if (p) commitAccount({ ...a, profiles: a.profiles.map((x) => (x.id === p.id ? { ...x, state: next } : x)) });
    },
    [commitAccount],
  );

  const switchStore = (s: ProgressStore) => {
    storeRef.current = s;
    setStore(s);
  };

  const choose = useCallback((id: string | null) => {
    activeRef.current = id;
    setActiveId(id);
    write(local, ACTIVE_KEY, id);
  }, []);

  // 1. Start from this device's copy, so the app is usable straight away and offline.
  useEffect(() => {
    let live = true;
    localStore.load().then((saved) => {
      if (!live) return;
      if (saved) {
        accountRef.current = saved;
        setAccount(saved);
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
        // A guest set-up on this device joins the account; another account's leftovers never do.
        const localIsMine = !owner || owner === "guest" || owner === userId;
        const mine = localIsMine && accountRef.current.profiles.length ? accountRef.current : null;
        const next = remote && mine ? mergeAccounts(remote, mine) : (remote ?? mine ?? emptyAccount());
        setCacheOwner(userId);
        switchStore(cloud);
        commitAccount(next);
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
  }, [ready, userId, attempt, commitAccount]);

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

  /** Clears this device's copy and returns to a fresh guest start. */
  const forgetDevice = useCallback(async () => {
    await localStore.clear();
    setCacheOwner("guest");
    switchStore(localStore);
    setSync("idle");
    choose(null);
    write(session, PICKED_KEY, null);
    setPicked(false);
    commitAccount(emptyAccount());
  }, [choose, commitAccount]);

  const api = useMemo<GameApi>(() => {
    // Read through refs so an action always works on the latest progress, even right after another action.
    const current = () => profileOf(accountRef.current, activeRef.current)?.state ?? freshState();
    return {
      state,
      account,
      profile,
      needsPicker: account.setupDone && account.profiles.length > 1 && !picked,
      ready,
      store,
      sync,
      answer(kind, correct) {
        commit(answerFocus(current(), kind, correct));
      },
      finishLesson(lesson, results) {
        const t = today();
        const done = completeLesson(current(), lesson, results, t);
        const award = awardAchievements(done.state, t);
        commit(award.state);
        return { gained: done.gained, earned: award.earned };
      },
      finishReview(items, results) {
        const t = today();
        const done = completeReview(current(), items, results, t);
        const award = awardAchievements(done.state, t);
        commit(award.state);
        return { gained: done.gained, earned: award.earned };
      },
      finishDaily(correct) {
        const t = today();
        const before = current().xp;
        const award = awardAchievements(answerDaily(current(), t, correct), t);
        commit(award.state);
        return { gained: award.state.xp - before, earned: award.earned };
      },
      updateSettings(patch) {
        const s = current();
        commit({ ...s, settings: { ...s.settings, ...patch } });
      },
      updateProfileSettings(id, patch) {
        const a = accountRef.current;
        commitAccount({
          ...a,
          profiles: a.profiles.map((x) =>
            x.id === id ? { ...x, state: { ...x.state, settings: { ...x.state.settings, ...patch } } } : x,
          ),
        });
      },
      async reset() {
        commit({ ...freshState(), settings: current().settings });
      },
      setupAccount(type, profiles) {
        commitAccount({ ...accountRef.current, type, profiles, setupDone: false });
        choose(profiles[0]?.id ?? null);
      },
      finishSetup() {
        commitAccount({ ...accountRef.current, setupDone: true });
        // On a family account, start at "Who's learning?".
        write(session, PICKED_KEY, null);
        setPicked(false);
      },
      chooseProfile(id) {
        choose(id);
        write(session, PICKED_KEY, "1");
        setPicked(true);
      },
      showPicker() {
        write(session, PICKED_KEY, null);
        setPicked(false);
      },
      addProfile(p) {
        commitAccount({ ...accountRef.current, type: "parent", profiles: [...accountRef.current.profiles, p] });
      },
      markCircleWin(profileIds, key) {
        const a = accountRef.current;
        let changed = false;
        const profiles = a.profiles.map((p) => {
          if (!profileIds.includes(p.id) || (p.state.circleWins ?? []).includes(key)) return p;
          changed = true;
          const withWin = { ...p.state, circleWins: [...(p.state.circleWins ?? []), key] };
          return { ...p, state: awardAchievements(withWin, today()).state };
        });
        if (changed) commitAccount({ ...a, profiles });
      },
      removeProfile(id) {
        const a = accountRef.current;
        commitAccount({ ...a, profiles: a.profiles.filter((p) => p.id !== id) });
        if (activeRef.current === id) choose(a.profiles.find((p) => p.kind === "self")?.id ?? null);
      },
      async signOut() {
        await (storeRef.current as Partial<CloudStore>).flush?.();
        await auth.signOut();
        await forgetDevice();
      },
      async deleteEverything() {
        if (auth.user) {
          const err = await auth.deleteAccount();
          if (err) return err;
        }
        await forgetDevice();
        return null;
      },
      takeBreak(until) {
        commit(startBreak(current(), today(), until));
      },
      endBreak() {
        commit(endBreakOn(current(), today()));
      },
    };
  }, [state, account, profile, picked, ready, store, sync, commit, commitAccount, choose, auth, forgetDevice]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useGame(): GameApi {
  const api = useContext(Ctx);
  if (!api) throw new Error("useGame must be used inside <GameProvider>");
  return api;
}
