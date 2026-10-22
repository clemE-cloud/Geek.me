import type { Constellation } from "../lib/types";

/*
 * Each constellation is a small set of related lessons. Lessons unlock in the
 * order listed; the map draws them as stars joined in that order.
 */
export const CONSTELLATIONS: Constellation[] = [
  {
    id: "tinkerer",
    name: "The Tinkerer",
    theme: "How things work",
    blurb: "Light, water, cells and the everyday physics hiding in plain sight.",
    lessons: ["b01", "b08", "b05", "b18", "b11"],
  },
  {
    id: "mirror",
    name: "The Mirror",
    theme: "Inside your head",
    blurb: "How memory, confidence and identity really work.",
    lessons: ["b02", "b10", "b19", "b16"],
  },
  {
    id: "abacus",
    name: "The Abacus",
    theme: "Numbers & money",
    blurb: "Probability, infinity and the maths behind every decision.",
    lessons: ["b04", "b06", "b13", "b15"],
  },
  {
    id: "scribe",
    name: "The Scribe",
    theme: "People & time",
    blurb: "Words, art and the odd ways history fits together.",
    lessons: ["b09", "b03", "b07", "b17", "b12"],
  },
  {
    id: "lyre",
    name: "The Lyre",
    theme: "Sky & sound",
    blurb: "Starlight, planets and the physics of music.",
    lessons: ["b14", "b20", "b21"],
  },
];

export const constellationOf = (lessonId: string): Constellation | undefined =>
  CONSTELLATIONS.find((c) => c.lessons.includes(lessonId));
