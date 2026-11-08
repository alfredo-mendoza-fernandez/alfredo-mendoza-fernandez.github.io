"""Bundle the site into a single HTML file.

The repo version (index.html + assets/ + data/) is what GitHub Pages serves.
This script flattens the same source into one self-contained file, used to
publish the shareable preview. Run it after editing the question bank:

    python3 tools/build_artifact.py
"""

import re
from pathlib import Path

root = Path(__file__).resolve().parent.parent

html = (root / "index.html").read_text()
css = (root / "assets/styles.css").read_text()
app = (root / "assets/app.js").read_text()
bank = (root / "data/questions.js").read_text()

title = re.search(r"<title>(.*?)</title>", html, re.S).group(1)
fonts = re.search(r'<link rel="stylesheet" href="https://fonts\.googleapis\.com[^>]*>', html).group(0)
body = re.search(r"<body>(.*)</body>", html, re.S).group(1)
body = re.sub(r'\s*<script src="[^"]+"></script>', "", body)

out = "\n".join([
    f"<title>{title}</title>",
    '<meta name="claude:viewport-fit-sides" content="cover">',
    '<link rel="preconnect" href="https://fonts.googleapis.com">',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    fonts,
    "<style>", css, "</style>",
    body,
    "<script>", bank, "</script>",
    "<script>", app, "</script>",
])

(root / "artifact.html").write_text(out)
print(f"artifact.html  {len(out) / 1024:.1f} KB")
