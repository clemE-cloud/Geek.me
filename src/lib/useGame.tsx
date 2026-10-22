import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { today } from "./dates";
import { answerDaily, answerFocus, awardAchievements, completeLesson, completeReview, freshState, type Achievement } from "./game";
import { localStore, type ProgressStore } from "./storage";
import type { GameState, Lesson, QuizItem, Settings } from "./types";

export interface SessionResult {
  gained: number;
  earned: Achievement[];
}

interface GameApi {
  state: GameState;
  ready: boolean;
  store: ProgressStore;
  answer(kind: "lesson" | "review", correct: boolean): void;
  finishLesson(lesson: Lesson, results: boolean[]): SessionResult;
  finishReview(items: QuizItem[], results: boolean[]): SessionResult;
  finishDaily(correct: boolean): SessionResult;
  updateSettings(patch: Partial<Settings>): void;
  reset(): Promise<void>;
}

const Ctx = createContext<GameApi | null>(null);

export function GameProvider({ children, store = localStore }: { children: ReactNode; store?: ProgressStore }) {
  const [state, setState] = useState<GameState>(freshState);
  const [ready, setReady] = useState(false);
  // Actions read the latest state synchronously so they can return results to the caller.
  const ref = useRef(state);

  const commit = useCallback(
    (next: GameState) => {
      ref.current = next;
      setState(next);
      void store.save(next);
    },
    [store],
  );

  useEffect(() => {
    let live = true;
    store.load().then((saved) => {
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
  }, [store]);

  const api = useMemo<GameApi>(
    () => ({
      state,
      ready,
      store,
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
        await store.clear();
        commit(freshState());
      },
    }),
    [state, ready, store, commit],
  );

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useGame(): GameApi {
  const api = useContext(Ctx);
  if (!api) throw new Error("useGame must be used inside <GameProvider>");
  return api;
}
