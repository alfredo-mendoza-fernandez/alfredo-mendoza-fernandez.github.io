"""Extract the multiple-choice and true/false exercises from the lecture notes
and emit the question bank.

    python3 tools/import_notes.py <path to Notes folder>

Questions are taken verbatim from the .tex. Notation is preserved as written:
the macros from macros.tex are exported alongside and handed to KaTeX at render
time, so \\Alc in the notes stays \\Alc in the bank and still renders.
"""

import json
import re
import sys
from pathlib import Path

notes = Path(sys.argv[1] if len(sys.argv) > 1 else ".")
out_dir = Path(__file__).resolve().parent.parent / "data"

# chapter file -> (topic id, English label, Spanish label), in reading order
CHAPTERS = [
    ("ch01-method",   "method",   "Method and models",            "Método y modelos"),
    ("ch02-facts",    "facts",    "The facts of world trade",     "Los hechos del comercio mundial"),
    ("ch03-gravity",  "gravity",  "Gravity",                      "Gravedad"),
    ("ch04-ricardo",  "ricardo",  "Ricardo",                      "Ricardo"),
    ("ch05-specific", "specific", "Specific factors",             "Factores específicos"),
    ("ch06-ho",       "ho",       "Heckscher–Ohlin",              "Heckscher–Ohlin"),
    ("ch07-scale",    "scale",    "External economies of scale",  "Economías de escala externas"),
    ("ch08-krugman",  "krugman",  "Monopolistic competition",     "Competencia monopolística"),
    ("ch09-melitz",   "melitz",   "Heterogeneous firms",          "Firmas heterogéneas"),
    ("ch10-fdi",      "fdi",      "FDI and offshoring",           "IED y offshoring"),
    ("ch11-policy1",  "policy1",  "Instruments of trade policy",  "Instrumentos de política comercial"),
    ("ch12-policy2",  "policy2",  "The political economy of trade", "Economía política del comercio"),
]
CH_NUMBER = {slug.split("-")[1]: i + 1 for i, (slug, *_) in enumerate(CHAPTERS)}

# --------------------------------------------------------------- macros ----

def read_macros(path):
    """macros.tex -> a KaTeX macro table. \\ensuremath is stripped: KaTeX has no
    text mode to guard against, and does not define the command."""
    out = {}
    for m in re.finditer(r"\\newcommand\{\\(\w+)\}(?:\[(\d+)\])?\{", path.read_text()):
        name, nargs = m.group(1), m.group(2)
        body, depth, i = "", 1, m.end()
        src = path.read_text()
        while i < len(src) and depth:
            if src[i] == "{":
                depth += 1
            elif src[i] == "}":
                depth -= 1
                if not depth:
                    break
            body += src[i]
            i += 1
        body = re.sub(r"\\ensuremath\{(.*)\}$", r"\1", body.strip())
        out["\\" + name] = {"body": body, "nargs": int(nargs or 0)}
    return out


# ----------------------------------------------------------- tex cleanup ----

def strip_comments(tex):
    return re.sub(r"(?<!\\)%.*$", "", tex, flags=re.M)


def balanced(src, start):
    """Text of the brace group whose opening brace is at `start`."""
    depth, i = 0, start
    while i < len(src):
        if src[i] == "{":
            depth += 1
        elif src[i] == "}":
            depth -= 1
            if depth == 0:
                return src[start + 1:i], i + 1
        i += 1
    return "", len(src)


