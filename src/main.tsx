import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { AuthProvider } from "./lib/auth";
import { GameProvider } from "./lib/useGame";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </AuthProvider>
  </StrictMode>,
);

if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      /* offline support is a bonus; the app works without it */
    });
  });
}
