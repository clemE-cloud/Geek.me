import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { LinkProblem } from "./components/LinkProblem";
import { AuthProvider } from "./lib/auth";
import { GameProvider } from "./lib/useGame";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <GameProvider>
        <LinkProblem />
        <App />
      </GameProvider>
    </AuthProvider>
  </StrictMode>,
);

if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // updateViaCache: "none" stops the browser serving an old copy of sw.js itself from its HTTP cache.
    navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" }).catch(() => {
      /* offline support is a bonus; the app works without it */
    });
  });
}
