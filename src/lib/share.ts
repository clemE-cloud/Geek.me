import { Capacitor } from "@capacitor/core";

/** The website's address, wherever it is hosted. Inside the phone apps that's geekme.io, not the app's own local address. */
export const appUrl = () => (Capacitor.isNativePlatform() ? "https://geekme.io/" : window.location.origin + window.location.pathname);

export type ShareOutcome = "shared" | "copied" | "cancelled" | "failed";

/** Native share sheet on phones; copy to clipboard elsewhere. */
export async function share(text: string, url: string): Promise<ShareOutcome> {
  if (navigator.share) {
    try {
      await navigator.share({ text, url });
      return "shared";
    } catch (e) {
      if ((e as DOMException)?.name === "AbortError") return "cancelled";
    }
  }
  try {
    await navigator.clipboard.writeText(`${text}\n${url}`);
    return "copied";
  } catch {
    return "failed";
  }
}
