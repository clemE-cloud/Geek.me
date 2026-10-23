import type { CSSProperties } from "react";
import type { Settings } from "../lib/types";
import { subjectColor } from "./Bits";

/** Choices for a profile picture. Kept to friendly, widely supported emoji. */
export const AVATARS = ["🦊", "🐙", "🦉", "🐢", "🦄", "🐼", "🐸", "🦁", "🐝", "🐬", "🚀", "🌙", "⭐", "🌵", "🎸", "📚"];

/** The chosen emoji, or the first letter of the name on a colour picked from the name. */
export function Avatar({ settings, size = 34 }: { settings: Pick<Settings, "name" | "avatar">; size?: number }) {
  const name = settings.name.trim() || "?";
  const style = { "--c": subjectColor(name), width: size, height: size, fontSize: size * 0.48 } as CSSProperties;
  return (
    <span className={`avatar-img ${settings.avatar ? "emoji" : ""}`} style={style} aria-hidden>
      {settings.avatar || name[0].toUpperCase()}
    </span>
  );
}
