import type { User } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { appUrl } from "./share";
import { supabase } from "./supabase";

interface AuthApi {
  /** False when the app was built without Supabase settings. */
  available: boolean;
  /** True once the saved session (if any) has been checked. */
  ready: boolean;
  user: User | null;
  /** Emails a sign-in link and code. Returns an error message, or null on success. */
  sendEmail(email: string): Promise<string | null>;
  verifyCode(email: string, code: string): Promise<string | null>;
  signOut(): Promise<void>;
  /** Set when an email link couldn't sign the person in, with what to do about it. */
  linkProblem: string | null;
  dismissLinkProblem(): void;
}

// Read before the Supabase client tidies the address bar.
const arrivedWithCode = new URLSearchParams(window.location.search).has("code");
const linkError = (() => {
  const params = new URLSearchParams(window.location.search + "&" + window.location.hash.replace(/^#\/?/, ""));
  return params.get("error_code") ?? params.get("error");
})();

const Ctx = createContext<AuthApi | null>(null);

const friendly = (message: string) =>
  /rate limit|security purposes/i.test(message)
    ? "Too many attempts. Please wait a minute and try again."
    : /expired|invalid/i.test(message)
      ? "That code didn't work. It may have expired, so ask for a new one."
      : /fetch|network/i.test(message)
        ? "Couldn't reach the server. Check your connection and try again."
        : message;

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(!supabase);
  const [linkProblem, setLinkProblem] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) return;
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setReady(true);
      if (event === "INITIAL_SESSION" && !session && (arrivedWithCode || linkError)) {
        setLinkProblem(
          linkError && /expired/i.test(linkError)
            ? "That sign-in link has expired or was already used. Please ask for a new sign-in email."
            : "Sign-in links only work in the browser you asked for them from. Open the link there, or ask for a new sign-in email here.",
        );
        history.replaceState(null, "", window.location.pathname + "#/");
      }
      // Tidy the one-time ?code= from an email link out of the address bar.
      if (event === "SIGNED_IN" && window.location.search.includes("code=")) {
        history.replaceState(null, "", window.location.pathname + window.location.hash);
      }
    });
    return () => data.subscription.unsubscribe();
  }, []);

  const api = useMemo<AuthApi>(
    () => ({
      available: !!supabase,
      ready,
      user,
      async sendEmail(email) {
        if (!supabase) return "Accounts aren't available.";
        const { error } = await supabase.auth.signInWithOtp({
          email,
          options: { emailRedirectTo: appUrl(), shouldCreateUser: true },
        });
        return error ? friendly(error.message) : null;
      },
      async verifyCode(email, code) {
        if (!supabase) return "Accounts aren't available.";
        const { error } = await supabase.auth.verifyOtp({ email, token: code, type: "email" });
        return error ? friendly(error.message) : null;
      },
      async signOut() {
        await supabase?.auth.signOut();
      },
      linkProblem,
      dismissLinkProblem: () => setLinkProblem(null),
    }),
    [ready, user, linkProblem],
  );

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useAuth(): AuthApi {
  const api = useContext(Ctx);
  if (!api) throw new Error("useAuth must be used inside <AuthProvider>");
  return api;
}
