/* Shared text and mathematics renderer.
   Used by the quiz (assets/app.js) and the game (game/game.js).

   Text in the bank is LaTeX between \( \) or \[ \], plus *italic* and
   **bold**. KaTeX renders the mathematics when it is loaded, using the book's
   own macros from data/macros.js. When it is not, a plain-text fallback keeps
   the notation readable rather than showing raw source. */

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const GREEK = {
  alpha: "α", beta: "β", gamma: "γ", delta: "δ", Delta: "Δ", epsilon: "ε",
  varepsilon: "ε", zeta: "ζ", eta: "η", theta: "θ", kappa: "κ", lambda: "λ",
  mu: "μ", nu: "ν", xi: "ξ", pi: "π", rho: "ρ", sigma: "σ", Sigma: "Σ",
  tau: "τ", phi: "φ", varphi: "φ", chi: "χ", psi: "ψ", omega: "ω", Omega: "Ω"
};

/* Reads a brace group starting just after its opening brace. */
function group(s, start) {
  let depth = 1, i = start;
  while (i < s.length && depth > 0) {
    if (s[i] === "{") depth++;
    else if (s[i] === "}") depth--;
    i++;
  }
  return depth === 0 ? { text: s.slice(start, i - 1), end: i } : null;
}

/* \frac{a}{b} -> a/b, with nesting. A plain regex cannot do this: the numerator
   of \frac{Y_i^{\,a}}{D^{\,c}} contains its own braces. */
function fracs(s) {
  const wrap = (x) => (/[-+×·/\s]/.test(x) ? "(" + x + ")" : x);
  let out = "", i = 0;
  while (i < s.length) {
    const m = /\\[dt]?frac\s*\{/.exec(s.slice(i));
    if (!m) return out + s.slice(i);
    out += s.slice(i, i + m.index);
    const num = group(s, i + m.index + m[0].length);
    if (!num) return out + s.slice(i + m.index);
    let p = num.end;
    while (s[p] === " ") p++;
    if (s[p] !== "{") { out += wrap(fracs(num.text)); i = p; continue; }
    const den = group(s, p + 1);
    if (!den) { out += wrap(fracs(num.text)); i = p + 1; continue; }
    out += wrap(fracs(num.text)) + "/" + wrap(fracs(den.text));
    i = den.end;
  }
  return out;
}

/* Used when KaTeX is unavailable — a blocked CDN, no network, the bundled
   preview. Renders the TeX as readable text instead of showing the source. */
function plainMath(tex) {
  // expand the book's macros first, so the fallback shows notation, not \Alc
  let s = tex;
  for (let pass = 0; pass < 4; pass++) {
    const before = s;
    s = s.replace(/\\[a-zA-Z]+/g, (name) => (name in MACROS ? MACROS[name] : name));
    if (s === before) break;
  }

  // font commands carry no meaning without KaTeX; keep their contents
  for (let pass = 0; pass < 4; pass++) {
    const before = s;
    s = s.replace(/\\(?:mathrm|mathsf|mathit|mathbf|mathcal|mathbb|text|operatorname)\s*\{([^{}]*)\}/g, "$1");
    if (s === before) break;
  }

  s = fracs(s)
    .replace(/\\sqrt\s*\{([^{}]*)\}/g, "√($1)").replace(/\\sqrt\s*(\w)/g, "√$1")
    .replace(/\\prime/g, "′")
    .replace(/\\times/g, " × ").replace(/\\cdot/g, " · ")
    .replace(/\\leq/g, " ≤ ").replace(/\\geq/g, " ≥ ").replace(/\\neq/g, " ≠ ")
    .replace(/\\approx/g, " ≈ ").replace(/\\to/g, " → ").replace(/\\ast/g, "*")
    .replace(/\\%/g, "%").replace(/\\\$/g, "$")
    .replace(/\\(?:,|;|!|:|quad|qquad)/g, " ")
    .replace(/\\([a-zA-Z]+)/g, (m, name) => GREEK[name] || name);

  s = esc(s)
    .replace(/\^\{([^{}]*)\}/g, "<sup>$1</sup>").replace(/\^(\w)/g, "<sup>$1</sup>")
    .replace(/_\{([^{}]*)\}/g, "<sub>$1</sub>").replace(/_(\w)/g, "<sub>$1</sub>")
    .replace(/[{}]/g, "")
    .replace(/\s{2,}/g, " ");

  return s;
}

/* The book's own macros, exported from macros.tex. Handed to KaTeX so the bank
   can carry the notes' notation unchanged. */
const MACROS = window.TRADE_MACROS || {};

function math(tex, display) {
  if (window.katex) {
    try {
      return window.katex.renderToString(tex, {
        displayMode: display, throwOnError: false, macros: MACROS
      });
    } catch (e) { /* malformed TeX: fall through to the plain rendering */ }
  }
  return '<span class="tex' + (display ? " tex-block" : "") + '">' + plainMath(tex) + "</span>";
}

/* Math is lifted out before the prose is escaped and marked up, so that a `*`
   inside TeX is never read as italics. */
function markup(s) {
  const held = [];
  let out = s.replace(/\\\[([\s\S]+?)\\\]|\\\(([\s\S]+?)\\\)/g, (m, block, inline) => {
    held.push(block !== undefined ? { tex: block, display: true } : { tex: inline, display: false });
    return "\u0000" + (held.length - 1) + "\u0000";
  });

  out = esc(out)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");

  return out.replace(/\u0000(\d+)\u0000/g, (m, k) => math(held[k].tex, held[k].display));
}
