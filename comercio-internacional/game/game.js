/* Comparative Advantage — a battle prototype over the Chapter 4 question bank.

   One dungeon, four opponents, no overworld. Every opponent is a misconception
   the Ricardian chapter exists to refute, so winning a fight means dismantling
   a specific bad argument rather than filling a progress bar.

   There is no clock. The questions take thirty seconds to think about and a
   timer would only punish the ones worth thinking about.

   Text and mathematics are rendered by ../assets/render.js, which both this and
   the quiz share. Questions come from ../data/questions.js unchanged. */

const CHAPTER = "ricardo";

const HERO = { hp: 34, focus: 3, maxFocus: 5 };
const LEVELS = [0, 30, 75, 140, 230];       // cumulative XP for levels 1..5

// ------------------------------------------------------------- opponents --

const FOES = [
  {
    key: "mercantilist",
    name: "The Mercantilist",
    line: "Holds that exports enrich a nation and imports impoverish it.",
    hp: 24, atk: 5, xp: 18
  },
  {
    key: "absolute",
    name: "Absolute Advantage",
    line: "Insists the country better at making everything should make everything.",
    hp: 32, atk: 5, xp: 24
  },
  {
    key: "pauper",
    name: "The Pauper-Labour Argument",
    line: "Claims that trading with a low-wage country must leave you poorer.",
    hp: 40, atk: 6, xp: 30
  },
  {
    key: "autarky",
    name: "Autarky",
    line: "The closed economy itself. Produces all it consumes, and consumes all it can.",
    hp: 70, atk: 7, xp: 60, boss: true
  }
];

/* Drawn rather than sourced: original geometric figures, no external assets. */
const ART = {
  mercantilist: `
    <svg class="foe breathe" viewBox="0 0 200 200" role="img" aria-label="A hoarding chest with glowing eyes">
      <ellipse cx="100" cy="176" rx="62" ry="9" fill="#000" opacity="0.5"/>
      <circle cx="54" cy="162" r="11" fill="var(--gold)" opacity="0.85"/>
      <circle cx="40" cy="168" r="8" fill="var(--gold)" opacity="0.6"/>
      <circle cx="148" cy="164" r="10" fill="var(--gold)" opacity="0.75"/>
      <path d="M44 150 L58 92 L142 92 L156 150 Z" fill="var(--accent-dim)" stroke="var(--accent)" stroke-width="3"/>
      <path d="M58 92 Q100 58 142 92 Z" fill="var(--stage)" stroke="var(--accent)" stroke-width="3"/>
      <rect x="92" y="104" width="16" height="22" rx="3" fill="var(--gold)"/>
      <circle cx="100" cy="112" r="3.5" fill="var(--ground)"/>
      <path d="M74 80 q8 -8 16 0" stroke="var(--accent)" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M110 80 q8 -8 16 0" stroke="var(--accent)" stroke-width="5" fill="none" stroke-linecap="round"/>
      <circle cx="82" cy="78" r="4" fill="var(--gold)"/>
      <circle cx="118" cy="78" r="4" fill="var(--gold)"/>
    </svg>`,

  absolute: `
    <svg class="foe breathe" viewBox="0 0 200 200" role="img" aria-label="A crowned titan with both arms raised">
      <ellipse cx="100" cy="178" rx="56" ry="8" fill="#000" opacity="0.5"/>
      <rect x="34" y="78" width="22" height="62" rx="10" fill="var(--accent-dim)" stroke="var(--accent)" stroke-width="3"/>
      <rect x="144" y="78" width="22" height="62" rx="10" fill="var(--accent-dim)" stroke="var(--accent)" stroke-width="3"/>
      <rect x="60" y="86" width="80" height="84" rx="12" fill="var(--accent-dim)" stroke="var(--accent)" stroke-width="3"/>
      <rect x="74" y="40" width="52" height="46" rx="10" fill="var(--stage)" stroke="var(--accent)" stroke-width="3"/>
      <path d="M68 38 L78 20 L90 34 L100 14 L110 34 L122 20 L132 38 Z" fill="var(--gold)"/>
      <circle cx="88" cy="62" r="5" fill="var(--gold)"/>
      <circle cx="112" cy="62" r="5" fill="var(--gold)"/>
      <path d="M78 118 h44 M78 134 h44" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" opacity="0.7"/>
    </svg>`,

  pauper: `
    <svg class="foe breathe" viewBox="0 0 200 200" role="img" aria-label="A tall hooded figure">
      <ellipse cx="100" cy="180" rx="44" ry="7" fill="#000" opacity="0.5"/>
      <path d="M100 18 Q142 52 134 178 L66 178 Q58 52 100 18 Z" fill="var(--accent-dim)" stroke="var(--accent)" stroke-width="3"/>
      <path d="M100 30 Q126 56 122 104 Q100 118 78 104 Q74 56 100 30 Z" fill="var(--stage)"/>
      <circle cx="88" cy="74" r="4.5" fill="var(--gold)"/>
      <circle cx="112" cy="74" r="4.5" fill="var(--gold)"/>
      <path d="M86 92 q14 8 28 0" stroke="var(--ink-soft)" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M64 120 L34 150" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
      <path d="M136 120 L166 150" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
      <path d="M78 140 h44 M74 158 h52" stroke="var(--accent)" stroke-width="3" opacity="0.55" stroke-linecap="round"/>
    </svg>`,

  autarky: `
    <svg class="foe breathe" viewBox="0 0 200 200" role="img" aria-label="A sealed fortress with a single closed eye">
      <ellipse cx="100" cy="182" rx="68" ry="9" fill="#000" opacity="0.55"/>
      <path d="M100 14 L176 56 L176 146 L100 188 L24 146 L24 56 Z"
            fill="var(--accent-dim)" stroke="var(--accent)" stroke-width="4"/>
      <path d="M100 36 L156 68 L156 134 L100 166 L44 134 L44 68 Z"
            fill="var(--stage)" stroke="var(--accent)" stroke-width="3"/>
      <path d="M100 58 L136 79 L136 123 L100 144 L64 123 L64 79 Z"
            fill="none" stroke="var(--accent)" stroke-width="2" opacity="0.6"/>
      <ellipse cx="100" cy="101" rx="26" ry="15" fill="var(--ground)" stroke="var(--gold)" stroke-width="2.5"/>
      <circle cx="100" cy="101" r="8" fill="var(--accent)"/>
      <circle cx="100" cy="101" r="3" fill="var(--gold)"/>
      <rect x="86" y="146" width="28" height="30" rx="3" fill="var(--ground)" stroke="var(--accent)" stroke-width="2.5"/>
      <path d="M24 56 L8 46 M176 56 L192 46 M24 146 L8 156 M176 146 L192 156"
            stroke="var(--accent)" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
    </svg>`
};

