// One office joke, read aloud in one breath.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke = "Five years at this company and the only thing that's been promoted is the 3 p.m. meeting. It's at 8 a.m. now.";
const limit = 199;

if ([...joke].length > limit) throw new Error("joke is 200 characters or more");
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), joke);
