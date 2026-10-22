/** The app's public address, wherever it is hosted. */
export const appUrl = () => window.location.origin + window.location.pathname;

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