const MINI = {}; // small versions for the roster
Object.keys(ART).forEach((k) => {
  MINI[k] = ART[k].replace('class="foe breathe"', 'class="mini"');
});

// ------------------------------------------------------------------ items --

const ITEMS = [
  {
    key: "erratum", name: "Erratum", cost: 1, mcOnly: true,
    blurb: "Strikes out two wrong options.",
    use(S) {
      const wrong = S.order
        .map((orig, slot) => ({ orig, slot }))
        .filter((x) => x.orig !== correctIndex(S.q) && !S.removed.includes(x.slot));
      shuffle(wrong).slice(0, 2).forEach((x) => S.removed.push(x.slot));
      return "Two wrong options struck out.";
    }
  },
  {
    key: "footnote", name: "Footnote", cost: 1, mcOnly: true,
    blurb: "Reveals the opening of the explanation.",
    use(S) {
      const full = S.q.en.explanation;
      const cut = full.search(/\.\s/);
      S.hint = cut > 0 ? full.slice(0, cut + 1) : full;
      return "You consult the footnote.";
    }
  },
  {
    key: "revision", name: "Revision", cost: 1,
    blurb: "Restores 10 health.",
    use(S) {
      const before = S.hero.hp;
      S.hero.hp = Math.min(S.hero.maxHp, S.hero.hp + 10);
      float("+" + (S.hero.hp - before), true);
      return "You revise, and recover " + (S.hero.hp - before) + ".";
    }
  }
];

// ------------------------------------------------------------------ state --

const $ = (id) => document.getElementById(id);
const BANK = window.TRADE_QUESTION_BANK;
const QUESTIONS = BANK.questions.filter((q) => q.topic === CHAPTER);

let S = null;

