import type { CSSProperties } from "react";
import { useState } from "react";
import { subjectColor } from "../components/Bits";
import { ParentGate } from "../components/ParentGate";
import { AGE_BANDS } from "../lib/content";
import { go } from "../lib/router";
import { useGame } from "../lib/useGame";

const ageLabel = (band: string | null) => AGE_BANDS.find((a) => a.band === band)?.label;

/** "Who's learning?" on a shared family account. Opening the parent's profile needs an adult check. */
export function ProfilePicker() {
  const { account, chooseProfile } = useGame();
  const [gateFor, setGateFor] = useState<string | null>(null);
  const family = account.type === "parent";

  const open = (id: string) => {
    chooseProfile(id);
    go("today");
  };

  return (
    <main className="wrap solo stack">
      <div className="brand">
        Geek<span>.me</span>
      </div>
      <h1>Who's learning?</h1>
      {gateFor ? (
        <ParentGate onPass={() => open(gateFor)} onCancel={() => setGateFor(null)} />
      ) : (
        <div className="profile-grid">
          {account.profiles.map((p) => {
            const name = p.state.settings.name || (p.kind === "self" ? "Me" : "Learner");
            return (
              <button
                key={p.id}
                className="profile-tile"
                style={{ "--c": subjectColor(name) } as CSSProperties}
                onClick={() => (p.kind === "self" && family ? setGateFor(p.id) : open(p.id))}
              >
                <span className="profile-initial">{name[0]?.toUpperCase()}</span>
                <b>{name}</b>
                <span className="note">
                  {p.kind === "self" ? (family ? "Parent" : "") : `Age ${ageLabel(p.state.settings.age) ?? ""}`}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </main>
  );
}
