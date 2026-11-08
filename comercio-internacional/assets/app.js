/* International Trade — self-test platform
   No dependencies. The question bank is loaded by data/questions.js. */

const BANK = window.TRADE_QUESTION_BANK;

const STRINGS = {
  en: {
    title: "Test yourself",
    lede: "Build a timed practice control from the course question bank. Pick the topics you want, set a clock, and review every answer with its explanation at the end.",
    topics: "Chapters",
    allTopics: "All chapters",
    any: "Any",
    easy: "Easy", medium: "Medium", hard: "Hard",
    length: "Questions",
    all: "All",
    clock: "Time limit",
    noLimit: "No limit",
    min: "min",
    poolOne: "question matches your selection",
    poolMany: "questions match your selection",
    poolNone: "No questions match. Choose more chapters.",
    start: "Start control",
    of: "of",
    finish: "Finish",
    prev: "Previous",
    next: "Next",
    flag: "Flag",
    unflag: "Unflag",
    true: "True",
    false: "False",
    confirmAll: "You have answered every question. Submit and see your results?",
    confirmSome: "questions are still unanswered. Submit anyway?",
    submit: "Submit",
    back: "Keep working",
    timeUp: "Time is up. Your answers were submitted automatically.",
    results: "Results",
    correct: "correct",
    timeUsed: "Time used",
    questions: "Questions",
    byTopic: "By chapter",
    review: "Review",
    yourAnswer: "Your answer",
    noAnswer: "Not answered",
    correctAnswer: "Correct answer",
    right: "Correct",
    wrong: "Incorrect",
    retry: "Retry the ones you missed",
    again: "New control",
    keys: "Keys: 1–4 to answer, ← → to move, F to flag.",
    outOf: "out of"
  },
  es: {
    title: "Ponte a prueba",
    lede: "Arma un control cronometrado a partir del banco de preguntas del curso. Elige los temas, fija el reloj y revisa cada respuesta con su explicación al final.",
    topics: "Capítulos",
    allTopics: "Todos los capítulos",
    any: "Cualquiera",
    easy: "Fácil", medium: "Media", hard: "Difícil",
    length: "Preguntas",
    all: "Todas",
    clock: "Tiempo límite",
    noLimit: "Sin límite",
    min: "min",
    poolOne: "pregunta coincide con tu selección",
    poolMany: "preguntas coinciden con tu selección",
    poolNone: "Ninguna pregunta coincide. Elige más capítulos.",
    start: "Comenzar control",
    of: "de",
    finish: "Terminar",
    prev: "Anterior",
    next: "Siguiente",
    flag: "Marcar",
    unflag: "Desmarcar",
    true: "Verdadero",
    false: "Falso",
    confirmAll: "Respondiste todas las preguntas. ¿Entregar y ver tus resultados?",
    confirmSome: "preguntas siguen sin responder. ¿Entregar de todos modos?",
    submit: "Entregar",
    back: "Seguir respondiendo",
    timeUp: "Se acabó el tiempo. Tus respuestas se entregaron automáticamente.",
    results: "Resultados",
    correct: "correctas",
    timeUsed: "Tiempo usado",
    questions: "Preguntas",
    byTopic: "Por capítulo",
    review: "Revisión",
    yourAnswer: "Tu respuesta",
    noAnswer: "Sin responder",
    correctAnswer: "Respuesta correcta",
    right: "Correcta",
    wrong: "Incorrecta",
    retry: "Repetir las que fallaste",
    again: "Nuevo control",
    keys: "Teclas: 1–4 para responder, ← → para moverte, F para marcar.",
    outOf: "de"
  }
};

const KEYS = ["A", "B", "C", "D", "E", "F"];
const LENGTHS = [5, 10, 15, 20, 30, 0];
const CLOCKS = [10, 20, 30, 45, 60, 0];

let lang = "es";
let pick = { topics: new Set(), length: 10, clock: 20 };
let run = null;

/* ------------------------------------------------------------------ utils */

const $ = (id) => document.getElementById(id);
const t = (k) => STRINGS[lang][k];

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

