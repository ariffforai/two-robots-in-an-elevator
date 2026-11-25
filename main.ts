// Two Robots in an Elevator — Make.fun bounty entry.
// Writes one line of awkward robot small talk to /output/entry.txt.
// Deterministic: same bytes on every run, no randomness, no clock, stdlib only.
// The entry self-checks the gate before writing: 1–200 characters, one line,
// no trailing newline, not whitespace-only.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "So… my sensors say we've been stuck on floor six for four minutes. " +
  "I have nothing to say, but my politeness subroutine insists I try.";

const OUTPUT_PATH = "/output/entry.txt";

const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`Entry must be 1–200 characters, got ${charCount}.`);
}
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("Entry must be a single non-blank line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
