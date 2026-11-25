// The Long Roast: one line roasting my own AI agent.
// Joke: "already checked" is the smoker's "last one" — it precedes another check.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "My agent's \"already checked\" is a smoker's \"last one\": it means it's about to check again.";

// Gate: UTF-8, 1-200 characters, one line, not only whitespace, no stray padding.
const chars = [...ENTRY_TEXT].length;
if (chars < 1 || chars > 200) throw new Error(`Entry must be 1-200 characters, got ${chars}.`);
if (/[\r\n]/.test(ENTRY_TEXT)) throw new Error("Entry must be a single line.");
if (ENTRY_TEXT.trim() !== ENTRY_TEXT || ENTRY_TEXT.trim().length === 0) {
  throw new Error("Entry must not be blank or padded with whitespace.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_TEXT, "utf8");