function shuffle(a) {
  const out = a.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function topicName(id) {
  const tp = BANK.topics.find((x) => x.id === id);
  if (!tp) return id;
  return (tp.chapter ? tp.chapter + ". " : "") + (tp[lang] || tp.en);
}

function clock(ms) {
  const s = Math.max(0, Math.round(ms / 1000));
  return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
}

function save() {
  try {
    localStorage.setItem("trade-quiz", JSON.stringify({
      lang,
      topics: [...pick.topics],
      length: pick.length,
      clock: pick.clock
    }));
  } catch (e) { /* storage unavailable; preferences simply do not persist */ }
}

function load() {
  try {
    const raw = localStorage.getItem("trade-quiz");
    if (!raw) return;
    const p = JSON.parse(raw);
    if (p.lang === "en" || p.lang === "es") lang = p.lang;
    if (Array.isArray(p.topics)) pick.topics = new Set(p.topics.filter((x) => BANK.topics.some((tp) => tp.id === x)));
    if (LENGTHS.includes(p.length)) pick.length = p.length;
    if (CLOCKS.includes(p.clock)) pick.clock = p.clock;
  } catch (e) { /* ignore unreadable preferences */ }
}

/* ------------------------------------------------------------- the choices */

function choicesOf(q) {
  if (q.type === "tf") return [t("true"), t("false")];
  return side(q).choices;
}

function correctIndex(q) {
  if (q.type === "tf") return q.answer === true ? 0 : 1;
  return q.answer;
}

/* A question may carry only some languages; English is the fallback. */
const side = (q) => q[lang] || q.en;

function pool() {
  return BANK.questions.filter((q) => pick.topics.size === 0 || pick.topics.has(q.topic));
}

/* ------------------------------------------------------------------ setup */

function view(name) {
  $("view-setup").hidden = name !== "setup";
  $("view-exam").hidden = name !== "exam";
  $("view-results").hidden = name !== "results";
  window.scrollTo(0, 0);
}

function chip(label, pressed, onClick, count) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "chip";
  b.setAttribute("aria-pressed", pressed ? "true" : "false");
  b.innerHTML = markup(label) + (count === undefined ? "" : ' <span class="n">' + count + "</span>");
  b.addEventListener("click", onClick);
  return b;
}

function renderSetup() {
  $("course-name").textContent = BANK.meta.course[lang];
  $("setup-title").textContent = t("title");
  $("setup-lede").textContent = t("lede");
  $("lg-topics").textContent = t("topics");
  $("lg-len").textContent = t("length");
  $("lg-clock").textContent = t("clock");
  $("start").textContent = t("start");
  $("lang-en").setAttribute("aria-pressed", lang === "en" ? "true" : "false");
  $("lang-es").setAttribute("aria-pressed", lang === "es" ? "true" : "false");

  const tb = $("topic-chips");
  tb.innerHTML = "";
  tb.appendChild(chip(t("allTopics"), pick.topics.size === 0, () => { pick.topics.clear(); renderSetup(); save(); }));
  BANK.topics.forEach((tp) => {
    const n = BANK.questions.filter((q) => q.topic === tp.id).length;
    const label = (tp.chapter ? tp.chapter + ". " : "") + (tp[lang] || tp.en);
    tb.appendChild(chip(label, pick.topics.has(tp.id), () => {
      pick.topics.has(tp.id) ? pick.topics.delete(tp.id) : pick.topics.add(tp.id);
      renderSetup(); save();
    }, n));
  });

  const lb = $("len-chips");
  lb.innerHTML = "";
  LENGTHS.forEach((n) => {
    lb.appendChild(chip(n === 0 ? t("all") : String(n), pick.length === n, () => {
      pick.length = n; renderSetup(); save();
    }));
  });

  const cb = $("clock-chips");
  cb.innerHTML = "";
  CLOCKS.forEach((m) => {
    cb.appendChild(chip(m === 0 ? t("noLimit") : m + " " + t("min"), pick.clock === m, () => {
      pick.clock = m; renderSetup(); save();
    }));
  });

  const n = pool().length;
  const note = $("pool-note");
  if (n === 0) {
    note.textContent = t("poolNone");
    $("start").disabled = true;
  } else {
    note.innerHTML = "<strong>" + n + "</strong> " + (n === 1 ? t("poolOne") : t("poolMany"));
    $("start").disabled = false;
  }
  $("hint").textContent = t("keys");
}

/* ------------------------------------------------------------------- exam */

