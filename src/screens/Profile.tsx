import { useState } from "react";
import { AccountCard } from "../components/Account";
import { AVATARS, Avatar } from "../components/Avatar";
import { FamilySection } from "../components/Family";
import { ReminderSettings } from "../components/Reminders";
import { LESSONS } from "../data/lessons";
import { useAuth } from "../lib/auth";
import { SELF_AGES, defaultsForAge } from "../lib/content";
import { addDays, fmt, today } from "../lib/dates";
import { breakOn, rhythmWeeks } from "../lib/game";
import { go } from "../lib/router";
import { useGame } from "../lib/useGame";
import type { AgeBand, Level, Look, TextSize } from "../lib/types";

const BREAKS = [
  { label: "1 week", days: 7 },
  { label: "2 weeks", days: 14 },
  { label: "1 month", days: 30 },
  { label: "Until I resume", days: null },
];

const longDate = (d: string) => fmt(d, { day: "numeric", month: "long", year: "numeric" });

export function Profile() {
  const { state, account, profile, updateSettings, showPicker } = useGame();
  const auth = useAuth();
  const child = profile?.kind === "child";
  const shared = account.profiles.length > 1;
  const parentName = account.profiles.find((p) => p.kind === "self")?.state.settings.name;
  const { name } = state.settings;
  const memberSince = auth.user?.created_at?.slice(0, 10);

  return (
    <div className="stack">
      <section className="card profile-head">
        <Avatar settings={state.settings} size={64} />
        <div>
          <h2>{name || "You"}</h2>
          <span className="note">
            {child
              ? `Profile on ${parentName ? `${parentName}'s` : "a parent's"} account`
              : auth.user
                ? auth.user.email
                : "Guest: saved on this device only"}
          </span>
          {!child && <span className="label">{memberSince ? `Member since ${longDate(memberSince)} · ` : ""}Free plan</span>}
        </div>
      </section>

      {shared && (
        // Back to "Who's learning?". Opening the parent's profile from there asks for the adult check.
        <button className="btn ghost" onClick={showPicker}>
          Switch profile
        </button>
      )}

      <section className="card tiles">
        <div>
          <b className="big">{state.xp}</b>
          <span className="label">XP</span>
        </div>
        <div>
          <b className="big">
            {Object.keys(state.learned).length}/{LESSONS.length}
          </b>
          <span className="label">Lessons</span>
        </div>
        <div>
          <b className="big">{rhythmWeeks(state, today())}</b>
          <span className="label">Weeks in a row</span>
        </div>
      </section>

      <h3 className="section-title label">Profile</h3>
      <section className="card stack-sm">
        {!child && (
          <label className="field">
            <span className="label">Name</span>
            <input value={name} maxLength={40} onChange={(e) => updateSettings({ name: e.target.value })} />
          </label>
        )}
        <span className="label">Picture</span>
        <div className="avatar-grid" role="radiogroup" aria-label="Profile picture">
          {AVATARS.map((a) => (
            <button
              key={a}
              role="radio"
              aria-pressed={state.settings.avatar === a}
              aria-checked={state.settings.avatar === a}
              onClick={() => updateSettings({ avatar: a })}
            >
              {a}
            </button>
          ))}
        </div>
        {state.settings.avatar && (
          <button className="link-btn" onClick={() => updateSettings({ avatar: "" })}>
            Use my first letter instead
          </button>
        )}
      </section>

      <ReminderSettings />

      <BreakCard />

      <h3 className="section-title label">Learning</h3>
      <LearningSettings child={child} />

      {!child && (
        <>
          <FamilySection />

          <AccountCard />
          {auth.user && <ChangeEmail />}

          <h3 className="section-title label">Your data</h3>
          <DataCard />
        </>
      )}

      <button className="link-btn" onClick={() => go("privacy")}>
        Privacy: what we store and why
      </button>
    </div>
  );
}

