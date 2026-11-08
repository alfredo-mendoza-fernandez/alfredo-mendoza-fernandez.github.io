# Autoevaluación de Comercio Internacional

Static self-test site for the International Trade course, Universidad de los Andes.
Students pick topics and a difficulty level, take a timed control, and review every
question with its explanation at the end. Interface and question bank are bilingual
(ES / EN), switchable at any moment, including mid-test.

No build step, no framework, no dependencies. It is four files and a font link.

```
index.html           page structure
assets/styles.css    design tokens and layout
assets/app.js        filtering, timer, scoring, review
data/questions.js    the question bank  ← the only file you normally edit
tools/build_artifact.py   bundles everything into a single artifact.html
```

## Where this lives

This folder sits inside the `alfredo-mendoza-fernandez.github.io` repository, so
GitHub Pages serves it directly at:

**https://alfredo-mendoza-fernandez.github.io/comercio-internacional/**

Nothing else was changed in that repository. The site's own `index.html` and
`research.html` are untouched, and nothing links here unless a link is added to
them deliberately.

To publish a change, from the root of the site repository:

```bash
git add comercio-internacional
git commit -m "Update question bank"
git push
```

The live site updates within a minute or two.

Opening `index.html` by double-clicking also works, because the bank is loaded
through a `<script>` tag rather than `fetch`. No local server needed — useful for
checking a new question before pushing it.

## This repository is public

Anyone can read `data/questions.js`, including every correct answer and
explanation, and these questions come from the lecture notes. That is deliberate:
the notes and this site are published as a public good.

The practical consequence worth remembering: these 240 questions cannot double as
unseen material on a graded control. For a control, write new items in the `.tex`
and keep them out of the published chapter until after the exam, or keep a
separate bank in a `private/` folder listed in `.gitignore` — the site does not
load it and git will not publish it.

## Where the questions come from

`data/questions.js` is **generated** from the lecture notes
(`Lecture Notes in International Trade`, EAI 3220) by `tools/import_notes.py`.
It takes the `mcquestion` and `tfquestion` environments out of each chapter's
Exercises section verbatim, with that chapter's solution as the explanation.

```bash
python3 tools/import_notes.py "<path to the Notes folder>"
```

Re-run that after editing the notes. Do not hand-edit `data/questions.js` —
the next import overwrites it. Fix the question in the `.tex` instead, which
keeps the book and the quiz in step.

The importer also writes `data/macros.js` from the notes' `macros.tex`, and the
page hands that table to KaTeX. This is what lets the bank carry `\Alc`,
`\relpi` and `\ccutD` exactly as the book writes them instead of expanding
them into something that would drift from the source.

## The question format

One question is one object:

```js
{
  id: "policy1-mc01", topic: "policy1", type: "mc", answer: 1,
  en: {
    stem: R`A small country imposes a specific tariff \(t\). The domestic price rises by`,
    choices: [R`less than \(t\) ...`, R`exactly \(t\) ...`, R`...`, R`...`],
    explanation: R`"Small" means \(\XS\) is horizontal at \(p\wld\) ...`
  }
}
```

| Field | Values |
|---|---|
| `id` | any unique string |
| `topic` | an `id` from the `topics` array — one per chapter |
| `type` | `"mc"` or `"tf"` |
| `answer` | `mc`: index of the correct choice, counting from 0. `tf`: `true` or `false` |

True/false questions carry no `choices`; the app supplies *Verdadero / Falso* and
*True / False* in the active language.

A language block may be absent. The questions are currently English only, taken
from the notes as written; the interface is bilingual and falls back to English
for the question text. Adding an `es` block to a question makes that question
appear in Spanish when the toggle is set to ES.

Choice order is shuffled on every attempt, so the position of the correct answer in
the file does not matter. Questions are shuffled too.

Adding a topic means adding one entry to the `topics` array with an `id`, an `en`
label and an `es` label. The filter chips and the results breakdown pick it up
automatically.

### Mathematics

