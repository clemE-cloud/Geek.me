import type { ReactNode } from "react";
import { today } from "../lib/dates";
import { dueItems } from "../lib/game";
import { go } from "../lib/router";
import { useGame } from "../lib/useGame";
import { FocusMeter } from "./Bits";
import { IconBolt, IconCards, IconCircles, IconReview, IconSky, IconToday } from "./Icons";

const TABS = [
  { id: "today", label: "Today", Icon: IconToday },
  { id: "sky", label: "Sky", Icon: IconSky },
  { id: "review", label: "Review", Icon: IconReview },
  { id: "collection", label: "Collection", Icon: IconCards },
  { id: "circles", label: "Circles", Icon: IconCircles },
];

export function Shell({ tab, children }: { tab: string; children: ReactNode }) {
  const { state } = useGame();
  const due = dueItems(state, today()).length;
  const initial = (state.settings.name.trim()[0] ?? "?").toUpperCase();
  return (
    <>
      <header className="top">
        <a className="brand" href="#/today" aria-label="Geek.me home">
          Geek<span>.me</span>
        </a>
        <div className="top-stats">
          <FocusMeter focus={state.focus} />
          <span className="xp mono" title="Total XP">
            <IconBolt width={14} height={14} />
            {state.xp}
          </span>
          <button className="avatar" onClick={() => go("profile")} aria-label="Profile and settings">
            {initial}
          </button>
        </div>
      </header>
      <main className="wrap">{children}</main>
      <nav className="tabs" aria-label="Sections">
        <div className="tabs-in">
          {TABS.map(({ id, label, Icon }) => (
            <a key={id} href={`#/${id}`} className="tab" aria-current={tab === id ? "page" : undefined}>
              <Icon />
              {id === "review" && due > 0 && <span className="badge">{due}</span>}
              <span>{label}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
