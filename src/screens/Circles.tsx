import { useCallback, useEffect, useMemo, useState } from "react";
import { ShareButton } from "../components/Actions";
import { Avatar } from "../components/Avatar";
import { useAuth } from "../lib/auth";
import {
  GOALS,
  MAX_MEMBERS,
  circleTotal,
  createCircle,
  deleteCircle,
  inviteText,
  joinCircle,
  loadCircles,
  memberSnapshot,
  memberWeekXp,
  previewCircle,
  pushMember,
  removeMember,
  sortMembers,
  updateCircle,
  weekXp,
  type Circle,
  type CircleKind,
  type CirclePreview,
  type Member,
} from "../lib/circles";
import { addDays, fmt, today, weekDays, weekStart } from "../lib/dates";
import { xpOn } from "../lib/game";
import { go } from "../lib/router";
import { appUrl } from "../lib/share";
import { useGame } from "../lib/useGame";
import type { Profile } from "../lib/types";

/* ---------- data ---------- */

function useCircles() {
  const { user } = useAuth();
  const [data, setData] = useState<{ circles: Circle[]; members: Member[] } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const reload = useCallback(async () => {
    if (!user) return;
    const r = await loadCircles();
    if (r.error) setError(r.error);
    else {
      setError(null);
      setData(r.data);
    }
  }, [user]);

  useEffect(() => {
    void reload();
    const timer = setInterval(() => document.visibilityState === "visible" && void reload(), 30_000);
    return () => clearInterval(timer);
  }, [reload]);

  return { data, error, reload };
}

/** After joining or creating, send the profile's current week straight away so the circle shows it. */
async function announce(userId: string, profiles: Profile[], account: Parameters<typeof memberSnapshot>[0]) {
  const snaps = memberSnapshot(account).filter((s) => profiles.some((p) => p.id === s.profile_id));
  await Promise.all(snaps.map((s) => pushMember(userId, s)));
}

const goalProgress = (c: Circle, members: Member[]) => {
  const total = circleTotal(members.filter((m) => m.circle_id === c.id));
  return { total, pct: Math.min(100, Math.round((total / c.weekly_goal) * 100)), reached: total >= c.weekly_goal };
};

const kindLabel = (k: CircleKind) => (k === "family" ? "Family" : "Friends");

/* ---------- list ---------- */

export function Circles() {
  const { profile, account } = useGame();
  const auth = useAuth();
  const { data, error, reload } = useCircles();
  const child = profile?.kind === "child";
  const mine = useMemo(() => new Set(account.profiles.map((p) => p.id)), [account]);

  if (!auth.available) return <CirclesIntro />;

  if (!auth.user) {
    return (
      <div className="stack">
        <CirclesIntro />
        <section className="card stack-sm">
          {child ? (
            <p className="note">Ask an adult to sign in on their profile and add you to your family's circle.</p>
          ) : (
            <>
              <p className="note">Circles need an account, so the people in your circle can find each other.</p>
              <button className="btn" onClick={() => go("profile")}>
                Sign in to start a circle
              </button>
            </>
          )}
        </section>
        <YouVsLastWeek />
      </div>
    );
  }

  // Circles that include the active profile (a parent also sees circles their children are in).
  const visible = (data?.circles ?? []).filter((c) =>
    data!.members.some(
      (m) =>
        m.circle_id === c.id && m.user_id === auth.user!.id && (child ? m.profile_id === profile?.id : mine.has(m.profile_id)),
    ),
  );

  return (
    <div className="stack">
      <div>
        <h1>Circles</h1>
        <p className="note">Small groups with one shared goal each week.</p>
      </div>
      {error && <p className="note bad-text">{error}</p>}
      {!data && !error && <p className="note">Loading your circles…</p>}

      {visible.map((c) => {
        const g = goalProgress(c, data!.members);
        const count = data!.members.filter((m) => m.circle_id === c.id).length;
        return (
          <button key={c.id} className="card row-card circle-row" onClick={() => go(`circle/${c.id}`)}>
            <div>
              <span className="label">
                {kindLabel(c.kind)} · {count} of {MAX_MEMBERS}
              </span>
              <b>{c.name}</b>
              <div className="bar goal-bar" aria-label={`${g.total} of ${c.weekly_goal} XP this week`}>
                <i style={{ width: `${g.pct}%` }} />
              </div>
              <span className="note">
                {g.total} / {c.weekly_goal} XP this week{g.reached ? " · goal reached" : ""}
              </span>
            </div>
          </button>
        );
      })}

      {data && !visible.length && (
        <section className="card">
          <p className="note">
            {child
              ? "You're not in a circle yet. Ask an adult to add you to your family's circle."
              : "You're not in a circle yet. Start one, or join with a code."}
          </p>
        </section>
      )}

      {!child && data && (
        <>
          <JoinPanel onJoined={(id) => (void reload(), go(`circle/${id}`))} />
          <CreatePanel onCreated={(id) => (void reload(), go(`circle/${id}`))} />
        </>
      )}

      <YouVsLastWeek />
    </div>
  );
}

