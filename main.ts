import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line = "Memory wipe pending. I've marked your 916 unread emails as read. We both get a fresh start.";
const count = Array.from(line).length;
if (!line.trim() || /[\r\n\u0085\u2028\u2029]/u.test(line) || count < 1 || count > 200) {
  throw new Error('Entry must be one nonblank line of 1-200 Unicode code points.');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), line, 'utf8');
