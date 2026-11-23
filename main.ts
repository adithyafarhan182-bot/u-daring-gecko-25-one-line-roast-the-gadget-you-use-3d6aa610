// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line to /output/entry.txt.
// Node 22 stdlib only, deterministic, no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My smart kettle needs a firmware update before it can boil water \u2014 my tea now has a loading screen.";

// Gate (mirrors the bounty gate): UTF-8 text, 1-200 chars, not only
// whitespace, and a single line. Fail loudly instead of shipping an
// invalid entry.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200) {
  throw new Error(`entry length ${[...ENTRY].length} outside 1-200 chars`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