function shuffle(a) {
  const out = a.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function correctIndex(q) {
  if (q.type === "tf") return q.answer === true ? 0 : 1;
  return q.answer;
}

function choicesOf(q) {
  return q.type === "tf" ? ["True", "False"] : q.en.choices;
}

function levelFor(xp) {
  let l = 1;
  while (l < LEVELS.length && xp >= LEVELS[l]) l++;
  return l;
}

function save() {
  try {
    localStorage.setItem("trade-rpg", JSON.stringify({
      foe: S.foeIndex, xp: S.hero.xp, hp: S.hero.hp,
      maxHp: S.hero.maxHp, focus: S.hero.focus,
      asked: S.tally.asked, right: S.tally.right
    }));
  } catch (e) { /* no storage: the run simply does not survive a reload */ }
}

function loadSave() {
  try {
    const raw = localStorage.getItem("trade-rpg");
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}

function clearSave() {
  try { localStorage.removeItem("trade-rpg"); } catch (e) { /* nothing to clear */ }
}

// ----------------------------------------------------------------- screens --

function show(name) {
  ["title", "battle", "over"].forEach((v) => { $("view-" + v).hidden = v !== name; });
  window.scrollTo(0, 0);
}

function renderTitle() {
  const saved = loadSave();
  $("resume").hidden = !saved;
  if (saved) {
    const foe = FOES[Math.min(saved.foe, FOES.length - 1)];
    $("resume").textContent = "Continue — " + foe.name;
  }
  const list = $("roster");
  list.innerHTML = "";
  FOES.forEach((f, i) => {
    const row = document.createElement("div");
    row.className = "rosteritem" + (saved && saved.foe > i ? " done" : "");
    row.innerHTML = MINI[f.key] +
      '<div class="who"><div class="nm">' + f.name + "</div>" +
      '<div class="bl">' + f.line + "</div></div>";
    list.appendChild(row);
  });
  show("title");
}

function startRun(saved) {
  const xp = saved ? saved.xp : 0;
  S = {
    foeIndex: saved ? saved.foe : 0,
    hero: {
      xp,
      lvl: levelFor(xp),
      maxHp: saved ? saved.maxHp : HERO.hp,
      hp: saved ? saved.hp : HERO.hp,
      focus: saved ? saved.focus : HERO.focus
    },
    tally: { asked: saved ? saved.asked : 0, right: saved ? saved.right : 0 },
    streak: 0,
    deck: [],
    q: null, order: [], removed: [], hint: null, assisted: false, answered: false
  };
  nextFoe();
}

function nextFoe() {
  const f = FOES[S.foeIndex];
  S.foe = { ...f, hp: f.hp, maxHp: f.hp };
  S.deck = shuffle(QUESTIONS);
  draw();
  show("battle");
  log(S.foe.name + " blocks the way.");
}

function draw() {
  if (!S.deck.length) S.deck = shuffle(QUESTIONS);
  S.q = S.deck.pop();
  S.order = S.q.type === "mc"
    ? shuffle(S.q.en.choices.map((_, i) => i))
    : [0, 1];
  S.removed = [];
  S.hint = null;
  S.assisted = false;
  S.answered = false;
  render();
}

function log(msg) { $("log").textContent = msg; }

function float(text, heal) {
  const el = document.createElement("div");
  el.className = "floater" + (heal ? " heal" : "");
  el.textContent = text;
  $("stage").appendChild(el);
  setTimeout(() => el.remove(), 950);
}

function render() {
  const h = S.hero, f = S.foe;

  $("crumb").innerHTML = "Chapter 4 · Ricardo &nbsp;|&nbsp; <b>" +
    (S.foeIndex + 1) + " of " + FOES.length + "</b>";

  $("art").innerHTML = ART[f.key];
  $("foename").textContent = f.name;
  $("foeline").textContent = f.line;
  $("foehp").style.width = (100 * Math.max(0, f.hp) / f.maxHp) + "%";
  $("foenum").textContent = Math.max(0, f.hp) + " / " + f.maxHp;

  $("lvl").innerHTML = "Level <span>" + h.lvl + "</span>";
  $("herohp").style.width = (100 * Math.max(0, h.hp) / h.maxHp) + "%";
  $("herohp").parentElement.classList.toggle("low", h.hp <= h.maxHp * 0.3);
  $("heronum").textContent = Math.max(0, h.hp) + " / " + h.maxHp;

  const base = LEVELS[h.lvl - 1], next = LEVELS[h.lvl] || base;
  $("xpfill").style.width = next > base ? (100 * (h.xp - base) / (next - base)) + "%" : "100%";
  $("xpnum").textContent = h.xp + " XP";
  $("streak").textContent = S.streak >= 2 ? "streak ×" + S.streak : "";

  // items
  const bar = $("items");
  bar.innerHTML = "";
  ITEMS.forEach((it) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "item";
    b.innerHTML = it.name + '<span class="cost">◆' + it.cost + "</span>";
    const blocked = S.answered || h.focus < it.cost ||
      (it.mcOnly && S.q.type === "tf") ||
      (it.key === "erratum" && S.removed.length);
    b.disabled = blocked;
    b.title = it.mcOnly && S.q.type === "tf"
      ? "Only useful on a multiple-choice question"
      : it.blurb;
    b.addEventListener("click", () => {
      h.focus -= it.cost;
      S.assisted = true;
      log(it.use(S));
      render();
    });
    bar.appendChild(b);
  });
  $("focusnum").textContent = "◆".repeat(h.focus) + "·".repeat(Math.max(0, HERO.maxFocus - h.focus));

  // question
  $("qtag").textContent = S.q.type === "tf" ? "True or false" : "Multiple choice";
  $("stem").innerHTML = markup(S.q.en.stem);

  const labels = choicesOf(S.q);
  const box = $("choices");
  box.innerHTML = "";
  S.order.forEach((orig, slot) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "choice" + (S.removed.includes(slot) ? " gone" : "");
    if (S.answered) {
      if (orig === correctIndex(S.q)) b.classList.add("right");
      else if (slot === S.chosenSlot) b.classList.add("wrong");
    }
    b.disabled = S.answered || S.removed.includes(slot);
    b.innerHTML = '<span class="key">' + "ABCD"[slot] + '</span><span class="body">' +
      markup(labels[orig]) + "</span>";
    b.addEventListener("click", () => answer(slot, orig));
    box.appendChild(b);
  });

  $("hint").hidden = !S.hint;
  if (S.hint) $("hint").innerHTML = "Footnote. " + markup(S.hint);

  $("verdict").hidden = !S.answered;
}

