import { useState } from "react";
import { useAuth } from "../lib/auth";
import { useGame } from "../lib/useGame";

const SYNC_TEXT = {
  idle: "",
  syncing: "Saving to your account…",
  synced: "Your progress is saved to your account.",
  offline: "Can't reach the server right now. Your progress is saved on this device and will sync when you're back online.",
};

/** Sign-in by email (a link or a code), and the signed-in state. */
export function AccountCard({ compact = false }: { compact?: boolean }) {
  const auth = useAuth();
  const { account, profile, sync, signOut } = useGame();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!auth.available) return null;

  if (profile?.kind === "child") {
    const parent = account.profiles.find((p) => p.kind === "self")?.state.settings.name;
    return (
      <section className="card">
        <span className="label">Account</span>
        <h2>On {parent ? `${parent}'s` : "a parent's"} account</h2>
        <p className="note">
          This profile is part of {parent ? `${parent}'s` : "a parent's"} account. Your progress is saved there, and an adult
          looks after the account settings.
        </p>
      </section>
    );
  }

  if (auth.user) {
    return (
      <section className="card stack-sm">
        <span className="label">Account</span>
        <h2>Signed in</h2>
        <p className="note">
          {auth.user.email}
          <br />
          {SYNC_TEXT[sync]}
        </p>
        <button className="btn ghost" disabled={busy} onClick={async () => (setBusy(true), await signOut(), setBusy(false))}>
          Sign out
        </button>
        <p className="note small-note">Signing out removes your progress from this device. It stays in your account.</p>
      </section>
    );
  }

  const run = async (fn: () => Promise<string | null>, onOk: () => void) => {
    setBusy(true);
    setError(null);
    const err = await fn();
    setBusy(false);
    if (err) setError(err);
    else onOk();
  };

  if (sentTo) {
    return (
      <section className="card stack-sm">
        <span className="label">Account</span>
        <h2>Check your email</h2>
        <p className="note">
          We sent a sign-in email to <b>{sentTo}</b>. Open the link in it on this device, or type the code from the email here.
        </p>
        <form
          className="stack-sm"
          onSubmit={(e) => {
            e.preventDefault();
            void run(
              () => auth.verifyCode(sentTo, code.trim()),
              () => setCode(""),
            );
          }}
        >
          <label className="field">
            <span className="label">Code</span>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={10}
              placeholder="123456"
            />
          </label>
          {error && <p className="note bad-text">{error}</p>}
          <div className="row">
            <button className="btn" disabled={busy || code.trim().length < 6}>
              Sign in
            </button>
            <button type="button" className="btn ghost" onClick={() => (setSentTo(null), setError(null))}>
              Use a different email
            </button>
          </div>
        </form>
      </section>
    );
  }

  return (
    <section className="card stack-sm">
      {!compact && (
        <>
          <span className="label">Account</span>
          <h2>Learning as a guest</h2>
          <p className="note">
            Your progress is saved in this browser only. Sign in with your email to keep it safe and use it on other devices. What
            you've done so far will come with you.
          </p>
        </>
      )}
      <form
        className="stack-sm"
        onSubmit={(e) => {
          e.preventDefault();
          const to = email.trim();
          void run(
            () => auth.sendEmail(to),
            () => setSentTo(to),
          );
        }}
      >
        <label className="field">
          <span className="label">Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            placeholder="you@example.com"
          />
        </label>
        {error && <p className="note bad-text">{error}</p>}
        <button className="btn" disabled={busy || !email.includes("@")}>
          {busy ? "Sending…" : "Email me a sign-in code"}
        </button>
      </form>
    </section>
  );
}
