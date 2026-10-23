import { isChild } from "../lib/content";
import { fmt, today, weekDays, addDays } from "../lib/dates";
import { xpOn } from "../lib/game";
import { useGame } from "../lib/useGame";

export function Circles() {
  const { state } = useGame();
  const t = today();
  const days = weekDays(t);
  const thisWeek = days.reduce((n, d) => n + xpOn(state, d), 0);
  const lastWeek = weekDays(addDays(t, -7)).reduce((n, d) => n + xpOn(state, d), 0);
  const max = Math.max(1, ...days.map((d) => xpOn(state, d)));
  const child = isChild(state.settings);

  return (
    <div className="stack">
      <div>
        <h1>Circles</h1>
        <p className="note">Small groups that learn together each week.</p>
      </div>

      <section className="card">
        <span className="label">How circles work</span>
        <ul className="ticks">
          <li>
            {child
              ? "A circle is your family or your class, set up by a parent or teacher."
              : "A circle is 5 to 8 people: friends, family, or people who like the same topics."}
          </li>
          <li>Everyone's XP adds up toward one weekly goal. If the circle reaches it, everyone gets a special card.</li>
          <li>You can see a ranking inside your circle if you want to. Nobody gets moved down a league.</li>
        </ul>
        <div className="notice">
          {child
            ? "Circles aren't ready yet. When they are, a parent or teacher will be able to set one up."
            : "Circles are coming soon. If you sign in from your profile now, your progress will be ready to share when they arrive."}
        </div>
      </section>

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
    </div>
  );
}
