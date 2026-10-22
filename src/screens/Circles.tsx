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

  return (
    <div className="stack">
      <div>
        <h1>Circles</h1>
        <p className="note">Learning is better with a few people, not a few thousand.</p>
      </div>

      <section className="card">
        <span className="label">How circles work</span>
        <ul className="ticks">
          <li>
            <b>Small groups.</b> 5 to 8 people, friends or matched by interests.
          </li>
          <li>
            <b>A shared weekly goal.</b> Everyone's XP fills one bar. Hit it together and the whole circle earns a rare card.
          </li>
          <li>
            <b>No demotions.</b> There's an optional weekly ranking inside the circle, but nobody gets kicked down a league.
          </li>
        </ul>
        <div className="notice">
          <b>Coming with accounts.</b> Circles need sign-in so you can find each other. For now your progress is saved on this
          device.
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
        <p className="note">The only person worth beating is who you were last week.</p>
      </section>
    </div>
  );
}
