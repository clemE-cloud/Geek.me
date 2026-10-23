import { useEffect, useRef } from "react";
import { useAuth } from "../lib/auth";
import { memberSnapshot, pushMember } from "../lib/circles";
import { useGame } from "../lib/useGame";

const DELAY = 3000;

/**
 * Keeps this account's circle rows up to date: each profile's XP for the week, name and picture.
 * Runs a few seconds after progress changes, and only sends what changed since the last send.
 */
export function CircleSync() {
  const { account } = useGame();
  const { user } = useAuth();
  const sent = useRef(new Map<string, string>());

  useEffect(() => {
    if (!user || !account.setupDone) return;
    const timer = setTimeout(async () => {
      for (const snap of memberSnapshot(account)) {
        const key = JSON.stringify(snap);
        if (sent.current.get(snap.profile_id) === key) continue;
        if (await pushMember(user.id, snap)) sent.current.set(snap.profile_id, key);
      }
    }, DELAY);
    return () => clearTimeout(timer);
  }, [account, user]);

  // A different account starts with a clean slate.
  useEffect(() => sent.current.clear(), [user?.id]);

  return null;
}
