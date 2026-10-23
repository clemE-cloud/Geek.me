import { useEffect } from "react";
import { Daily } from "./components/Daily";
import { Shell } from "./components/Shell";
import { useRoute } from "./lib/router";
import { useGame } from "./lib/useGame";
import { CircleSync } from "./components/CircleSync";
import { CircleView, Circles, JoinCircle } from "./screens/Circles";
import { CardView, Collection } from "./screens/Collection";
import { LessonPlayer } from "./screens/LessonPlayer";
import { Landing } from "./screens/Landing";
import { Onboarding } from "./screens/Onboarding";
import { Privacy } from "./screens/Privacy";
import { Why } from "./screens/Why";
import { Profile } from "./screens/Profile";
import { ProfilePicker } from "./screens/ProfilePicker";
import { Review } from "./screens/Review";
import { Sky } from "./screens/Sky";
import { Today } from "./screens/Today";

export function App() {
  const { state, account, profile, needsPicker, ready } = useGame();
  const [page = "today", arg = ""] = useRoute();
  const { look, textSize } = state.settings;

  useEffect(() => {
    document.documentElement.dataset.look = look;
    document.documentElement.dataset.text = textSize;
  }, [look, textSize]);

  if (!ready) return <div className="splash" aria-busy="true" />;

  // Shared daily-question links work before onboarding, so a friend can answer straight away.
  if (page === "daily" && !account.setupDone) {
    return (
      <main className="wrap solo stack">
        <a className="brand" href="#/">
          Geek<span>.me</span>
        </a>
        <Daily standalone />
      </main>
    );
  }
  if (page === "privacy" || page === "why") {
    return <main className="wrap solo">{page === "why" ? <Why /> : <Privacy />}</main>;
  }
  if (!account.setupDone) {
    // Keep an invite link for after set-up.
    if (page === "join" && arg) sessionStorage.setItem("geekme-join", arg);
    // New visitors see the landing page; "Start" (or an invite, or a set-up already under way) opens onboarding.
    if (page === "start" || page === "join" || account.profiles.length) {
      return <Onboarding initialStep={arg === "signin" ? "signin" : undefined} />;
    }
    return <Landing />;
  }
  if (needsPicker || !profile) return <ProfilePicker />;

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
    circle: ["circles", <CircleView id={arg} />],
    join: ["circles", <JoinCircle code={arg} />],
    profile: ["profile", <Profile />],
  };
  const [tab, screen] = screens[page] ?? screens.today;
  return (
    <Shell tab={tab}>
      <CircleSync />
      {screen}
    </Shell>
  );
}
