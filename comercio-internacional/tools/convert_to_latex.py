"""One-off: convert the bank's string literals to String.raw templates and
rewrite its notation as LaTeX. Kept in the repo only as a record of the change."""

import re
from pathlib import Path

src = Path(__file__).resolve().parent.parent / "data/questions.js"
text = src.read_text()

# --- 1. header -------------------------------------------------------------

cut = text.index("window.TRADE_QUESTION_BANK = {")
new_header = r'''/* ---------------------------------------------------------------------------
   International Trade — question bank
   Universidad de los Andes · Alfredo Mendoza-Fernández

   HOW TO EDIT
   -----------
   Every question is one object in the `questions` array. Fields:

     id          unique string, any convention ("ric-01", "2026c1-07", ...)
     topic       must match an id in the `topics` array below
     difficulty  "easy" | "medium" | "hard"
     type        "mc" (multiple choice) | "tf" (true/false)
     answer      mc -> index of the correct choice, starting at 0
                 tf -> true or false
     en / es     { stem, choices[], explanation }   (choices only for "mc")

   MATHEMATICS
   -----------
   Write LaTeX, exactly as you would in a .tex file:

     \(  ...  \)     inline            \(P_C/P_W = 1\)
     \[  ...  \]     displayed         \[T_{ij} = A\,\frac{Y_i^a Y_j^b}{D_{ij}^c}\]

   Note the R before each string and the backticks around it:

     stem: R`The relative price \(P_M/P_F\) rises by 10%.`

   The R is String.raw. It is what lets you paste \frac, \alpha, \hat{y}_t and
   the rest straight from your notes without doubling any backslash. A string
   written with ordinary double quotes will silently eat them, so keep the R.

   A bare $ is just a dollar sign — $10,000 needs no escaping. This is why the
   delimiters are \( \) rather than $ $.

   KaTeX renders the mathematics. If it fails to load, the page falls back to a
   readable plain-text rendering rather than showing raw LaTeX, so a student on
   a bad connection still gets a usable question.

   Outside mathematics, two marks are available:

     *text*       italic
     **text**     bold

   Run tools/check_bank.py after editing. It validates structure, delimiter
   balance and the answer indices before anything goes live.

   The file is loaded with a <script> tag, so it works from a local double-click
   as well as from GitHub Pages. Keep the `window.TRADE_QUESTION_BANK =` line.
--------------------------------------------------------------------------- */

const R = String.raw;

'''
text = new_header + text[cut:]

# --- 2. string literals -> String.raw templates -----------------------------

def to_raw(m):
    return f"{m.group(1)}R`{m.group(2)}`{m.group(3)}"

before = text
text = re.sub(r'^(\s*(?:stem|explanation): )"([^"]*)"(,?)$', to_raw, text, flags=re.M)
text = re.sub(r'^(\s{8})"([^"]*)"(,?)$', to_raw, text, flags=re.M)
converted = len(re.findall(r"R`", text))
print(f"string literals converted to String.raw: {converted}")

# --- 3. notation -> LaTeX ---------------------------------------------------

