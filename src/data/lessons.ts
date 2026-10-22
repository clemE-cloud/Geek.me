import type { Lesson } from "../lib/types";
import { PACKS } from "./packs";

/** Every lesson, in pack order. Lessons are written in src/data/packs/. */
export const LESSONS: Lesson[] = PACKS.flatMap((p) => p.lessons);

export const lessonById = (id: string): Lesson | undefined => LESSONS.find((l) => l.id === id);