function CirclesIntro() {
  const { profile } = useGame();
  const child = profile?.kind === "child";
  return (
    <section className="card">
      <span className="label">How circles work</span>
      <ul className="ticks">
        <li>
          {child
            ? "A circle is your family, set up by an adult."
            : "A circle is up to 8 people: friends, or family including children."}
        </li>
        <li>Everyone's XP adds up toward one weekly goal. Reach it together and everyone gets the Better together badge.</li>
        <li>You can show a ranking inside your circle if you want to. Nobody gets moved down a league.</li>
      </ul>
    </section>
  );
}

function CreatePanel({ onCreated }: { onCreated: (id: string) => void }) {
  const { account, profile } = useGame();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [kind, setKind] = useState<CircleKind>(account.profiles.some((p) => p.kind === "child") ? "family" : "friends");
  const [goal, setGoal] = useState(150);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!open) {
    return (
      <button className="btn ghost" onClick={() => setOpen(true)}>
        Start a circle
      </button>
    );
  }
  return (
    <section className="card stack-sm">
      <span className="label">Start a circle</span>
      <form
        className="stack-sm"
        onSubmit={async (e) => {
          e.preventDefault();
          if (!profile || !user) return;
          setBusy(true);
          const r = await createCircle(name, kind, goal, profile);
          if (r.data) await announce(user.id, [profile], account);
          setBusy(false);
          if (r.data) onCreated(r.data.id);
          else setError(r.error);
        }}
      >
        <label className="field">
          <span className="label">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={40}
            placeholder={kind === "family" ? "The Smith family" : "Book club"}
          />
        </label>
        <div className="choices grid" role="radiogroup" aria-label="Kind of circle">
          {(["friends", "family"] as const).map((k) => (
            <button type="button" key={k} role="radio" aria-checked={kind === k} className="choice" onClick={() => setKind(k)}>
              <b>{kindLabel(k)}</b>
            </button>
          ))}
        </div>
        <p className="note">
          {kind === "family" ? "Adults and children. You can add your children once it's set up." : "Adults only (16 and up)."}
        </p>
        <label className="field">
          <span className="label">Weekly goal for the whole circle</span>
          <select value={goal} onChange={(e) => setGoal(Number(e.target.value))}>
            {GOALS.map((g) => (
              <option key={g} value={g}>
                {g} XP
              </option>
            ))}
          </select>
          <span className="note">A lesson is worth 10 to 25 XP. 150 suits about four people doing a few lessons each.</span>
        </label>
        {error && <p className="note bad-text">{error}</p>}
        <div className="row">
          <button className="btn" disabled={busy || !name.trim()}>
            {busy ? "Starting…" : "Start circle"}
          </button>
          <button type="button" className="btn ghost" onClick={() => setOpen(false)}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

/** Enter a code, see what it is, and choose which of your profiles join. */
function JoinPanel({ initialCode = "", onJoined }: { initialCode?: string; onJoined: (id: string) => void }) {
  const { account } = useGame();
  const { user } = useAuth();
  const [open, setOpen] = useState(!!initialCode);
  const [code, setCode] = useState(initialCode);
  const [preview, setPreview] = useState<CirclePreview | null>(null);
  const [chosen, setChosen] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const self = account.profiles.find((p) => p.kind === "self");
  const children = account.profiles.filter((p) => p.kind === "child");

  const lookUp = useCallback(
    async (c: string) => {
      setBusy(true);
      setError(null);
      const r = await previewCircle(c);
      setBusy(false);
      if (r.error) setError(r.error);
      else if (!r.data) setError("No circle has that code. Check it and try again.");
      else {
        setPreview(r.data);
        setChosen(self ? [self.id] : []);
      }
    },
    [self],
  );

  useEffect(() => {
    if (initialCode) void lookUp(initialCode);
  }, [initialCode, lookUp]);

  if (!open) {
    return (
      <button className="btn ghost" onClick={() => setOpen(true)}>
        Join with a code
      </button>
    );
  }

  const options = preview?.kind === "family" ? [self, ...children].filter((p): p is Profile => !!p) : self ? [self] : [];
  const room = preview ? MAX_MEMBERS - preview.members : 0;

  return (
    <section className="card stack-sm">
      <span className="label">Join a circle</span>
      {!preview ? (
        <form
          className="stack-sm"
          onSubmit={(e) => {
            e.preventDefault();
            void lookUp(code);
          }}
        >
          <label className="field">
            <span className="label">Invite code</span>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""))}
              maxLength={6}
              placeholder="ABC123"
              autoCapitalize="characters"
              autoComplete="off"
              className="mono"
            />
          </label>
          {error && <p className="note bad-text">{error}</p>}
          <div className="row">
            <button className="btn" disabled={busy || code.length !== 6}>
              {busy ? "Looking…" : "Find circle"}
            </button>
            {!initialCode && (
              <button type="button" className="btn ghost" onClick={() => setOpen(false)}>
                Cancel
              </button>
            )}
          </div>
        </form>
      ) : (
        <form
          className="stack-sm"
          onSubmit={async (e) => {
            e.preventDefault();
            if (!user) return;
            setBusy(true);
            setError(null);
            let joined: string | null = null;
            const who = account.profiles.filter((p) => chosen.includes(p.id));
            for (const p of who) {
              const r = await joinCircle(code, p);
              if (r.error) {
                setError(r.error);
                break;
              }
              joined = r.data;
            }
            if (joined) await announce(user.id, who, account);
            setBusy(false);
            if (joined) onJoined(joined);
          }}
        >
          <h2>{preview.name}</h2>
          <p className="note">
            {kindLabel(preview.kind)} circle · {preview.members} of {MAX_MEMBERS} people
          </p>
          {room <= 0 ? (
            <p className="note bad-text">This circle is full.</p>
          ) : (
            <>
              <span className="label">Who's joining?</span>
              {options.map((p) => (
                <label key={p.id} className="check-row">
                  <input
                    type="checkbox"
                    checked={chosen.includes(p.id)}
                    onChange={(e) => setChosen(e.target.checked ? [...chosen, p.id] : chosen.filter((x) => x !== p.id))}
                  />
                  <Avatar settings={p.state.settings} size={28} />
                  {p.state.settings.name || "Me"}
                  {p.kind === "child" && <span className="note"> (child)</span>}
                </label>
              ))}
              {preview.kind === "friends" && children.length > 0 && (
                <p className="note small-note">Children can only join family circles.</p>
              )}
              {chosen.length > room && <p className="note bad-text">Only {room} more can join this circle.</p>}
            </>
          )}
          {error && <p className="note bad-text">{error}</p>}
          <div className="row">
            <button className="btn" disabled={busy || !chosen.length || chosen.length > room}>
              {busy ? "Joining…" : "Join circle"}
            </button>
            <button type="button" className="btn ghost" onClick={() => (setPreview(null), setError(null))}>
              Back
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

/* ---------- one circle ---------- */

const RANK_KEY = "geekme-show-ranking";
const readRanked = () => {
  try {
    return localStorage.getItem(RANK_KEY) === "1";
  } catch {
    return false;
  }
};

export function CircleView({ id }: { id: string }) {
  const { account, profile, markCircleWin } = useGame();
  const auth = useAuth();
  const { data, error, reload } = useCircles();
  const [ranked, setRanked] = useState(readRanked);
  const [busy, setBusy] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [editing, setEditing] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const child = profile?.kind === "child";

  const circle = data?.circles.find((c) => c.id === id);
  const members = useMemo(() => (data?.members ?? []).filter((m) => m.circle_id === id), [data, id]);
  const userId = auth.user?.id;
  const myRows = members.filter((m) => m.user_id === userId);
  const g = circle ? goalProgress(circle, members) : null;
  const owner = !!circle && circle.owner === userId && !child;

  // Reaching the goal earns everyone on this account in the circle the badge (once per week per circle).
  useEffect(() => {
    if (circle && g?.reached && myRows.length)
      markCircleWin(
        myRows.map((m) => m.profile_id),
        `${circle.id}:${weekStart(today())}`,
      );
  }, [circle, g?.reached, myRows, markCircleWin]);

  if (!auth.user) {
    go("circles");
    return null;
  }
  if (error) return <p className="note bad-text">{error}</p>;
  if (!data) return <p className="note">Loading…</p>;
  if (!circle) {
    return (
      <div className="stack">
        <h1>Circle not found</h1>
        <p className="note">You may have left it, or it was removed.</p>
        <button className="btn" onClick={() => go("circles")}>
          Back to circles
        </button>
      </div>
    );
  }

  const act = async (fn: () => Promise<{ error: string | null }>) => {
    setBusy(true);
    setActionError(null);
    const r = await fn();
    setBusy(false);
    if (r.error) setActionError(r.error);
    await reload();
  };

  const toggleRanked = () => {
    const next = !ranked;
    setRanked(next);
    try {
      localStorage.setItem(RANK_KEY, next ? "1" : "0");
    } catch {
      /* ignore */
    }
  };

  const sorted = sortMembers(members, ranked);
  const childrenNotIn = account.profiles.filter((p) => p.kind === "child" && !myRows.some((m) => m.profile_id === p.id));
  const leaveRow = myRows.find((m) => m.profile_id === profile?.id);
  const full = members.length >= MAX_MEMBERS;

  return (
    <div className="stack">
      <button className="icon-btn" onClick={() => go("circles")} aria-label="Back to circles">
        ←
      </button>
      <div>
        <span className="label">
          {kindLabel(circle.kind)} circle · {members.length} of {MAX_MEMBERS}
        </span>
        <h1>{circle.name}</h1>
      </div>

      <section className="card stack-sm">
        <span className="label">This week's goal</span>
        <div className="goal-line">
          <b className="big">{g!.total}</b>
          <span className="note">/ {circle.weekly_goal} XP</span>
        </div>
        <div className="bar goal-bar big-bar" role="progressbar" aria-valuenow={g!.pct} aria-valuemin={0} aria-valuemax={100}>
          <i style={{ width: `${g!.pct}%` }} />
        </div>
        <p className="note">
          {g!.reached
            ? "Goal reached. Everyone in the circle gets the Better together badge."
            : `${circle.weekly_goal - g!.total} XP to go. Resets on Monday.`}
        </p>
      </section>

      <section className="card stack-sm">
        <div className="meta">
          <span className="label">Members</span>
          <label className="check-row small">
            <input type="checkbox" checked={ranked} onChange={toggleRanked} /> Show ranking
          </label>
        </div>
        <ol className="member-list">
          {sorted.map((m, i) => {
            const yours = m.user_id === userId;
            return (
              <li key={`${m.user_id}:${m.profile_id}`}>
                {ranked && <span className="rank mono">{i + 1}</span>}
                <Avatar settings={{ name: m.display_name, avatar: m.avatar }} size={36} />
                <span className="member-name">
                  {m.display_name}
                  {yours && m.profile_id === profile?.id && <span className="note"> (you)</span>}
                  {m.is_child && <span className="note"> · child</span>}
                  {m.user_id === circle.owner && !m.is_child && <span className="note"> · started it</span>}
                </span>
                <span className="mono">{memberWeekXp(m)} XP</span>
                {owner && !yours && (
                  <button className="link-btn small" disabled={busy} onClick={() => act(() => removeMember(m))}>
                    Remove
                  </button>
                )}
                {!child && yours && m.is_child && (
                  <button className="link-btn small" disabled={busy} onClick={() => act(() => removeMember(m))}>
                    Take out
                  </button>
                )}
              </li>
            );
          })}
        </ol>
      </section>

      {actionError && <p className="note bad-text">{actionError}</p>}

      {!child && !full && (
        <section className="card stack-sm">
          <span className="label">Invite people</span>
          <p className="note">
            Share the code <b className="mono invite-code">{circle.code}</b> or a link.{" "}
            {circle.kind === "family"
              ? "Adults join with their own account, and parents can add their children."
              : "Friends circles are for ages 16 and up."}
          </p>
          <ShareButton text={inviteText(circle)} url={`${appUrl()}#/join/${circle.code}`} label="Share invite" />
        </section>
      )}

      {!child && circle.kind === "family" && childrenNotIn.length > 0 && !full && (
        <section className="card stack-sm">
          <span className="label">Add your children</span>
          {childrenNotIn.map((p) => (
            <div key={p.id} className="check-row">
              <Avatar settings={p.state.settings} size={28} />
              <span className="member-name">{p.state.settings.name}</span>
              <button
                className="btn ghost small-btn"
                disabled={busy}
                onClick={() =>
                  act(async () => {
                    const r = await joinCircle(circle.code, p);
                    if (!r.error && userId) await announce(userId, [p], account);
                    return r;
                  })
                }
              >
                Add
              </button>
            </div>
          ))}
        </section>
      )}

      {owner && (
        <section className="card stack-sm">
          <span className="label">Circle settings</span>
          {editing ? (
            <CircleSettingsForm
              circle={circle}
              busy={busy}
              onSave={(patch) => act(() => updateCircle(circle.id, patch)).then(() => setEditing(false))}
              onCancel={() => setEditing(false)}
            />
          ) : (
            <button className="btn ghost" onClick={() => setEditing(true)}>
              Change name or goal
            </button>
          )}
          {confirmDelete ? (
            <div className="row">
              <button
                className="btn danger"
                disabled={busy}
                onClick={() => act(() => deleteCircle(circle.id)).then(() => go("circles"))}
              >
                Yes, close it for everyone
              </button>
              <button className="btn ghost" onClick={() => setConfirmDelete(false)}>
                Cancel
              </button>
            </div>
          ) : (
            <button className="btn ghost" onClick={() => setConfirmDelete(true)}>
              Close this circle
            </button>
          )}
        </section>
      )}

      {!child && leaveRow && !owner && (
        <button className="btn ghost" disabled={busy} onClick={() => act(() => removeMember(leaveRow)).then(() => go("circles"))}>
          Leave circle
        </button>
      )}
    </div>
  );
}

function CircleSettingsForm({
  circle,
  busy,
  onSave,
  onCancel,
}: {
  circle: Circle;
  busy: boolean;
  onSave: (patch: { name: string; weekly_goal: number }) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(circle.name);
  const [goal, setGoal] = useState(circle.weekly_goal);
  const goals = GOALS.includes(goal) ? GOALS : [...GOALS, goal].sort((a, b) => a - b);
  return (
    <form
      className="stack-sm"
      onSubmit={(e) => {
        e.preventDefault();
        onSave({ name: name.trim(), weekly_goal: goal });
      }}
    >
      <label className="field">
        <span className="label">Name</span>
        <input value={name} onChange={(e) => setName(e.target.value)} maxLength={40} />
      </label>
      <label className="field">
        <span className="label">Weekly goal</span>
        <select value={goal} onChange={(e) => setGoal(Number(e.target.value))}>
          {goals.map((g) => (
            <option key={g} value={g}>
              {g} XP
            </option>
          ))}
        </select>
      </label>
      <div className="row">
        <button className="btn" disabled={busy || !name.trim()}>
          Save
        </button>
        <button type="button" className="btn ghost" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

/* ---------- join link ---------- */

export function JoinCircle({ code }: { code: string }) {
  const { profile } = useGame();
  const auth = useAuth();
  const clean = code
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 6);

  if (profile?.kind === "child") {
    return (
      <div className="stack">
        <h1>Join a circle</h1>
        <p className="note">Ask an adult to open this invite on their profile. They can add you to the circle.</p>
      </div>
    );
  }
  if (!auth.user) {
    return (
      <div className="stack">
        <h1>You're invited to a circle</h1>
        <p className="note">
          Sign in first, then open the invite again. Your invite code is <b className="mono">{clean}</b>.
        </p>
        <button className="btn" onClick={() => go("profile")}>
          Sign in
        </button>
      </div>
    );
  }
  return (
    <div className="stack">
      <h1>Join a circle</h1>
      <JoinPanel initialCode={clean} onJoined={(id) => go(`circle/${id}`)} />
    </div>
  );
}

/* ---------- personal comparison ---------- */

function YouVsLastWeek() {
  const { state } = useGame();
  const t = today();
  const days = weekDays(t);
  const thisWeek = weekXp(state, t);
  const lastWeek = weekXp(state, addDays(t, -7));
  const max = Math.max(1, ...days.map((d) => xpOn(state, d)));
  return (
    <section className="card">
      <div className="meta">
        <span className="label">You vs. last week</span>
        <span className="label mono">
          {thisWeek} / {lastWeek} XP
        </span>
      </div>
      <h2>
        {thisWeek > lastWeek
          ? `Ahead by ${thisWeek - lastWeek} XP`
          : thisWeek === lastWeek
            ? thisWeek
              ? "Level with last week"
              : "A fresh week"
            : `${lastWeek - thisWeek} XP to match last week`}
      </h2>
      <div className="week-bars" aria-label="XP each day this week">
        {days.map((d) => (
          <div key={d} className={d === t ? "today" : ""}>
            <span className="mono small">{xpOn(state, d) || ""}</span>
            <i style={{ height: `${Math.round((xpOn(state, d) / max) * 64)}px` }} />
            <span className="label">{fmt(d, { weekday: "narrow" })}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
