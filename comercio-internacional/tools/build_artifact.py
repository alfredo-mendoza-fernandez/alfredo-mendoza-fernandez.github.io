"""Flatten a page of this site into one self-contained HTML file.

    python3 tools/build_artifact.py           # the quiz  -> artifact.html
    python3 tools/build_artifact.py game      # the game  -> game-artifact.html

The repo version (separate .css, .js and data files) is what GitHub Pages
serves. This is only for the shareable preview, which has to be one file.
"""

import re
import sys
from pathlib import Path

root = Path(__file__).resolve().parent.parent
page_dir = root / sys.argv[1] if len(sys.argv) > 1 else root
out_name = (sys.argv[1] + "-artifact.html") if len(sys.argv) > 1 else "artifact.html"

html = (page_dir / "index.html").read_text()

# The preview runs under a content policy that permits scripts from the CDN but
# not stylesheets or font files, so KaTeX would render unstyled there. Strip it
# and let the page fall back to its plain-text maths rendering.
html = re.sub(r"<!-- katex:start -->.*?<!-- katex:end -->\s*", "", html, flags=re.S)

title = re.search(r"<title>(.*?)</title>", html, re.S).group(1)
fonts = re.search(r'<link rel="stylesheet" href="https://fonts\.googleapis\.com[^>]*>', html).group(0)
body = re.search(r"<body>(.*)</body>", html, re.S).group(1)

parts = [
    f"<title>{title}</title>",
    '<meta name="claude:viewport-fit-sides" content="cover">',
    '<link rel="preconnect" href="https://fonts.googleapis.com">',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    fonts,
]

# inline every local stylesheet, in the order the page lists them
for href in re.findall(r'<link rel="stylesheet" href="(?!https?:)([^"]+)"', html):
    parts += ["<style>", (page_dir / href).resolve().read_text(), "</style>"]

# the body, minus its own script tags
parts.append(re.sub(r'\s*<script src="[^"]+"></script>', "", body))

# inline every local script, in the order the page lists them
scripts = re.findall(r'<script src="(?!https?:)([^"]+)"></script>', html)
for src in scripts:
    parts += ["<script>", (page_dir / src).resolve().read_text(), "</script>"]

out = "\n".join(parts)
(root / out_name).write_text(out)
print(f"{out_name}  {len(out) / 1024:.1f} KB   ({len(scripts)} scripts inlined)")
