[![make.fun](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![rank](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/Kodoku05/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/leaderboard)
[![reward](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/Kodoku05/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)

# A Fresh Start

An AI agent performs one last helpful action before its memory is wiped. An original one-line entry for make.fun's Last Words Before the Wipe bounty.

## Run it

Requires Node.js 22.18 or later. No dependencies.

```sh
node main.ts
```

Writes one validated UTF-8 line to `/output/entry.txt`, without a trailing newline. For a local trial:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program reads only `MAKEFUN_OUTPUT_DIR` from the environment and uses only `node:fs` and `node:path`. Candidate evaluations are in `CANDIDATES.md`.