Write LaTeX, exactly as in a `.tex` file:

```js
stem: R`The relative price \(P_M/P_F\) rises by 10%.`,
explanation: R`The effective rate is \[\frac{6{,}500 - 4{,}000}{4{,}000} = 62.5\%.\]`
```

| Delimiter | Use |
|---|---|
| `\( ... \)` | inline |
| `\[ ... \]` | displayed, centred on its own line |

**Keep the `R` and the backticks.** `R` is `String.raw`, defined at the top of the
file. It is what lets you paste `\frac`, `\alpha`, `\hat{y}_t` straight from your
lecture notes without doubling a single backslash. A field written with ordinary
double quotes will silently swallow them, and `\frac` arrives as `frac`.

Delimiters are `\( \)` rather than `$ $` on purpose: these questions are full of
prices like `$10,000`, and dollar-delimited maths would swallow them. With `\( \)`
a bare `$` needs no escaping at all.

KaTeX renders the maths, loaded from a CDN. If it fails to load — campus wifi,
no network, the bundled preview — the page falls back to a readable plain-text
rendering rather than showing raw LaTeX, so `\(w/P_W = (P_C/P_W)/a_{LC}\)` still
arrives as legible notation. A student on a bad connection is never shown source.

### Other markup

| Syntax | Result |
|---|---|
| `*text*` | *italic* |
| `**text**` | **bold** |

Asterisks inside maths are safe: the renderer lifts every `\( \)` and `\[ \]` span
out before the italic rule runs, so `a^{*}_{LC}` is never mistaken for emphasis.

### Before you push

```bash
python3 tools/check_bank.py
```

Validates structure, answer indices, bilingual completeness and LaTeX delimiter
balance, and catches a dropped `R` prefix. Exits non-zero on any problem, so it
also works as a pre-commit hook.

## What is in the bank now

240 questions — 120 multiple choice and 120 true/false, ten of each per chapter:

| # | Chapter | MC | TF |
|---|---|---|---|
| 1 | Method and models | 10 | 10 |
| 2 | The facts of world trade | 10 | 10 |
| 3 | Gravity | 10 | 10 |
| 4 | Ricardo | 10 | 10 |
| 5 | Specific factors | 10 | 10 |
| 6 | Heckscher-Ohlin | 10 | 10 |
| 7 | External economies of scale | 10 | 10 |
| 8 | Monopolistic competition | 10 | 10 |
| 9 | Heterogeneous firms | 10 | 10 |
| 10 | FDI and offshoring | 10 | 10 |
| 11 | Instruments of trade policy | 10 | 10 |
| 12 | The political economy of trade | 10 | 10 |

There is no difficulty tagging: the notes carry none, so rather than invent one
the filter was removed. Students filter by chapter instead, which is what maps
onto a control anyway. If difficulty tags are ever added to the `.tex`, the
importer can carry them through and the filter can come back.

## Refreshing the shared preview

`tools/build_artifact.py` flattens the site into a single `artifact.html`. Run it
after editing the bank if you want the shareable link updated to match the repo:

```bash
python3 tools/build_artifact.py
```

## Design notes

- Colours are taken from the tokens in the site's own `styles.css`: `#8a001a`
  accent, `#25211f` ink, `#6b6662` muted, `#e5dfdc` rules. Dark mode is a warm
  neutral with the red lifted to stay legible on a dark ground.
- Red is the brand accent and also marks an incorrect answer on the results
  screen. It is deliberately *not* used for the selected option during a control,
  where a red highlight would read as "wrong"; selection is neutral ink instead.
  Green appears only as the correct-answer marker in review.
- Preferences that persist in the student's own browser: language, selected topics,
  difficulty, length and clock. Nothing else is stored and nothing leaves the device.
- No scores are collected. This is a practice tool, not a gradebook. If you later
  want attempts recorded, that needs a backend and is a different piece of work.
- Keyboard during a control: `1`–`4` to answer, `←` `→` to move, `F` to flag.
- The page follows the reader's light or dark system setting.
