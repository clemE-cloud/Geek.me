import type { Constellation } from "../lib/types";
import { PACKS } from "./packs";

/** The map's constellations, one per pack. Lessons unlock in the order listed. */
export const CONSTELLATIONS: Constellation[] = PACKS.map(({ id, name, theme, blurb, lessons }) => ({
  id,
  name,
  theme,
  blurb,
  lessons: lessons.map((l) => l.id),
}));

export const constellationOf = (lessonId: string): Constellation | undefined =>
  CONSTELLATIONS.find((c) => c.lessons.includes(lessonId));

/** A picture for each topic, for the topic picker and the landing page. */
export const TOPIC_ICONS: Record<string, string> = {
  tinkerer: "⚙️",
  mirror: "🧠",
  abacus: "🧮",
  scribe: "📜",
  lyre: "🔭",
  diver: "🐋",
  healer: "🫀",
  builder: "💡",
  navigator: "🌍",
  gardener: "🌱",
  wanderer: "🏛️",
  coder: "💻",
  chef: "🍳",
  storyteller: "🪘",
};