/** Take a break: missed weeks during it don't end the weeks-in-a-row run. */
function BreakCard() {
  const { state, takeBreak, endBreak } = useGame();
  const t = today();
  const current = breakOn(state, t);
  return (
    <section className="card stack-sm">
      <span className="label">Take a break</span>
      {current ? (
        <>
          <h2>You're on a break</h2>
          <p className="note">
            {current.end ? `Until ${longDate(current.end)}.` : "Until you resume."} Your weeks in a row are safe while you're
            away, and you can still do lessons whenever you like.
          </p>
          <button className="btn" onClick={endBreak}>
            Resume now
          </button>
        </>
      ) : (
        <>
          <p className="note">Going on holiday or having a busy patch? Pause so missed weeks don't end your run.</p>
          <div className="row">
            {BREAKS.map((b) => (
              <button
                key={b.label}
                className="btn ghost small-btn"
                onClick={() => takeBreak(b.days === null ? null : addDays(t, b.days - 1))}
              >
                {b.label}
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function LearningSettings({ child }: { child: boolean }) {
  const { state, updateSettings } = useGame();
  const { age, level, look, textSize, daysPerWeek, dailyGoal } = state.settings;
  return (
    <section className="card stack-sm">
      {!child && (
        <>
          <label className="field">
            <span className="label">Age</span>
            <select
              value={age ?? ""}
              onChange={(e) => {
                const band = e.target.value as AgeBand;
                updateSettings({ age: band, ...defaultsForAge(band) });
              }}
            >
              {(!age || !SELF_AGES.some((a) => a.band === age)) && <option value="">Not set</option>}
              {SELF_AGES.map((a) => (
                <option key={a.band} value={a.band}>
                  {a.label}
                </option>
              ))}
            </select>
            <span className="note">Changing your age also resets the lessons, look and text size below.</span>
          </label>
          <label className="field">
            <span className="label">Lessons</span>
            <select value={level} onChange={(e) => updateSettings({ level: e.target.value as Level })}>
              <option value="young">Simpler (about ages 6–12)</option>
              <option value="standard">Standard</option>
            </select>
          </label>
        </>
      )}
      <label className="field">
        <span className="label">Look</span>
        <select value={look} onChange={(e) => updateSettings({ look: e.target.value as Look })}>
          <option value="calm">Calm (follows your device's light or dark mode)</option>
          <option value="bright">Bright</option>
        </select>
      </label>
      <label className="field">
        <span className="label">Text size</span>
        <select value={textSize} onChange={(e) => updateSettings({ textSize: e.target.value as TextSize })}>
          <option value="normal">Normal</option>
          <option value="large">Large</option>
        </select>
      </label>
      <label className="field">
        <span className="label">Days per week</span>
        <select value={daysPerWeek} onChange={(e) => updateSettings({ daysPerWeek: Number(e.target.value) })}>
          {[2, 3, 4, 5, 6, 7].map((n) => (
            <option key={n} value={n}>
              {n === 7 ? "Every day" : `${n} days a week`}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span className="label">Daily goal</span>
        <select value={dailyGoal} onChange={(e) => updateSettings({ dailyGoal: Number(e.target.value) })}>
          {[15, 30, 50, 80].map((n) => (
            <option key={n} value={n}>
              {n} XP
            </option>
          ))}
        </select>
      </label>
    </section>
  );
}

function ChangeEmail() {
  const auth = useAuth();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  if (!open) {
    return (
      <button className="btn ghost" onClick={() => setOpen(true)}>
        Change email address
      </button>
    );
  }
  return (
    <section className="card stack-sm">
      <span className="label">Change email address</span>
      <form
        className="stack-sm"
        onSubmit={async (e) => {
          e.preventDefault();
          setBusy(true);
          const err = await auth.changeEmail(email.trim());
          setBusy(false);
          setMsg(
            err
              ? { ok: false, text: err }
              : { ok: true, text: `We've sent a confirmation link to ${email.trim()}. The change happens once you open it.` },
          );
        }}
      >
        <label className="field">
          <span className="label">New email</span>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        </label>
        {msg && <p className={`note ${msg.ok ? "" : "bad-text"}`}>{msg.text}</p>}
        <div className="row">
          <button className="btn" disabled={busy || !email.includes("@")}>
            {busy ? "Sending…" : "Send confirmation"}
          </button>
          <button type="button" className="btn ghost" onClick={() => (setOpen(false), setMsg(null))}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

function DataCard() {
  const { account, reset, deleteEverything } = useGame();
  const auth = useAuth();
  const [confirmReset, setConfirmReset] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [typed, setTyped] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const shared = account.profiles.length > 1;
  const family = account.profiles.some((p) => p.kind === "child");

  const download = () => {
    const blob = new Blob([JSON.stringify(account, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `geekme-data-${today()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <>
      <section className="card stack-sm">
        <button className="btn ghost" onClick={download}>
          Download {shared ? "our" : "my"} data
        </button>
        {confirmReset ? (
          <div className="row">
            <button
              className="btn danger"
              onClick={async () => {
                await reset();
                setConfirmReset(false);
                go("today");
              }}
            >
              Yes, start my lessons over
            </button>
            <button className="btn ghost" onClick={() => setConfirmReset(false)}>
              Cancel
            </button>
          </div>
        ) : (
          <button className="btn ghost" onClick={() => setConfirmReset(true)}>
            Start my lessons over
          </button>
        )}
        {shared && <p className="note small-note">Starting over only clears your own progress, not your children's.</p>}
      </section>

      <section className="card stack-sm danger-zone">
        <span className="label bad-text">{auth.user ? "Delete account" : "Delete data on this device"}</span>
        {!deleting ? (
          <button className="btn ghost" onClick={() => setDeleting(true)}>
            {auth.user ? "Delete my account" : "Delete everything on this device"}
          </button>
        ) : (
          <form
            className="stack-sm"
            onSubmit={async (e) => {
              e.preventDefault();
              setBusy(true);
              setError(null);
              const err = await deleteEverything();
              setBusy(false);
              if (err) setError(err);
              else window.location.hash = "/";
            }}
          >
            <p className="note">
              {auth.user
                ? `This permanently deletes your account (${auth.user.email}) and all its progress${family ? ", including your children's profiles" : ""}. It can't be undone.`
                : `This permanently deletes ${family ? "everyone's" : "your"} progress on this device. It can't be undone.`}{" "}
              You might want to download your data first.
            </p>
            <label className="field">
              <span className="label">Type DELETE to confirm</span>
              <input value={typed} onChange={(e) => setTyped(e.target.value)} autoComplete="off" autoCapitalize="characters" />
            </label>
            {error && <p className="note bad-text">{error}</p>}
            <div className="row">
              <button className="btn danger" disabled={busy || typed.trim().toUpperCase() !== "DELETE"}>
                {busy ? "Deleting…" : "Delete permanently"}
              </button>
              <button type="button" className="btn ghost" onClick={() => (setDeleting(false), setTyped(""), setError(null))}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </section>
    </>
  );
}
