/* ---------------------------------------------------------------------------
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

window.TRADE_QUESTION_BANK = {

  meta: {
    course: { en: "International Trade", es: "Comercio Internacional" },
    institution: "Universidad de los Andes",
    updated: "2026-11-08"
  },

  topics: [
    { id: "ricardo",  en: "Comparative advantage",          es: "Ventaja comparativa" },
    { id: "specific", en: "Specific factors",               es: "Factores específicos" },
    { id: "ho",       en: "Heckscher–Ohlin",                es: "Heckscher–Ohlin" },
    { id: "standard", en: "Standard trade model",           es: "Modelo estándar" },
    { id: "scale",    en: "Scale economies & varieties",    es: "Economías de escala y variedades" },
    { id: "firms",    en: "Firms, FDI & offshoring",        es: "Firmas, IED y offshoring" },
    { id: "gravity",  en: "Gravity model",                  es: "Modelo de gravedad" },
    { id: "policy",   en: "Instruments of trade policy",    es: "Instrumentos de política comercial" },
    { id: "polecon",  en: "Political economy & agreements", es: "Economía política y acuerdos" }
  ],

  questions: [

  /* ===================== RICARDIAN / COMPARATIVE ADVANTAGE ================ */

  {
    id: "ric-01", topic: "ricardo", difficulty: "easy", type: "mc", answer: 1,
    en: {
      stem: R`Home needs 1 hour of labour per unit of cheese and 2 hours per unit of wine. Foreign needs 6 hours per unit of cheese and 3 hours per unit of wine. Under free trade, what does Home export?`,
      choices: [
        R`Wine, because Foreign needs fewer hours per unit of wine than per unit of cheese.`,
        R`Cheese, because Home's opportunity cost of cheese is \(1/2\) unit of wine against 2 units in Foreign.`,
        R`Both goods, because Home has an absolute advantage in both.`,
        R`Neither good: with an absolute advantage in both, Home gains nothing from trade.`
      ],
      explanation: R`Opportunity cost of cheese is \(a_{LC}/a_{LW} = 1/2\) at Home and \(6/3 = 2\) in Foreign. Home's is lower, so Home exports cheese. Absolute advantage in both goods is irrelevant to the pattern of trade.`
    },
    es: {
      stem: R`Local requiere 1 hora de trabajo por unidad de queso y 2 horas por unidad de vino. Extranjero requiere 6 horas por unidad de queso y 3 horas por unidad de vino. Bajo libre comercio, ¿qué exporta Local?`,
      choices: [
        R`Vino, porque Extranjero requiere menos horas por unidad de vino que por unidad de queso.`,
        R`Queso, porque el costo de oportunidad del queso en Local es \(1/2\) unidad de vino frente a 2 unidades en Extranjero.`,
        R`Ambos bienes, porque Local tiene ventaja absoluta en los dos.`,
        R`Ninguno: con ventaja absoluta en ambos bienes, Local no gana con el comercio.`
      ],
      explanation: R`El costo de oportunidad del queso es \(a_{LC}/a_{LW} = 1/2\) en Local y \(6/3 = 2\) en Extranjero. Local tiene el menor, por lo que exporta queso. La ventaja absoluta en ambos bienes es irrelevante para el patrón de comercio.`
    }
  },
  {
    id: "ric-02", topic: "ricardo", difficulty: "easy", type: "tf", answer: false,
    en: {
      stem: R`A country that is less productive than its trading partner in every single good cannot gain from international trade.`,
      explanation: R`False. Gains from trade come from differences in *relative* productivity, not absolute productivity. A country with an absolute disadvantage everywhere still has a comparative advantage somewhere, and trades at relative prices more favourable than its autarky ones.`
    },
    es: {
      stem: R`Un país menos productivo que su socio comercial en absolutamente todos los bienes no puede ganar con el comercio internacional.`,
      explanation: R`Falso. Las ganancias del comercio provienen de diferencias en productividad *relativa*, no absoluta. Un país con desventaja absoluta en todo igual tiene ventaja comparativa en algo, y comercia a precios relativos más favorables que los de autarquía.`
    }
  },
  {
    id: "ric-03", topic: "ricardo", difficulty: "medium", type: "mc", answer: 2,
    en: {
      stem: R`Same technology as before: \(a_{LC} = 1\), \(a_{LW} = 2\) at Home; \(a^{*}_{LC} = 6\), \(a^{*}_{LW} = 3\) in Foreign. Which world relative price of cheese \(P_C/P_W\) is consistent with both countries gaining and specialising completely?`,
      choices: [
        R`\(P_C/P_W = 0.4\)`,
        R`\(P_C/P_W = 0.5\)`,
        R`\(P_C/P_W = 1\)`,
        R`\(P_C/P_W = 2.5\)`
      ],
      explanation: R`Complete specialisation with gains on both sides requires the world relative price to lie strictly between the two autarky relative prices, \(1/2\) and \(2\). At \(0.5\) or \(2\) one country is indifferent; outside the interval the pattern of specialisation reverses.`
    },
    es: {
      stem: R`Misma tecnología que antes: \(a_{LC} = 1\), \(a_{LW} = 2\) en Local; \(a^{*}_{LC} = 6\), \(a^{*}_{LW} = 3\) en Extranjero. ¿Qué precio relativo mundial del queso \(P_C/P_W\) es consistente con que ambos países ganen y se especialicen completamente?`,
      choices: [
        R`\(P_C/P_W = 0{,}4\)`,
        R`\(P_C/P_W = 0{,}5\)`,
        R`\(P_C/P_W = 1\)`,
        R`\(P_C/P_W = 2{,}5\)`
      ],
      explanation: R`La especialización completa con ganancias para ambos exige que el precio relativo mundial esté estrictamente entre los precios relativos de autarquía, \(1/2\) y \(2\). En \(0{,}5\) o \(2\) un país queda indiferente; fuera del intervalo se invierte el patrón de especialización.`
    }
  },
  {
    id: "ric-04", topic: "ricardo", difficulty: "hard", type: "tf", answer: true,
    en: {
      stem: R`With \(a_{LC} = 1\) and \(a_{LW} = 2\) at Home, and a world relative price \(P_C/P_W = 1\), Home's real wage measured in cheese is unchanged relative to autarky, while its real wage measured in wine doubles.`,
      explanation: R`True. Home specialises in cheese, so \(w = P_C/a_{LC}\). In cheese units, \(w/P_C = 1/a_{LC} = 1\), exactly its autarky value. In wine units, \(w/P_W = (P_C/P_W)/a_{LC} = 1\), against an autarky value of \(1/a_{LW} = 0.5\).`
    },
    es: {
      stem: R`Con \(a_{LC} = 1\) y \(a_{LW} = 2\) en Local, y un precio relativo mundial \(P_C/P_W = 1\), el salario real de Local medido en queso no cambia respecto de la autarquía, mientras que su salario real medido en vino se duplica.`,
      explanation: R`Verdadero. Local se especializa en queso, de modo que \(w = P_C/a_{LC}\). En unidades de queso, \(w/P_C = 1/a_{LC} = 1\), exactamente su valor de autarquía. En unidades de vino, \(w/P_W = (P_C/P_W)/a_{LC} = 1\), frente a un valor de autarquía de \(1/a_{LW} = 0{,}5\).`
    }
  },
  {
    id: "ric-05", topic: "ricardo", difficulty: "medium", type: "mc", answer: 3,
    en: {
      stem: R`Which is the most serious *empirical* shortcoming of the one-factor Ricardian model?`,
      choices: [
        R`It assumes labour is the only factor of production, so it cannot generate gains from trade.`,
        R`It predicts that trade between countries with similar technologies will be very large.`,
        R`It implies that a country with low wages must be exploited by its trading partners.`,
        R`It predicts extreme specialisation and has nothing to say about income distribution within a country.`
      ],
      explanation: R`The model does generate gains from trade and does not imply exploitation. Its empirical weaknesses are the counterfactual prediction of complete specialisation, the neglect of distributional conflict, and the absence of any role for differences in resources.`
    },
    es: {
      stem: R`¿Cuál es la deficiencia *empírica* más seria del modelo ricardiano de un factor?`,
      choices: [
        R`Supone que el trabajo es el único factor de producción, por lo que no puede generar ganancias del comercio.`,
        R`Predice que el comercio entre países con tecnologías similares será muy grande.`,
        R`Implica que un país con salarios bajos necesariamente es explotado por sus socios comerciales.`,
        R`Predice especialización extrema y no dice nada sobre la distribución del ingreso dentro de un país.`
      ],
      explanation: R`El modelo sí genera ganancias del comercio y no implica explotación. Sus debilidades empíricas son la predicción contrafactual de especialización completa, la omisión del conflicto distributivo y la ausencia de un rol para las diferencias de recursos.`
    }
  },

  /* ============================ SPECIFIC FACTORS ========================== */

  {
    id: "sf-01", topic: "specific", difficulty: "easy", type: "mc", answer: 0,
    en: {
      stem: R`In the specific factors model with manufactures and food, the relative price of manufactures rises. Who gains unambiguously?`,
      choices: [
        R`Owners of capital, the factor specific to manufactures.`,
        R`Workers, who are mobile between sectors.`,
        R`Landowners, the factor specific to food.`,
        R`Nobody: all three factors are worse off in real terms.`
      ],
      explanation: R`The factor specific to the sector whose price rises gains in real terms; the factor specific to the other sector loses in real terms. The mobile factor's real income moves ambiguously, because the nominal wage rises by less than \(P_M\) but more than \(P_F\).`
    },
    es: {
      stem: R`En el modelo de factores específicos con manufacturas y alimentos, sube el precio relativo de las manufacturas. ¿Quién gana de manera inequívoca?`,
      choices: [
        R`Los dueños del capital, el factor específico a manufacturas.`,
        R`Los trabajadores, que son móviles entre sectores.`,
        R`Los terratenientes, el factor específico a alimentos.`,
        R`Nadie: los tres factores quedan peor en términos reales.`
      ],
      explanation: R`El factor específico al sector cuyo precio sube gana en términos reales; el factor específico al otro sector pierde en términos reales. El ingreso real del factor móvil es ambiguo, porque el salario nominal sube menos que \(P_M\) pero más que \(P_F\).`
    }
  },
  {
    id: "sf-02", topic: "specific", difficulty: "medium", type: "tf", answer: true,
    en: {
      stem: R`In the specific factors model, an equiproportional increase in the prices of both goods leaves the real income of every factor unchanged.`,
      explanation: R`True. If \(P_M\) and \(P_F\) rise by the same percentage, the labour allocation and all marginal products are unchanged, and every nominal factor reward rises in the same proportion. Only *relative* price changes redistribute income.`
    },
    es: {
      stem: R`En el modelo de factores específicos, un aumento equiproporcional de los precios de ambos bienes deja inalterado el ingreso real de todos los factores.`,
      explanation: R`Verdadero. Si \(P_M\) y \(P_F\) suben en el mismo porcentaje, la asignación del trabajo y todas las productividades marginales no cambian, y cada remuneración nominal sube en la misma proporción. Sólo los cambios de precios *relativos* redistribuyen ingreso.`
    }
  },
  {
    id: "sf-03", topic: "specific", difficulty: "medium", type: "mc", answer: 2,
    en: {
      stem: R`\(P_M\) rises by 10% while \(P_F\) is unchanged. Why is the effect on workers ambiguous?`,
      choices: [
        R`Because employment in manufactures falls while employment in food rises.`,
        R`Because the nominal wage is fixed in the short run.`,
        R`Because the nominal wage rises by less than 10%, so the real wage falls in manufactures but rises in food.`,
        R`Because workers own shares of both specific factors.`
      ],
      explanation: R`Labour reallocates toward manufactures, so its marginal product there falls and the wage rises by less than the 10% price increase. Measured in manufactures the real wage falls; measured in food it rises. The net effect depends on consumption shares.`
    },
    es: {
      stem: R`\(P_M\) sube 10% mientras \(P_F\) no cambia. ¿Por qué el efecto sobre los trabajadores es ambiguo?`,
      choices: [
        R`Porque el empleo en manufacturas cae mientras el empleo en alimentos sube.`,
        R`Porque el salario nominal está fijo en el corto plazo.`,
        R`Porque el salario nominal sube menos de 10%, de modo que el salario real cae en manufacturas pero sube en alimentos.`,
        R`Porque los trabajadores son dueños de parte de ambos factores específicos.`
      ],
      explanation: R`El trabajo se reasigna hacia manufacturas, su productividad marginal allí cae y el salario sube menos que el 10% del precio. Medido en manufacturas el salario real cae; medido en alimentos sube. El efecto neto depende de las participaciones en el consumo.`
    }
  },
  {
    id: "sf-04", topic: "specific", difficulty: "hard", type: "mc", answer: 1,
    en: {
      stem: R`An economy opens to trade and becomes an exporter of manufactures. Which statement about compensation is correct?`,
      choices: [
        R`No compensation is possible, since the losses of landowners exceed the gains of capital owners.`,
        R`The gains of the winners exceed the losses of the losers, so compensation is feasible in principle even if it is rarely implemented.`,
        R`Compensation is unnecessary because every factor gains once prices adjust.`,
        R`Compensation is only feasible if the country is large enough to affect its terms of trade.`
      ],
      explanation: R`Trade raises aggregate real income, so winners could in principle compensate losers and leave everyone better off. Whether that transfer actually happens is a political economy question, and the usual reason protection survives.`
    },
    es: {
      stem: R`Una economía se abre al comercio y pasa a exportar manufacturas. ¿Qué afirmación sobre compensación es correcta?`,
      choices: [
        R`No es posible compensar, ya que las pérdidas de los terratenientes superan las ganancias de los capitalistas.`,
        R`Las ganancias de los ganadores superan las pérdidas de los perdedores, por lo que la compensación es factible en principio aunque rara vez se implemente.`,
        R`La compensación es innecesaria porque todos los factores ganan una vez que los precios se ajustan.`,
        R`La compensación sólo es factible si el país es suficientemente grande para afectar sus términos de intercambio.`
      ],
      explanation: R`El comercio eleva el ingreso real agregado, de modo que los ganadores podrían compensar a los perdedores y dejar a todos mejor. Que esa transferencia ocurra es una cuestión de economía política, y la razón habitual de que sobreviva la protección.`
    }
  },

  /* ============================= HECKSCHER–OHLIN ========================== */

  {
    id: "ho-01", topic: "ho", difficulty: "easy", type: "mc", answer: 2,
    en: {
      stem: R`What does the Heckscher–Ohlin theorem predict?`,
      choices: [
        R`Each country exports the good in which it has the highest absolute labour productivity.`,
        R`Each country exports the good with the larger domestic market.`,
        R`Each country exports the good that uses intensively the factor with which it is relatively abundantly endowed.`,
        R`Each country exports the good whose price was highest in autarky.`
      ],
      explanation: R`The pattern of trade follows relative factor abundance interacted with relative factor intensity. Relative abundance is defined by endowment ratios, such as \(K/L\), not by absolute quantities.`
    },
    es: {
      stem: R`¿Qué predice el teorema de Heckscher–Ohlin?`,
      choices: [
        R`Cada país exporta el bien en que tiene la mayor productividad laboral absoluta.`,
        R`Cada país exporta el bien con el mercado interno más grande.`,
        R`Cada país exporta el bien que usa intensivamente el factor del que está relativamente mejor dotado.`,
        R`Cada país exporta el bien cuyo precio era más alto en autarquía.`
      ],
      explanation: R`El patrón de comercio surge de la abundancia relativa de factores interactuada con la intensidad relativa de factores. La abundancia relativa se define por razones de dotación, como \(K/L\), no por cantidades absolutas.`
    }
  },
  {
    id: "ho-02", topic: "ho", difficulty: "medium", type: "mc", answer: 0,
    en: {
      stem: R`The Stolper–Samuelson theorem states that a rise in the relative price of the labour-intensive good:`,
      choices: [
        R`Raises the real wage and lowers the real return to capital.`,
        R`Raises both the real wage and the real return to capital.`,
        R`Raises the nominal wage but leaves all real returns unchanged.`,
        R`Raises the real wage only if labour is internationally mobile.`
      ],
      explanation: R`With both factors mobile between sectors, a relative price change magnifies into factor prices: the factor used intensively in the good whose relative price rises gains in terms of *both* goods, and the other factor loses in terms of both.`
    },
    es: {
      stem: R`El teorema de Stolper–Samuelson establece que un alza del precio relativo del bien intensivo en trabajo:`,
      choices: [
        R`Eleva el salario real y reduce el retorno real del capital.`,
        R`Eleva tanto el salario real como el retorno real del capital.`,
        R`Eleva el salario nominal pero deja inalterados todos los retornos reales.`,
        R`Eleva el salario real sólo si el trabajo es internacionalmente móvil.`
      ],
      explanation: R`Con ambos factores móviles entre sectores, un cambio de precio relativo se magnifica en los precios de los factores: el factor usado intensivamente en el bien cuyo precio relativo sube gana en términos de *ambos* bienes, y el otro factor pierde en términos de ambos.`
    }
  },
  {
    id: "ho-03", topic: "ho", difficulty: "medium", type: "tf", answer: true,
    en: {
      stem: R`The Rybczynski theorem says that, at constant goods prices, an increase in a country's capital stock raises output of the capital-intensive good and *reduces* output of the labour-intensive good.`,
      explanation: R`True. At unchanged goods prices, factor prices and factor intensities are unchanged, so absorbing the extra capital requires drawing labour out of the labour-intensive sector. Its output falls in absolute terms.`
    },
    es: {
      stem: R`El teorema de Rybczynski señala que, a precios de bienes constantes, un aumento del stock de capital de un país eleva la producción del bien intensivo en capital y *reduce* la del bien intensivo en trabajo.`,
      explanation: R`Verdadero. Con precios de bienes inalterados, los precios e intensidades de factores no cambian, de modo que absorber el capital adicional exige retirar trabajo del sector intensivo en trabajo. Su producción cae en términos absolutos.`
    }
  },
  {
    id: "ho-04", topic: "ho", difficulty: "medium", type: "mc", answer: 3,
    en: {
      stem: R`Factor price equalisation is strongly rejected in the data. Which set of reasons best explains the failure?`,
      choices: [
        R`Labour is internationally mobile and capital is not.`,
        R`Countries have identical technologies but different tastes.`,
        R`All goods are traded, but at different prices in each country.`,
        R`Technologies differ across countries, trade costs and barriers keep goods prices apart, and endowment differences are too large for countries to produce the same set of goods.`
      ],
      explanation: R`The theorem needs identical technologies, free trade in all goods, and endowments similar enough that both countries produce both goods. All three assumptions fail, so observed wage gaps are consistent with the theory's logic while rejecting its prediction.`
    },
    es: {
      stem: R`La igualación de precios de los factores se rechaza con fuerza en los datos. ¿Qué conjunto de razones explica mejor esa falla?`,
      choices: [
        R`El trabajo es internacionalmente móvil y el capital no lo es.`,
        R`Los países tienen tecnologías idénticas pero gustos distintos.`,
        R`Todos los bienes se comercian, pero a precios distintos en cada país.`,
        R`Las tecnologías difieren entre países, los costos y barreras comerciales mantienen separados los precios de los bienes, y las diferencias de dotaciones son demasiado grandes para que los países produzcan el mismo conjunto de bienes.`
      ],
      explanation: R`El teorema requiere tecnologías idénticas, libre comercio en todos los bienes y dotaciones lo bastante similares para que ambos países produzcan ambos bienes. Los tres supuestos fallan, de modo que las brechas salariales observadas son consistentes con la lógica de la teoría aunque rechacen su predicción.`
    }
  },
  {
    id: "ho-05", topic: "ho", difficulty: "hard", type: "mc", answer: 1,
    en: {
      stem: R`What exactly did Leontief find, and why was it called a paradox?`,
      choices: [
        R`US exports were more capital-intensive than US import substitutes, contradicting the view that the US was labour-abundant.`,
        R`US exports were less capital-intensive than US import substitutes, even though the US was the most capital-abundant country of the time.`,
        R`US trade was almost entirely intra-industry, contradicting Heckscher–Ohlin's prediction of inter-industry trade.`,
        R`US factor prices failed to converge to European factor prices after the war.`
      ],
      explanation: R`Leontief computed factor contents and found US exports embodied less capital per worker than US import-competing production. Later work reconciles this with skill-adjusted labour, technology differences, and the Vanek factor-content formulation.`
    },
    es: {
      stem: R`¿Qué encontró exactamente Leontief y por qué se llamó paradoja?`,
      choices: [
        R`Las exportaciones de EE.UU. eran más intensivas en capital que sus sustitutos de importación, contradiciendo la idea de que EE.UU. era abundante en trabajo.`,
        R`Las exportaciones de EE.UU. eran menos intensivas en capital que sus sustitutos de importación, pese a que EE.UU. era el país más abundante en capital de la época.`,
        R`El comercio de EE.UU. era casi enteramente intraindustrial, contradiciendo la predicción de comercio interindustrial de Heckscher–Ohlin.`,
        R`Los precios de los factores en EE.UU. no convergieron a los europeos tras la guerra.`
      ],
      explanation: R`Leontief calculó contenidos factoriales y halló que las exportaciones estadounidenses incorporaban menos capital por trabajador que la producción que competía con importaciones. Trabajos posteriores lo reconcilian ajustando por calificación, diferencias tecnológicas y la formulación de contenido factorial de Vanek.`
    }
  },

  /* ========================== STANDARD TRADE MODEL ======================== */

  {
    id: "st-01", topic: "standard", difficulty: "easy", type: "mc", answer: 0,
    en: {
      stem: R`A country's terms of trade improve. Holding everything else constant, what happens to its welfare?`,
      choices: [
        R`It rises, because each unit of exports now buys more imports.`,
        R`It falls, because exports become more expensive and less competitive.`,
        R`It is unchanged, because relative prices only redistribute income.`,
        R`The effect depends on whether the country is capital- or labour-abundant.`
      ],
      explanation: R`The terms of trade are the price of exports relative to imports. A rise expands the consumption possibility frontier at any given production point, so welfare increases.`
    },
    es: {
      stem: R`Mejoran los términos de intercambio de un país. Manteniendo todo lo demás constante, ¿qué ocurre con su bienestar?`,
      choices: [
        R`Aumenta, porque cada unidad de exportaciones ahora compra más importaciones.`,
        R`Disminuye, porque las exportaciones se encarecen y pierden competitividad.`,
        R`No cambia, porque los precios relativos sólo redistribuyen ingreso.`,
        R`El efecto depende de si el país es abundante en capital o en trabajo.`
      ],
      explanation: R`Los términos de intercambio son el precio de las exportaciones relativo al de las importaciones. Un alza expande la frontera de posibilidades de consumo para cualquier punto de producción, por lo que el bienestar aumenta.`
    }
  },
  {
    id: "st-02", topic: "standard", difficulty: "medium", type: "mc", answer: 2,
    en: {
      stem: R`Growth in a large country is strongly biased toward its export sector. What is the effect on that country's terms of trade and welfare?`,
      choices: [
        R`Terms of trade improve, so welfare necessarily rises.`,
        R`Terms of trade are unaffected, and welfare rises by the full value of the extra output.`,
        R`Terms of trade worsen, so welfare rises by less than the value of the extra output and may even fall.`,
        R`Terms of trade worsen, so welfare necessarily falls.`
      ],
      explanation: R`Export-biased growth raises world relative supply of the export good and depresses its relative price. The direct output gain is partly offset by the terms-of-trade loss; immiserising growth, where the second effect dominates, is possible but empirically rare.`
    },
    es: {
      stem: R`El crecimiento de un país grande está fuertemente sesgado hacia su sector exportador. ¿Cuál es el efecto sobre sus términos de intercambio y su bienestar?`,
      choices: [
        R`Los términos de intercambio mejoran, por lo que el bienestar necesariamente aumenta.`,
        R`Los términos de intercambio no se ven afectados y el bienestar aumenta en todo el valor del producto adicional.`,
        R`Los términos de intercambio empeoran, por lo que el bienestar aumenta menos que el valor del producto adicional e incluso podría caer.`,
        R`Los términos de intercambio empeoran, por lo que el bienestar necesariamente cae.`
      ],
      explanation: R`El crecimiento sesgado a exportaciones eleva la oferta relativa mundial del bien exportado y deprime su precio relativo. La ganancia directa de producto se compensa en parte con la pérdida de términos de intercambio; el crecimiento empobrecedor, donde domina el segundo efecto, es posible pero empíricamente raro.`
    }
  },
  {
    id: "st-03", topic: "standard", difficulty: "hard", type: "tf", answer: true,
    en: {
      stem: R`A unilateral transfer from Home to Foreign worsens Home's terms of trade when Foreign spends a smaller share of an additional unit of income on Home's export good than Home does.`,
      explanation: R`True. The transfer shifts spending power to a country with a lower marginal propensity to spend on Home's export good, so world demand for that good falls and its relative price declines. If the marginal propensities are equal the terms of trade are unaffected.`
    },
    es: {
      stem: R`Una transferencia unilateral de Local a Extranjero empeora los términos de intercambio de Local cuando Extranjero gasta una fracción menor de una unidad adicional de ingreso en el bien que Local exporta que la que gasta Local.`,
      explanation: R`Verdadero. La transferencia traslada poder de compra a un país con menor propensión marginal a gastar en el bien exportado por Local, de modo que la demanda mundial por ese bien cae y su precio relativo baja. Si las propensiones marginales son iguales, los términos de intercambio no se ven afectados.`
    }
  },
  {
    id: "st-04", topic: "standard", difficulty: "medium", type: "tf", answer: false,
    en: {
      stem: R`Immiserising growth can occur in a small open economy that takes world prices as given.`,
      explanation: R`False. Immiserising growth works entirely through a deterioration in the terms of trade, which requires the growing country to be large enough to move world prices. A price-taking small economy always gains from growth.`
    },
    es: {
      stem: R`El crecimiento empobrecedor puede ocurrir en una economía pequeña y abierta que toma los precios mundiales como dados.`,
      explanation: R`Falso. El crecimiento empobrecedor opera enteramente a través de un deterioro de los términos de intercambio, lo que requiere que el país que crece sea lo bastante grande para mover los precios mundiales. Una economía pequeña tomadora de precios siempre gana con el crecimiento.`
    }
  },

  /* ================== SCALE ECONOMIES & MONOPOLISTIC COMPETITION ========== */

  {
    id: "sc-01", topic: "scale", difficulty: "easy", type: "mc", answer: 1,
    en: {
      stem: R`Germany and France exchange large volumes of cars with each other. Which framework explains this best?`,
      choices: [
        R`Heckscher–Ohlin, since the two countries have different capital-labour ratios.`,
        R`Monopolistic competition with increasing returns, since consumers value variety and each firm produces a differentiated model at declining average cost.`,
        R`The Ricardian model, since German and French labour productivity in cars differs.`,
        R`The specific factors model, since capital is immobile between sectors in the short run.`
      ],
      explanation: R`Two-way trade within the same industry between similar countries is the signature of intra-industry trade. It is driven by internal economies of scale and love of variety, not by differences in endowments or technology.`
    },
    es: {
      stem: R`Alemania y Francia intercambian grandes volúmenes de automóviles entre sí. ¿Qué marco explica mejor este hecho?`,
      choices: [
        R`Heckscher–Ohlin, ya que ambos países tienen razones capital-trabajo distintas.`,
        R`Competencia monopolística con rendimientos crecientes, ya que los consumidores valoran la variedad y cada firma produce un modelo diferenciado con costo medio decreciente.`,
        R`El modelo ricardiano, ya que la productividad laboral alemana y francesa en automóviles difiere.`,
        R`El modelo de factores específicos, ya que el capital es inmóvil entre sectores en el corto plazo.`
      ],
      explanation: R`El comercio de doble vía dentro de una misma industria entre países similares es la firma del comercio intraindustrial. Lo impulsan las economías de escala internas y el gusto por la variedad, no las diferencias de dotaciones o tecnología.`
    }
  },
  {
    id: "sc-02", topic: "scale", difficulty: "medium", type: "mc", answer: 3,
    en: {
      stem: R`Two identical countries integrate their markets under monopolistic competition. What happens in the new equilibrium?`,
      choices: [
        R`The price falls, each firm produces less, and more firms operate in total.`,
        R`The price rises, each firm produces more, and the number of varieties falls.`,
        R`The price is unchanged; only the allocation of production across countries changes.`,
        R`The price falls, each firm produces more, and consumers in each country have access to more varieties than before.`
      ],
      explanation: R`A larger market supports more firms than either country alone but fewer than the two autarky totals combined. Each surviving firm moves down its average cost curve, so prices fall, while the varieties available to any one consumer increase.`
    },
    es: {
      stem: R`Dos países idénticos integran sus mercados bajo competencia monopolística. ¿Qué ocurre en el nuevo equilibrio?`,
      choices: [
        R`El precio cae, cada firma produce menos y operan más firmas en total.`,
        R`El precio sube, cada firma produce más y el número de variedades cae.`,
        R`El precio no cambia; sólo cambia la asignación de la producción entre países.`,
        R`El precio cae, cada firma produce más y los consumidores de cada país acceden a más variedades que antes.`
      ],
      explanation: R`Un mercado más grande sostiene más firmas que cada país por separado, pero menos que la suma de ambas autarquías. Cada firma sobreviviente baja por su curva de costo medio, de modo que los precios caen, mientras las variedades disponibles para un consumidor aumentan.`
    }
  },
  {
    id: "sc-03", topic: "scale", difficulty: "medium", type: "tf", answer: true,
    en: {
      stem: R`External economies of scale are compatible with perfectly competitive, atomistic firms, whereas internal economies of scale are not.`,
      explanation: R`True. With external economies the cost advantage belongs to the industry's size in a location, so individual firms can remain small price-takers. Internal economies give large firms a cost advantage over small ones, which breaks perfect competition.`
    },
    es: {
      stem: R`Las economías de escala externas son compatibles con firmas atomísticas en competencia perfecta, mientras que las internas no lo son.`,
      explanation: R`Verdadero. Con economías externas la ventaja de costos pertenece al tamaño de la industria en una localización, por lo que las firmas individuales pueden seguir siendo pequeñas y tomadoras de precios. Las economías internas dan a las firmas grandes una ventaja de costos sobre las pequeñas, lo que rompe la competencia perfecta.`
    }
  },
  {
    id: "sc-04", topic: "scale", difficulty: "hard", type: "mc", answer: 2,
    en: {
      stem: R`An industry has strong external economies of scale. Country A established the industry first; Country B has lower underlying costs at any given scale. What is the likely outcome?`,
      choices: [
        R`B captures the industry immediately, since cost advantages always dominate in the long run.`,
        R`The industry splits evenly, since external economies are available to both locations.`,
        R`A can retain the industry indefinitely, because its accumulated scale offsets B's underlying cost advantage.`,
        R`Neither country specialises, because external economies prevent any stable equilibrium.`
      ],
      explanation: R`External economies generate path dependence: the incumbent location's average cost is low precisely because the industry is already there. Entry by a potentially cheaper location requires coordinated entry at scale, which is exactly the coordination failure the infant industry argument points to.`
    },
    es: {
      stem: R`Una industria tiene fuertes economías de escala externas. El país A estableció la industria primero; el país B tiene costos subyacentes menores a cualquier escala dada. ¿Cuál es el resultado probable?`,
      choices: [
        R`B captura la industria de inmediato, ya que las ventajas de costos siempre dominan en el largo plazo.`,
        R`La industria se reparte en partes iguales, ya que las economías externas están disponibles en ambas localizaciones.`,
        R`A puede retener la industria indefinidamente, porque su escala acumulada compensa la ventaja de costos subyacente de B.`,
        R`Ningún país se especializa, porque las economías externas impiden cualquier equilibrio estable.`
      ],
      explanation: R`Las economías externas generan dependencia de la trayectoria: el costo medio de la localización establecida es bajo precisamente porque la industria ya está ahí. Que entre una localización potencialmente más barata exige entrada coordinada a escala, que es justamente la falla de coordinación que invoca el argumento de la industria naciente.`
    }
  },

  /* ==================== FIRMS, HETEROGENEITY, FDI, OFFSHORING ============= */

  {
    id: "fi-01", topic: "firms", difficulty: "medium", type: "mc", answer: 1,
    en: {
      stem: R`In the Melitz model, why does trade liberalisation raise average industry productivity?`,
      choices: [
        R`Because every firm invests more in technology once it faces foreign competition.`,
        R`Because the least productive firms exit while the most productive expand into export markets, reallocating market share.`,
        R`Because liberalisation lowers the fixed cost of production for all firms symmetrically.`,
        R`Because exporting firms learn production techniques from their foreign buyers.`
      ],
      explanation: R`The mechanism is reallocation across firms, not improvement within firms. Tougher competition raises the domestic productivity cutoff and shifts labour and sales toward high-productivity exporters.`
    },
    es: {
      stem: R`En el modelo de Melitz, ¿por qué la liberalización comercial eleva la productividad promedio de la industria?`,
      choices: [
        R`Porque toda firma invierte más en tecnología al enfrentar competencia externa.`,
        R`Porque las firmas menos productivas salen mientras las más productivas se expanden a mercados de exportación, reasignando participación de mercado.`,
        R`Porque la liberalización reduce el costo fijo de producción de todas las firmas de forma simétrica.`,
        R`Porque las firmas exportadoras aprenden técnicas de producción de sus compradores extranjeros.`
      ],
      explanation: R`El mecanismo es reasignación entre firmas, no mejora dentro de cada firma. Una competencia más dura eleva el umbral de productividad doméstico y desplaza trabajo y ventas hacia exportadores de alta productividad.`
    }
  },
  {
    id: "fi-02", topic: "firms", difficulty: "medium", type: "tf", answer: false,
    en: {
      stem: R`In models with heterogeneous firms, opening to trade causes all surviving domestic firms to begin exporting.`,
      explanation: R`False. Exporting requires paying a fixed cost, so only firms with productivity above an export cutoff find it profitable. In the data, exporters are a minority of firms in almost every industry, and they are larger and more productive than non-exporters.`
    },
    es: {
      stem: R`En los modelos con firmas heterogéneas, la apertura comercial hace que todas las firmas domésticas sobrevivientes comiencen a exportar.`,
      explanation: R`Falso. Exportar exige pagar un costo fijo, de modo que sólo las firmas con productividad sobre un umbral de exportación lo encuentran rentable. En los datos, los exportadores son una minoría de las firmas en casi toda industria, y son más grandes y más productivos que los no exportadores.`
    }
  },
  {
    id: "fi-03", topic: "firms", difficulty: "hard", type: "mc", answer: 0,
    en: {
      stem: R`Variable trade costs fall. What happens to the domestic productivity cutoff below which firms exit?`,
      choices: [
        R`It rises, because import competition and the expansion of exporters bid up factor prices and squeeze the least productive firms.`,
        R`It falls, because lower trade costs reduce the cost of serving every market.`,
        R`It is unchanged, because the cutoff depends only on fixed costs.`,
        R`It rises only in the exporting country and falls in the importing country.`
      ],
      explanation: R`Lower trade costs make exporters more profitable, which raises labour demand and the real wage, and simultaneously intensifies import competition. Both forces push the zero-profit cutoff up, forcing marginal firms out.`
    },
    es: {
      stem: R`Caen los costos variables de comercio. ¿Qué ocurre con el umbral de productividad doméstico bajo el cual las firmas salen?`,
      choices: [
        R`Sube, porque la competencia importadora y la expansión de los exportadores presionan al alza los precios de los factores y aprietan a las firmas menos productivas.`,
        R`Baja, porque menores costos de comercio reducen el costo de atender cada mercado.`,
        R`No cambia, porque el umbral depende sólo de los costos fijos.`,
        R`Sube sólo en el país exportador y baja en el importador.`
      ],
      explanation: R`Menores costos de comercio hacen más rentables a los exportadores, lo que eleva la demanda de trabajo y el salario real, y a la vez intensifica la competencia de importaciones. Ambas fuerzas empujan hacia arriba el umbral de beneficio cero, expulsando a las firmas marginales.`
    }
  },
  {
    id: "fi-04", topic: "firms", difficulty: "medium", type: "mc", answer: 3,
    en: {
      stem: R`A firm builds a plant abroad that replicates its home production in order to serve the local market and avoid trade costs. What is this, and what mainly drives it?`,
      choices: [
        R`Vertical FDI, driven by differences in factor prices across countries.`,
        R`Vertical FDI, driven by the proximity-concentration trade-off.`,
        R`Horizontal FDI, driven by differences in factor prices across countries.`,
        R`Horizontal FDI, driven by the proximity-concentration trade-off between saving trade costs and losing scale economies.`
      ],
      explanation: R`Horizontal FDI duplicates the same stage of production abroad; it is attractive when trade costs are high relative to plant-level fixed costs. Vertical FDI instead slices the production chain across countries to exploit factor price differences.`
    },
    es: {
      stem: R`Una firma construye una planta en el extranjero que replica su producción local para atender el mercado de destino y evitar costos de comercio. ¿Qué es esto y qué lo impulsa principalmente?`,
      choices: [
        R`IED vertical, impulsada por diferencias en precios de factores entre países.`,
        R`IED vertical, impulsada por el trade-off proximidad-concentración.`,
        R`IED horizontal, impulsada por diferencias en precios de factores entre países.`,
        R`IED horizontal, impulsada por el trade-off proximidad-concentración entre ahorrar costos de comercio y perder economías de escala.`
      ],
      explanation: R`La IED horizontal duplica la misma etapa de producción en el extranjero; es atractiva cuando los costos de comercio son altos respecto de los costos fijos de planta. La IED vertical, en cambio, fragmenta la cadena productiva entre países para aprovechar diferencias en precios de factores.`
    }
  },

  /* ================================ GRAVITY =============================== */

  {
    id: "gr-01", topic: "gravity", difficulty: "easy", type: "mc", answer: 0,
    en: {
      stem: R`In its basic form, the gravity equation states that bilateral trade between i and j is:`,
      choices: [
        R`Increasing in the product of the two economies' GDPs and decreasing in the distance between them.`,
        R`Increasing in the ratio of the two economies' GDPs and decreasing in their population difference.`,
        R`Increasing in the difference between the two economies' capital-labour ratios.`,
        R`Proportional to the sum of the two economies' populations.`
      ],
      explanation: R`The standard specification is \[T_{ij} = A\,\frac{Y_i^{\,a}\, Y_j^{\,b}}{D_{ij}^{\,c}},\] usually estimated in logs. Size raises trade because larger economies both supply more varieties and spend more; distance proxies for trade costs.`
    },
    es: {
      stem: R`En su forma básica, la ecuación de gravedad establece que el comercio bilateral entre i y j es:`,
      choices: [
        R`Creciente en el producto de los PIB de ambas economías y decreciente en la distancia entre ellas.`,
        R`Creciente en la razón de los PIB de ambas economías y decreciente en su diferencia de población.`,
        R`Creciente en la diferencia entre las razones capital-trabajo de ambas economías.`,
        R`Proporcional a la suma de las poblaciones de ambas economías.`
      ],
      explanation: R`La especificación estándar es \[T_{ij} = A\,\frac{Y_i^{\,a}\, Y_j^{\,b}}{D_{ij}^{\,c}},\] usualmente estimada en logaritmos. El tamaño eleva el comercio porque economías más grandes ofrecen más variedades y gastan más; la distancia aproxima los costos de comercio.`
    }
  },
  {
    id: "gr-02", topic: "gravity", difficulty: "medium", type: "tf", answer: false,
    en: {
      stem: R`Estimated gravity equations typically find that a 1% increase in distance reduces bilateral trade by less than 0.1%.`,
      explanation: R`False. The estimated distance elasticity is large, typically between roughly \(-0.7\) and \(-1\), and it has not shrunk much over decades despite falling transport costs. Distance captures information, contracting and relationship frictions, not only freight.`
    },
    es: {
      stem: R`Las estimaciones de ecuaciones de gravedad típicamente encuentran que un aumento de 1% en la distancia reduce el comercio bilateral en menos de 0,1%.`,
      explanation: R`Falso. La elasticidad estimada respecto de la distancia es grande, típicamente entre aproximadamente \(-0{,}7\) y \(-1\), y no se ha reducido mucho en décadas pese a la caída de los costos de transporte. La distancia captura fricciones de información, contratación y relaciones comerciales, no sólo flete.`
    }
  },
  {
    id: "gr-03", topic: "gravity", difficulty: "medium", type: "mc", answer: 2,
    en: {
      stem: R`Canadian provinces trade far more with one another than with US states of comparable size and distance. What is the standard interpretation?`,
      choices: [
        R`Canada has a comparative advantage in the goods its provinces exchange.`,
        R`Transport infrastructure within Canada is better than across the border.`,
        R`National borders impose substantial trade costs through formal barriers, separate currencies, regulation, networks and informal frictions.`,
        R`Provincial GDPs are measured on a different basis from state GDPs.`
      ],
      explanation: R`This is the border effect, documented by McCallum and reinterpreted by Anderson and van Wincoop. Its measured size shrinks considerably once multilateral resistance terms are included, but a substantial border cost remains.`
    },
    es: {
      stem: R`Las provincias canadienses comercian mucho más entre sí que con estados de EE.UU. de tamaño y distancia comparables. ¿Cuál es la interpretación estándar?`,
      choices: [
        R`Canadá tiene ventaja comparativa en los bienes que sus provincias intercambian.`,
        R`La infraestructura de transporte dentro de Canadá es mejor que la transfronteriza.`,
        R`Las fronteras nacionales imponen costos de comercio sustanciales mediante barreras formales, monedas distintas, regulación, redes y fricciones informales.`,
        R`El PIB provincial se mide con una base distinta al PIB estatal.`
      ],
      explanation: R`Este es el efecto frontera, documentado por McCallum y reinterpretado por Anderson y van Wincoop. Su magnitud medida se reduce bastante al incluir términos de resistencia multilateral, pero persiste un costo fronterizo sustancial.`
    }
  },
  {
    id: "gr-04", topic: "gravity", difficulty: "hard", type: "mc", answer: 1,
    en: {
      stem: R`What is the point of the multilateral resistance terms in the Anderson–van Wincoop gravity equation?`,
      choices: [
        R`They allow GDP elasticities to differ from one across country pairs.`,
        R`They capture the fact that trade between i and j depends on bilateral trade costs *relative* to each country's trade costs with all other partners.`,
        R`They correct for zero trade flows, which cannot be handled in logs.`,
        R`They adjust nominal trade flows for differences in price levels across countries.`
      ],
      explanation: R`A remote pair of countries trades heavily with each other because both face high costs everywhere else. Omitting multilateral resistance biases estimated border and distance effects, which is why fixed effects by exporter and importer are now standard.`
    },
    es: {
      stem: R`¿Cuál es el punto de los términos de resistencia multilateral en la ecuación de gravedad de Anderson–van Wincoop?`,
      choices: [
        R`Permiten que las elasticidades respecto del PIB difieran de uno entre pares de países.`,
        R`Capturan que el comercio entre i y j depende de los costos bilaterales *relativos* a los costos de cada país con todos los demás socios.`,
        R`Corrigen por flujos de comercio iguales a cero, que no pueden tratarse en logaritmos.`,
        R`Ajustan los flujos nominales de comercio por diferencias en niveles de precios entre países.`
      ],
      explanation: R`Un par de países remotos comercia intensamente entre sí porque ambos enfrentan costos altos con todo el resto. Omitir la resistencia multilateral sesga los efectos estimados de frontera y distancia, razón por la cual hoy son estándar los efectos fijos de exportador e importador.`
    }
  },

  /* ========================= INSTRUMENTS OF TRADE POLICY ================== */

  {
    id: "po-01", topic: "policy", difficulty: "easy", type: "mc", answer: 3,
    en: {
      stem: R`A small country imposes a tariff on an imported good. Which statement is correct?`,
      choices: [
        R`The world price falls, so part of the tariff is paid by foreign exporters.`,
        R`Domestic consumers are unaffected because the tariff is collected from importers.`,
        R`National welfare rises, because tariff revenue exceeds the loss in consumer surplus.`,
        R`National welfare falls by the sum of a production distortion and a consumption distortion.`
      ],
      explanation: R`A small country cannot affect the world price, so the domestic price rises by the full tariff and there is no terms-of-trade gain. The consumer loss exceeds the producer gain plus revenue by the two deadweight triangles.`
    },
    es: {
      stem: R`Un país pequeño impone un arancel a un bien importado. ¿Qué afirmación es correcta?`,
      choices: [
        R`El precio mundial cae, por lo que parte del arancel la pagan los exportadores extranjeros.`,
        R`Los consumidores domésticos no se ven afectados porque el arancel se recauda de los importadores.`,
        R`El bienestar nacional aumenta, porque la recaudación arancelaria supera la pérdida de excedente del consumidor.`,
        R`El bienestar nacional cae en la suma de una distorsión de producción y una distorsión de consumo.`
      ],
      explanation: R`Un país pequeño no puede afectar el precio mundial, de modo que el precio doméstico sube en el monto completo del arancel y no hay ganancia de términos de intercambio. La pérdida del consumidor supera la ganancia del productor más la recaudación en los dos triángulos de pérdida de eficiencia.`
    }
  },
  {
    id: "po-02", topic: "policy", difficulty: "medium", type: "mc", answer: 1,
    en: {
      stem: R`A small country faces a world price of $10. Demand is 100 and domestic supply is 20 at that price. A specific tariff of $2 raises the domestic price to $12, at which demand is 90 and domestic supply is 30. What is the deadweight loss?`,
      choices: [
        R`$10`,
        R`$20`,
        R`$120`,
        R`$190`
      ],
      explanation: R`Production distortion \(= \tfrac{1}{2}\times 2\times(30-20) = 10\); consumption distortion \(= \tfrac{1}{2}\times 2\times(100-90) = 10\); total \(= 20\). Check: consumer loss \(190\) equals producer gain \(50\) plus revenue \(2\times 60 = 120\) plus deadweight loss \(20\).`
    },
    es: {
      stem: R`Un país pequeño enfrenta un precio mundial de $10. A ese precio la demanda es 100 y la oferta doméstica 20. Un arancel específico de $2 eleva el precio doméstico a $12, donde la demanda es 90 y la oferta doméstica 30. ¿Cuál es la pérdida de eficiencia?`,
      choices: [
        R`$10`,
        R`$20`,
        R`$120`,
        R`$190`
      ],
      explanation: R`Distorsión de producción \(= \tfrac{1}{2}\times 2\times(30-20) = 10\); distorsión de consumo \(= \tfrac{1}{2}\times 2\times(100-90) = 10\); total \(= 20\). Verificación: la pérdida del consumidor \(190\) equivale a la ganancia del productor \(50\) más la recaudación \(2\times 60 = 120\) más la pérdida de eficiencia \(20\).`
    }
  },
  {
    id: "po-03", topic: "policy", difficulty: "medium", type: "mc", answer: 2,
    en: {
      stem: R`A car sells for $10,000 on the world market and uses $6,000 of imported parts. The country levies a 25% tariff on cars and no tariff on parts. What is the effective rate of protection for domestic assembly?`,
      choices: [
        R`25%`,
        R`41.7%`,
        R`62.5%`,
        R`125%`
      ],
      explanation: R`Value added at world prices is \(10{,}000 - 6{,}000 = 4{,}000\). With the tariff the car sells for \(12{,}500\) domestically while parts still cost \(6{,}000\), so value added becomes \(6{,}500\). The effective rate is \[\frac{6{,}500 - 4{,}000}{4{,}000} = 62.5\%,\] far above the nominal \(25\%\).`
    },
    es: {
      stem: R`Un automóvil se vende a $10.000 en el mercado mundial y usa $6.000 de partes importadas. El país aplica un arancel de 25% a los automóviles y ninguno a las partes. ¿Cuál es la tasa efectiva de protección al ensamblaje doméstico?`,
      choices: [
        R`25%`,
        R`41,7%`,
        R`62,5%`,
        R`125%`
      ],
      explanation: R`El valor agregado a precios mundiales es \(10.000 - 6.000 = 4.000\). Con el arancel el automóvil se vende a \(12.500\) internamente mientras las partes siguen costando \(6.000\), de modo que el valor agregado pasa a \(6.500\). La tasa efectiva es \[\frac{6.500 - 4.000}{4.000} = 62{,}5\%,\] muy por encima del \(25\%\) nominal.`
    }
  },
  {
    id: "po-04", topic: "policy", difficulty: "medium", type: "tf", answer: true,
    en: {
      stem: R`In a competitive market, an import quota that restricts imports to the level a given tariff would produce yields the same domestic price as that tariff, but the government does not collect the revenue unless it auctions the licences.`,
      explanation: R`True. This is tariff-quota equivalence. The area that would have been tariff revenue becomes quota rents, captured by whoever holds the import licences. Equivalence breaks down under monopoly, demand growth, or uncertainty.`
    },
    es: {
      stem: R`En un mercado competitivo, una cuota de importación que restringe las importaciones al nivel que produciría un arancel dado genera el mismo precio doméstico que ese arancel, pero el gobierno no recauda a menos que licite las licencias.`,
      explanation: R`Verdadero. Esta es la equivalencia arancel-cuota. El área que habría sido recaudación arancelaria se convierte en rentas de cuota, capturadas por quien tenga las licencias de importación. La equivalencia se rompe bajo monopolio, crecimiento de la demanda o incertidumbre.`
    }
  },
  {
    id: "po-05", topic: "policy", difficulty: "medium", type: "tf", answer: true,
    en: {
      stem: R`A voluntary export restraint is typically more costly to the importing country than an equivalent tariff.`,
      explanation: R`True. A VER delivers the same domestic price increase, but the rents go to the foreign exporters who hold the restraint rather than to the importing country's treasury. The importing country bears the deadweight losses and loses the revenue rectangle as well.`
    },
    es: {
      stem: R`Una restricción voluntaria a las exportaciones suele ser más costosa para el país importador que un arancel equivalente.`,
      explanation: R`Verdadero. Una RVE produce el mismo aumento del precio doméstico, pero las rentas van a los exportadores extranjeros que administran la restricción y no al fisco del país importador. El país importador soporta las pérdidas de eficiencia y además pierde el rectángulo de recaudación.`
    }
  },
  {
    id: "po-06", topic: "policy", difficulty: "hard", type: "mc", answer: 1,
    en: {
      stem: R`Why can a tariff raise national welfare in a large country, and what determines the optimal rate?`,
      choices: [
        R`Because the tariff protects infant industries; the optimal rate equals the learning externality.`,
        R`Because the tariff depresses the foreign export price, producing a terms-of-trade gain; the optimal rate is inversely related to the elasticity of foreign export supply.`,
        R`Because tariff revenue is a lump-sum transfer to domestic residents; the optimal rate maximises revenue.`,
        R`Because the tariff shifts profits to domestic firms; the optimal rate equals the foreign firm's markup.`
      ],
      explanation: R`The terms-of-trade gain is first-order while the distortions are second-order at a zero tariff, so a small tariff raises welfare. The optimal tariff falls as foreign export supply becomes more elastic and is zero for a small country. It is a beggar-thy-neighbour policy that invites retaliation.`
    },
    es: {
      stem: R`¿Por qué un arancel puede elevar el bienestar nacional en un país grande, y qué determina la tasa óptima?`,
      choices: [
        R`Porque el arancel protege industrias nacientes; la tasa óptima iguala la externalidad de aprendizaje.`,
        R`Porque el arancel deprime el precio de exportación extranjero, generando una ganancia de términos de intercambio; la tasa óptima se relaciona inversamente con la elasticidad de la oferta de exportación extranjera.`,
        R`Porque la recaudación arancelaria es una transferencia de suma fija a los residentes domésticos; la tasa óptima maximiza la recaudación.`,
        R`Porque el arancel traslada beneficios hacia las firmas domésticas; la tasa óptima iguala el margen de la firma extranjera.`
      ],
      explanation: R`La ganancia de términos de intercambio es de primer orden mientras las distorsiones son de segundo orden en un arancel cero, de modo que un arancel pequeño eleva el bienestar. El arancel óptimo cae a medida que la oferta de exportación extranjera se hace más elástica y es cero para un país pequeño. Es una política de empobrecer al vecino que invita a la represalia.`
    }
  },
  {
    id: "po-07", topic: "policy", difficulty: "hard", type: "mc", answer: 0,
    en: {
      stem: R`A large country imposes a specific tariff \(t\). Compared with free trade, what happens to prices?`,
      choices: [
        R`The domestic price rises by less than t and the foreign export price falls, with the gap between them equal to \(t\).`,
        R`The domestic price rises by exactly \(t\) and the foreign export price is unchanged.`,
        R`The domestic price is unchanged and the foreign export price falls by \(t\).`,
        R`Both prices rise, with the sum of the increases equal to \(t\).`
      ],
      explanation: R`Import demand falls, which depresses the price foreign exporters receive. The tariff is split between the two prices according to relative elasticities, and the wedge between them is always exactly \(t\).`
    },
    es: {
      stem: R`Un país grande impone un arancel específico \(t\). ¿Qué ocurre con los precios respecto del libre comercio?`,
      choices: [
        R`El precio doméstico sube menos que t y el precio de exportación extranjero cae, con una brecha entre ambos igual a \(t\).`,
        R`El precio doméstico sube exactamente \(t\) y el precio de exportación extranjero no cambia.`,
        R`El precio doméstico no cambia y el precio de exportación extranjero cae en \(t\).`,
        R`Ambos precios suben, y la suma de los aumentos es igual a \(t\).`
      ],
      explanation: R`La demanda de importaciones cae, lo que deprime el precio que reciben los exportadores extranjeros. El arancel se reparte entre ambos precios según las elasticidades relativas, y la cuña entre ellos es siempre exactamente \(t\).`
    }
  },
  {
    id: "po-08", topic: "policy", difficulty: "medium", type: "mc", answer: 3,
    en: {
      stem: R`A small country grants an export subsidy. What is the welfare effect?`,
      choices: [
        R`Welfare rises, because export revenue increases.`,
        R`Welfare is unchanged, because the subsidy is a pure transfer from taxpayers to exporters.`,
        R`Welfare falls only if the country is large enough to worsen its terms of trade.`,
        R`Welfare falls: the domestic price rises, consumers lose, and the subsidy bill exceeds the producer gain by two distortion triangles.`
      ],
      explanation: R`An export subsidy raises the domestic price above the world price, so domestic consumers lose and the government pays out more than producers gain. For a large country the terms of trade worsen as well, adding a further loss.`
    },
    es: {
      stem: R`Un país pequeño otorga un subsidio a la exportación. ¿Cuál es el efecto sobre el bienestar?`,
      choices: [
        R`El bienestar aumenta, porque crecen los ingresos de exportación.`,
        R`El bienestar no cambia, porque el subsidio es una transferencia pura de contribuyentes a exportadores.`,
        R`El bienestar cae sólo si el país es lo bastante grande para empeorar sus términos de intercambio.`,
        R`El bienestar cae: el precio doméstico sube, los consumidores pierden y el costo fiscal del subsidio supera la ganancia del productor en dos triángulos de distorsión.`
      ],
      explanation: R`Un subsidio a la exportación eleva el precio doméstico por sobre el mundial, de modo que los consumidores domésticos pierden y el gobierno desembolsa más de lo que ganan los productores. Para un país grande, además empeoran los términos de intercambio, agregando una pérdida adicional.`
    }
  },

  /* ==================== POLITICAL ECONOMY & AGREEMENTS ==================== */

  {
    id: "pe-01", topic: "polecon", difficulty: "easy", type: "mc", answer: 2,
    en: {
      stem: R`A customs union causes trade diversion when:`,
      choices: [
        R`Domestic production is replaced by cheaper imports from a member country.`,
        R`Member countries adopt a common external tariff higher than their previous average.`,
        R`Imports shift from a lower-cost non-member to a higher-cost member that now enters duty-free.`,
        R`Members agree to eliminate internal tariffs but keep their own external tariffs.`
      ],
      explanation: R`Trade creation replaces costly domestic production with cheaper member imports and raises welfare. Trade diversion replaces the cheapest world supplier with a preferential partner, wasting real resources and forgoing tariff revenue. The net effect of any agreement is an empirical question.`
    },
    es: {
      stem: R`Una unión aduanera produce desviación de comercio cuando:`,
      choices: [
        R`La producción doméstica es reemplazada por importaciones más baratas desde un país miembro.`,
        R`Los países miembros adoptan un arancel externo común más alto que su promedio previo.`,
        R`Las importaciones se desplazan desde un no miembro de menor costo hacia un miembro de mayor costo que ahora entra libre de arancel.`,
        R`Los miembros acuerdan eliminar aranceles internos pero mantienen sus propios aranceles externos.`
      ],
      explanation: R`La creación de comercio reemplaza producción doméstica costosa por importaciones más baratas de un miembro y eleva el bienestar. La desviación reemplaza al proveedor mundial más barato por un socio preferencial, desperdiciando recursos reales y resignando recaudación. El efecto neto de cualquier acuerdo es una cuestión empírica.`
    }
  },
  {
    id: "pe-02", topic: "polecon", difficulty: "easy", type: "mc", answer: 1,
    en: {
      stem: R`What distinguishes a customs union from a free trade area?`,
      choices: [
        R`A customs union allows free movement of labour; a free trade area does not.`,
        R`A customs union adopts a common external tariff; a free trade area lets each member set its own, which requires rules of origin.`,
        R`A customs union eliminates tariffs only on manufactures; a free trade area covers all goods.`,
        R`A customs union requires a common currency; a free trade area does not.`
      ],
      explanation: R`Without a common external tariff, goods would enter through the lowest-tariff member and be transhipped. Rules of origin exist to prevent this, and they are a significant source of administrative cost and effective protection.`
    },
    es: {
      stem: R`¿Qué distingue a una unión aduanera de un área de libre comercio?`,
      choices: [
        R`Una unión aduanera permite el libre movimiento de trabajadores; un área de libre comercio no.`,
        R`Una unión aduanera adopta un arancel externo común; un área de libre comercio deja que cada miembro fije el suyo, lo que exige reglas de origen.`,
        R`Una unión aduanera elimina aranceles sólo sobre manufacturas; un área de libre comercio cubre todos los bienes.`,
        R`Una unión aduanera requiere una moneda común; un área de libre comercio no.`
      ],
      explanation: R`Sin un arancel externo común, los bienes entrarían por el miembro con arancel más bajo y luego se reexpedirían. Las reglas de origen existen para impedirlo, y son una fuente relevante de costo administrativo y protección efectiva.`
    }
  },
  {
    id: "pe-03", topic: "polecon", difficulty: "medium", type: "tf", answer: true,
    en: {
      stem: R`Under the WTO's most-favoured-nation principle, a member must extend any tariff concession granted to one member to all other members, with free trade areas and customs unions as a recognised exception.`,
      explanation: R`True. MFN is the non-discrimination backbone of the system, and Article XXIV provides the exception for preferential agreements. The proliferation of such agreements is precisely why the exception is debated.`
    },
    es: {
      stem: R`Bajo el principio de nación más favorecida de la OMC, un miembro debe extender a todos los demás miembros cualquier concesión arancelaria otorgada a uno, con las áreas de libre comercio y uniones aduaneras como excepción reconocida.`,
      explanation: R`Verdadero. La NMF es la columna de no discriminación del sistema, y el artículo XXIV establece la excepción para acuerdos preferenciales. La proliferación de esos acuerdos es justamente lo que pone la excepción en discusión.`
    }
  },
  {
    id: "pe-04", topic: "polecon", difficulty: "medium", type: "mc", answer: 0,
    en: {
      stem: R`Protection persists even though its aggregate costs exceed its benefits. What is the standard political economy explanation?`,
      choices: [
        R`Benefits are concentrated on a small, well-organised group while costs are spread thinly over many consumers who face a collective action problem.`,
        R`Voters systematically overestimate the losses from trade.`,
        R`Governments cannot measure deadweight losses accurately.`,
        R`Tariff revenue is a large share of government budgets in most countries.`
      ],
      explanation: R`Each producer in a protected industry has a lot at stake and organises to lobby; each consumer loses a small amount and has no incentive to act. Median voter models, in contrast, struggle to explain observed protection.`
    },
    es: {
      stem: R`La protección persiste aunque sus costos agregados superen sus beneficios. ¿Cuál es la explicación estándar de economía política?`,
      choices: [
        R`Los beneficios se concentran en un grupo pequeño y bien organizado mientras los costos se reparten de forma difusa entre muchos consumidores que enfrentan un problema de acción colectiva.`,
        R`Los votantes sobreestiman sistemáticamente las pérdidas del comercio.`,
        R`Los gobiernos no pueden medir con precisión las pérdidas de eficiencia.`,
        R`La recaudación arancelaria es una fracción grande del presupuesto público en la mayoría de los países.`
      ],
      explanation: R`Cada productor de una industria protegida tiene mucho en juego y se organiza para hacer lobby; cada consumidor pierde poco y no tiene incentivo a actuar. Los modelos de votante mediano, en cambio, tienen dificultades para explicar la protección observada.`
    }
  },
  {
    id: "pe-05", topic: "polecon", difficulty: "hard", type: "mc", answer: 2,
    en: {
      stem: R`Under what condition is the infant industry argument a valid case for temporary protection?`,
      choices: [
        R`Whenever a domestic industry currently has higher costs than its foreign competitors.`,
        R`Whenever the industry is expected to be internationally competitive within a decade.`,
        R`Only when a market failure such as credit constraints or non-appropriable learning spillovers prevents firms from financing their own start-up losses.`,
        R`Only when the country is large enough to influence its terms of trade in that industry.`
      ],
      explanation: R`If future profits justify present losses and capital markets work, firms will bear those losses themselves; protection is then unnecessary. The argument requires an identified market failure, and the targeting principle says the efficient instrument addresses that failure directly rather than through a trade barrier.`
    },
    es: {
      stem: R`¿Bajo qué condición el argumento de la industria naciente justifica protección temporal?`,
      choices: [
        R`Siempre que una industria doméstica tenga hoy costos más altos que sus competidores extranjeros.`,
        R`Siempre que se espere que la industria sea internacionalmente competitiva dentro de una década.`,
        R`Sólo cuando una falla de mercado, como restricciones de crédito o aprendizaje con externalidades no apropiables, impide que las firmas financien sus propias pérdidas iniciales.`,
        R`Sólo cuando el país es lo bastante grande para influir en sus términos de intercambio en esa industria.`
      ],
      explanation: R`Si los beneficios futuros justifican las pérdidas presentes y los mercados de capitales funcionan, las firmas asumirán esas pérdidas por su cuenta y la protección es innecesaria. El argumento exige identificar una falla de mercado, y el principio de focalización indica que el instrumento eficiente ataca esa falla directamente y no vía una barrera comercial.`
    }
  },
  {
    id: "pe-06", topic: "polecon", difficulty: "medium", type: "tf", answer: false,
    en: {
      stem: R`Because trade liberalisation raises aggregate real income, the standard models imply that opening to trade makes every group within a country better off.`,
      explanation: R`False. The aggregate gain is compatible with real losses for specific groups: owners of factors specific to import-competing sectors in the specific factors model, and the scarce factor in Heckscher–Ohlin via Stolper–Samuelson. This distributional conflict is why liberalisation is politically contested.`
    },
    es: {
      stem: R`Dado que la liberalización comercial eleva el ingreso real agregado, los modelos estándar implican que la apertura deja mejor a todos los grupos dentro de un país.`,
      explanation: R`Falso. La ganancia agregada es compatible con pérdidas reales para grupos específicos: los dueños de factores específicos a sectores que compiten con importaciones en el modelo de factores específicos, y el factor escaso en Heckscher–Ohlin vía Stolper–Samuelson. Ese conflicto distributivo es la razón de que la liberalización sea políticamente disputada.`
    }
  }

  ]
};