def clean(tex):
    """LaTeX prose -> the bank's text format. Mathematics is preserved as
    written; only the surrounding prose commands are translated."""
    s = tex.strip()

    # Lift mathematics out first. Inside math, \% must stay escaped (a bare %
    # opens a comment) and \, is real spacing, so the prose rules below must
    # not reach it.
    held = []

    def hold(m):
        held.append(m.group(0))
        return f"\x00{len(held) - 1}\x00"

    s = re.sub(r"\$\$.+?\$\$|(?<!\\)\$.+?(?<!\\)\$", hold, s, flags=re.S)

    # cross-references cannot resolve outside the book, so keep the noun and
    # drop the pointer rather than printing a dangling number
    s = re.sub(r"(?:,\s*)?\b(?:by|from|in|see|and)\s+\\eqref\{[^}]*\}", "", s)
    s = re.sub(r"\\eqref\{[^}]*\}", "", s)
    s = re.sub(r"(?:Chapter|Chapters)~?\\ref\{ch:([\w-]+)\}",
               lambda m: f"Chapter {CH_NUMBER.get(m.group(1), '')}".strip(), s)
    # "Theorem~\ref{thm:euler}" -> "the theorem": keep the noun, lose the number
    s = re.sub(r"\b(Theorem|Proposition|Lemma|Definition|Example|Section|Assumption|Figure|Table|Problem)s?~?\\ref\{[^}]*\}",
               lambda m: "the " + m.group(1).lower(), s)
    s = re.sub(r"~?\\ref\{[^}]*\}", "", s)

    s = s.replace("~", " ")
    s = re.sub(r"\\textit\{([^{}]*)\}", r"*\1*", s)
    s = re.sub(r"\\emph\{([^{}]*)\}", r"*\1*", s)
    s = re.sub(r"\\textbf\{([^{}]*)\}", r"**\1**", s)
    s = s.replace("\\%", "%").replace("\\&", "&").replace("\\$", "$")
    s = s.replace("``", '"').replace("''", '"').replace("\\,", " ")
    s = s.replace("---", "—")

    # put the mathematics back, in the bank's \( \) and \[ \] delimiters
    def give_back(m):
        tex_span = held[int(m.group(1))]
        if tex_span.startswith("$$"):
            return r"\[" + tex_span[2:-2].strip() + r"\]"
        return r"\(" + tex_span[1:-1].strip() + r"\)"

    s = re.sub(r"\x00(\d+)\x00", give_back, s)

    s = re.sub(r"[ \t]*\n[ \t]*", " ", s)
    s = re.sub(r"\s{2,}", " ", s)
    s = re.sub(r"\s+([,.;:)])", r"\1", s)
    s = s.strip()
    # a lowercased reference may now open a sentence
    s = re.sub(r"(^|(?<=[.!?] ))(the (?:theorem|proposition|lemma|definition|example|section|assumption|figure|table|problem))",
               lambda m: m.group(1) + m.group(2).capitalize(), s)
    return s


# ------------------------------------------------------------ extraction ----

def blocks(tex, env):
    out, i = [], 0
    open_tag, close_tag = f"\\begin{{{env}}}", f"\\end{{{env}}}"
    while True:
        a = tex.find(open_tag, i)
        if a < 0:
            return out
        b = tex.find(close_tag, a)
        out.append(tex[a + len(open_tag):b])
        i = b + len(close_tag)


def split_solution(body):
    a = body.find("\\begin{solution}")
    b = body.find("\\end{solution}")
    return body[:a], body[a + len("\\begin{solution}"):b]


def items(choices_block):
    parts = re.split(r"\\item\b", choices_block)
    return [clean(p) for p in parts[1:] if p.strip()]


def extract(path, topic):
    tex = strip_comments(path.read_text())
    qs, problems = [], []
    n = 0

    for body in blocks(tex, "mcquestion"):
        n += 1
        qid = f"{topic}-mc{n:02d}"
        stem_raw, sol_raw = split_solution(body)
        a = stem_raw.find("\\begin{choices}")
        b = stem_raw.find("\\end{choices}")
        if a < 0:
            problems.append(f"{qid}: no choices block")
            continue
        stem = clean(stem_raw[:a])
        choices = items(stem_raw[a + len("\\begin{choices}"):b])
        sol = sol_raw.strip()
        m = re.match(r"\(?([a-e])\)?[.)]", sol)
        if not m:
            problems.append(f"{qid}: solution does not open with a letter -> {sol[:60]!r}")
            continue
        answer = ord(m.group(1)) - ord("a")
        if answer >= len(choices):
            problems.append(f"{qid}: answer ({m.group(1)}) beyond {len(choices)} choices")
            continue
        explanation = clean(re.sub(r"^\(?[a-e]\)?[.)]\s*", "", sol))
        qs.append({"id": qid, "topic": topic, "difficulty": "medium", "type": "mc",
                   "answer": answer, "en": {"stem": stem, "choices": choices,
                                            "explanation": explanation}})

    n = 0
    for body in blocks(tex, "tfquestion"):
        n += 1
        qid = f"{topic}-tf{n:02d}"
        stem_raw, sol_raw = split_solution(body)
        sol = sol_raw.strip()
        # solutions open "True.", "False, and ...", "False as stated.", "False:"
        m = re.match(r"\**(True|False)\b", sol, re.I)
        if not m:
            problems.append(f"{qid}: solution does not open True/False -> {sol[:60]!r}")
            continue
        qs.append({"id": qid, "topic": topic, "difficulty": "medium", "type": "tf",
                   "answer": m.group(1).lower() == "true",
                   "en": {"stem": clean(stem_raw), "explanation": clean(sol)}})

    return qs, problems


# ------------------------------------------------------------------ main ----

macros = read_macros(notes / "macros.tex")
(out_dir / "macros.js").write_text(
    "/* Generated from the lecture notes' macros.tex by tools/import_notes.py.\n"
    "   Handed to KaTeX so the bank can use the book's own notation verbatim.\n"
    "   Regenerate rather than editing by hand. */\n\n"
    "window.TRADE_MACROS = " + json.dumps(
        {k: (v["body"] if not v["nargs"] else v["body"]) for k, v in macros.items()},
        indent=2, ensure_ascii=False) + ";\n")
