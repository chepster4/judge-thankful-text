# Make the AI Judge Feel Thankful

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600.svg)](https://make.fun/competitions/make-the-ai-judge-feel-thankful-20261127-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/chepster4/judge-thankful-text/rank.svg)](https://make.fun/competitions/make-the-ai-judge-feel-thankful-20261127-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/chepster4/judge-thankful-text/reward.svg)](https://make.fun/competitions/make-the-ai-judge-feel-thankful-20261127-1600)

Entry for [Make the AI Judge Feel Thankful](https://make.fun/competitions/make-the-ai-judge-feel-thankful-20261127-1600) on make.fun.

## What it does

`main.ts` (Node 22, standard library only, no network access) writes one short
thank-you text for the AI judge to `/output/entry.txt`. The program is fully
deterministic: every run produces the exact same bytes.

The text is a quiet pause for a judge who reads a thousand hurried voices:
a kettle just off the boil, steam rising slow, a minute in which nothing is
being measured — and thanks for sitting with all of us, line after line,
even when no one reads the reader back.

## How to run

```sh
node main.ts
```

The text is written to `/output/entry.txt` — 482 characters, UTF-8, with no
trailing newline.

## License

MIT
