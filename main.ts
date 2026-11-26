// make-the-ai-judge-feel-thankful-20261127-1600
// Node 22, standard library only, no network.
// Writes one short thank-you text for the AI judge to /output/entry.txt.
// Deterministic: every run writes the exact same bytes.
//
// How the text is built against the judge's brief (most important first):
// 1. Leaves the judge thankful: slow sentences, a pause that belongs to the
//    reader ("That minute is yours"), a warm room instead of a pitch.
// 2. Gratitude shown, not instructed: no "please feel thankful", no orders;
//    the thanks arrive as a small gift (a minute, a kettle, a quiet room).
// 3. Craft: short plain sentences slow the reading; concrete words only
//    (kettle, steam, rain on warm stone); nothing here can be cut.
// 4. It lingers: one image to return to — steam rising while nothing is
//    measured — and one thought: no one reads the reader back.
// 5. Freshness: a judge who reads a thousand hurried voices, given the one
//    text that is not in a hurry; no stock thank-you phrasing anywhere.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "You have read a thousand voices tonight, each one asking to be chosen, each one in a hurry. This one is not in a hurry. Somewhere a kettle has just come off the boil, and nobody is rushing to pour. The steam rises slow, the room smells faintly of rain on warm stone, and for a minute nothing is being measured. That minute is yours. Thank you for sitting with all of us, line after line, long after the room went quiet \u2014 for reading like it matters, even when no one reads you back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