PAIRS = [
    # ric-01
    ("opportunity cost of cheese is 1/2 unit of wine",
     r"opportunity cost of cheese is \(1/2\) unit of wine"),
    ("costo de oportunidad del queso en Local es 1/2 unidad de vino",
     r"costo de oportunidad del queso en Local es \(1/2\) unidad de vino"),
    ("Opportunity cost of cheese is a_{LC}/a_{LW} = 1/2 at Home and 6/3 = 2 in Foreign.",
     r"Opportunity cost of cheese is \(a_{LC}/a_{LW} = 1/2\) at Home and \(6/3 = 2\) in Foreign."),
    ("El costo de oportunidad del queso es a_{LC}/a_{LW} = 1/2 en Local y 6/3 = 2 en Extranjero.",
     r"El costo de oportunidad del queso es \(a_{LC}/a_{LW} = 1/2\) en Local y \(6/3 = 2\) en Extranjero."),

    # ric-03 stems
    ("Same technology as before: a_{LC} = 1, a_{LW} = 2 at Home; a^{*}_{LC} = 6, a^{*}_{LW} = 3 in Foreign.",
     r"Same technology as before: \(a_{LC} = 1\), \(a_{LW} = 2\) at Home; \(a^{*}_{LC} = 6\), \(a^{*}_{LW} = 3\) in Foreign."),
    ("Misma tecnología que antes: a_{LC} = 1, a_{LW} = 2 en Local; a^{*}_{LC} = 6, a^{*}_{LW} = 3 en Extranjero.",
     r"Misma tecnología que antes: \(a_{LC} = 1\), \(a_{LW} = 2\) en Local; \(a^{*}_{LC} = 6\), \(a^{*}_{LW} = 3\) en Extranjero."),

    # ric-04 stems (consume the "= 1" cases before the choice replacements)
    ("With a_{LC} = 1 and a_{LW} = 2 at Home, and a world relative price P_{C}/P_{W} = 1,",
     r"With \(a_{LC} = 1\) and \(a_{LW} = 2\) at Home, and a world relative price \(P_C/P_W = 1\),"),
    ("Con a_{LC} = 1 y a_{LW} = 2 en Local, y un precio relativo mundial P_{C}/P_{W} = 1,",
     r"Con \(a_{LC} = 1\) y \(a_{LW} = 2\) en Local, y un precio relativo mundial \(P_C/P_W = 1\),"),

    # ric-03 choices
    ("P_{C}/P_{W} = 0.4", r"\(P_C/P_W = 0.4\)"),
    ("P_{C}/P_{W} = 0,4", r"\(P_C/P_W = 0{,}4\)"),
    ("P_{C}/P_{W} = 0.5", r"\(P_C/P_W = 0.5\)"),
    ("P_{C}/P_{W} = 0,5", r"\(P_C/P_W = 0{,}5\)"),
    ("P_{C}/P_{W} = 1", r"\(P_C/P_W = 1\)"),
    ("P_{C}/P_{W} = 2.5", r"\(P_C/P_W = 2.5\)"),
    ("P_{C}/P_{W} = 2,5", r"\(P_C/P_W = 2{,}5\)"),

    # ric-03 explanations
    ("autarky relative prices, 1/2 and 2. At 0.5 or 2 one country is indifferent;",
     r"autarky relative prices, \(1/2\) and \(2\). At \(0.5\) or \(2\) one country is indifferent;"),
    ("precios relativos de autarquía, 1/2 y 2. En 0,5 o 2 un país queda indiferente;",
     r"precios relativos de autarquía, \(1/2\) y \(2\). En \(0{,}5\) o \(2\) un país queda indiferente;"),

    # ric-04 explanations
    ("so w = P_{C}/a_{LC}. In cheese units, w/P_{C} = 1/a_{LC} = 1, exactly its autarky value. In wine units, w/P_{W} = (P_{C}/P_{W})/a_{LC} = 1, against an autarky value of 1/a_{LW} = 0.5.",
     r"so \(w = P_C/a_{LC}\). In cheese units, \(w/P_C = 1/a_{LC} = 1\), exactly its autarky value. In wine units, \(w/P_W = (P_C/P_W)/a_{LC} = 1\), against an autarky value of \(1/a_{LW} = 0.5\)."),
    ("de modo que w = P_{C}/a_{LC}. En unidades de queso, w/P_{C} = 1/a_{LC} = 1, exactamente su valor de autarquía. En unidades de vino, w/P_{W} = (P_{C}/P_{W})/a_{LC} = 1, frente a un valor de autarquía de 1/a_{LW} = 0,5.",
     r"de modo que \(w = P_C/a_{LC}\). En unidades de queso, \(w/P_C = 1/a_{LC} = 1\), exactamente su valor de autarquía. En unidades de vino, \(w/P_W = (P_C/P_W)/a_{LC} = 1\), frente a un valor de autarquía de \(1/a_{LW} = 0{,}5\)."),

    # remaining relative price mentions
    ("relative price of cheese P_{C}/P_{W} is", r"relative price of cheese \(P_C/P_W\) is"),
    ("precio relativo mundial del queso P_{C}/P_{W} es", r"precio relativo mundial del queso \(P_C/P_W\) es"),

    # specific factors
    ("P_{M}", r"\(P_M\)"),
    ("P_{F}", r"\(P_F\)"),

    # Heckscher-Ohlin
    ("such as K/L,", r"such as \(K/L\),"),
    ("como K/L,", r"como \(K/L\),"),

    # gravity
    ("The standard specification is T_{ij} = A · (Y_{i}^{a} · Y_{j}^{b}) / D_{ij}^{c}, usually estimated in logs.",
     r"The standard specification is \[T_{ij} = A\,\frac{Y_i^{\,a}\, Y_j^{\,b}}{D_{ij}^{\,c}},\] usually estimated in logs."),
    ("La especificación estándar es T_{ij} = A · (Y_{i}^{a} · Y_{j}^{b}) / D_{ij}^{c}, usualmente estimada en logaritmos.",
     r"La especificación estándar es \[T_{ij} = A\,\frac{Y_i^{\,a}\, Y_j^{\,b}}{D_{ij}^{\,c}},\] usualmente estimada en logaritmos."),
    ("between roughly −0.7 and −1,", r"between roughly \(-0.7\) and \(-1\),"),
    ("entre aproximadamente −0,7 y −1,", r"entre aproximadamente \(-0{,}7\) y \(-1\),"),

    # tariff welfare triangles
    ("Production distortion = ½ · 2 · (30−20) = 10; consumption distortion = ½ · 2 · (100−90) = 10; total = 20. For a check: consumer loss 190 = producer gain 50 + revenue 2 · 60 = 120 + deadweight loss 20.",
     r"Production distortion \(= \tfrac{1}{2}\times 2\times(30-20) = 10\); consumption distortion \(= \tfrac{1}{2}\times 2\times(100-90) = 10\); total \(= 20\). Check: consumer loss \(190\) equals producer gain \(50\) plus revenue \(2\times 60 = 120\) plus deadweight loss \(20\)."),
    ("Distorsión de producción = ½ · 2 · (30−20) = 10; distorsión de consumo = ½ · 2 · (100−90) = 10; total = 20. Verificación: pérdida del consumidor 190 = ganancia del productor 50 + recaudación 2 · 60 = 120 + pérdida de eficiencia 20.",
     r"Distorsión de producción \(= \tfrac{1}{2}\times 2\times(30-20) = 10\); distorsión de consumo \(= \tfrac{1}{2}\times 2\times(100-90) = 10\); total \(= 20\). Verificación: la pérdida del consumidor \(190\) equivale a la ganancia del productor \(50\) más la recaudación \(2\times 60 = 120\) más la pérdida de eficiencia \(20\)."),

    # effective rate of protection
    ("Value added at world prices is 10,000 − 6,000 = 4,000. With the tariff the car sells for 12,500 domestically while parts still cost 6,000, so value added becomes 6,500. The effective rate is (6,500 − 4,000)/4,000 = 62.5%, far above the nominal 25%.",
     r"Value added at world prices is \(10{,}000 - 6{,}000 = 4{,}000\). With the tariff the car sells for \(12{,}500\) domestically while parts still cost \(6{,}000\), so value added becomes \(6{,}500\). The effective rate is \[\frac{6{,}500 - 4{,}000}{4{,}000} = 62.5\%,\] far above the nominal \(25\%\)."),
    ("El valor agregado a precios mundiales es 10.000 − 6.000 = 4.000. Con el arancel el automóvil se vende a 12.500 internamente mientras las partes siguen costando 6.000, de modo que el valor agregado pasa a 6.500. La tasa efectiva es (6.500 − 4.000)/4.000 = 62,5%, muy por encima del 25% nominal.",
     r"El valor agregado a precios mundiales es \(10.000 - 6.000 = 4.000\). Con el arancel el automóvil se vende a \(12.500\) internamente mientras las partes siguen costando \(6.000\), de modo que el valor agregado pasa a \(6.500\). La tasa efectiva es \[\frac{6.500 - 4.000}{4.000} = 62{,}5\%,\] muy por encima del \(25\%\) nominal."),

    # large-country tariff, the symbol t
    ("imposes a specific tariff t.", r"imposes a specific tariff \(t\)."),
    ("impone un arancel específico t.", r"impone un arancel específico \(t\)."),
    ("with the gap between them equal to t.", r"with the gap between them equal to \(t\)."),
    ("con una brecha entre ambos igual a t.", r"con una brecha entre ambos igual a \(t\)."),
    ("The domestic price rises by exactly t and", r"The domestic price rises by exactly \(t\) and"),
    ("El precio doméstico sube exactamente t y", r"El precio doméstico sube exactamente \(t\) y"),
    ("the foreign export price falls by t.", r"the foreign export price falls by \(t\)."),
    ("el precio de exportación extranjero cae en t.", r"el precio de exportación extranjero cae en \(t\)."),
    ("with the sum of the increases equal to t.", r"with the sum of the increases equal to \(t\)."),
    ("y la suma de los aumentos es igual a t.", r"y la suma de los aumentos es igual a \(t\)."),
    ("the wedge between them is always exactly t.", r"the wedge between them is always exactly \(t\)."),
    ("la cuña entre ellos es siempre exactamente t.", r"la cuña entre ellos es siempre exactamente \(t\)."),
]

missed = []
for old, new in PAIRS:
    n = text.count(old)
    if n == 0:
        missed.append(old[:70])
    text = text.replace(old, new)

src.write_text(text)

print(f"replacements applied: {len(PAIRS) - len(missed)}/{len(PAIRS)}")
for m in missed:
    print("  NOT FOUND:", m)
leftover = re.findall(r"(?<!\\)[A-Za-z]_\{", text)
print(f"leftover bare subscripts outside math: {len(leftover)}")
