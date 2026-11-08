"""Validate data/questions.js before publishing.

    python3 tools/check_bank.py

Checks structure, answer indices, bilingual completeness, and LaTeX delimiter
balance. Exits non-zero if anything is wrong, so it also works in a pre-commit
hook. Requires node on the PATH, which is only used to evaluate the bank file.
"""

import json
import re
import subprocess
import sys
from pathlib import Path

root = Path(__file__).resolve().parent.parent
bank_file = root / "data/questions.js"

dump = subprocess.run(
    ["node", "-e", f"global.window={{}};require({json.dumps(str(bank_file))});"
                   "process.stdout.write(JSON.stringify(window.TRADE_QUESTION_BANK));"],
    capture_output=True, text=True,
)
if dump.returncode != 0:
    print("The bank file does not parse as JavaScript:\n")
    print(dump.stderr.strip())
    sys.exit(1)

bank = json.loads(dump.stdout)
topics = {t["id"] for t in bank["topics"]}
seen = set()
problems = []


def check_math(where, text):
    opens = len(re.findall(r"\\\(", text)) + len(re.findall(r"\\\[", text))
    closes = len(re.findall(r"\\\)", text)) + len(re.findall(r"\\\]", text))
    if opens != closes:
        problems.append(f"{where}: {opens} math openers but {closes} closers")
    if re.search(r"\\[a-zA-Z]+", text) and opens == 0:
        problems.append(f"{where}: LaTeX command outside any \\( \\) — did the R prefix get dropped?")
    for cmd in re.findall(r"\\([a-zA-Z]+)", text):
        if cmd in ("begin", "end", "input", "usepackage", "newcommand"):
            problems.append(f"{where}: \\{cmd} is not supported by KaTeX")


for q in bank["questions"]:
    qid = q.get("id", "<no id>")
    if qid in seen:
        problems.append(f"{qid}: duplicate id")
    seen.add(qid)

    if q.get("topic") not in topics:
        problems.append(f"{qid}: topic '{q.get('topic')}' is not in the topics list")
    if q.get("type") not in ("mc", "tf"):
        problems.append(f"{qid}: type '{q.get('type')}' is not mc/tf")

    if not q.get("en"):
        problems.append(f"{qid}: missing the English block")
        continue

    for lang in ("en", "es"):
        side = q.get(lang)
        if not side:
            continue  # a language may be absent; the page falls back to English
        for field in ("stem", "explanation"):
            if not side.get(field):
                problems.append(f"{qid} [{lang}]: {field} is empty")
            else:
                check_math(f"{qid} [{lang}] {field}", side[field])

        if q.get("type") == "mc":
            choices = side.get("choices")
            if not isinstance(choices, list) or len(choices) < 2:
                problems.append(f"{qid} [{lang}]: needs at least two choices")
                continue
            for i, c in enumerate(choices):
                check_math(f"{qid} [{lang}] choice {i}", c)
            if not isinstance(q.get("answer"), int) or not 0 <= q["answer"] < len(choices):
                problems.append(f"{qid}: answer {q.get('answer')!r} is not a valid index into {len(choices)} choices")
        else:
            if not isinstance(q.get("answer"), bool):
                problems.append(f"{qid}: a true/false question needs answer true or false")
            if side.get("choices"):
                problems.append(f"{qid} [{lang}]: true/false questions carry no choices")

    if q.get("type") == "mc" and q.get("en") and q.get("es"):
        if len(q["en"].get("choices", [])) != len(q["es"].get("choices", [])):
            problems.append(f"{qid}: the two languages have different numbers of choices")

by_topic = {}
for q in bank["questions"]:
    key = (q.get("topic"), q.get("type"))
    by_topic[key] = by_topic.get(key, 0) + 1

print(f"{len(bank['questions'])} questions")
for t in bank["topics"]:
    mc = by_topic.get((t["id"], "mc"), 0)
    tf = by_topic.get((t["id"], "tf"), 0)
    print(f"  {mc:>3} MC {tf:>3} TF   {t['en']}")
es = sum(1 for q in bank["questions"] if q.get("es"))
print(f"  Spanish translations: {es} of {len(bank['questions'])}")
print()

if problems:
    print(f"{len(problems)} problem(s):")
    for p in problems:
        print("  -", p)
    sys.exit(1)

print("All checks passed.")
