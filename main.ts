// One Line, One Chill — a single-sentence horror line.
// The program writes exactly one line of horror to /output/entry.txt:
// one sentence, under 200 characters, built on one concrete image
// that keeps frightening after the line ends.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My son's new imaginary friend has my dead brother's name, my dead brother's laugh, and my dead brother's missing tooth.";

const outDir = process.argv[2] ?? "/output";

// Self-check against the sealed gate: /output/entry.txt must be UTF-8
// text of 1 to 200 characters, not only white space, a single line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, gate needs 1-200`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
