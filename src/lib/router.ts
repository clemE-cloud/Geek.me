import { useEffect, useState } from "react";

/** Hash routes (#/sky, #/lesson/b01) so the app works on static hosting without server rewrites. */
const read = () => window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);

export function useRoute(): string[] {
  const [parts, setParts] = useState(read);
  useEffect(() => {
    const on = () => {
      setParts(read());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return parts;
}

export const go = (path: string) => {
  window.location.hash = "/" + path.replace(/^\//, "");
};
