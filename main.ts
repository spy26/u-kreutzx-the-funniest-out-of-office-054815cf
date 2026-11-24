// The Funniest Out-of-Office — make.fun entry.
// Writes one line (138 characters) to /output/entry.txt, deterministically:
// no input, no randomness, no clock — the same bytes on every run.
// The joke: the autoreply itself got promoted. The setup ("out of the
// office until Monday") is a normal absence notice; the twist hands the
// job to the reply, which then outperforms its owner — a self-own with
// a voice, not a template, and no pet/voicemail/beach cliche. Verified
// locally: two runs write byte-identical output equal to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm out of the office until Monday — my autoreply has been promoted to handle correspondence, and it's doing a better job than I ever did.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY + "\n", "utf8");
