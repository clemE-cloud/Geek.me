import { useEffect } from "react";
import { Daily } from "./components/Daily";
import { Shell } from "./components/Shell";
import { useRoute } from "./lib/router";
import { useGame } from "./lib/useGame";
import { Circles } from "./screens/Circles";
import { CardView, Collection } from "./screens/Collection";
import { LessonPlayer } from "./screens/LessonPlayer";
import { Onboarding } from "./screens/Onboarding";
import { Profile } from "./screens/Profile";
import { Review } from "./screens/Review";
import { Sky } from "./screens/Sky";
import { Today } from "./screens/Today";

export function App() {
  const { state, ready } = useGame();
  const [page = "today", arg = ""] = useRoute();
  const { look, textSize } = state.settings;

  useEffect(() => {
    document.documentElement.dataset.look = look;
    document.documentElement.dataset.text = textSize;
  }, [look, textSize]);

  if (!ready) return <div className="splash" aria-busy="true" />;

  // Shared daily-question links work before onboarding, so a friend can answer straight away.
  if (page === "daily" && !state.settings.onboarded) {
    return (
      <main className="wrap solo stack">
        <a className="brand" href="#/">
          Geek<span>.me</span>
        </a>
        <Daily standalone />
      </main>
    );
  }
  if (!state.settings.onboarded) return <Onboarding />;

  if (page === "lesson") {
    return (
      <main className="wrap solo">
        <LessonPlayer key={arg} id={arg} />
      </main>
    );
  }

  const screens: Record<string, [string, JSX.Element]> = {
    today: ["today", <Today />],
    daily: ["today", <Daily standalone />],
    sky: ["sky", <Sky />],
    review: ["review", <Review />],
    collection: ["collection", <Collection />],
    card: ["collection", <CardView id={arg} />],
    circles: ["circles", <Circles />],
    profile: ["", <Profile />],
  };
  const [tab, screen] = screens[page] ?? screens.today;
  return <Shell tab={tab}>{screen}</Shell>;
}
