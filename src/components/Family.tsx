import { useState } from "react";
import { makeProfile } from "../lib/account";
import { CHILD_AGES, defaultsForAge } from "../lib/content";
import { useGame } from "../lib/useGame";
import type { AgeBand, Profile } from "../lib/types";

/** Add a child's profile: name and age. */
export function AddChildForm({ onAdd, submitLabel = "Add child" }: { onAdd: (p: Profile) => void; submitLabel?: string }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState<AgeBand | null>(null);
  return (
    <form
      className="stack-sm"
      onSubmit={(e) => {
        e.preventDefault();
        if (!name.trim() || !age) return;
        onAdd(makeProfile("child", name, age));
        setName("");
        setAge(null);
      }}
    >
      <label className="field">
        <span className="label">Child's first name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={40}
          placeholder="First name"
          autoComplete="off"
        />
      </label>
      <div className="choices grid" role="radiogroup" aria-label="Child's age">
        {CHILD_AGES.map((a) => (
          <button
            type="button"
            key={a.band}
            role="radio"
            aria-checked={age === a.band}
            className="choice"
            onClick={() => setAge(a.band)}
          >
            <b>{a.label}</b>
          </button>
        ))}
      </div>
      <button className="btn ghost" disabled={!name.trim() || !age}>
        {submitLabel}
      </button>
    </form>
  );
}

/** The parent's view of their children's profiles, shown in the parent's own Profile. */
export function FamilySection() {
  const { account, addProfile, removeProfile, updateProfileSettings } = useGame();
  const [removing, setRemoving] = useState<string | null>(null);
  const [adding, setAdding] = useState(false);
  const children = account.profiles.filter((p) => p.kind === "child");

  const setChildAge = (p: Profile, age: AgeBand) => updateProfileSettings(p.id, { age, ...defaultsForAge(age) });

  return (
    <section className="card stack-sm">
      <span className="label">Family</span>
      <h2>{children.length ? "Your children" : "Children"}</h2>
      <p className="note">
        Children under 16 learn on your account. Each child gets their own profile, with lessons and a look that suit their age.
      </p>
      {children.map((p) => (
        <div key={p.id} className="child-row">
          <b>{p.state.settings.name}</b>
          <select
            value={p.state.settings.age ?? ""}
            onChange={(e) => setChildAge(p, e.target.value as AgeBand)}
            aria-label={`${p.state.settings.name}'s age`}
          >
            {CHILD_AGES.map((a) => (
              <option key={a.band} value={a.band}>
                Age {a.label}
              </option>
            ))}
          </select>
          {removing === p.id ? (
            <span className="row">
              <button className="btn danger small-btn" onClick={() => (removeProfile(p.id), setRemoving(null))}>
                Remove
              </button>
              <button className="btn ghost small-btn" onClick={() => setRemoving(null)}>
                Keep
              </button>
            </span>
          ) : (
            <button
              className="btn ghost small-btn"
              onClick={() => setRemoving(p.id)}
              aria-label={`Remove ${p.state.settings.name}`}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      {removing && <p className="note bad-text">Removing a profile deletes that child's progress.</p>}
      {adding ? (
        <AddChildForm onAdd={(p) => (addProfile(p), setAdding(false))} />
      ) : (
        <button className="btn ghost" onClick={() => setAdding(true)}>
          {children.length ? "Add another child" : "Add a child's profile"}
        </button>
      )}
    </section>
  );
}