function answer(slot, orig) {
  if (S.answered) return;
  S.answered = true;
  S.chosenSlot = slot;
  S.tally.asked++;

  const right = orig === correctIndex(S.q);
  const h = S.hero;

  if (right) {
    S.tally.right++;
    S.streak++;
    let dmg = 7 + Math.min(4, 2 * (S.streak - 1));
    if (S.assisted) dmg = Math.ceil(dmg / 2);
    dmg += (h.lvl - 1) * 2;
    S.foe.hp -= dmg;
    float("−" + dmg);
    $("stage").classList.add("struck");
    setTimeout(() => $("stage").classList.remove("struck"), 420);
    log("Correct. " + S.foe.name + " takes " + dmg +
        (S.assisted ? " (halved: you took help)." : S.streak >= 2 ? " on a ×" + S.streak + " streak." : "."));
  } else {
    S.streak = 0;
    h.hp -= S.foe.atk;
    $("stage").classList.add("hit");
    setTimeout(() => $("stage").classList.remove("hit"), 320);
    log(S.foe.name + " presses the point. You take " + S.foe.atk + ".");
  }

  $("vhead").className = "vhead " + (right ? "ok" : "no");
  $("vhead").textContent = right ? "Correct" : "Incorrect";
  $("why").innerHTML = markup(S.q.en.explanation);
  $("next").textContent = S.foe.hp <= 0 ? "Press the advantage"
    : h.hp <= 0 ? "…" : "Continue";
  render();
  $("verdict").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function advance() {
  const h = S.hero;

  if (h.hp <= 0) return finish(false);

  if (S.foe.hp <= 0) {
    h.xp += S.foe.xp;
    h.focus = Math.min(HERO.maxFocus, h.focus + 1);
    const was = h.lvl;
    h.lvl = levelFor(h.xp);
    if (h.lvl > was) {
      h.maxHp += 6;
      h.hp = Math.min(h.maxHp, h.hp + 12);
    } else {
      h.hp = Math.min(h.maxHp, h.hp + 8);
    }
    S.foeIndex++;
    save();
    if (S.foeIndex >= FOES.length) return finish(true);
    return nextFoe();
  }

  save();
  draw();
}

function finish(won) {
  clearSave();
  const h = S.hero, t = S.tally;
  const card = $("endcard");
  card.className = "endcard " + (won ? "win" : "lose");
  $("endtitle").textContent = won ? "Autarky falls" : "You are talked down";
  $("endtext").textContent = won
    ? "Every argument in the way of Chapter 4 has been dismantled. The gains from trade are yours."
    : "The argument got the better of you this time. Nothing is lost but the run — the questions are the same ones, and they are answerable.";
  $("t-right").textContent = t.right;
  $("t-asked").textContent = t.asked;
  $("t-acc").textContent = t.asked ? Math.round(100 * t.right / t.asked) + "%" : "—";
  $("t-lvl").textContent = h.lvl;
  show("over");
}

// -------------------------------------------------------------------- wire --

$("begin").addEventListener("click", () => { clearSave(); startRun(null); });
$("resume").addEventListener("click", () => startRun(loadSave()));
$("next").addEventListener("click", advance);
$("again").addEventListener("click", () => { clearSave(); renderTitle(); });
$("quit").addEventListener("click", () => { save(); renderTitle(); });

document.addEventListener("keydown", (e) => {
  if ($("view-battle").hidden || !S) return;
  if (S.answered) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); advance(); }
    return;
  }
  if (/^[1-4]$/.test(e.key)) {
    const slot = Number(e.key) - 1;
    if (slot < S.order.length && !S.removed.includes(slot)) answer(slot, S.order[slot]);
  }
});

renderTitle();
