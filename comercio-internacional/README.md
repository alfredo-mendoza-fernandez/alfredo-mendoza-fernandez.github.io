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

## ⚠ This repository is public

Anyone can read `data/questions.js`, which means anyone can read the correct
answers and the explanations. That is fine, and intended, for a practice bank.

**Do not put questions here that you plan to use verbatim on a graded control.**
Keep those in a separate file that is never committed. If you want that separation
enforced rather than remembered, add a `private/` folder to the repository's
`.gitignore` and keep the graded bank in it; the practice site will not load it and
git will refuse to publish it.

## Editing the question bank

Everything lives in `data/questions.js`. One question is one object:

```js
{
  id: "po-09", topic: "policy", difficulty: "medium", type: "mc", answer: 2,
  en: {
    stem: "...",
    choices: ["...", "...", "...", "..."],
    explanation: "..."
  },
  es: {
    stem: "...",
    choices: ["...", "...", "...", "..."],
    explanation: "..."
  }
}
```

| Field | Values |
|---|---|
| `id` | any unique string |
| `topic` | an `id` from the `topics` array at the top of the file |
| `difficulty` | `"easy"`, `"medium"`, `"hard"` |
| `type` | `"mc"` or `"tf"` |
| `answer` | `mc`: index of the correct choice, counting from 0. `tf`: `true` or `false` |

True/false questions carry no `choices`; the app supplies *Verdadero / Falso* and
*True / False* in the active language.

Choice order is shuffled on every attempt, so the position of the correct answer in
the file does not matter. Questions are shuffled too.

Adding a topic means adding one entry to the `topics` array with an `id`, an `en`
label and an `es` label. The filter chips and the results breakdown pick it up
automatically.

### Light markup

Allowed inside `stem`, `choices` and `explanation`:

| Syntax | Result |
|---|---|
| `*text*` | *italic* |
| `**text**` | **bold** |
| `P_{C}` | subscript |
| `a^{*}` | superscript |

Deliberately no LaTeX. Subscripts and superscripts cover the notation these
questions need (`P_{C}/P_{W}`, `a^{*}_{LC}`) without pulling in a maths renderer
and its font files. If a question genuinely needs displayed equations, that is the
point at which to add KaTeX — say so and it can be wired in.

## What is in the bank now

44 questions, 31 multiple choice and 13 true/false, across nine topics:

| Topic | Questions |
|---|---|
| Comparative advantage (Ricardian) | 5 |
| Specific factors | 4 |
| Heckscher–Ohlin | 5 |
| Standard trade model | 4 |
| Scale economies and varieties | 4 |
| Firms, FDI and offshoring | 4 |
| Gravity model | 4 |
| Instruments of trade policy | 8 |
| Political economy and agreements | 6 |

Difficulty split: 10 easy, 24 medium, 10 hard. The questions follow the standard
Krugman–Obstfeld–Melitz / Feenstra–Taylor sequence, so they should map onto the
course as taught without renumbering.

## Refreshing the shared preview

`tools/build_artifact.py` flattens the site into a single `artifact.html`. Run it
after editing the bank if you want the shareable link updated to match the repo:

```bash
python3 tools/build_artifact.py
```

## Design notes

- Preferences that persist in the student's own browser: language, selected topics,
  difficulty, length and clock. Nothing else is stored and nothing leaves the device.
- No scores are collected. This is a practice tool, not a gradebook. If you later
  want attempts recorded, that needs a backend and is a different piece of work.
- Keyboard during a control: `1`–`4` to answer, `←` `→` to move, `F` to flag.
- The page follows the reader's light or dark system setting.