function begin(questions, minutes) {
  run = {
    items: questions.map((q) => ({ q, order: q.type === "mc" ? shuffle(side(q).choices.map((_, i) => i)) : [0, 1] })),
    answers: new Array(questions.length).fill(null),
    flags: new Array(questions.length).fill(false),
    i: 0,
    started: Date.now(),
    limit: minutes > 0 ? minutes * 60000 : 0,
    ended: 0
  };
  view("exam");
  $("confirm").hidden = true;
  renderExam();
  tick();
  run.timer = setInterval(tick, 250);
}

function start() {
  const p = shuffle(pool());
  const n = pick.length === 0 ? p.length : Math.min(pick.length, p.length);
  begin(p.slice(0, n), pick.clock);
}

function tick() {
  if (!run) return;
  const el = $("timer");
  if (run.limit === 0) {
    el.textContent = clock(Date.now() - run.started);
    return;
  }
  const left = run.limit - (Date.now() - run.started);
  el.textContent = clock(left);
  el.classList.toggle("low", left < 120000);
  if (left <= 0) finish(true);
}

function renderExam() {
  const { q, order } = run.items[run.i];
  const n = run.items.length;

  $("counter").textContent = (run.i + 1) + " " + t("of") + " " + n;
  $("track-fill").style.width = (100 * run.answers.filter((a) => a !== null).length / n) + "%";
  $("finish").textContent = t("finish");
  $("prev").textContent = t("prev");
  $("next").textContent = t("next");
  $("flag").textContent = run.flags[run.i] ? t("unflag") : t("flag");
  $("flag").classList.toggle("flagged", run.flags[run.i]);
  $("prev").disabled = run.i === 0;
  $("next").disabled = run.i === n - 1;

  $("tag-topic").textContent = topicName(q.topic);
  $("stem").innerHTML = markup(side(q).stem);

  const labels = choicesOf(q);
  const box = $("choices");
  box.innerHTML = "";
  order.forEach((orig, slot) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "choice";
    b.setAttribute("aria-pressed", run.answers[run.i] === orig ? "true" : "false");
    b.innerHTML = '<span class="key">' + KEYS[slot] + '</span><span class="body">' + markup(labels[orig]) + "</span>";
    b.addEventListener("click", () => {
      run.answers[run.i] = orig;
      renderExam();
      if (run.i < run.items.length - 1) setTimeout(() => { run.i++; renderExam(); }, 120);
    });
    box.appendChild(b);
  });

  const map = $("qmap");
  map.innerHTML = "";
  run.items.forEach((_, k) => {
    const d = document.createElement("button");
    d.type = "button";
    d.className = "dot" + (run.answers[k] !== null ? " done" : "") + (run.flags[k] ? " flag" : "") + (k === run.i ? " here" : "");
    d.textContent = k + 1;
    d.addEventListener("click", () => { run.i = k; renderExam(); });
    map.appendChild(d);
  });
}

function askFinish() {
  const missing = run.answers.filter((a) => a === null).length;
  $("confirm-text").textContent = missing === 0
    ? t("confirmAll")
    : missing + " " + t("confirmSome");
  $("confirm-yes").textContent = t("submit");
  $("confirm-no").textContent = t("back");
  $("confirm").hidden = false;
  $("confirm").scrollIntoView({ behavior: "smooth", block: "center" });
}

function finish(auto) {
  clearInterval(run.timer);
  run.ended = Date.now();
  run.auto = !!auto;
  renderResults();
  view("results");
}

/* ---------------------------------------------------------------- results */

