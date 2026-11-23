// One-Line Roast: The Gadget You Use Every Day
// A deterministic program: it emits one original roast line to /output/entry.txt.
// No network, no secrets, no inputs outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Fresh angle: the one device that knows every secret still doubts you're a person.
// Concrete detail (300 passwords) + a first-read sting, well inside the 200-char cap.
const ROAST =
  "My password manager remembers 300 passwords but still makes me prove I'm human.";

const outputPath = process.argv[2] ?? "/output/entry.txt";

/** Mirror the house gate before writing: UTF-8, 1..200 chars, not blank. */
function writeEntry(path: string, text: string): void {
  if (text.trim().length === 0 || text.length > 200) {
    throw new Error("roast must be 1..200 non-whitespace characters");
  }
  mkdirSync(dirname(path), { recursive: true });
  // No trailing newline: the artifact is exactly the line, keeping the byte cap tight.
  writeFileSync(path, text, "utf8");
}

writeEntry(outputPath, ROAST);
