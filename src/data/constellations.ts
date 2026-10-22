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