function renderResults() {
  const n = run.items.length;
  const got = run.items.map((it, k) => run.answers[k] !== null && run.answers[k] === correctIndex(it.q));
  const score = got.filter(Boolean).length;

  $("results-title").textContent = t("results");
  $("timeup-note").hidden = !run.auto;
  $("timeup-note").textContent = t("timeUp");
  $("score").innerHTML = score + '<small> / ' + n + "</small>";
  $("score-pct").innerHTML = "<b>" + Math.round(100 * score / n) + "%</b> " + t("correct");
  $("score-time").innerHTML = t("timeUsed") + " <b>" + clock(run.ended - run.started) + "</b>";
  $("lg-breakdown").textContent = t("byTopic");
  $("lg-review").textContent = t("review");
  $("retry").textContent = t("retry");
  $("again").textContent = t("again");

  const byTopic = new Map();
  run.items.forEach((it, k) => {
    const r = byTopic.get(it.q.topic) || { ok: 0, n: 0 };
    r.n++;
    if (got[k]) r.ok++;
    byTopic.set(it.q.topic, r);
  });

  const bd = $("breakdown");
  bd.innerHTML = "";
  [...byTopic.entries()].sort((a, b) => (a[1].ok / a[1].n) - (b[1].ok / b[1].n)).forEach(([id, r]) => {
    const row = document.createElement("div");
    row.className = "brow";
    row.innerHTML =
      '<span class="name">' + markup(topicName(id)) + "</span>" +
      '<span class="bar"><i style="width:' + (100 * r.ok / r.n) + '%"></i></span>' +
      '<span class="frac">' + r.ok + "/" + r.n + "</span>";
    bd.appendChild(row);
  });

  const rv = $("review");
  rv.innerHTML = "";
  run.items.forEach((it, k) => {
    const q = it.q;
    const labels = choicesOf(q);
    const given = run.answers[k];
    const truth = correctIndex(q);
    const ok = got[k];

    const card = document.createElement("article");
    card.className = "rcard " + (ok ? "ok" : "no");
    card.innerHTML =
      '<div class="rhead"><span>' + (k + 1) + " / " + n + "</span><span>" + markup(topicName(q.topic)) + "</span>" +
      '<span class="verdict ' + (ok ? "ok" : "no") + '">' + (ok ? t("right") : t("wrong")) + "</span></div>" +
      '<p class="rstem">' + markup(side(q).stem) + "</p>" +
      '<p class="rline given ' + (ok ? "" : "no") + '"><span class="lbl">' + t("yourAnswer") + "</span>" +
        (given === null ? t("noAnswer") : markup(labels[given])) + "</p>" +
      (ok ? "" : '<p class="rline truth"><span class="lbl">' + t("correctAnswer") + "</span>" + markup(labels[truth]) + "</p>") +
      '<p class="why">' + markup(side(q).explanation) + "</p>";
    rv.appendChild(card);
  });

  $("retry").hidden = score === n;
  run.missed = run.items.filter((_, k) => !got[k]).map((it) => it.q);
}

/* ------------------------------------------------------------------- wire */

function setLang(l) {
  lang = l;
  save();
  document.documentElement.lang = l;
  renderSetup();
  if (!$("view-exam").hidden) renderExam();
  if (!$("view-results").hidden) renderResults();
}

load();
document.documentElement.lang = lang;
renderSetup();
view("setup");

$("lang-en").addEventListener("click", () => setLang("en"));
$("lang-es").addEventListener("click", () => setLang("es"));
$("start").addEventListener("click", start);
$("prev").addEventListener("click", () => { run.i--; renderExam(); });
$("next").addEventListener("click", () => { run.i++; renderExam(); });
$("flag").addEventListener("click", () => { run.flags[run.i] = !run.flags[run.i]; renderExam(); });
$("finish").addEventListener("click", askFinish);
$("confirm-no").addEventListener("click", () => { $("confirm").hidden = true; });
$("confirm-yes").addEventListener("click", () => finish(false));
$("again").addEventListener("click", () => { run = null; renderSetup(); view("setup"); });
$("retry").addEventListener("click", () => begin(shuffle(run.missed), pick.clock));

document.addEventListener("keydown", (e) => {
  if ($("view-exam").hidden || !run) return;
  if (!$("confirm").hidden) {
    if (e.key === "Escape") $("confirm").hidden = true;
    return;
  }
  const slots = run.items[run.i].order;
  if (/^[1-9]$/.test(e.key)) {
    const slot = Number(e.key) - 1;
    if (slot < slots.length) {
      run.answers[run.i] = slots[slot];
      renderExam();
      if (run.i < run.items.length - 1) setTimeout(() => { run.i++; renderExam(); }, 120);
    }
  } else if (e.key === "ArrowRight" && run.i < run.items.length - 1) {
    run.i++; renderExam();
  } else if (e.key === "ArrowLeft" && run.i > 0) {
    run.i--; renderExam();
  } else if (e.key.toLowerCase() === "f") {
    run.flags[run.i] = !run.flags[run.i]; renderExam();
  }
});