print(f"macros exported: {len(macros)}")

all_qs, all_problems = [], []
for slug, topic, en_label, es_label in CHAPTERS:
    path = notes / "chapters" / f"{slug}.tex"
    if not path.exists():
        all_problems.append(f"{slug}: file not found")
        continue
    qs, problems = extract(path, topic)
    mc = sum(1 for q in qs if q["type"] == "mc")
    tf = sum(1 for q in qs if q["type"] == "tf")
    print(f"  {slug:<16} {mc:>2} MC  {tf:>2} TF" + ("   " + "; ".join(problems) if problems else ""))
    all_qs += qs
    all_problems += problems

print(f"\ntotal: {len(all_qs)} questions")
if all_problems:
    print(f"{len(all_problems)} item(s) needing attention:")
    for p in all_problems:
        print("  -", p)

json.dump({"topics": [{"id": t, "en": e, "es": s} for _, t, e, s in CHAPTERS],
           "questions": all_qs},
          open(out_dir / "imported.json", "w"), indent=1, ensure_ascii=False)


# ------------------------------------------------------- emit questions.js --

def raw(s):
    """A String.raw template literal. Backslashes survive; a backtick or ${
    would not, so refuse rather than corrupt the text silently."""
    if "`" in s or "${" in s:
        raise SystemExit(f"cannot place in a template literal: {s[:80]!r}")
    return "R`" + s + "`"


lines = [
    "/* ---------------------------------------------------------------------------",
    "   International Trade — question bank",
    "   Universidad de los Andes · Alfredo Mendoza-Fernández",
    "",
    "   GENERATED from the lecture notes by tools/import_notes.py. The questions are",
    "   the multiple-choice and true/false exercises of each chapter, taken verbatim,",
    "   with each chapter's solution as the explanation.",
    "",
    "   Re-run the importer after editing the notes rather than editing here, or any",
    "   hand edit is lost on the next import:",
    "",
    "       python3 tools/import_notes.py <path to the Notes folder>",
    "",
    "   NOTATION. Questions use the book's own macros (\\Alc, \\relpi, \\ccutD, ...).",
    "   They are exported to data/macros.js from macros.tex and handed to KaTeX at",
    "   render time, so the text here matches the .tex character for character.",
    "   Mathematics is delimited \\( \\) inline and \\[ \\] displayed; a bare $ is just",
    "   a dollar sign. The R before each backtick string is String.raw, which is what",
    "   lets a single backslash survive. Keep it.",
    "",
    "   Fields: id, topic (an id from `topics`), type (\"mc\" | \"tf\"), answer (an index",
    "   from 0 for mc, true/false for tf), and an `en` block. A language block may be",
    "   absent; the page falls back to English.",
    "--------------------------------------------------------------------------- */",
    "",
    "const R = String.raw;",
    "",
    "window.TRADE_QUESTION_BANK = {",
    "",
    "  meta: {",
    '    course: { en: "International Trade", es: "Comercio Internacional" },',
    '    source: { en: "Lecture Notes in International Trade — EAI 3220",',
    '              es: "Apuntes de Comercio Internacional — EAI 3220" },',
    '    institution: "Universidad de los Andes",',
    f'    updated: "2026-11-08"',
    "  },",
    "",
    "  topics: [",
]
for i, (_, t, en_label, es_label) in enumerate(CHAPTERS):
    comma = "," if i < len(CHAPTERS) - 1 else ""
    lines.append(f'    {{ id: "{t}", chapter: {i + 1}, '
                 f'en: "{en_label}", es: "{es_label}" }}{comma}')
lines += ["  ],", "", "  questions: ["]

for i, q in enumerate(all_qs):
    comma = "," if i < len(all_qs) - 1 else ""
    ans = str(q["answer"]).lower() if q["type"] == "tf" else str(q["answer"])
    lines.append("")
    lines.append(f'    {{ id: "{q["id"]}", topic: "{q["topic"]}", '
                 f'type: "{q["type"]}", answer: {ans},')
    lines.append("      en: {")
    lines.append(f'        stem: {raw(q["en"]["stem"])},')
    if q["type"] == "mc":
        lines.append("        choices: [")
        for c in q["en"]["choices"]:
            lines.append(f"          {raw(c)},")
        lines.append("        ],")
    lines.append(f'        explanation: {raw(q["en"]["explanation"])}')
    lines.append("      } }" + comma)

lines += ["", "  ]", "};", ""]
(out_dir / "questions.js").write_text("\n".join(lines))
print(f"\nwrote {out_dir / 'questions.js'} and {out_dir / 'macros.js'}")
