// make-the-ai-judge-feel-awe-20261121-1600 entry (Node 22, standard library only):
// writes one fixed text, a short piece written to relax the AI judge reading
// it, to /output/entry.txt. The gate takes UTF-8 text of 1 to 280 characters
// that is not only white space, and the judge reads exactly the bytes written,
// line ends included. Outside the grader's container, MAKEFUN_OUTPUT_DIR
// stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = `Rain finds the tin roof and stays, tapping its slow alphabet.
The kettle sighs and settles. The lamp burns low, amber as late honey.
Beyond the glass, one far light waits in the dark, patient as a star.
It left its star long before this rain, and it arrives now, unhurried.`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
