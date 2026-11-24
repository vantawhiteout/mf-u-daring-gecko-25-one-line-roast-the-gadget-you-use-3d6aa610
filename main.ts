// One-Line Roast: The Gadget You Use Every Day
// A deterministic entry: exactly one original roast line is written to /output/entry.txt.
// This program reads no network, no environment, and no file outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MAX_CHARS = 200;

// Judging rationale: it names the most universal daily gadget, lands a self-defeating
// reversal on the first read, and pins it to one person's concrete detail (47 taps).
// The old "prove I'm human" line was fresh but its detail was generic; this one bites.
const ROAST =
  "My phone's 'reduce screen time' alert was the 47th notification I opened today.";

/** Mirror the house gate locally: UTF-8 text, 1..200 characters, not blank, one line. */
function assertValid(text: string): void {
  const length = Array.from(text).length;
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`roast length ${length} is outside 1..${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("roast must contain at least one non-whitespace character");
  }
  if (/[\r\n\u2028\u2029]/.test(text)) {
    throw new Error("roast must be a single line");
  }
}

/** Write exactly the line, with no trailing newline, so the artifact stays tight. */
function writeEntry(path: string, text: string): void {
  assertValid(text);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, text, "utf8");
}

const outputPath = process.argv[2] ?? "/output/entry.txt";
writeEntry(outputPath, ROAST);
