import type { Pack } from "../../lib/types";
import tinkerer from "./tinkerer";
import mirror from "./mirror";
import abacus from "./abacus";
import scribe from "./scribe";
import lyre from "./lyre";
import diver from "./diver";
import healer from "./healer";
import builder from "./builder";
import navigator from "./navigator";
import gardener from "./gardener";
import wanderer from "./wanderer";
import coder from "./coder";
import chef from "./chef";

/*
 * One file per constellation. Lessons unlock in the order they appear in each file.
 *
 * To add a lesson, append an object like this to a pack's `lessons`:
 *
 * {
 *   id: "b101",               // unique and never reused: saved progress uses it
 *   subject: "Science",       // label shown on the lesson and its card
 *   title: "Short title",
 *   body: ["Paragraph one.", "Paragraph two.", "Paragraph three."],   // 2–4 short paragraphs, 130–170 words
 *   takeaway: "One sentence to remember.",
 *   qs: [                     // 3 questions, 4 options each; a = index of the right option (0 = first)
 *     { q: "Question?", o: ["A", "B", "C", "D"], a: 1, why: "Shown after answering." },
 *   ],
 *   daily: [0],               // optional: questions that make sense without the lesson
 *   sources: ["https://en.wikipedia.org/wiki/..."],
 *   young: {                  // for about ages 6–12: short sentences, 3 options, same number of questions
 *     title: "Optional simpler title",
 *     body: ["...", "...", "..."],
 *     takeaway: "...",
 *     qs: [{ q: "...", o: ["A", "B", "C"], a: 0, why: "..." }],
 *   },
 * },
 *
 * To add a constellation, create a new file like these and add it to PACKS below.
 */
export const PACKS: Pack[] = [
  tinkerer,
  mirror,
  abacus,
  scribe,
  lyre,
  diver,
  healer,
  builder,
  navigator,
  gardener,
  wanderer,
  coder,
  chef,
];
