/* ---------------------------------------------------------------------------
   International Trade — question bank
   Universidad de los Andes · Alfredo Mendoza-Fernández

   GENERATED from the lecture notes by tools/import_notes.py. The questions are
   the multiple-choice and true/false exercises of each chapter, taken verbatim,
   with each chapter's solution as the explanation.

   Re-run the importer after editing the notes rather than editing here, or any
   hand edit is lost on the next import:

       python3 tools/import_notes.py <path to the Notes folder>

   NOTATION. Questions use the book's own macros (\Alc, \relpi, \ccutD, ...).
   They are exported to data/macros.js from macros.tex and handed to KaTeX at
   render time, so the text here matches the .tex character for character.
   Mathematics is delimited \( \) inline and \[ \] displayed; a bare $ is just
   a dollar sign. The R before each backtick string is String.raw, which is what
   lets a single backslash survive. Keep it.

   Fields: id, topic (an id from `topics`), type ("mc" | "tf"), answer (an index
   from 0 for mc, true/false for tf), and an `en` block. A language block may be
   absent; the page falls back to English.
--------------------------------------------------------------------------- */

const R = String.raw;

window.TRADE_QUESTION_BANK = {

  meta: {
    course: { en: "International Trade", es: "Comercio Internacional" },
    source: { en: "Lecture Notes in International Trade — EAI 3220",
              es: "Apuntes de Comercio Internacional — EAI 3220" },
    institution: "Universidad de los Andes",
    updated: "2026-11-08"
  },

  topics: [
    { id: "method", chapter: 1, en: "Method and models", es: "Método y modelos" },
    { id: "facts", chapter: 2, en: "The facts of world trade", es: "Los hechos del comercio mundial" },
    { id: "gravity", chapter: 3, en: "Gravity", es: "Gravedad" },
    { id: "ricardo", chapter: 4, en: "Ricardo", es: "Ricardo" },
    { id: "specific", chapter: 5, en: "Specific factors", es: "Factores específicos" },
    { id: "ho", chapter: 6, en: "Heckscher–Ohlin", es: "Heckscher–Ohlin" },
    { id: "scale", chapter: 7, en: "External economies of scale", es: "Economías de escala externas" },
    { id: "krugman", chapter: 8, en: "Monopolistic competition", es: "Competencia monopolística" },
    { id: "melitz", chapter: 9, en: "Heterogeneous firms", es: "Firmas heterogéneas" },
    { id: "fdi", chapter: 10, en: "FDI and offshoring", es: "IED y offshoring" },
    { id: "policy1", chapter: 11, en: "Instruments of trade policy", es: "Instrumentos de política comercial" },
    { id: "policy2", chapter: 12, en: "The political economy of trade", es: "Economía política del comercio" }
  ],

  questions: [

    { id: "method-mc01", topic: "method", type: "mc", answer: 1,
      en: {
        stem: R`A researcher interviews dock workers and customs agents about how a new clearance rule changed their daily decisions, and writes a narrative case study rather than estimating a statistical model. The work is best classified as`,
        choices: [
          R`theoretical, because no coefficients are reported.`,
          R`empirical and qualitative.`,
          R`empirical and quantitative.`,
          R`neither empirical nor theoretical, since case studies cannot generalise.`,
        ],
        explanation: R`Interviews and a narrative case study rest on observation, which makes the work empirical; its non-statistical form makes it qualitative. Option (a) confuses the presence of numbers with the presence of theory, and (d) confuses the question of classification with the separate question of external validity.`
      } },

    { id: "method-mc02", topic: "method", type: "mc", answer: 1,
      en: {
        stem: R`A forecaster estimates a stable relationship between tariff changes and imports on a long historical series. Which limitation warns most directly against assuming the relationship will hold in the next decade?`,
        choices: [
          R`Deductive reasoning makes historical evidence irrelevant.`,
          R`Social processes can be non-stationary, and many causal factors change together over time.`,
          R`A sufficiently long series eventually eliminates uncertainty.`,
          R`Qualitative evidence cannot be scientific.`,
        ],
        explanation: R`This is the turkey's problem of the section: many causes combine and the process does not hold still, so a long past series need not transport to a new period. Option (c) states the opposite of the truth — length protects against sampling error, not against non-stationarity.`
      } },

    { id: "method-mc03", topic: "method", type: "mc", answer: 2,
      en: {
        stem: R`Which sequence best represents Mill's deductive method?`,
        choices: [
          R`Collect correlations, choose the best-fitting curve, and treat it as a universal law.`,
          R`Begin from a policy conclusion and assemble facts that support it.`,
          R`Establish basic tendencies independently, deduce their implications under specified circumstances, and use data to check applicability and omitted causes.`,
          R`State an unfalsifiable prediction and add disturbances whenever it fails.`,
        ],
        explanation: R`Mill begins from independently grounded tendencies and deduces conditional implications; evidence then checks the application, the deduction and the omitted causes, but not the primitive tendencies. Option (a) is the curve-fitting error of the section, and (d) is the ceteris paribus abuse of the section — both are positions Mill's method is designed to avoid.`
      } },

    { id: "method-mc04", topic: "method", type: "mc", answer: 2,
      en: {
        stem: R`Why does an unspecified ceteris paribus clause create a difficulty for a falsificationist?`,
        choices: [
          R`It makes the theory too mathematical to interpret.`,
          R`It converts an empirical claim into a moral claim.`,
          R`Any outcome can be attributed either to the stated tendency or to an unnamed disturbance, so no observation is forbidden.`,
          R`It requires randomised experiments, which economics cannot run.`,
        ],
        explanation: R`By the definition a scientific theory must forbid some observation. If the disturbances are not named in advance, either the predicted tendency appears or a disturbance is invoked, so nothing definite is prohibited. Option (d) describes a separate difficulty, which an unspecified clause neither causes nor cures.`
      } },

    { id: "method-mc05", topic: "method", type: "mc", answer: 2,
      en: {
        stem: R`On Friedman's test, an economic theory is to be judged by`,
        choices: [
          R`whether each of its assumptions is literally true.`,
          R`whether its conclusions follow from self-evident axioms.`,
          R`its predictive performance for the class of phenomena it was built for.`,
          R`whether it can account for every historical episode with one model.`,
        ],
        explanation: R`Friedman's instrumentalism judges a theory by predictive performance within its intended domain and treats the realism of the assumptions as irrelevant — indeed as necessarily absent, since abstraction is what makes a theory useful. Note the domain qualification in (c): it is part of the position, not a hedge added to it.`
      } },

    { id: "method-mc06", topic: "method", type: "mc", answer: 1,
      en: {
        stem: R`A model predicts employment changes well in one sample. It then fails in a new setting, and its author has no principled way to decide which assumption to revise. Which criticism fits this case best?`,
        choices: [
          R`A ceteris paribus clause automatically makes a claim falsifiable.`,
          R`Judging a theory only by prediction leaves explanation, and therefore repair, unresolved.`,
          R`Scientific realism requires models to be diagrammatic rather than algebraic.`,
          R`A single failed prediction proves that every auxiliary assumption is false.`,
        ],
        explanation: R`A model with no causal account offers nothing to revise, which is the shadow-and-pole objection of the section in its practical form. Option (d) inverts the Duhem--Quine problem: a failure shows that *something* in the conjunction is false, and identifies nothing.`
      } },

    { id: "method-mc07", topic: "method", type: "mc", answer: 2,
      en: {
        stem: R`Five observations are available and a researcher reports that a fourth-degree polynomial fits them exactly. What does the exact fit establish?`,
        choices: [
          R`That the underlying relationship is quartic.`,
          R`That the relationship will predict a sixth observation well.`,
          R`Nothing, since the proposition guarantees that such a fit exists for any five points with distinct \(x\) values.`,
          R`That the data contain no measurement error.`,
        ],
        explanation: R`Exact fit is available on demand and is therefore not evidence. In the example the exactly fitting quartic forecasts \(7\) at \(x=6\) where the line forecasts \(14\), and \(-20\) at \(x=7\); the in-sample evidence cannot choose between them. Option (d) has it backwards: an exact fit is consistent with the curve having absorbed the measurement error rather than avoided it.`
      } },

    { id: "method-mc08", topic: "method", type: "mc", answer: 2,
      en: {
        stem: R`In the example the exact cubic has an in-sample sum of squared residuals of zero and an out-of-sample squared error of \(36\), while the straight line has \(0.8\) and \(1\). The right conclusion is that`,
        choices: [
          R`the cubic is the better model, since its in-sample fit is perfect.`,
          R`the comparison is uninformative, since only one observation was held out.`,
          R`flexibility bought in-sample fit and was paid for out of sample.`,
          R`least squares was applied incorrectly to the cubic.`,
        ],
        explanation: R`The ranking reverses between the two columns, which is the definition of overfitting in the definition. Option (b) is the one worth pausing on: with a single held-out point the *magnitude* is indeed imprecisely estimated, but the direction of the reversal is not an artefact of the sample size, and a larger holdout would be the way to sharpen it rather than a reason to ignore it.`
      } },

    { id: "method-mc09", topic: "method", type: "mc", answer: 2,
      en: {
        stem: R`Astronomers blamed an unseen planet for the orbit of Uranus and found Neptune; they blamed an unseen planet for the orbit of Mercury and there was no Vulcan. The methodological moral is that`,
        choices: [
          R`auxiliary assumptions should never be blamed for a failed prediction.`,
          R`auxiliary assumptions should always be blamed first, since theories are rarely wrong.`,
          R`there is no algorithm that decides between abandoning the theory and blaming the circumstances.`,
          R`falsificationism is refuted, so theories cannot be tested.`,
        ],
        explanation: R`Identical reasoning produced the right answer once and the wrong answer once, and nothing available at the time distinguished the cases. Options (a) and (b) are the two mechanical rules the episode rules out; (d) overstates the conclusion, since the section gives a case — Leontief — in which a specific model was tested and failed.`
      } },

    { id: "method-mc10", topic: "method", type: "mc", answer: 1,
      en: {
        stem: R`Which statement best captures the view of models taken in this book?`,
        choices: [
          R`A model is a photograph of the economy, to be judged by its resemblance.`,
          R`A model is a credible counterfactual world, to be judged by whether its mechanism carries over to the case at hand.`,
          R`A model is a forecasting device and nothing more.`,
          R`A model is a set of axioms whose truth is self-evident.`,
        ],
        explanation: R`This is Sugden's position, adopted in the section. Option (a) is the realism-of-assumptions test that Friedman rejects; (c) is Friedman's own position, rejected here because models are also used for counterfactual policy questions; (d) is a caricature of Mill that Mill did not hold, since on his account data check the application of the theory.`
      } },

    { id: "method-tf01", topic: "method", type: "tf", answer: false,
      en: {
        stem: R`A theory that is consistent with every possible observation is, for that reason, a strong theory.`,
        explanation: R`False. By the definition a theory earns its content by forbidding something; one consistent with everything conveys no information about which world one is in.`
      } },

    { id: "method-tf02", topic: "method", type: "tf", answer: false,
      en: {
        stem: R`Because a failed prediction refutes a conjunction rather than a single hypothesis, a researcher who blames an auxiliary assumption is always behaving improperly.`,
        explanation: R`False. Blaming an auxiliary is exactly what led to Neptune. The Duhem--Quine problem is that no rule distinguishes the Neptune case from the Vulcan case, not that the move is illegitimate.`
      } },

    { id: "method-tf03", topic: "method", type: "tf", answer: false,
      en: {
        stem: R`If a model fits the available data perfectly, it will predict a new observation at least as well as any model that fits the available data imperfectly.`,
        explanation: R`False, and the example is a counterexample: the exactly fitting cubic misses the held-out point by six where the line misses it by one.`
      } },

    { id: "method-tf04", topic: "method", type: "tf", answer: false,
      en: {
        stem: R`Hume's problem of induction is solved by collecting a sufficiently large and varied sample.`,
        explanation: R`False. The turkey's sample was large and varied. Size addresses sampling error; it does not establish that the mechanism generating the data will continue to operate.`
      } },

    { id: "method-tf05", topic: "method", type: "tf", answer: false,
      en: {
        stem: R`A ceteris paribus clause can be made specified, in the sense of the definition, only by listing every cause that could conceivably interfere.`,
        explanation: R`False. A specified clause names a finite, checkable list and asserts the claim within stated circumstances, as in Step 3 of the example. What it gives up is generality, not completeness.`
      } },

    { id: "method-tf06", topic: "method", type: "tf", answer: true,
      en: {
        stem: R`On Friedman's account, a model whose assumptions are known to be false may nonetheless be a good model.`,
        explanation: R`True, and on his account the falsity of the assumptions is not even a mark against it, since abstraction is what makes a model useful. The objection raised in the section is not that this is incoherent but that prediction is not the only thing models are for.`
      } },

    { id: "method-tf07", topic: "method", type: "tf", answer: false,
      en: {
        stem: R`The statement "the pole is \(Y\) metres tall because its shadow is \(X\) metres long and the sun stands at angle \(\theta\)" has less predictive content than the statement with cause and effect reversed.`,
        explanation: R`False. The two have identical predictive content, which is precisely the point: they differ in explanatory content, and no amount of predictive success distinguishes them.`
      } },

    { id: "method-tf08", topic: "method", type: "tf", answer: false,
      en: {
        stem: R`The Leontief result shows that economics as a discipline is unfalsifiable.`,
        explanation: R`False, and it shows the opposite of its own claim: a specific model, applied to a specific country in a specific year, generated a prediction that failed and was accepted as having failed. "Economics" was never the thing under test.`
      } },

    { id: "method-tf09", topic: "method", type: "tf", answer: true,
      en: {
        stem: R`Holding out part of a data set before fitting makes the in-sample fit worse and is therefore a cost that must be weighed against its benefits.`,
        explanation: R`True as stated, and the trade is almost always worth making: fewer observations do weaken the fit, but only the held-out portion is capable of telling against the chosen specification, since the model was free to accommodate everything else.`
      } },

    { id: "method-tf10", topic: "method", type: "tf", answer: false,
      en: {
        stem: R`If two trade models give different answers to the same policy question, at least one of them must be wrong.`,
        explanation: R`False. They may have different domains, in the sense of A6 of the assumption, so that each is correct where it applies; the substantive question is which domain the case at hand falls into. The claim would be true only if both models asserted their conclusions unconditionally, which none of the models in this book does.`
      } },

    { id: "facts-mc01", topic: "facts", type: "mc", answer: 1,
      en: {
        stem: R`A country's trade openness is reported as \(1.8\). The most likely explanation is that`,
        choices: [
          R`the data contain an error, since openness cannot exceed one.`,
          R`the country imports inputs, adds value and re-exports, so gross flows are large relative to value added.`,
          R`the country runs a very large trade surplus.`,
          R`the country's GDP has been measured gross rather than as value added.`,
        ],
        explanation: R`By the proposition openness is a gross flow over a value added and can exceed one; the re-export case is the standard mechanism. Option (c) is irrelevant, since the numerator is a sum rather than a difference and openness is high for large flows in either direction. Option (d) reverses A6 of the assumption: it is the numerator that is gross.`
      } },

    { id: "facts-mc02", topic: "facts", type: "mc", answer: 1,
      en: {
        stem: R`China's openness has fallen over the last fifteen years. What can be concluded about Chinese trade from that fact alone?`,
        choices: [
          R`Chinese trade has fallen.`,
          R`Chinese trade has grown more slowly than Chinese GDP.`,
          R`Chinese trade has grown faster than Chinese GDP.`,
          R`Chinese trade policy has become more restrictive.`,
        ],
        explanation: R`Openness is a ratio, so a fall means the numerator grew more slowly than the denominator — and in this case trade grew while GDP grew faster. Option (a) is the error the question is designed to catch, and (d) adds a causal claim the ratio cannot support.`
      } },

    { id: "facts-mc03", topic: "facts", type: "mc", answer: 1,
      en: {
        stem: R`Switzerland and the United States have similar income per head and very different openness. The first explanation to consider is`,
        choices: [
          R`Switzerland has lower tariffs.`,
          R`Switzerland is smaller, so a greater share of its transactions crosses a border.`,
          R`the United States is less productive in tradable sectors.`,
          R`Switzerland is landlocked, which raises trade costs.`,
        ],
        explanation: R`The proposition derives the size effect with no appeal to policy, productivity or geography: enlarging a country reclassifies international trade as domestic trade. Option (d) points the wrong way — a higher trade cost would reduce openness — and the explanations in (a) and (c) may contribute but are not where one starts.`
      } },

    { id: "facts-mc04", topic: "facts", type: "mc", answer: 2,
      en: {
        stem: R`In the symmetric world of the proposition, a country comprising one quarter of world output has openness`,
        choices: [
          R`\(0.25\).`,
          R`\(0.75\).`,
          R`\(1.5\).`,
          R`\(2.0\).`,
        ],
        explanation: R`Openness is \(2(1-s) = 2(1-0.25) = 1.5\). Note that it exceeds one, which is consistent: in this world every region trades with every other, and a country of this size does most of its business abroad.`
      } },

    { id: "facts-mc05", topic: "facts", type: "mc", answer: 1,
      en: {
        stem: R`A country runs a trade deficit of \(40\). It follows, as a matter of accounting, that`,
        choices: [
          R`national saving exceeds domestic investment by \(40\).`,
          R`domestic investment exceeds national saving by \(40\).`,
          R`the government budget is in deficit by \(40\).`,
          R`the country's residents will have to repay \(40\) in a future period.`,
        ],
        explanation: R`From, \(S-I=\NX =-40\), so \(I-S=40\). Option (a) has the sign backwards. Option (c) confuses the public component with the national total: the example has a government deficit alongside a trade surplus. Option (d) treats the deficit as a debt rather than as a capital inflow, which is the error the proposition is stated to prevent.`
      } },

    { id: "facts-mc06", topic: "facts", type: "mc", answer: 1,
      en: {
        stem: R`A policy reduces a country's imports while leaving national saving and domestic investment unchanged. The trade balance`,
        choices: [
          R`improves by the full reduction in imports.`,
          R`is unchanged, so something else — exports, typically — must adjust.`,
          R`deteriorates.`,
          R`cannot be determined without knowing the tariff rate.`,
        ],
        explanation: R`Equation is an identity: if \(S-I\) does not move, \(\NX\) cannot move either. Something else therefore adjusts, and in practice the exchange rate appreciates and exports fall. Option (a) is the arithmetic the identity forbids.`
      } },

    { id: "facts-mc07", topic: "facts", type: "mc", answer: 1,
      en: {
        stem: R`In the three-country ring of the example, every bilateral balance is \(\pm 100\) and every multilateral balance is zero. The right conclusion is that`,
        choices: [
          R`one of the three countries must be worse off than in autarky.`,
          R`bilateral imbalances are a normal consequence of specialisation and carry almost no welfare information.`,
          R`the data are internally inconsistent, since balances must net to zero pairwise.`,
          R`the ring is unstable and will collapse into bilateral trade.`,
        ],
        explanation: R`Each country sells what it has and buys what it wants, and there is no reason for those to be the same partner. Option (c) misstates the accounting: balances net to zero across each country's row and across each partner's column, not within a pair.`
      } },

    { id: "facts-mc08", topic: "facts", type: "mc", answer: 1,
      en: {
        stem: R`Richer countries tend to have more positive trade balances. The inference that restricting imports would make a country richer is unwarranted principally because`,
        choices: [
          R`the correlation in the data is too weak to be meaningful.`,
          R`productivity raises both income and the balance, so the correlation reflects a common cause.`,
          R`trade balances are measured with error.`,
          R`the correlation holds only for small countries.`,
        ],
        explanation: R`Countries import from relatively productive partners and are rich largely because they are productive, so productivity drives both variables. Option (a) concedes too much: the correlation is real, and the objection is to the causal reading rather than to the fact.`
      } },

    { id: "facts-mc09", topic: "facts", type: "mc", answer: 1,
      en: {
        stem: R`Chile's 2023 partner table shows "Others" at US\\[59.2$ billion against China at US\\]55.4$ billion. This tells the reader that`,
        choices: [
          R`Chile's trade is unconcentrated.`,
          R`The table describes the top of the distribution and leaves the shape of the network unobserved.`,
          R`China is not in fact Chile's largest partner.`,
          R`the five named partners account for less than half of Chilean trade.`,
        ],
        explanation: R`The residual is the largest entry, so the majority of the mass outside the top five is undescribed. Option (a) is wrong on the arithmetic — the top five are \(66.3\) per cent of the total, which is concentrated — and (d) is arithmetically false for the same reason. Option (c) confuses a residual category with a partner.`
      } },

    { id: "facts-mc10", topic: "facts", type: "mc", answer: 1,
      en: {
        stem: R`World trade fell further than world GDP in 2009. The composition fact that best explains this is that`,
        choices: [
          R`trade is mostly in services, which are cyclical.`,
          R`trade is disproportionately in durables and intermediates, which are the margin that adjusts first in a downturn.`,
          R`trade is mostly in agricultural goods, whose prices collapsed.`,
          R`trade statistics are recorded with a lag.`,
        ],
        explanation: R`Durables and intermediates adjust first, and both are heavily traded; trade credit drying up after the financial crisis reinforced the effect. Option (c) describes the composition of trade before rather than after the shift discussed in the section.`
      } },

    { id: "facts-tf01", topic: "facts", type: "tf", answer: false,
      en: {
        stem: R`Trade openness is the share of a country's output that is traded.`,
        explanation: R`False. The numerator is a sum of gross flows and the denominator is value added, so openness is an index rather than a share and can exceed one, as in the example, where it reaches \(9.5\).`
      } },

    { id: "facts-tf02", topic: "facts", type: "tf", answer: true,
      en: {
        stem: R`A country that imports components, assembles them and re-exports the result will record higher openness than an otherwise identical country that makes the components itself.`,
        explanation: R`True. Step 4 of the example is the comparison: openness falls from \(9.5\) to about \(0.91\) when the component is produced domestically, although the exported good is unchanged.`
      } },

    { id: "facts-tf03", topic: "facts", type: "tf", answer: false,
      en: {
        stem: R`In the symmetric world of the proposition, openness depends on the country's absolute size rather than on its share of world output.`,
        explanation: R`False. Openness is \(2(1-s)\), a function of the share \(s=k/N\) alone; doubling both \(k\) and \(N\) leaves it unchanged.`
      } },

    { id: "facts-tf04", topic: "facts", type: "tf", answer: false,
      en: {
        stem: R`A trade deficit is a debt that the deficit country must eventually repay.`,
        explanation: R`False. By the proposition it is matched by a capital inflow of equal size: foreigners accepted assets — including equity and property, which carry no repayment obligation — instead of goods. Whether any particular inflow creates a future obligation depends on what asset was transferred, which the trade balance does not record.`
      } },

    { id: "facts-tf05", topic: "facts", type: "tf", answer: false,
      en: {
        stem: R`A government budget deficit implies a trade deficit.`,
        explanation: R`False. The identity is \(S_p + S_g - I = \NX\), so a negative \(S_g\) can be offset by private saving. The example has \(S_g = -20\) and a trade surplus of \(50\).`
      } },

    { id: "facts-tf06", topic: "facts", type: "tf", answer: true,
      en: {
        stem: R`If a country's bilateral balance with every partner is zero, its multilateral balance is zero.`,
        explanation: R`True, and trivially so, since the multilateral balance is the sum of the bilateral ones. The converse is what fails, and the example is the counterexample.`
      } },

    { id: "facts-tf07", topic: "facts", type: "tf", answer: false,
      en: {
        stem: R`Because most of the increase in European trade during the first wave of globalisation was trade within Europe, that episode is evidence against the view that trade concentrates on large and nearby partners.`,
        explanation: R`False, and it is evidence for that view: within-Europe trade is precisely trade with large and nearby partners, which is the pattern Chapter 3 formalises.`
      } },

    { id: "facts-tf08", topic: "facts", type: "tf", answer: false,
      en: {
        stem: R`The average effective tariff is always below the average applied tariff.`,
        explanation: R`False as a universal claim, although it held in 2025, where the effective rate was \(11.2\) per cent. The gap arises because importers substitute away from heavily taxed sources and because exemptions are wide; the direction of the gap depends on the composition of imports, which is why an effective rate is reported rather than inferred.`
      } },

    { id: "facts-tf09", topic: "facts", type: "tf", answer: false,
      en: {
        stem: R`Since only four per cent of United States firms export, aggregate United States export statistics are unreliable.`,
        explanation: R`False. The statistics are accurate; what the firm-level fact tells us is that they aggregate a very small number of large decisions, so that the aggregate and the typical firm are different objects. That is a reason to model firms, as Chapter 9 does, not a reason to distrust the totals.`
      } },

    { id: "facts-tf10", topic: "facts", type: "tf", answer: false,
      en: {
        stem: R`The comparison of Indian growth before and after 1991 establishes that tariff reduction raised Indian growth.`,
        explanation: R`False. The 1991 package also dismantled industrial licensing and arrived during a balance-of-payments crisis, so the tariff cut is not separated from either. This is the identification problem of Chapter 1, and the before-and-after comparison does not solve it.`
      } },

    { id: "gravity-mc01", topic: "gravity", type: "mc", answer: 1,
      en: {
        stem: R`The naive gravity equation \(\Tij = \gravK\,Y_iY_j/\Dij\) differs from the estimable form \(\Tij = \gravK\,Y_i^{\alpha}Y_j^{\gamma}\Dij^{-\delta}\) in that the naive version`,
        choices: [
          R`is multiplicative, whereas the estimable version is additive.`,
          R`imposes \(\alpha=\gamma=\delta=1\) rather than estimating them.`,
          R`cannot be written in logarithms.`,
          R`applies only to contiguous country pairs.`,
        ],
        explanation: R`The naive equation is the special case of in which all three exponents equal one, and that restriction is testable — and, on the exporter elasticity, rejected. Option (a) is wrong on both counts: both forms are multiplicative in levels and both become additive in logarithms.`
      } },

    { id: "gravity-mc02", topic: "gravity", type: "mc", answer: 1,
      en: {
        stem: R`In \(\ln \Tij = g + \alpha \ln Y_i + \gamma \ln Y_j - \delta \ln \Dij + \varepsilon_{ij}\), the coefficient \(\delta\) is`,
        choices: [
          R`the change in trade in dollars caused by a one-kilometre increase in distance.`,
          R`the percentage change in trade associated with a one per cent increase in distance, with the sign carried by the minus sign in front of it.`,
          R`the share of trade variance explained by distance.`,
          R`the average distance between trading partners.`,
        ],
        explanation: R`By the definition and the proposition, the coefficient on a logarithm in a log--log specification is an elasticity, and it is unit-free. Option (a) is what a levels specification would deliver, and it would depend on the units in which distance and trade were measured.`
      } },

    { id: "gravity-mc03", topic: "gravity", type: "mc", answer: 1,
      en: {
        stem: R`With \(\delta = 1.5\), a pair of countries four times as far apart as another otherwise identical pair trades`,
        choices: [
          R`\(25\) per cent as much.`,
          R`\(12.5\) per cent as much.`,
          R`\(6\) per cent as much.`,
          R`\(66\) per cent as much.`,
        ],
        explanation: R`\(4^{-1.5} = 1/4^{3/2} = 1/8 = 0.125\). Option (a) is the answer for \(\delta=1\) and option (d) is roughly the answer for a doubling rather than a quadrupling, so both are the characteristic errors of applying an elasticity without exponentiating.`
      } },

    { id: "gravity-mc04", topic: "gravity", type: "mc", answer: 2,
      en: {
        stem: R`A gravity regression reports a coefficient of \(0.745\) on a common-language indicator. Pairs sharing a language trade approximately`,
        choices: [
          R`\(74.5\) per cent more.`,
          R`\(7.45\) per cent more.`,
          R`\(111\) per cent more.`,
          R`\(745\) per cent more.`,
        ],
        explanation: R`By the proposition the proportional difference is \(e^{0.745}-1 = 1.106\), about \(111\) per cent. Option (a) is the approximation \(e^{\beta}-1\approx\beta\), which is acceptable for coefficients near zero and understates this one by about a third.`
      } },

    { id: "gravity-mc05", topic: "gravity", type: "mc", answer: 1,
      en: {
        stem: R`Exporter GDP does not appear in column (3) of the table because`,
        choices: [
          R`it was found to be statistically insignificant.`,
          R`it is collinear with the exporter fixed effects, since both take one value per exporter.`,
          R`exporter size does not affect trade once distance is controlled for.`,
          R`the 2023 data do not include exporter GDP.`,
        ],
        explanation: R`By the definition a full set of exporter indicators absorbs any variable that is constant within exporter, and exporter GDP is such a variable. Option (c) states a substantive claim that the table in fact contradicts, since columns (1) and (2) estimate the elasticity at about \(1.30\).`
      } },

    { id: "gravity-mc06", topic: "gravity", type: "mc", answer: 1,
      en: {
        stem: R`After exporter and importer fixed effects are included, the distance coefficient is identified by`,
        choices: [
          R`variation in average remoteness across exporters.`,
          R`variation in distance across the destinations that a given exporter serves.`,
          R`variation in GDP across importers.`,
          R`nothing; the coefficient is not identified.`,
        ],
        explanation: R`This is the proposition: the fixed effects remove everything constant within exporter or within importer, so only bilateral deviations contribute. Option (a) names precisely what the fixed effects absorb, and (d) overstates the point — bilateral variation remains, which is why \(\delta\) can still be estimated.`
      } },

    { id: "gravity-mc07", topic: "gravity", type: "mc", answer: 1,
      en: {
        stem: R`The classroom regressions are estimated on \(3{,}337\) positive dyads. The first criticism a referee would raise is that`,
        choices: [
          R`the sample is too small for asymptotic inference.`,
          R`country pairs with zero recorded trade are dropped because \(\ln 0\) is undefined, and such pairs are systematically the distant ones.`,
          R`positive dyads overstate the role of contiguity.`,
          R`the standard errors should be clustered by continent.`,
        ],
        explanation: R`This is the section. Selection on the dependent variable, as in the definition, is not corrected by any conditioning on the right-hand side, and it is the standard motivation for PPML. Option (d) is a reasonable secondary comment and not the first one.`
      } },

    { id: "gravity-mc08", topic: "gravity", type: "mc", answer: 2,
      en: {
        stem: R`The border effect estimated by McCallum, later revised to a factor of about ten, is best interpreted as evidence that`,
        choices: [
          R`freight costs across the Canada--United States border are very high.`,
          R`tariffs between Canada and the United States remained high after 1989.`,
          R`distance in a gravity regression proxies for frictions in information and trust rather than for kilometres.`,
          R`Canadian provinces are closer to each other than to United States states.`,
        ],
        explanation: R`The two countries had a free trade agreement, a common language and low tariffs, which rules out (b), and no freight cost is of the required magnitude, which rules out (a). Option (d) is excluded by construction, since McCallum's comparison holds distance fixed.`
      } },

    { id: "gravity-mc09", topic: "gravity", type: "mc", answer: 1,
      en: {
        stem: R`The Assyrian distance elasticity of \(1.912\) (standard error \(0.189\)) and the 2023 cross-sectional estimate of \(1.327\) are`,
        choices: [
          R`in close agreement, which shows that distance has meant the same thing for 3,800 years.`,
          R`more than three standard errors apart, and estimated on different units of observation with different dependent variables and controls.`,
          R`identical once rounded.`,
          R`incomparable because the Assyrian data are not quantitative.`,
        ],
        explanation: R`The difference is \(0.585\), which is \(3.1\) Assyrian standard errors, and the two differ in population, dependent variable — counts of mentions against export values — and conditioning set. Option (a) is the claim the source material makes twice and the section declines to repeat. Option (d) overstates the objection: the tablet data are quantitative, they are simply counts of a different thing.`
      } },

    { id: "gravity-mc10", topic: "gravity", type: "mc", answer: 1,
      en: {
        stem: R`The Brexit argument that trade with Europe could be replaced by agreements with the United States is weak principally because`,
        choices: [
          R`the United States refused to negotiate.`,
          R`tariff reductions worth a few per cent cannot offset a distance multiple of roughly five.`,
          R`gravity applies only within customs unions.`,
          R`the elasticity of trade with respect to importer GDP is less than one.`,
        ],
        explanation: R`Converting the border and distance coefficients into comparable units, as in the section, shows the geographic barrier to be an order of magnitude larger than the policy barrier it would replace. No trade agreement moves a country closer to another one.`
      } },

    { id: "gravity-tf01", topic: "gravity", type: "tf", answer: true,
      en: {
        stem: R`Taking logarithms of the gravity equation converts its exponents into elasticities.`,
        explanation: R`True. By the proposition the coefficient on \(\ln x\) in a log--log specification is \(\dd \ln y / \dd \ln x\), which is the elasticity, and for a power function it is constant and equal to the exponent.`
      } },

    { id: "gravity-tf02", topic: "gravity", type: "tf", answer: false,
      en: {
        stem: R`A coefficient of \(0.5\) on an indicator variable in a log-linear gravity regression means that the characteristic is associated with \(50\) per cent more trade.`,
        explanation: R`False. It means \(e^{0.5}-1 = 64.9\) per cent more trade. The approximation \(e^{\beta}-1\approx\beta\) is adequate only for coefficients close to zero.`
      } },

    { id: "gravity-tf03", topic: "gravity", type: "tf", answer: false,
      en: {
        stem: R`Including exporter fixed effects makes it unnecessary to control for common language.`,
        explanation: R`False. Fixed effects absorb what is constant within exporter; common language varies across an exporter's destinations and is therefore not absorbed. In the table the language coefficient in fact rises from \(0.745\) to \(1.169\) when exporter fixed effects are added.`
      } },

    { id: "gravity-tf04", topic: "gravity", type: "tf", answer: false,
      en: {
        stem: R`The distance elasticity is a constant of nature, in the sense that the same value is recovered from any sample.`,
        explanation: R`False. The table alone reports \(1.553\), \(1.485\) and \(1.327\) for the same data under different controls, and the table spans \(0.68\) to \(1.912\) across samples. What is robust is the sign and the order of magnitude.`
      } },

    { id: "gravity-tf05", topic: "gravity", type: "tf", answer: false,
      en: {
        stem: R`Dropping country pairs with zero trade is harmless because those pairs contribute no trade to be explained.`,
        explanation: R`False. Selection on the dependent variable biases the coefficients when selection depends on the regressors, as it does here — distant pairs are disproportionately the excluded ones — so the surviving sample is informative about trading pairs rather than about country pairs.`
      } },

    { id: "gravity-tf06", topic: "gravity", type: "tf", answer: false,
      en: {
        stem: R`A gravity regression estimated by ordinary least squares on logarithms is consistent provided there are no zero observations.`,
        explanation: R`False. If the multiplicative error is heteroskedastic, which in trade data it is, then the expectation of the log error depends on the regressors and the log-linear estimator is inconsistent even with no zeros. That is the second half of the argument for PPML.`
      } },

    { id: "gravity-tf07", topic: "gravity", type: "tf", answer: false,
      en: {
        stem: R`The fact that the gravity form also fits Facebook friendships and patent citations strengthens the case for interpreting \(\delta\) as a transport cost.`,
        explanation: R`False, and it points the other way: neither friendships nor citations incur freight, so the common pattern suggests that distance is proxying for search, information and familiarity. It is also a warning of the kind Chapter 1 gives about forms that fit everything.`
      } },

    { id: "gravity-tf08", topic: "gravity", type: "tf", answer: false,
      en: {
        stem: R`McCallum's border effect would disappear if tariffs between Canada and the United States were eliminated.`,
        explanation: R`False. Tariffs were already low and a free trade agreement had been in force since 1989 when the effect was measured, so the effect is not a tariff effect; the candidate explanations are networks, regulation and home bias.`
      } },

    { id: "gravity-tf09", topic: "gravity", type: "tf", answer: true,
      en: {
        stem: R`The method used to locate the lost Bronze Age cities assumes the gravity equation rather than testing it.`,
        explanation: R`True. The elasticity is estimated on the fifteen cities whose locations are known and the fitted relationship is then inverted for the ten that are not, so a failed localisation would refute the conjunction of gravity and its auxiliaries rather than gravity alone.`
      } },

    { id: "gravity-tf10", topic: "gravity", type: "tf", answer: false,
      en: {
        stem: R`An \(R^2\) of \(0.726\) in column (3) of the table is strong evidence that the specification is correct.`,
        explanation: R`False. The column adds roughly two hundred exporter indicators, and the proposition of Chapter 1 is the general warning: in-sample fit is nearly costless to buy with parameters, and it says nothing about the excluded zero-trade dyads.`
      } },

    { id: "ricardo-mc01", topic: "ricardo", type: "mc", answer: 0,
      en: {
        stem: R`A Home worker produces \(5\) units of cheese or \(10\) of bread; a Foreign worker produces \(2\) of cheese or \(5\) of bread. Which statement is true?`,
        choices: [
          R`Home has a comparative advantage in cheese and Foreign in bread.`,
          R`Foreign has a comparative advantage in cheese and Home in bread.`,
          R`Home has a comparative advantage in both goods.`,
          R`Neither country has a comparative advantage in either good.`,
        ],
        explanation: R`The opportunity cost of cheese is \(\Alb/\Alc=10/5=2\) at Home and \(\Alb^*/\Alc^*=5/2=2.5\) at Foreign. Since \(2<2.5\), Home gives up less bread per cheese. Home also has an absolute advantage in both goods, which plays no role. Option (c) is impossible: comparative advantage in both goods is a contradiction in terms.`
      } },

    { id: "ricardo-mc02", topic: "ricardo", type: "mc", answer: 0,
      en: {
        stem: R`In this model a country's autarky relative price \(\relpi\) depends on`,
        choices: [
          R`technology only.`,
          R`tastes only.`,
          R`technology and the size of the labour force.`,
          R`technology and tastes.`,
        ],
        explanation: R`The knife-edge condition gives \((\relpi)\aut=\Alb/\Alc\). Tastes and the size of the labour force determine quantities, not the relative price, because the frontier is linear and therefore offers every composition of output at one price.`
      } },

    { id: "ricardo-mc03", topic: "ricardo", type: "mc", answer: 1,
      en: {
        stem: R`Home's labour force doubles, technology is unchanged in both countries, and the world was previously in a completely specialised equilibrium. The free-trade relative price of Home's export good`,
        choices: [
          R`rises.`,
          R`falls, and may come to rest at Home's autarky price.`,
          R`is unchanged, since prices depend only on technology.`,
          R`falls, and may come to rest at Foreign's autarky price.`,
        ],
        explanation: R`We have \(\tilde p=\tfrac{\theta}{1-\theta}F/H\) with \(H=\Alc\lab\), which has doubled, so \(\tilde p\) falls. If it falls as far as \(\Alb/\Alc\) the economy moves into Case 2, where the price sticks at Home's autarky value and Home ceases to gain anything from trade.`
      } },

    { id: "ricardo-mc04", topic: "ricardo", type: "mc", answer: 1,
      en: {
        stem: R`Under complete specialisation, Home's real wage measured in units of its *export* good, \(\wg/\pc\),`,
        choices: [
          R`rises by the percentage improvement in the terms of trade.`,
          R`is unchanged.`,
          R`falls.`,
          R`may rise or fall depending on \(\theta\).`,
        ],
        explanation: R`Since \(\wg=\pc\Alc\), the real wage in cheese is \(\wg/\pc=\Alc\), which is technology and nothing else. The whole gain shows up in the real wage measured in the imported good, \(\wg/\pb=\Alc\,p\).`
      } },

    { id: "ricardo-mc05", topic: "ricardo", type: "mc", answer: 2,
      en: {
        stem: R`Which of the following would, on its own, generate trade in this model?`,
        choices: [
          R`The two countries have different labour endowments.`,
          R`The two countries have different tastes.`,
          R`The two countries have different ratios \(\Alb/\Alc\).`,
          R`Home is more productive than Foreign in both goods.`,
        ],
        explanation: R`Only the ratio matters. Under (a) and (d) the autarky prices are identical whenever the ratios are, so no trade occurs. Different tastes (b) cannot move the autarky price at all, because the frontier is linear.`
      } },

    { id: "ricardo-mc06", topic: "ricardo", type: "mc", answer: 1,
      en: {
        stem: R`Home exports cheese. The value of its exports must equal the value of its imports because`,
        choices: [
          R`the model assumes balanced trade.`,
          R`of the household budget constraint.`,
          R`both countries have the same income.`,
          R`the terms of trade improve for both countries.`,
        ],
        explanation: R`From \(\pc\Yc=\pc\qc+\pb\qb\) we get \(\pc(\Yc-\qc)=\pb\qb\). Balance is derived rather than assumed, and no imbalance is even expressible in a model without assets.`
      } },

    { id: "ricardo-mc07", topic: "ricardo", type: "mc", answer: 0,
      en: {
        stem: R`With \(\theta=\tfrac12\) world relative demand is \(\RD(p)=1/p\). If the world's taste for cheese strengthens to \(\theta=0.6\), the relative demand curve`,
        choices: [
          R`shifts out, raising the equilibrium relative price of cheese.`,
          R`shifts in, lowering it.`,
          R`is unchanged, since world income is unchanged.`,
          R`becomes vertical.`,
        ],
        explanation: R`Since \(\RD=\tfrac{\theta}{1-\theta}\cdot\tfrac1p\), the factor \(\theta/(1-\theta)\) rises from \(1\) to \(1.5\). Note that the curve's position does not depend on how world income is divided between the countries, which is the cancellation.`
      } },

    { id: "ricardo-mc08", topic: "ricardo", type: "mc", answer: 1,
      en: {
        stem: R`A world economy is in Case 2 of the proposition. Which statement is true?`,
        choices: [
          R`Both countries specialise completely and both gain.`,
          R`The country still producing both goods gains nothing.`,
          R`The country still producing both goods captures all the gains.`,
          R`Neither country gains.`,
        ],
        explanation: R`The country whose autarky price survives is the one still producing both goods, and an unchanged relative price means unchanged utility by the proposition.`
      } },

    { id: "ricardo-mc09", topic: "ricardo", type: "mc", answer: 1,
      en: {
        stem: R`Bernhofen and Brown's study of Japan is valuable principally because`,
        choices: [
          R`Japan's opening was gradual, allowing prices to adjust smoothly.`,
          R`Japanese autarky prices are observed rather than inferred.`,
          R`Japan had a comparative advantage in every good.`,
          R`the opening was chosen by Japan in response to domestic conditions.`,
        ],
        explanation: R`A direct test of comparative advantage requires autarky prices, and these essentially never exist in modern data. Options (a) and (d) are both false as descriptions of the episode, and each would weaken the design if true.`
      } },

    { id: "ricardo-mc10", topic: "ricardo", type: "mc", answer: 1,
      en: {
        stem: R`The model predicts that opening to trade creates no losers within a country because`,
        choices: [
          R`compensation is always paid in equilibrium.`,
          R`there is a single factor of production, and so a single group.`,
          R`both countries' terms of trade improve.`,
          R`trade is balanced.`,
        ],
        explanation: R`With one mobile factor earning one wage there is no group that can be differentially harmed. Relaxing this assumption is the subject of the next two chapters.`
      } },

    { id: "ricardo-tf01", topic: "ricardo", type: "tf", answer: false,
      en: {
        stem: R`A country with an absolute disadvantage in both goods cannot gain from trade.`,
        explanation: R`False. Absolute advantage plays no role. Foreign in the example is less productive in both goods and gains about \(9.5\%\).`
      } },

    { id: "ricardo-tf02", topic: "ricardo", type: "tf", answer: false,
      en: {
        stem: R`The free-trade relative price always lies strictly between the two autarky relative prices.`,
        explanation: R`False. That is Case 3 only. In Cases 2 and 4 the world price equals one of the two autarky prices, and the example is an instance.`
      } },

    { id: "ricardo-tf03", topic: "ricardo", type: "tf", answer: true,
      en: {
        stem: R`If a country's relative price does not change when it opens to trade, it neither gains nor loses.`,
        explanation: R`True. By the proposition the free-trade budget set coincides with the autarky one when the slopes coincide, so utility is unchanged.`
      } },

    { id: "ricardo-tf04", topic: "ricardo", type: "tf", answer: false,
      en: {
        stem: R`World relative demand depends on how world income is distributed between Home and Foreign.`,
        explanation: R`False. World income cancels, so \(\RD\) depends only on \(\theta\) and \(p\). This follows from preferences being identical and homothetic, not from Cobb--Douglas as such.`
      } },

    { id: "ricardo-tf05", topic: "ricardo", type: "tf", answer: true,
      en: {
        stem: R`Doubling both \(\Alc\) and \(\Alb\) at Home leaves the direction of trade unchanged.`,
        explanation: R`True. The autarky price \(\Alb/\Alc\) is unchanged, so comparative advantage and hence the direction of trade are unchanged. Home's capacity \(H=\Alc\lab\) doubles, however, so \(\tilde p\) halves, and the division of the gains changes — the equilibrium may even move from Case 3 into Case 2.`
      } },

    { id: "ricardo-tf06", topic: "ricardo", type: "tf", answer: false,
      en: {
        stem: R`A country must run a trade surplus in order to gain from trade.`,
        explanation: R`False. Trade balances identically here, by the budget constraint, and both countries gain in the example.`
      } },

    { id: "ricardo-tf07", topic: "ricardo", type: "tf", answer: true,
      en: {
        stem: R`Both countries' terms of trade can improve at the same time.`,
        explanation: R`True, and in Case 3 they must. The two terms of trade are reciprocal ratios, \(\relpi\) and \(\pb/\pc\), not the same ratio seen twice; when \(p\ft\) lies strictly between the autarky prices, each country sells its export good for more than it could obtain at home.`
      } },

    { id: "ricardo-tf08", topic: "ricardo", type: "tf", answer: false,
      en: {
        stem: R`The step shape of a country's supply schedule is a consequence of perfect competition.`,
        explanation: R`False. It follows from the *linear* frontier, that is from constant opportunity cost. With a bowed-out frontier, supply is continuous and upward-sloping even under perfect competition.`
      } },

    { id: "ricardo-tf09", topic: "ricardo", type: "tf", answer: false,
      en: {
        stem: R`The correlation between export growth and income growth over 1945--2014 establishes that trade causes growth.`,
        explanation: R`False. Reverse causality and omitted variables — institutions, macroeconomic stability, infrastructure — generate the same correlation. Identifying a causal effect requires variation in trade that the country did not choose.`
      } },

    { id: "ricardo-tf10", topic: "ricardo", type: "tf", answer: true,
      en: {
        stem: R`If the two countries have identical productivity ratios, world relative supply is a single step and no trade occurs.`,
        explanation: R`True. With \(\Alb/\Alc=\Alb^*/\Alc^*\) the two flats merge into one, the common autarky price clears the world market, and at that price neither country has any incentive to trade.`
      } },

    { id: "specific-mc01", topic: "specific", type: "mc", answer: 0,
      en: {
        stem: R`In the specific-factors model, the production frontier is concave because`,
        choices: [
          R`one factor is held fixed in each sector, so the mobile factor has diminishing returns.`,
          R`the two sectors have different productivity levels.`,
          R`preferences are Cobb--Douglas.`,
          R`markets are perfectly competitive.`,
        ],
        explanation: R`Constant returns in both factors jointly, with the specific factor fixed, gives \(\partial\MPL_\gd/\partial L_\gd<0\), so the opportunity cost of each good rises as its output expands. Options (c) and (d) concern demand and market structure, neither of which shapes the frontier.`
      } },

    { id: "specific-mc02", topic: "specific", type: "mc", answer: 1,
      en: {
        stem: R`The relative price of manufactures rises. The real return to capital, which is specific to manufacturing,`,
        choices: [
          R`rises in terms of manufactures and falls in terms of agriculture.`,
          R`rises in terms of both goods.`,
          R`falls in terms of both goods.`,
          R`is unchanged, since capital cannot move.`,
        ],
        explanation: R`\(\rK/p_\Mg=\MPK_\Mg\) rises because \(L_\Mg/K\) rises, and \(\rK/p_\Ag=(\rK/p_\Mg)(p_\Mg/p_\Ag)\) is then a product of two rising terms. Immobility is what ties capital's fate to its sector; it does not freeze its return.`
      } },

    { id: "specific-mc03", topic: "specific", type: "mc", answer: 2,
      en: {
        stem: R`When \(p_\Mg\) rises by \(20\%\) with \(p_\Ag\) fixed, the wage`,
        choices: [
          R`rises by \(20\%\).`,
          R`rises by more than \(20\%\).`,
          R`rises by less than \(20\%\).`,
          R`falls.`,
        ],
        explanation: R`A \(20\%\) rise in the wage would leave the allocation unchanged, hence \(\MPL_\Mg\) unchanged, hence manufacturing willing to pay above the going wage — not an equilibrium. Labour must move into manufacturing, \(\MPL_\Mg\) falls, and the wage rises by less than the price. It does rise, because \(\wg/p_\Ag=\MPL_\Ag\) and \(L_\Ag\) has fallen, so (d) is wrong.`
      } },

    { id: "specific-mc04", topic: "specific", type: "mc", answer: 2,
      en: {
        stem: R`Which statement about workers in this model is correct?`,
        choices: [
          R`They always gain from trade, since the wage rises.`,
          R`They always lose from trade, since their real wage falls in terms of the export good.`,
          R`Whether they gain depends on their consumption basket.`,
          R`They are unaffected, since labour is mobile.`,
        ],
        explanation: R`The real wage rises in terms of the contracting sector's good and falls in terms of the expanding sector's good, so the net effect depends on expenditure shares. This is the one genuinely ambiguous case in the proposition.`
      } },

    { id: "specific-mc05", topic: "specific", type: "mc", answer: 1,
      en: {
        stem: R`In the example, Home has \(K=289\) and \(T=49\) while Foreign has \(K^*=49\) and \(T^*=289\). Home exports manufactures because`,
        choices: [
          R`Home has more of both factors than Foreign.`,
          R`Home's autarky relative price of manufactures, \(\sqrt{T/K}\), is lower.`,
          R`Home's workers are more productive.`,
          R`Home's labour force is larger.`,
        ],
        explanation: R`\(\sqrt{49/289}=7/17<17/7\). The two countries have identical technology and identical labour forces, so neither (c) nor (d) applies, and (a) is false as stated — the endowments are mirror images.`
      } },

    { id: "specific-mc06", topic: "specific", type: "mc", answer: 1,
      en: {
        stem: R`Euler's theorem is needed in this chapter in order to`,
        choices: [
          R`prove that the production frontier is concave.`,
          R`show that factor payments exactly exhaust national income.`,
          R`derive the demand functions.`,
          R`establish that the wage is equalised across sectors.`,
        ],
        explanation: R`Equation asserts that paying each factor the value of its marginal product uses up revenue exactly, with nothing left over and nothing missing. That is Euler's theorem for a constant-returns function, and without it the identity would be unexplained.`
      } },

    { id: "specific-mc07", topic: "specific", type: "mc", answer: 1,
      en: {
        stem: R`Reading \(K\) as "workers whose skills are specific to manufacturing" rather than as physical capital`,
        choices: [
          R`changes the predictions, because labour and capital earn different kinds of income.`,
          R`leaves the mathematics unchanged, since specificity is about mobility rather than about the physical nature of the input.`,
          R`is valid only in the long run.`,
          R`makes the frontier linear.`,
        ],
        explanation: R`Nothing in the derivation uses any property of \(K\) beyond its being fixed in supply and usable in only one sector. This reinterpretation is often the more useful one empirically, since sector-specific human capital is a large part of what fails to transfer after displacement.`
      } },

    { id: "specific-mc08", topic: "specific", type: "mc", answer: 1,
      en: {
        stem: R`A country opens to trade and the relative price of its import-competing good falls. The owners of the factor specific to that sector`,
        choices: [
          R`gain, because national income rises.`,
          R`lose in terms of both goods.`,
          R`lose in terms of the import good only.`,
          R`are unaffected if they consume only the export good.`,
        ],
        explanation: R`This is part (ii) of the proposition with the sectors relabelled. The loss is in terms of both goods, so no consumption basket rescues them, which rules out (c) and (d). National income rising (a) is consistent with one group losing — that is the entire point of the chapter.`
      } },

    { id: "specific-mc09", topic: "specific", type: "mc", answer: 3,
      en: {
        stem: R`Compared with the Ricardian model, the specific-factors model predicts`,
        choices: [
          R`complete specialisation and no losers.`,
          R`incomplete specialisation and no losers.`,
          R`complete specialisation and identifiable losers.`,
          R`incomplete specialisation and identifiable losers.`,
        ],
        explanation: R`The concave frontier delivers an interior production point at any relative price, and the immobility of two of the three factors delivers a group that is unambiguously worse off.`
      } },

    { id: "specific-mc10", topic: "specific", type: "mc", answer: 1,
      en: {
        stem: R`"Free trade is a potential Pareto improvement" means that`,
        choices: [
          R`everyone is better off under free trade.`,
          R`the winners' gains exceed the losers' losses, so compensation is feasible.`,
          R`compensation is paid in equilibrium.`,
          R`the losers' losses are small.`,
        ],
        explanation: R`Feasibility is all that is established. The model contains no government and no tax instruments, so it cannot speak to (c), and it says nothing about the magnitude in (d).`
      } },

    { id: "specific-tf01", topic: "specific", type: "tf", answer: true,
      en: {
        stem: R`In the specific-factors model, trade raises national income but may lower the real income of some group.`,
        explanation: R`True. This is the chapter's central result: the aggregate gain follows from the proposition, which applies unchanged, while the proposition(ii) identifies a group that loses in terms of both goods.`
      } },

    { id: "specific-tf02", topic: "specific", type: "tf", answer: false,
      en: {
        stem: R`Because capital cannot move between sectors, its return is unaffected by a change in goods prices.`,
        explanation: R`False. Immobility is exactly what makes the return sensitive to prices: capital cannot escape a falling sector or be diluted by entry into a rising one, so it absorbs the full effect. In the example \(\rK\) rises by a factor of more than three.`
      } },

    { id: "specific-tf03", topic: "specific", type: "tf", answer: false,
      en: {
        stem: R`If the relative price of manufactures rises, both sectors end up using more labour per unit of their specific factor.`,
        explanation: R`False. Manufacturing uses more labour per machine and agriculture uses less labour per hectare, which is precisely why \(\MPK_\Mg\) rises while \(\MPT_\Ag\) falls. Labour leaves agriculture; total labour is fixed.`
      } },

    { id: "specific-tf04", topic: "specific", type: "tf", answer: false,
      en: {
        stem: R`The specific-factors model predicts complete specialisation when the world price differs from the autarky price.`,
        explanation: R`False. The frontier is concave, so the tangency with any positive relative price is an interior point and both goods continue to be produced. Complete specialisation was a Ricardian artefact of the linear frontier.`
      } },

    { id: "specific-tf05", topic: "specific", type: "tf", answer: true,
      en: {
        stem: R`Euler's theorem guarantees that if each factor is paid the value of its marginal product, competitive firms earn zero profit.`,
        explanation: R`True, for constant returns to scale. The theorem says output is exactly the sum of each input times its marginal product, so revenue is exhausted by factor payments.`
      } },

    { id: "specific-tf06", topic: "specific", type: "tf", answer: false,
      en: {
        stem: R`A worker who spends her entire income on the export good is unambiguously better off when the country opens to trade.`,
        explanation: R`False, and the sign is the other way. The export good is produced by the expanding sector, whose price rises, and \(\wg/p_\Mg=\MPL_\Mg\) falls. Such a worker is unambiguously *worse* off; it is the worker who consumes only the import good who unambiguously gains.`
      } },

    { id: "specific-tf07", topic: "specific", type: "tf", answer: false,
      en: {
        stem: R`The results of this chapter depend on the factor \(K\) being physical capital.`,
        explanation: R`False. Only two properties of \(K\) are used: fixed supply and usability in one sector alone. Reading \(K\) as sector-specific human capital changes nothing in the derivation.`
      } },

    { id: "specific-tf08", topic: "specific", type: "tf", answer: false,
      en: {
        stem: R`An increase in the labour force, at unchanged world prices, raises the wage and lowers the specific-factor rents.`,
        explanation: R`False, and again the sign is reversed. More labour against fixed specific factors lowers \(\MPL\) in both sectors and raises both \(\MPK_\Mg\) and \(\MPT_\Ag\). The example works through a case in which the wage halves and both rents double.`
      } },

    { id: "specific-tf09", topic: "specific", type: "tf", answer: false,
      en: {
        stem: R`Since compensation is feasible, the distributional objection to free trade has no force.`,
        explanation: R`False. The model establishes feasibility, not payment, and it contains no mechanism that could deliver the transfer. The evidence on Trade Adjustment Assistance suggests the compensation actually paid is small relative to the losses.`
      } },

    { id: "specific-tf10", topic: "specific", type: "tf", answer: false,
      en: {
        stem: R`In this model the conflict created by trade runs between factors of production, across the whole economy at once.`,
        explanation: R`False as stated: here the conflict runs between *sectors*, because two of the three factors are tied to a sector. The conflict between factors as such — capital against labour everywhere at once — is the long-run case taken up in the next chapter.`
      } },

    { id: "ho-mc01", topic: "ho", type: "mc", answer: 1,
      en: {
        stem: R`In the Heckscher--Ohlin model, trade arises because`,
        choices: [
          R`countries have different technologies.`,
          R`countries have different relative endowments of factors.`,
          R`production exhibits increasing returns to scale.`,
          R`consumers in different countries have different tastes.`,
        ],
        explanation: R`Assumptions A4 and A6 switch off technology and taste differences deliberately, and returns are constant, so A7 is the only remaining source of difference.`
      } },

    { id: "ho-mc02", topic: "ho", type: "mc", answer: 2,
      en: {
        stem: R`With \(\alpha_\Mg=\tfrac34\) and \(\alpha_\Ag=\tfrac14\), a \(10\%\) rise in \(p_\Mg/p_\Ag\) changes the wage--rental ratio by about`,
        choices: [
          R`\(+10\%\).`,
          R`\(-10\%\).`,
          R`\(-20\%\).`,
          R`\(-5\%\).`,
        ],
        explanation: R`From, \(\omega=p^{-2}\), so \(\dd\ln\omega=-2\,\dd\ln p\). This is the magnification effect: factor prices move proportionally more than the goods prices driving them.`
      } },

    { id: "ho-mc03", topic: "ho", type: "mc", answer: 1,
      en: {
        stem: R`When the relative price of the capital-intensive good rises, each individual sector becomes`,
        choices: [
          R`more capital-intensive.`,
          R`more labour-intensive.`,
          R`unchanged in factor intensity, since technology has not changed.`,
          R`more capital-intensive in manufactures and more labour-intensive in agriculture.`,
        ],
        explanation: R`\(\omega\) falls, labour becomes relatively cheaper, and both \(L_\Mg/K_\Mg\) and \(L_\Ag/K_\Ag\) rise. The economy-wide ratio is unchanged only because the output mix shifts towards the sector with the lower intensity.`
      } },

    { id: "ho-mc04", topic: "ho", type: "mc", answer: 1,
      en: {
        stem: R`Stolper--Samuelson says that when \(p_\Mg/p_\Ag\) rises, the real wage`,
        choices: [
          R`falls in terms of manufactures but rises in terms of agriculture.`,
          R`falls in terms of both goods.`,
          R`rises in terms of both goods.`,
          R`may rise or fall depending on the consumption basket.`,
        ],
        explanation: R`Both real wages equal marginal products of labour, and both fall because both sectors become more labour-intensive. Option (a) is the *specific-factors* answer, and (d) is its consequence; the long-run model removes the ambiguity entirely.`
      } },

    { id: "ho-mc05", topic: "ho", type: "mc", answer: 1,
      en: {
        stem: R`Factor price equalisation follows from`,
        choices: [
          R`the full-employment conditions.`,
          R`the two zero-profit conditions, which contain no endowments.`,
          R`identical preferences across countries.`,
          R`The assumption of no factor-intensity reversals.`,
        ],
        explanation: R`Equations determine \(\wg\) and \(\rr\) from goods prices and technology alone. Endowments enter only through, which allocates factors but does not price them.`
      } },

    { id: "ho-mc06", topic: "ho", type: "mc", answer: 1,
      en: {
        stem: R`A country whose endowment ratio lies outside the cone of diversification`,
        choices: [
          R`produces both goods but at different factor prices.`,
          R`specialises completely, and factor price equalisation fails.`,
          R`cannot trade.`,
          R`has a factor-intensity reversal.`,
        ],
        explanation: R`Outside the cone one of \(K_\Mg\), \(K_\Ag\) would have to be negative, so the country produces only one good. With only one zero-profit condition holding, two factor prices are no longer pinned down and may differ across countries.`
      } },

    { id: "ho-mc07", topic: "ho", type: "mc", answer: 1,
      en: {
        stem: R`The Leontief paradox is the finding that`,
        choices: [
          R`US exports were more capital-intensive than US imports.`,
          R`US exports were less capital-intensive than US imports, though the US was capital-abundant.`,
          R`the US exported both goods.`,
          R`factor prices were not equalised between the US and its partners.`,
        ],
        explanation: R`In 1947 US exports embodied about $13{,}700 of capital per worker against about $18{,}200 for import-competing production, which is the reverse of the Heckscher--Ohlin prediction for the world's most capital-abundant economy.`
      } },

    { id: "ho-mc08", topic: "ho", type: "mc", answer: 1,
      en: {
        stem: R`Measuring factors in efficiency units rather than headcounts resolves the Leontief paradox, but at the cost of`,
        choices: [
          R`abandoning the assumption of constant returns to scale.`,
          R`abandoning the assumption that technology is the same in all countries.`,
          R`assuming preferences differ across countries.`,
          R`assuming factor-intensity reversals.`,
        ],
        explanation: R`Efficiency units exist only because a worker in one country is more productive than a worker in another, which is a violation of A4. The repaired theory is a hybrid of Heckscher--Ohlin and Ricardo.`
      } },

    { id: "ho-mc09", topic: "ho", type: "mc", answer: 1,
      en: {
        stem: R`Relative to the specific-factors model, the Heckscher--Ohlin model is best understood as describing`,
        choices: [
          R`a shorter horizon, over which factors cannot move.`,
          R`a longer horizon, over which all factors can move between sectors.`,
          R`an economy with more goods.`,
          R`an economy with increasing returns.`,
        ],
        explanation: R`The two models differ in how much time is allowed for reallocation, not in which factors exist. Over a long enough horizon capital is replaced wherever the return is highest, and the sector-specific distinction dissolves.`
      } },

    { id: "ho-mc10", topic: "ho", type: "mc", answer: 1,
      en: {
        stem: R`The evidence on the China shock is best summarised as`,
        choices: [
          R`confirming both the sign and the adjustment process predicted by the model.`,
          R`confirming the predicted sign, but with adjustment that is slower and more geographically concentrated than the model allows.`,
          R`contradicting the predicted sign.`,
          R`uninformative, because the price changes were too small.`,
        ],
        explanation: R`Less-skilled workers in exposed US local labour markets lost, as Stolper--Samuelson predicts for a skill-abundant country. The concentration and persistence of those losses are features the long-run model, with its costless instantaneous reallocation, cannot generate.`
      } },

    { id: "ho-tf01", topic: "ho", type: "tf", answer: true,
      en: {
        stem: R`In the Heckscher--Ohlin model, there are aggregate gains from trade.`,
        explanation: R`True. The proposition is an argument about budget sets and applies here unchanged: opening pivots the budget line about the production point, so the consumption set weakly expands.`
      } },

    { id: "ho-tf02", topic: "ho", type: "tf", answer: false,
      en: {
        stem: R`Because the two countries have identical technology, there is no basis for trade between them.`,
        explanation: R`False. Identical technology removes the Ricardian basis for trade, not every basis. Different relative endowments give different autarky factor prices, hence different autarky goods prices, which is the theorem.`
      } },

    { id: "ho-tf03", topic: "ho", type: "tf", answer: false,
      en: {
        stem: R`A rise in the relative price of manufactures makes capital owners better off only if they consume mostly agriculture.`,
        explanation: R`False. The theorem gives a gain in terms of *both* goods, so the consumption basket is irrelevant. The consumption-dependent answer belongs to the mobile factor of the specific-factors model.`
      } },

    { id: "ho-tf04", topic: "ho", type: "tf", answer: false,
      en: {
        stem: R`If the economy shifts production towards the capital-intensive sector, that sector must become more capital-intensive.`,
        explanation: R`False, and in this model the opposite happens: both sectors become more labour-intensive while the output mix shifts towards manufactures. The economy-wide ratio is a weighted average, and the weights do the reconciling.`
      } },

    { id: "ho-tf05", topic: "ho", type: "tf", answer: true,
      en: {
        stem: R`Factor price equalisation requires that both countries produce both goods.`,
        explanation: R`True. The result comes from both zero-profit conditions holding simultaneously. A country specialised in one good satisfies only one of them, which no longer pins down two factor prices.`
      } },

    { id: "ho-tf06", topic: "ho", type: "tf", answer: false,
      en: {
        stem: R`The failure of factor price equalisation in the data means Stolper--Samuelson is not usable.`,
        explanation: R`False. Stolper--Samuelson is a statement about how factor returns respond to a price change within one country, and it survives with trade costs, with technology differences and with incomplete specialisation. Factor price equalisation is the much stronger claim that levels coincide across countries.`
      } },

    { id: "ho-tf07", topic: "ho", type: "tf", answer: true,
      en: {
        stem: R`The Heckscher--Ohlin sign test, applied with headcount endowments, performs about as well as flipping a coin.`,
        explanation: R`True. The test is satisfied in roughly half of cases, against \(100\%\) under the theory and \(50\%\) under random guessing. Efficiency-unit corrections raise this to about two-thirds, and further relaxations of A4 to about \(89\%\).`
      } },

    { id: "ho-tf08", topic: "ho", type: "tf", answer: false,
      en: {
        stem: R`In this model, a capital-abundant country's workers are made worse off by trade, so its national income must fall.`,
        explanation: R`False. Both statements about workers and about national income are true individually, but the second does not follow and is itself false: national income rises. One factor losing while the aggregate gains is precisely the distributional point.`
      } },

    { id: "ho-tf09", topic: "ho", type: "tf", answer: false,
      en: {
        stem: R`The magnification effect means goods prices move proportionally more than factor prices.`,
        explanation: R`False, and the direction is reversed. With \(\omega=p^{-2}\), factor prices move twice as much in proportional terms as the goods prices driving them.`
      } },

    { id: "ho-tf10", topic: "ho", type: "tf", answer: false,
      en: {
        stem: R`That inequality rose in China after it opened is consistent with Stolper--Samuelson applied to a labour-abundant country.`,
        explanation: R`False as stated. For a labour-abundant country the theorem predicts a rise in the relative return to the abundant factor, compressing inequality. Rescuing the theory requires an additional argument — that the relevant factor is skill, that internal frictions segmented the labour market, or that other forces dominated.`
      } },

    { id: "scale-mc01", topic: "scale", type: "mc", answer: 1,
      en: {
        stem: R`A technology satisfies \(G(\lambda K,\lambda\lab)=\lambda^{3/2}G(K,\lab)\). With input prices fixed, average cost`,
        choices: [
          R`is constant in output.`,
          R`falls in output, in proportion to \(q^{-1/3}\).`,
          R`falls in output, in proportion to \(q^{-1/2}\).`,
          R`rises in output.`,
        ],
        explanation: R`By the proposition, \(\AC(q)=C(1)q^{1/\nu-1}\) with \(\nu=\tfrac32\), so the exponent is \(\tfrac23-1=-\tfrac13\). Option (c) would correspond to \(\nu=2\).`
      } },

    { id: "scale-mc02", topic: "scale", type: "mc", answer: 2,
      en: {
        stem: R`A firm has \(C(q)=1000+100q\) for \(q>0\). The smallest output at which it breaks even when the price is \(125\) is`,
        choices: [
          R`\(8\).`,
          R`\(10\).`,
          R`\(40\).`,
          R`\(50\).`,
        ],
        explanation: R`Break-even requires \(p=\AC(q)\), so \(q=\fcost/(p-\mcost)=1000/25=40\). Option (d) is the answer for \(p=120\); option (b) confuses \(\fcost/p\) with \(\fcost/(p-\mcost)\).`
      } },

    { id: "scale-mc03", topic: "scale", type: "mc", answer: 2,
      en: {
        stem: R`Which of the following is an economy of scale that is *not* an instance of increasing returns to scale?`,
        choices: [
          R`A production function homogeneous of degree \(2\).`,
          R`A plant whose output doubles when all inputs are raised by half.`,
          R`A firm whose steel supplier gives a volume discount above a threshold.`,
          R`A plant whose output triples when all inputs double.`,
        ],
        explanation: R`Returns to scale concerns only the mapping from input quantities to output, so a change in the *price* of an input with scale cannot be an instance of it, yet it does lower average cost. Options (a), (b) and (d) all describe technologies satisfying \(G(\lambda K,\lambda\lab)>\lambda G(K,\lab)\) for \(\lambda>1\), and so are increasing returns; only (c) is a scale economy mediated entirely by a market rather than by the blueprint.`
      } },

    { id: "scale-mc04", topic: "scale", type: "mc", answer: 1,
      en: {
        stem: R`Under external economies of scale, perfect competition can survive because`,
        choices: [
          R`firms collude to keep prices at average cost.`,
          R`each firm's own average cost does not fall in its own output, so no firm has a cost advantage over a smaller rival in the same place.`,
          R`the government regulates entry.`,
          R`the industry's average cost curve is upward-sloping.`,
        ],
        explanation: R`This is A4 together with the definition: the cost advantage belongs to the location, not to the firm, so a large firm and a small firm in the same cluster have identical unit costs and neither can undercut the other. Option (d) is simply false under A5.`
      } },

    { id: "scale-mc05", topic: "scale", type: "mc", answer: 1,
      en: {
        stem: R`With \(\mcost(Q)=60-\tfrac12 Q\) and world inverse demand \(P(Q)=100-Q\), the equilibrium with all production in that location has`,
        choices: [
          R`\(Q=40\) and \(p=60\).`,
          R`\(Q=80\) and \(p=20\).`,
          R`\(Q=60\) and \(p=40\).`,
          R`no solution, because the supply curve slopes downward.`,
        ],
        explanation: R`Setting \(100-Q=60-\tfrac12Q\) gives \(Q=80\), and then \(p=100-80=20=\mcost(80)\). A downward-sloping supply curve is no obstacle: by the proposition the crossing is stable because demand's slope \(-1\) is below supply's \(-\tfrac12\).`
      } },

    { id: "scale-mc06", topic: "scale", type: "mc", answer: 1,
      en: {
        stem: R`In the figure, a lone Home entrant does not enter at the point \(\pt{F}\) because`,
        choices: [
          R`Home's cost curve lies above Foreign's.`,
          R`Home's cost curve lies below Foreign's, but the entrant would operate at a scale near zero, where Home's unit cost is \(60\) and the price is \(40\).`,
          R`world demand is too small to support two producers.`,
          R`Foreign firms would cut their price in response.`,
        ],
        explanation: R`Option (a) is false by construction, which is the whole point. Option (d) is ruled out by A3: every firm is a price-taker and nobody responds to anybody. The entrant's problem is purely that it must start outside the cluster, at the highest point of its own cost curve, which is condition.`
      } },

    { id: "scale-mc07", topic: "scale", type: "mc", answer: 1,
      en: {
        stem: R`In the model of the section, a country's welfare can be measured by consumer surplus alone because`,
        choices: [
          R`consumers are the only agents in the model.`,
          R`price equals unit cost in equilibrium, so producer surplus is zero.`,
          R`producers are all foreign.`,
          R`the good is homogeneous.`,
        ],
        explanation: R`The proposition gives \(p=\mcost(Q)\) with free entry, so each firm's revenue exactly covers its cost and producer surplus vanishes. Together with A1, which holds the rest of the economy fixed, that leaves consumer surplus as the whole of welfare. Option (c) is true only in one of the regimes compared.`
      } },

    { id: "scale-mc08", topic: "scale", type: "mc", answer: 1,
      en: {
        stem: R`Autarky makes the latecomer better off than free trade if and only if`,
        choices: [
          R`its cost function lies below the incumbent's at every scale.`,
          R`its autarky price is below the incumbent cluster's world price.`,
          R`its domestic market is larger than the incumbent's.`,
          R`it has a terms-of-trade advantage.`,
        ],
        explanation: R`This is the proposition, and it follows because consumer surplus is strictly decreasing in price. Option (a) is necessary but nowhere near sufficient: in the example Home's cost curve lies below Foreign's at every scale, and yet halving Home's market share reverses the welfare conclusion. Option (d) is irrelevant, since every agent here is a price-taker.`
      } },

    { id: "scale-mc09", topic: "scale", type: "mc", answer: 2,
      en: {
        stem: R`In the two-period learning model, the optimal per-unit subsidy in period \(2\) is`,
        choices: [
          R`\(\delta\lambda Q_1\).`,
          R`\(\lambda Q_2\).`,
          R`zero.`,
          R`the same as in period \(1\).`,
        ],
        explanation: R`By, \(s_2=0\). There is no period \(3\), so period-2 output confers no further cost reduction on anyone and the competitive condition \(p_2=\mcost_2\) is already efficient. This is exactly why the dynamic externality justifies a *temporary* intervention, whereas a static externality would justify a permanent one.`
      } },

    { id: "scale-mc10", topic: "scale", type: "mc", answer: 1,
      en: {
        stem: R`The main reason a regression of long-run industry growth on the degree of protection cannot identify the effect of infant-industry policy is that`,
        choices: [
          R`growth is hard to measure.`,
          R`protection is chosen by governments on the basis of industries' prospects, so the direction of the bias is not even known.`,
          R`tariffs are usually too small to matter.`,
          R`the theory makes no prediction about growth.`,
        ],
        explanation: R`Governments protect industries they expect to grow, biasing the estimate upward, and also industries that are collapsing, biasing it downward. With both selection mechanisms operating, the correlation is uninformative in a way that cannot even be signed. This is why Ju\-h\'asz (2018) uses variation generated by a naval blockade instead.`
      } },

    { id: "scale-tf01", topic: "scale", type: "tf", answer: false,
      en: {
        stem: R`Increasing returns to scale and economies of scale are two names for the same property.`,
        explanation: R`False. Returns to scale is a property of the production function, economies of scale a property of the cost curve. Increasing returns imply economies of scale only when input prices are independent of the firm's scale (the proposition), and economies of scale can arise with constant returns if buying more inputs makes them cheaper per unit.`
      } },

    { id: "scale-tf02", topic: "scale", type: "tf", answer: false,
      en: {
        stem: R`A firm with a fixed cost and constant marginal cost has a production function exhibiting increasing returns to scale.`,
        explanation: R`False. \(C(q)=\fcost+\mcost q\) is not of the form \(C(1)q^{1/\nu}\) for any \(\nu\), so the definition does not classify it as increasing returns. It nonetheless has a strictly falling average cost curve, which is economies of scale in the sense of the definition.`
      } },

    { id: "scale-tf03", topic: "scale", type: "tf", answer: false,
      en: {
        stem: R`Under external economies of scale, a larger firm in a cluster has lower unit costs than a smaller firm in the same cluster.`,
        explanation: R`False. Under the definition unit cost depends on \(Q\), total output in the location, and not on \(q_i\). All firms in the same place have the same unit cost whatever their size, which is exactly what allows A3 and A4 to hold together.`
      } },

    { id: "scale-tf04", topic: "scale", type: "tf", answer: false,
      en: {
        stem: R`A downward-sloping industry supply curve implies that firms are behaving irrationally.`,
        explanation: R`False. Each firm faces a flat marginal cost, takes the price as given, and earns zero profit — entirely standard behaviour. What slopes down is the locus of price--quantity pairs consistent with zero profit, and it slopes down because moving along it changes the externality in A5.`
      } },

    { id: "scale-tf05", topic: "scale", type: "tf", answer: false,
      en: {
        stem: R`An equilibrium of \(P(Q)=\mcost(Q)\) at which the supply curve is steeper than the demand curve is locally stable.`,
        explanation: R`False, and the inequality is the wrong way round. The proposition requires \(P'(Q)<\mcost'(Q)\), that is, demand steeper than supply. If supply were steeper, a little extra entry would cut unit cost by more than it cut the price, and entry would continue without limit.`
      } },

    { id: "scale-tf06", topic: "scale", type: "tf", answer: false,
      en: {
        stem: R`If one location has a lower unit cost function than another at every scale, then under free trade the industry must end up in that location.`,
        explanation: R`False. By the proposition, concentration in the dearer location is an equilibrium whenever the cheaper location's start-up cost \(\mcost(0)\) exceeds the prevailing price. The example is exactly this case: Home is cheaper at every scale and the industry can still sit in Foreign forever.`
      } },

    { id: "scale-tf07", topic: "scale", type: "tf", answer: true,
      en: {
        stem: R`Concentrating an industry with external economies in a single location raises world welfare, provided it concentrates in the location with the lower cost function.`,
        explanation: R`True. This is the proposition. Concentration raises the scale of the hosting industry, which lowers its unit cost and hence the world price; since producer surplus is zero in every equilibrium and consumer surplus is decreasing in price, all consumers gain.`
      } },

    { id: "scale-tf08", topic: "scale", type: "tf", answer: false,
      en: {
        stem: R`The result that free trade can make a country worse off in this chapter is a terms-of-trade argument.`,
        explanation: R`False. No agent in the assumption has any market power, and the losing country is a price-taker throughout. The loss comes entirely from the externality in A5, which is why it appears here and nowhere in Part II.`
      } },

    { id: "scale-tf09", topic: "scale", type: "tf", answer: false,
      en: {
        stem: R`If autarky beats free trade for the latecomer, then autarky is the best policy available to it.`,
        explanation: R`False. The example gives the ranking \(p_{\pt{H}}<p\aut<p_{\pt{F}}\): free trade with the cluster at Home is better than autarky, which is better than free trade with the cluster abroad. Protection is a second-best response to a coordination failure, and any instrument that relocates the cluster and then permits trade dominates it.`
      } },

    { id: "scale-tf10", topic: "scale", type: "tf", answer: false,
      en: {
        stem: R`Levitt, List and Syverson (2013) identify an external dynamic economy of scale.`,
        explanation: R`False. They measure learning *within* a single plant, with the product and equipment held fixed, which is an *internal* dynamic economy. The policy argument of the section requires the external version, in which one firm's production lowers other firms' costs, and that is not what the paper identifies.`
      } },

    { id: "krugman-mc01", topic: "krugman", type: "mc", answer: 1,
      en: {
        stem: R`A country exports \(30\) and imports \(10\) of a product. Its Grubel--Lloyd index for that product is`,
        choices: [
          R`\(0.25\).`,
          R`\(0.50\).`,
          R`\(0.75\).`,
          R`\(3.00\).`,
        ],
        explanation: R`By, \(1-|30-10|/(30+10)=1-20/40=0.5\). Option (d) is the export-to-import ratio, which is not an index and is not bounded by one; option (a) is \(|{\mathit{EX}}-{\mathit{IM}}|/({\mathit{EX}}+{\mathit{IM}})\) mistakenly halved, and option (c) inverts the fraction's role by reporting the unmatched share's complement incorrectly. The index is always one minus the unmatched share of total trade.`
      } },

    { id: "krugman-mc02", topic: "krugman", type: "mc", answer: 2,
      en: {
        stem: R`A firm faces inverse demand \(p(q)=20-\tfrac12 q\) and has constant marginal cost \(4\). Its profit-maximising price is`,
        choices: [
          R`\(4\).`,
          R`\(8\).`,
          R`\(12\).`,
          R`\(16\).`,
        ],
        explanation: R`By the proposition, \(\MR=20-q\), and \(\MR=\MC\) gives \(q=16\); the price is then read off *inverse demand*, \(p=20-8=12\). Option (a) is marginal-cost pricing, which a firm with market power does not choose; option (d) reads the price off the demand curve at the wrong quantity; option (b) is the value of \(\MR\) at the optimum, which is the classic error of reading the price off the marginal revenue curve rather than off demand.`
      } },

    { id: "krugman-mc03", topic: "krugman", type: "mc", answer: 1,
      en: {
        stem: R`In the demand curve, an increase in the number of firms \(\nvar\), holding \(\pbar\) and \(p_i\) fixed,`,
        choices: [
          R`shifts firm \(i\)'s demand curve outward.`,
          R`shifts firm \(i\)'s demand curve inward without changing its slope.`,
          R`makes firm \(i\)'s demand curve steeper.`,
          R`leaves firm \(i\)'s demand curve unchanged.`,
        ],
        explanation: R`The count \(\nvar\) enters only through the equal share \(\mkt/\nvar\), which is the intercept, while the slope is \(\partial q_i/\partial p_i=-\mkt b\) and contains no \(\nvar\). So entry cuts each incumbent's share of a market of unchanged size and leaves the responsiveness to relative price alone. That the curve shifts *in* is what makes free entry eliminate profits.`
      } },

    { id: "krugman-mc04", topic: "krugman", type: "mc", answer: 1,
      en: {
        stem: R`Market size \(\mkt\) does not appear in the pricing curve because`,
        choices: [
          R`the firm ignores market size when choosing its price.`,
          R`a larger market raises the firm's sales and the position of its demand curve in the same proportion, so the relation between its market share and its mark-up is unaffected.`,
          R`market size affects only fixed costs.`,
          R`the pricing curve is derived before the market clears.`,
        ],
        explanation: R`In the optimality condition, \(q=\mkt b(p-\mcost)\), a doubling of \(\mkt\) doubles the symmetric share \(q=\mkt/\nvar\) on the left and the term \(\mkt b\) on the right, so \(\mkt\) cancels. Option (a) is false: the firm's demand curve contains \(\mkt\) and the firm responds to it; what is true is that the *price* it chooses, at a given number of rivals, happens not to depend on it. Option (c) is false, since \(\mkt\) appears in the free-entry curve precisely through the spreading of \(\fcost\), not through \(\fcost\) itself.`
      } },

    { id: "krugman-mc05", topic: "krugman", type: "mc", answer: 0,
      en: {
        stem: R`With \(\mcost=2\), \(\fcost=9\), \(b=\tfrac12\) and \(\mkt=72\), the equilibrium number of firms and price are`,
        choices: [
          R`\(\nvar=4\) and \(\pbar=2.5\).`,
          R`\(\nvar=8\) and \(\pbar=2.25\).`,
          R`\(\nvar=18\) and \(\pbar=2.11\).`,
          R`\(\nvar=4\) and \(\pbar=2.0\).`,
        ],
        explanation: R`By, \(\nvar^{E}=\sqrt{72/(\tfrac12\cdot9)} =\sqrt{16}=4\) and \(p^{E}=2+\sqrt{9/(\tfrac12\cdot72)}=2+\sqrt{1/4}=2.5\). Option (c) reports output per firm, \(q^{E}=\sqrt{\tfrac12\cdot9\cdot72}=18\), in place of the firm count. Option (d) is marginal cost, which is never the equilibrium price when \(\fcost>0\), since the mark-up is what pays the fixed cost.`
      } },

    { id: "krugman-mc06", topic: "krugman", type: "mc", answer: 1,
      en: {
        stem: R`When two identical countries integrate into a single market of size \(2\mkt\), the number of firms serving each consumer`,
        choices: [
          R`doubles, because the market has doubled.`,
          R`rises by a factor \(\sqrt2\), because the free-entry curve halves its slope while the pricing curve does not move.`,
          R`is unchanged, because the pricing curve does not move.`,
          R`falls, because fewer firms survive.`,
        ],
        explanation: R`Equilibrium requires both curves, and only one of them moves. Doubling would be the answer if the price stayed at \(p^{E}\) — that is the point \(\pt{B}\) of the figure — but at \(2\nvar^{E}\) firms competition pushes the price below break-even, so entry stops at \(\sqrt2\,\nvar^{E}\). Option (d) confuses the world count, which does fall from \(2\nvar^{E}\), with the count available to a consumer, which rises from \(\nvar^{E}\).`
      } },

    { id: "krugman-mc07", topic: "krugman", type: "mc", answer: 1,
      en: {
        stem: R`Integration raises each consumer's variety count while lowering the world's total variety count. These two statements are consistent because`,
        choices: [
          R`consumers can buy some varieties twice.`,
          R`before integration each consumer could buy only her own country's varieties, so her access rose from half the world's total to all of it.`,
          R`the world total is measured in different units.`,
          R`some varieties are produced in both countries.`,
        ],
        explanation: R`By A3 each variety is made in exactly one country, which rules out option (d), and before integration the other country's varieties existed but were unavailable. Access went from \(\nvar^{E}\), half of the world's \(2\nvar^{E}\), to all of the world's \(\sqrt2\,\nvar^{E}\), and \(\sqrt2\,\nvar^{E}>\nvar^{E}\). There is no double counting and no change of units.`
      } },

    { id: "krugman-mc08", topic: "krugman", type: "mc", answer: 1,
      en: {
        stem: R`In the integrated equilibrium the price still exceeds marginal cost. The reason is that`,
        choices: [
          R`firms collude.`,
          R`the mark-up is exactly what pays the fixed cost \(\fcost\), which must be covered at any finite scale.`,
          R`entry is restricted.`,
          R`consumers are willing to pay more for variety.`,
        ],
        explanation: R`Free entry drives the price to *average* cost, not to marginal cost, and \(\AC(q)-\mcost=\fcost/q>0\) at every finite \(q\). In the example the mark-up of \(0.50\) on \(8\) units is exactly \(\fcost=4\). Option (c) contradicts A7; option (a) contradicts A6, under which no firm reacts to any other; and option (d), while a feature of A8, plays no part in the pricing condition.`
      } },

    { id: "krugman-mc09", topic: "krugman", type: "mc", answer: 1,
      en: {
        stem: R`The demand curve implies that total industry sales are`,
        choices: [
          R`increasing in the number of firms.`,
          R`equal to \(\mkt\) regardless of the prices charged.`,
          R`decreasing in the average price \(\pbar\).`,
          R`equal to \(\mkt/\nvar\).`,
        ],
        explanation: R`Summing over the \(\nvar\) firms and using \(\sum_i(p_i-\pbar)=0\), which holds because \(\pbar\) is by definition the average of the \(p_i\), gives: \(\sum_i q_i=\mkt\) exactly. Industry demand is perfectly inelastic, which is a consequence of the assumed functional form rather than an assumption that was announced, and it is why the section finds no consumer-surplus triangle to measure. Option (d) is one firm's sales in the symmetric equilibrium, not the industry's.`
      } },

    { id: "krugman-mc10", topic: "krugman", type: "mc", answer: 2,
      en: {
        stem: R`The model of this chapter cannot say which firms exit when markets integrate. The assumption responsible is`,
        choices: [
          R`free entry, A7.`,
          R`perfect integration with no trade costs, A8.`,
          R`that all firms have the same technology, A4, together with symmetry across countries, A1.`,
          R`love of variety, A8.`,
        ],
        explanation: R`Identical technology plus identical countries makes firms interchangeable, so any selection of the \((2-\sqrt2)\nvar^{E}\) exiting firms is equally consistent with equilibrium. Symmetry was not decoration: it is what licensed the equal share \(q=\mkt/\nvar\), from which both curves were derived. A7 determines *how many* firms there are and A8 removes the distinction between home and export sales, which is why the model is also silent on who exports, but neither creates the anonymity of firms.`
      } },

    { id: "krugman-tf01", topic: "krugman", type: "tf", answer: false,
      en: {
        stem: R`A Grubel--Lloyd index of zero means the country does not trade the product.`,
        explanation: R`False. It means trade in the product is entirely one-directional: either \(\mathit{EX}=0\) or \(\mathit{IM}=0\), so the unmatched share is one. A country exporting \(50\) and importing nothing has an index of zero and a large trade flow.`
      } },

    { id: "krugman-tf02", topic: "krugman", type: "tf", answer: false,
      en: {
        stem: R`For any linear demand curve, marginal revenue has the same slope as inverse demand but a lower intercept.`,
        explanation: R`False, and the error is reversed. By marginal revenue has the *same* intercept and *twice* the slope: for \(q=a-bp\) both lines begin at \(a/b\) while the slopes are \(-1/b\) and \(-2/b\).`
      } },

    { id: "krugman-tf03", topic: "krugman", type: "tf", answer: false,
      en: {
        stem: R`The demand curve is derived from consumers' love of variety.`,
        explanation: R`False. It is postulated, as A5 states and the section emphasises. It is a linear approximation chosen for tractability, with properties consistent with love of variety — equal shares at equal prices, dependence on relative price only — but no preferences are written down anywhere in the chapter from which it could follow. Love of variety enters separately, in A8, and is used nowhere in the derivation.`
      } },

    { id: "krugman-tf04", topic: "krugman", type: "tf", answer: false,
      en: {
        stem: R`In the symmetric equilibrium, a firm that raises its price above \(\pbar\) loses all of its customers.`,
        explanation: R`False. By it loses \(\mkt b\) units per unit of price increase, which is a finite and continuous loss, not a collapse to zero. Losing everything would be the Bertrand outcome with homogeneous goods; here the varieties are differentiated, which is precisely what gives each firm a downward-sloping rather than a perfectly elastic demand curve.`
      } },

    { id: "krugman-tf05", topic: "krugman", type: "tf", answer: true,
      en: {
        stem: R`The pricing curve contains no \(\mkt\) and the free-entry curve contains no \(b\).`,
        explanation: R`True. By the proposition and, \(\pbar=\mcost+1/(\nvar b)\) and \(\pbar=\mcost+\nvar\fcost/\mkt\). Market size cancels from the optimality condition because it scales a firm's share and the slope of its demand curve together; substitutability is absent from break-even because that is an accounting condition about covering \(\fcost+\mcost q\), which does not involve how readily consumers switch.`
      } },

    { id: "krugman-tf06", topic: "krugman", type: "tf", answer: false,
      en: {
        stem: R`Doubling the market doubles the equilibrium number of firms.`,
        explanation: R`False. By the proposition it multiplies the number of firms by \(\sqrt2\). Doubling is what the free-entry curve alone would deliver at the old price, the point \(\pt{B}\) in the figure; but with that many firms the pricing curve says the price would be competed below break-even, so entry stops short.`
      } },

    { id: "krugman-tf07", topic: "krugman", type: "tf", answer: false,
      en: {
        stem: R`When two identical countries integrate, the price falls by \(29\%\).`,
        explanation: R`False: it is the *mark-up* that falls by \(1-1/\sqrt2\approx29.3\%\), since \(p^{E\prime}-\mcost=(p^{E}-\mcost)/\sqrt2\) and marginal cost is unaffected. The price itself falls by less, and by how much less depends on how large \(\mcost\) is relative to the mark-up: in the example the price falls from \(1.50\) to \(1.354\), about \(9.8\%\).`
      } },

    { id: "krugman-tf08", topic: "krugman", type: "tf", answer: false,
      en: {
        stem: R`Integration makes consumers in both countries better off in this model, and the size of the gain from the extra varieties can be computed from the assumptions as stated.`,
        explanation: R`False as written. The first clause is the model's claim and the second is not deliverable: the assumption contains no utility function, and total quantity is fixed at \(\mkt\) whatever prices are, so there is no consumer-surplus integral and no trade-off in which variety has a weight. Quantifying the variety gain requires preferences such as the CES form, which this chapter does not use.`
      } },

    { id: "krugman-tf09", topic: "krugman", type: "tf", answer: false,
      en: {
        stem: R`Because the world produces fewer varieties after integration, integration wastes resources.`,
        explanation: R`False, and the sign is backwards. Each variety carries a fixed cost \(\fcost\) that is paid once, so fewer varieties means less duplication: total fixed-cost spending falls from \(2\nvar^{E}\fcost\) to \(\sqrt2\,\nvar^{E}\fcost\). That saving is where the efficiency gain in this model comes from; what cannot be settled inside the model is how it compares with the loss of the varieties themselves.`
      } },

    { id: "krugman-tf10", topic: "krugman", type: "tf", answer: false,
      en: {
        stem: R`The model predicts that the most productive firms are the ones that export.`,
        explanation: R`False. It makes no such prediction, because by A1 and A4 every firm has identical productivity and by A8 every firm sells in both markets at no extra cost. The model is silent on selection into exporting rather than wrong about it, and supplying that prediction is the business of Chapter 9.`
      } },

    { id: "melitz-mc01", topic: "melitz", type: "mc", answer: 1,
      en: {
        stem: R`In the model of this chapter, operating profit is`,
        choices: [
          R`linear in the gap \(\cmax-\mcost_i\).`,
          R`proportional to the square of the gap \(\cmax-\mcost_i\).`,
          R`independent of \(\mcost_i\), because the mark-up is constant.`,
          R`proportional to \(1/\mcost_i\).`,
        ],
        explanation: R`By, \(\opprof_i=\tfrac{b\mkt}{4}(\cmax-\mcost_i)^{2}\), because operating profit is the product of the mark-up and the quantity and *both* are proportional to the gap:. Option (a) is the quantity, not the profit. Option (c) describes the CES version of the model, in which mark-ups are constant across firms; in the linear version makes the mark-up vary, and the second remark at the end of the section explains why the two must not be mixed. The square is what turns small cost differences into very large profit differences.`
      } },

    { id: "melitz-mc02", topic: "melitz", type: "mc", answer: 2,
      en: {
        stem: R`With \(b\mkt=16\), \(\cmax=3\) and \(\fcost=4\), the production cutoff is`,
        choices: [
          R`\(1.0\).`,
          R`\(1.5\).`,
          R`\(2.0\).`,
          R`\(2.5\).`,
        ],
        explanation: R`By, \(\ccutD=3-2\sqrt{4/16}=3-1=2\). Option (b) is the cutoff *after* the choke cost has fallen to \(2.5\), and option (a) is the export cutoff at that lower choke cost with \(\fcostX=9\). Option (d) would be the answer if the square root had been taken of \(\fcost/(b\mkt)\) without the factor of two in front.`
      } },

    { id: "melitz-mc03", topic: "melitz", type: "mc", answer: 1,
      en: {
        stem: R`A firm's choke cost \(\cmax\) is defined as`,
        choices: [
          R`the highest marginal cost at which the firm can cover \(\fcost\).`,
          R`\(\pbar+1/(b\nvar)\), the marginal cost at which the firm's optimal price equals its cost and it sells nothing.`,
          R`the average marginal cost of firms in the industry.`,
          R`the marginal cost of the least productive exporter.`,
        ],
        explanation: R`This is the definition, and the two properties quoted were verified immediately after it: at \(\mcost_i=\cmax\) the price rule returns \(p_i=\cmax\) and demand returns \(q_i=0\). Option (a) is the production cutoff \(\ccutD\), which lies strictly *below* \(\cmax\) by the proposition; confusing the two is the most common error in this chapter, since \(\cmax\) involves no fixed cost at all. Option (d) is \(\ccutX\). Option (c) is \(\bar{\mcost}\), which is related to \(\cmax\) but is not equal to it.`
      } },

    { id: "melitz-mc04", topic: "melitz", type: "mc", answer: 1,
      en: {
        stem: R`A firm decides whether to export by comparing`,
        choices: [
          R`its total profit with \(\fcostX\).`,
          R`the operating profit it would earn abroad with \(\fcostX\).`,
          R`its domestic operating profit with \(\fcost+\fcostX\).`,
          R`its revenue abroad with \(\fcostX\).`,
        ],
        explanation: R`This is. Because markets are segmented by A7 and marginal cost is constant by A3, domestic operating profit is the same number whether or not the firm exports, so it cancels from the comparison along with \(\fcost\). Nothing about the domestic business enters. Option (d) fails because revenue abroad does not net out the variable cost of producing the exported units, and option (c) brings the domestic business back in, which is exactly what cancels.`
      } },

    { id: "melitz-mc05", topic: "melitz", type: "mc", answer: 1,
      en: {
        stem: R`With \(b\mkt=16\), \(\cmax{}'=2.5\), \(\fcost=4\) and \(\fcostX=9\), a firm that has drawn \(\mcost_i=1.2\)`,
        choices: [
          R`exports, because its operating profit abroad of \(6.76\) is positive.`,
          R`produces for the home market only, because \(6.76<9\).`,
          R`exits, because \(1.2\) exceeds the export cutoff.`,
          R`exports, because \(1.2\) is below the production cutoff.`,
        ],
        explanation: R`Its foreign operating profit would be \(\tfrac{16}{4}(2.5-1.2)^{2} =4(1.3)^{2}=6.76\), which is positive but short of \(\fcostX=9\), so it does not export; and \(1.2\le\ccutD{}'=1.5\), so it survives. Option (a) is the central error of the chapter: a positive foreign operating profit is not enough, because \(\fcostX\) must be covered in full. Option (c) confuses the two cutoffs — exceeding \(\ccutX\) means not exporting, not exiting. Option (d) has the implication backwards: being below \(\ccutD{}'\) is necessary for exporting but far from sufficient.`
      } },

    { id: "melitz-mc06", topic: "melitz", type: "mc", answer: 2,
      en: {
        stem: R`The reason \(\ccutX<\ccutD{}'\) in this model is that`,
        choices: [
          R`foreign markets are smaller than domestic ones.`,
          R`shipping goods abroad costs something per unit.`,
          R`\(\fcostX>\fcost\), and both cutoffs lie below the same choke cost at a distance increasing in the relevant fixed cost.`,
          R`exporters are more productive than non-exporters.`,
        ],
        explanation: R`Both cutoffs have the form \(\cmax{}'-2\sqrt{\cdot/(b\mkt)}\), and the square root is increasing, so the larger fixed cost subtracts more. Option (a) is excluded by the symmetry of A1, under which \(\mkt^{*}=\mkt\). Option (b) is excluded by A7: shipping is free in this chapter, and the only barrier is the fixed cost. Option (d) reverses cause and effect — exporters are more productive *because* the cutoff selects them, not the other way round.`
      } },

    { id: "melitz-mc07", topic: "melitz", type: "mc", answer: 1,
      en: {
        stem: R`When the economy opens, the demand curve a domestic-only firm faces in its home market`,
        choices: [
          R`rotates outward about its intercept, because the firm can now reach more consumers.`,
          R`shifts down in parallel, because \(\cmax\) falls while the size of the home market is unchanged.`,
          R`becomes steeper, because competition is fiercer.`,
          R`is unaffected, since only exporters are touched by trade.`,
        ],
        explanation: R`By the home inverse demand curve is \(p=\cmax-q/(b\mkt)\): the intercept is the choke cost and the slope depends on \(b\) and on the size of the *home* market. Opening lowers \(\cmax\) and leaves \(\mkt\) alone, so the curve shifts down without changing slope, which is the toughness-of-competition force of the section and the move from \(D\aut\) to \(D\ft\) in the figure. Option (a) is what happens to an *exporter's total* demand curve, equation, and only to firms that pay \(\fcostX\). Option (d) is the opposite of the truth: the toughness force reaches every firm in the market.`
      } },

    { id: "melitz-mc08", topic: "melitz", type: "mc", answer: 1,
      en: {
        stem: R`In the example profit falls for all three firms, including the exporter whose output rises from \(20\) to \(32\). The best explanation is that`,
        choices: [
          R`the model is internally inconsistent.`,
          R`the gains from trade accrue to consumers through lower prices and more varieties, while free entry competes producer profit away in both regimes.`,
          R`the exporter has made a mistake in choosing to export.`,
          R`\(\fcostX\) has been set too high.`,
        ],
        explanation: R`The exporter has not made a mistake: staying home would have left it \(16-4=12\) against the \(19\) it earns by exporting, so exporting is strictly better given the choice it faces. What has happened is that the toughness force — a lower \(\cmax\) — has hit it along with everyone else, and that same lower \(\cmax\) is the summary statistic for consumers facing more varieties at lower prices. With free entry, as describes, expected profit on a draw is competed down to the sunk cost in both regimes, so there is no presumption that producers gain. Option (d) is not an explanation: with a lower \(\fcostX\) more firms would export, and their profits would still fall.`
      } },

    { id: "melitz-mc09", topic: "melitz", type: "mc", answer: 1,
      en: {
        stem: R`Suppose the choke cost falls from \(\cmax\) to \(\cmax{}'\) with \(\fcost\), \(b\) and \(\mkt\) unchanged. The production cutoff falls by`,
        choices: [
          R`\(2\sqrt{\fcost/(b\mkt)}\).`,
          R`exactly \(\cmax-\cmax{}'\).`,
          R`more than \(\cmax-\cmax{}'\), because the parabola is convex.`,
          R`an amount that cannot be determined without knowing \(H\).`,
        ],
        explanation: R`This is the identity: both cutoffs equal their choke cost minus the *same* distance \(2\sqrt{\fcost/(b\mkt)}\), which contains no \(\cmax\) and therefore cancels on subtraction. Option (c) is the natural guess from looking at the figure, and it is wrong because the parabola does not merely drop — it also shifts horizontally, since its root is at \(\cmax\). Option (d) confuses the position of the cutoff, which needs no distribution, with the *number* of firms either side of it, which does.`
      } },

    { id: "melitz-mc10", topic: "melitz", type: "mc", answer: 2,
      en: {
        stem: R`Measured average industry productivity rises when the economy opens because`,
        choices: [
          R`every firm invests in better technology once it faces foreign competition.`,
          R`exporters learn from their foreign buyers.`,
          R`the highest-cost firms exit and output shifts towards the lowest-cost firms, with no firm changing its own \(\mcost_i\).`,
          R`the fixed cost \(\fcost\) falls.`,
        ],
        explanation: R`This is the proposition together with the section: the result is pure composition, and by A4 no firm in the assumption can change its own draw. Options (a) and (b) describe learning by exporting, which the chapter's evidence section treats as real — it is plausibly behind the \(5.4\) within-plant points of the Canadian decomposition — but which this model rules out by construction and therefore cannot be its explanation. Option (d) contradicts A3, under which \(\fcost\) is a parameter and is unchanged by trade.`
      } },

    { id: "melitz-tf01", topic: "melitz", type: "tf", answer: false,
      en: {
        stem: R`A firm with a very profitable domestic business will export even if its foreign operating profit is below \(\fcostX\).`,
        explanation: R`False. By the domestic operating profit cancels from the comparison, because markets are segmented by A7 and marginal cost is constant by A3, so what the firm does abroad has no effect on what it does at home. The export decision turns on the foreign increment alone, and a firm whose foreign operating profit is \(8\) does not export when \(\fcostX=9\), however large its home business.`
      } },

    { id: "melitz-tf02", topic: "melitz", type: "tf", answer: false,
      en: {
        stem: R`The choke cost \(\cmax\) is the highest marginal cost at which a firm can cover its fixed cost of production.`,
        explanation: R`False: that is the production cutoff \(\ccutD\), which by the proposition lies strictly below \(\cmax\) by \(2\sqrt{\fcost/(b\mkt)}\). The choke cost involves no fixed cost whatever; it is the marginal cost at which the firm's optimal price equals its cost and its sales are zero, as the definition and the computation following it establish.`
      } },

    { id: "melitz-tf03", topic: "melitz", type: "tf", answer: true,
      en: {
        stem: R`Because \(\fcostX>\fcost\), every exporter is a survivor but not every survivor is an exporter.`,
        explanation: R`True. This is. Both cutoffs are the common choke cost minus \(2\sqrt{\cdot/(b\mkt)}\), and the square root is increasing, so a larger fixed cost of exporting puts \(\ccutX\) strictly to the left of \(\ccutD{}'\). The exporting interval is therefore nested inside the surviving interval, which is the model's account of the fact that exporters are a minority of firms.`
      } },

    { id: "melitz-tf04", topic: "melitz", type: "tf", answer: false,
      en: {
        stem: R`When the economy opens, the home demand curve of a firm that does not export becomes flatter.`,
        explanation: R`False. By the slope of home inverse demand is \(-1/(b\mkt)\), which depends on substitutability and on the size of the home market, neither of which opening changes. What changes is the intercept, which is the choke cost, so the curve shifts down in parallel. A rotation to a flatter curve happens only to an exporter's *total* demand curve,, and only because it is then serving two markets.`
      } },

    { id: "melitz-tf05", topic: "melitz", type: "tf", answer: false,
      en: {
        stem: R`If operating profit is halved for a firm, its gap \(\cmax-\mcost_i\) has also been halved.`,
        explanation: R`False, and the error is in the exponent. By operating profit is proportional to the *square* of the gap, so halving the profit corresponds to multiplying the gap by \(1/\sqrt2\approx0.707\), not by \(1/2\). Halving the gap would cut operating profit to a quarter. This convexity is why small cost differences generate very large size and profit differences.`
      } },

    { id: "melitz-tf06", topic: "melitz", type: "tf", answer: false,
      en: {
        stem: R`In this chapter the fall in the choke cost when the economy opens is derived from the distribution of cost draws and a free-entry condition.`,
        explanation: R`False. It is assumed. The section states plainly that \(\nvar\), \(\pbar\) and therefore \(\cmax\) are taken as given throughout, in keeping with A6, and that the fall from \(3\) to \(2.5\) in the worked examples is a chosen number rather than a computed one. Deriving it requires a functional form for \(H\) and the free-entry condition with a sunk cost of obtaining a draw; Melitz and Ottaviano (2008) do it with a Pareto distribution. Everything downstream of \(\cmax\) — the price rule, both cutoff formulas and the shift identity — is exact.`
      } },

    { id: "melitz-tf07", topic: "melitz", type: "tf", answer: false,
      en: {
        stem: R`The cutoff formula \(\cmax-2\sqrt{\fcost/(b\mkt)}\) applies equally to the CES version of the heterogeneous-firm model.`,
        explanation: R`False. As the second remark at the end of the section sets out, the CES model of Melitz (2003) has no choke price and therefore no choke cost, and every firm there charges the same constant mark-up \(\sigma/(\sigma-1)\) over its own marginal cost rather than the variable mark-up. Its cutoff is defined by a zero-profit condition involving the aggregate price index and the wage. The two models agree on the economics — drawn costs, a fixed export cost, nested cutoffs, selection — and disagree on the algebra, and mixing the two produces an expression belonging to neither.`
      } },

    { id: "melitz-tf08", topic: "melitz", type: "tf", answer: true,
      en: {
        stem: R`Measured industry productivity can rise after liberalisation even if no firm changes its technology.`,
        explanation: R`True, and this is the central result of the chapter. By the proposition the highest-cost firms exit and output shifts towards the lowest-cost firms, so the industry's average cost per unit produced falls; in the example it falls from \(1\) to \(0.75\) unweighted and from \(5/6\) to \(9/14\) when weighted by output. Every firm's \(\mcost_i\) is exactly what it was. The effect is pure composition.`
      } },

    { id: "melitz-tf09", topic: "melitz", type: "tf", answer: false,
      en: {
        stem: R`The panel evidence on the exporter premium shows that exporting causes firms to become more productive.`,
        explanation: R`False as stated. The test set out in the discussion of selection versus learning above — look at a firm's productivity in the years before it starts exporting — finds the premium already present before entry and growing little afterwards, which points to selection rather than learning (Clerides, Lach and Tybout, 1998; Bernard and Jensen, 1999). Some learning may occur, and the \(5.4\) within-plant points in the Canadian decomposition are consistent with it, but the premium itself is mainly not caused by exporting.`
      } },

    { id: "melitz-tf10", topic: "melitz", type: "tf", answer: true,
      en: {
        stem: R`Nothing in the algebra of this chapter requires the extra market to be a foreign one.`,
        explanation: R`True. As the section argues, exporting entered only through A7 and A8: a fixed cost that does not vary with volume, and access to an additional market. The same parabola and horizontal line describe adopting a technology, adding a product line, or building a foreign plant. That generality is useful, and it is also a warning, since finding a size threshold in data is therefore weak evidence for this mechanism in particular.`
      } },

    { id: "fdi-mc01", topic: "fdi", type: "mc", answer: 1,
      en: {
        stem: R`An iceberg trade cost of \(\tau=1.3\) means that`,
        choices: [
          R`the firm pays a fee of \(0.3\) per unit delivered, collected at the border.`,
          R`\(1.3\) units must be shipped for one to arrive, so the marginal cost of a delivered unit is \(1.3\mcost\).`,
          R`the firm's fixed cost of exporting is \(30\%\) higher than its fixed cost of producing.`,
          R`the foreign price index is \(30\%\) above the home one.`,
        ],
        explanation: R`This is the definition and its consequence. The cost is proportional to the quantity shipped and is a pure resource loss — the \(0.3\) units melt and nobody receives them — which is why option (a) is wrong as stated: a fee collected at the border is a tariff, and although a tariff has the same multiplicative effect on the firm's cost, the revenue goes to a government rather than vanishing, which matters for welfare even though it does not matter for the firm's pricing. Option (c) confuses a per-unit cost with a fixed cost, which is precisely the distinction Chapter 9 and this chapter put on either side of the proximity--concentration tradeoff.`
      } },

    { id: "fdi-mc02", topic: "fdi", type: "mc", answer: 2,
      en: {
        stem: R`With CES demand \(q=Ap^{-\sigma}\) and delivered marginal cost \(\tau\mcost\), the profit-maximising price is`,
        choices: [
          R`\(\tfrac12(\cmax+\tau\mcost)\).`,
          R`\(\tau\mcost\).`,
          R`\(\dfrac{\sigma}{\sigma-1}\tau\mcost\).`,
          R`\(\dfrac{\sigma-1}{\sigma}\tau\mcost\).`,
        ],
        explanation: R`This is, obtained by setting \(\sigma\tau\mcost-(\sigma-1)p=0\) in the proof of the proposition. Option (a) is the linear-demand price rule of Chapter 9, which belongs to a demand system in which \(\cmax\) exists; it has no meaning here, and the section is about why the two must not be mixed. Option (d) is below marginal cost, since \((\sigma-1)/\sigma<1\), and would lose money on every unit. Option (b) is marginal-cost pricing, which is what a competitive firm does and a monopolistically competitive one does not.`
      } },

    { id: "fdi-mc03", topic: "fdi", type: "mc", answer: 1,
      en: {
        stem: R`In the bracket \(1-\tau^{1-\sigma}\) is best described as`,
        choices: [
          R`the mark-up the firm charges abroad.`,
          R`the share of foreign operating profit that the trade cost destroys, between \(0\) and \(1\) and increasing in \(\tau\).`,
          R`the probability that the firm exports.`,
          R`the elasticity of affiliate sales with respect to distance.`,
        ],
        explanation: R`Since \(\sigma>1\) the exponent \(1-\sigma\) is negative, so \(\tau^{1-\sigma}\) falls from \(1\) at \(\tau=1\) towards \(0\) as \(\tau\) grows, and the bracket therefore rises from \(0\) towards \(1\). Comparing the two expressions, exporting earns the fraction \(\tau^{1-\sigma}\) of what local production would earn, so the bracket is the fraction lost. The economics of the cutoff is entirely in this reading: the left side of is what local production saves and the right side is what it costs. The mark-up, option (a), is the constant \(\sigma/(\sigma-1)\) and does not depend on \(\tau\) at all.`
      } },

    { id: "fdi-mc04", topic: "fdi", type: "mc", answer: 1,
      en: {
        stem: R`In the figure the FDI region is on the right because`,
        choices: [
          R`efficient firms have high marginal cost.`,
          R`the horizontal axis is \(\mcost^{1-\sigma}\) and \(1-\sigma<0\), so low marginal cost corresponds to a large value on the axis.`,
          R`the FDI line is flatter than the export ray.`,
          R`fixed costs are plotted on the right-hand side.`,
        ],
        explanation: R`The transformation \(z=\mcost^{1-\sigma}\) is strictly decreasing because the exponent is negative, so efficient firms — those with small \(\mcost\) — appear far from the origin. This is the commonest sign error in the chapter and it is worth checking against a number: with \(\sigma=2\) a firm with \(\mcost=2\) has \(z=0.5\) and a firm with \(\mcost=8\) has \(z=0.125\), and it is the first that builds the plant. Option (c) is false: the FDI line is *steeper*, with slope \(\kappa A\) against \(\kappa A\tau^{1-\sigma}\), and that is exactly what guarantees a single crossing.`
      } },

    { id: "fdi-mc05", topic: "fdi", type: "mc", answer: 2,
      en: {
        stem: R`With \(\sigma=2\), \(\kappa A=200\), \(\tau=2\) and \(\fcostP=25\), and no fixed cost of exporting, the FDI cutoff is`,
        choices: [
          R`\(\ccutF=0.25\).`,
          R`\(\ccutF=2\).`,
          R`\(\ccutF=4\).`,
          R`\(\ccutF=8\).`,
        ],
        explanation: R`By, \((\ccutF)^{1-\sigma}=25/\bigl(200[1-\tfrac12]\bigr)=0.25\), and with \(\sigma=2\) that is \(1/\ccutF=0.25\), so \(\ccutF=4\). Option (a) is the answer left in the transformed variable without inverting it, which is the most common slip; option (b) is the cutoff that obtains when \(\fcostP\) is doubled to \(50\), as in Step 5 of the example; option (d) is \(\kappa A/\fcostP\) with the bracket omitted, which is what dropping \(1-\tau^{1-\sigma}\) gives.`
      } },

    { id: "fdi-mc06", topic: "fdi", type: "mc", answer: 1,
      en: {
        stem: R`Suppose exporting requires a fixed cost \(\fcostX\) as well. The condition for the three-way ordering \(\ccutF<\ccutX\) is`,
        choices: [
          R`\(\fcostP>\fcostX\).`,
          R`\(\fcostP>\tau^{\sigma-1}\fcostX\).`,
          R`\(\fcostP>\sigma\fcostX\).`,
          R`\(\fcostP>\fcostX+\tau\).`,
        ],
        explanation: R`This is, derived in the proof of the proposition. Option (a) is necessary but not sufficient, and the reason is economic rather than technical: if the trade cost is very large, exporting is so badly handicapped that even an expensive plant beats it for nearly every firm, and the exporting tier vanishes even though \(\fcostP>\fcostX\). The same thing happens when \(\sigma\) is large, because customers abandon a dear variety readily. The three tiers require a middle range of parameters is the statement that the parameters lie in it.`
      } },

    { id: "fdi-mc07", topic: "fdi", type: "mc", answer: 1,
      en: {
        stem: R`A government evaluates an export-promotion programme using total factor productivity computed as \(Y_i/(K_i^{\alpha}L_i^{\beta}M_i^{\gamma})\) with \(Y_i\) equal to deflated revenue. On the García-Marín and Voigtländer evidence it would conclude`,
        choices: [
          R`that exporting raised productivity, and it would be right.`,
          R`that exporting did nothing, when in fact marginal cost fell and the gain went to buyers through lower prices.`,
          R`that exporting raised mark-ups.`,
          R`nothing, because the measure is undefined for exporters.`,
        ],
        explanation: R`The measure is, which with deflated revenue in the numerator is revenue productivity: physical efficiency multiplied by the firm's price relative to the deflator. García-Marín and Voigtländer find marginal cost and price falling by almost exactly the same amount, so the mark-up is unchanged and the residual is flat. The gain is real and accrues to the firm's customers, who are in this case foreign buyers — a point with some policy bite, since a domestic government evaluating a domestic programme would be measuring a benefit that largely left the country.`
      } },

    { id: "fdi-mc08", topic: "fdi", type: "mc", answer: 1,
      en: {
        stem: R`In the hold-up sequence, the efficiency loss is`,
        choices: [
          R`the lower price BMW eventually pays, which is a loss to the supplier.`,
          R`the relationship-specific investment that the supplier never makes.`,
          R`the legal cost of the renegotiation.`,
          R`the scrap value of the component.`,
        ],
        explanation: R`Step 4 of the sequence in the section is a transfer: BMW gains exactly what the supplier loses, and transfers are not social costs. The loss is step 5, the investment that is never made, and the sketch at quantifies it — with a symmetric split the supplier chooses \(e=\tfrac12\) instead of \(e=1\) and a quarter of the available surplus, \(\tfrac12-\tfrac38\) out of \(\tfrac12\), disappears without anybody being paid for it. This is why the remedy is a change of ownership rather than a transfer.`
      } },

    { id: "fdi-mc09", topic: "fdi", type: "mc", answer: 2,
      en: {
        stem: R`Lippi assembles jackets in its own plant in La Paz, Bolivia, and buys the zippers from an unrelated firm that makes them in Nicaragua. Lippi is`,
        choices: [
          R`outsourcing but not offshoring.`,
          R`offshoring but not outsourcing.`,
          R`both offshoring and outsourcing.`,
          R`neither.`,
        ],
        explanation: R`By the definition the two dimensions are independent: offshoring is about the national border, outsourcing about the firm boundary. The zipper stage is done by another firm (outsourcing) in another country (offshoring), and assembly is offshored without being outsourced, since it crossed the border and stayed inside Lippi. Note that if assembly were in Valdivia instead, the answer would still be (c), but for a different reason — the zippers alone would supply both labels. That the answer is insensitive to a change of this size is the point of separating the two dimensions.`
      } },

    { id: "fdi-mc10", topic: "fdi", type: "mc", answer: 1,
      en: {
        stem: R`In the offshoring model, a fall in the coordination cost \(\tau\) raises the average skill intensity of tasks performed in *both* countries because`,
        choices: [
          R`workers in both countries acquire more skill.`,
          R`the tasks that change sides are more skill-intensive than anything Foreign was doing and less skill-intensive than anything Home keeps.`,
          R`Home gains high-skill tasks while Foreign loses low-skill ones.`,
          R`relative supply shifts out in both countries.`,
        ],
        explanation: R`The band \(X\) lies immediately above the old cutoff, so by construction it is the most skill-intensive thing Foreign now does and was the least skill-intensive thing Home used to do. Removing a lower tail from the Home distribution and adding an upper tail to the Foreign one raises both means, as the table in Step 4 of the example shows: \(0.1875\) to \(0.3077\) in Foreign and \(0.6875\) to \(0.8077\) at Home. Option (a) is excluded by A2, under which endowments are fixed; option (d) is excluded because relative supply is explicitly unchanged, which is why the premium rises rather than quantities adjusting. Nothing was created or destroyed — a block of tasks changed sides.`
      } },

    { id: "fdi-tf01", topic: "fdi", type: "tf", answer: true,
      en: {
        stem: R`Because an iceberg trade cost enters multiplicatively on marginal cost, an exporting firm is algebraically identical to a domestic firm with marginal cost \(\tau\mcost\).`,
        explanation: R`True, and it is the reason the convention is used. By the cost of a delivered unit is \(\tau\mcost\), and nothing else in the firm's problem changes, so every formula derived for a domestic firm applies to an exporter with that single substitution. It is what allows to be reused for the FDI case simply by setting \(\tau=1\), and it is why the export decision depends on \(\tau\) and \(\mcost\) only through their product.`
      } },

    { id: "fdi-tf02", topic: "fdi", type: "tf", answer: false,
      en: {
        stem: R`The cutoff formula \(\cmax-2\sqrt{\fcostX/(b\mkt)}\) from the previous chapter can be written next to to obtain the three-way sorting of firms.`,
        explanation: R`False, and this is the error the section exists to prevent. The first expression comes from linear demand, in which there is a choke price, \(\cmax\) exists and mark-ups vary across firms; the second comes from CES demand, in which there is no choke price, \(\cmax\) does not exist and every firm charges the same mark-up. A line containing both describes no economy. The three-way sorting itself is correct and standard, but it must be derived inside one demand system, as the proposition does with \(\fcostX\) introduced into the CES model.`
      } },

    { id: "fdi-tf03", topic: "fdi", type: "tf", answer: false,
      en: {
        stem: R`A firm undertakes FDI when the operating profit it would earn from a foreign plant is positive.`,
        explanation: R`False, in exactly the way was misread in the previous chapter. The relevant comparison is with *exporting*, not with nothing. In Step 3 of the example the firm with \(\mcost=8\) would earn operating profit of \(25\) from a plant, exactly covering \(\fcostP=25\), and still exports, because exporting earns it \(12.5\) against the plant's \(0\). The condition is: the saving on the trade cost must exceed the plant's cost.`
      } },

    { id: "fdi-tf04", topic: "fdi", type: "tf", answer: false,
      en: {
        stem: R`Foreign direct investment requires that the investor build a new facility abroad.`,
        explanation: R`False. By the definition greenfield investment builds new capacity, but acquisition FDI — also called brownfield investment or cross-border merger and acquisition — buys or merges with an existing foreign firm, changing who owns capacity that already existed. Both are FDI, because what the definition turns on is the acquisition of a lasting interest and conventionally of control, with a statistical threshold of a \(10\%\) stake, and not on the creation of anything. An investment below that threshold is portfolio investment: the return without the control.`
      } },

    { id: "fdi-tf05", topic: "fdi", type: "tf", answer: false,
      en: {
        stem: R`Worldwide FDI inflows have gone overwhelmingly to developed economies in every year since 1970.`,
        explanation: R`False as stated, although it was true for much of the period. Historically most inflows did go to the developed OECD economies, and those flows are substantially more volatile than flows to developing and transition economies. But the developing and transition share has risen steadily and has accounted for roughly half of worldwide flows since \(2009\) (UNCTAD, 2015). "Overwhelmingly in every year" is therefore too strong, and the trend is the more interesting part of the fact.`
      } },

    { id: "fdi-tf06", topic: "fdi", type: "tf", answer: false,
      en: {
        stem: R`The sales of foreign affiliates are larger than FDI flows, so the two cannot both be measuring multinational activity correctly.`,
        explanation: R`False: they are measuring different things and both can be right. An FDI flow is the investment made in a year and the affiliate sales figure is the turnover generated in a year by all the plants that past investments built. A single investment generates sales every year thereafter, so a stock-like quantity being larger than a flow is arithmetic rather than inconsistency. The reason affiliate sales are the standard indicator is that they measure the phenomenon of interest — how much production multinationals actually do — rather than the capital movement that created the capacity.`
      } },

    { id: "fdi-tf07", topic: "fdi", type: "tf", answer: false,
      en: {
        stem: R`In the model of the section, a firm builds a plant abroad because labour is cheaper there.`,
        explanation: R`False, and it is ruled out by assumption rather than merely absent. A5 of the assumption sets marginal cost equal at home and abroad, so there is no factor-cost motive in the model at all; the only reason for a plant is to avoid the trade cost \(\tau\) on each delivered unit. That restriction is deliberate, since the facts to be explained — rich countries investing in rich countries, affiliates serving their host markets — are facts a cheap-labour story cannot produce. The factor-cost motive is the subject of the section and is a different model.`
      } },

    { id: "fdi-tf08", topic: "fdi", type: "tf", answer: false,
      en: {
        stem: R`A flat estimate of \(Y_i/(K_i^{\alpha}L_i^{\beta}M_i^{\gamma})\) around the date of export entry establishes that the firm's physical efficiency did not change.`,
        explanation: R`False, and this is the chapter's methodological result. Because \(Y_i\) is deflated revenue rather than physical output, the residual is revenue productivity: physical efficiency multiplied by the firm's own price relative to the industry deflator. If efficiency rises and the price falls by the same proportion, the product is unchanged and the estimate is flat — which is exactly what García-Marín and Voigtländer find, with marginal cost and price both falling and the mark-up unmoved. The measure is silent about efficiency precisely when prices respond, which is when efficiency has changed.`
      } },

    { id: "fdi-tf09", topic: "fdi", type: "tf", answer: false,
      en: {
        stem: R`In the Atkin, Khandelwal and Osman experiment the quality improvement could be explained by treated producers simply following the specifications in the orders they received.`,
        explanation: R`False, and the authors' design anticipates the objection. If producers were only executing instructions on the orders in hand, the improvement would disappear once the order was filled and would not appear on output destined for somebody else. Instead the gain persists and shows up on rugs made for the domestic market, where no foreign specification applies. Together with the buyer correspondence — complaints about packing and about fringe durability, naming dimensions the producer was not tracking — that points to learning retained by the producer rather than compliance with a particular contract.`
      } },

    { id: "fdi-tf10", topic: "fdi", type: "tf", answer: false,
      en: {
        stem: R`If the coordination cost satisfies \(\tau>w_{\mathrm{L}}/w^{*}_{\mathrm{L}}\), then only the most low-skill-intensive tasks are offshored.`,
        explanation: R`False: no task at all is offshored. This is case (ii) of the proposition, proved by the second chain of inequalities in its proof, and the intuition is that \(w_{\mathrm{L}}/w^{*}_{\mathrm{L}}\) is the largest wage ratio in the problem — the one most favourable to going abroad — so a friction exceeding it defeats offshoring even for the task that uses only low-skill labour. In the numbers of the example this is \(\tau=3\) against \(w_{\mathrm{L}}/w^{*}_{\mathrm{L}}=2.5\), where \(\tau w^{*}_{\mathrm{L}}=18{,}000\) already exceeds \(w_{\mathrm{L}}=15{,}000\).`
      } },

    { id: "policy1-mc01", topic: "policy1", type: "mc", answer: 1,
      en: {
        stem: R`A small country imposes a specific tariff \(t\) on an imported good. The domestic price rises by`,
        choices: [
          R`less than \(t\), because foreign exporters absorb part of it.`,
          R`exactly \(t\), because the foreign export supply is perfectly elastic.`,
          R`more than \(t\), because domestic producers also raise their prices.`,
          R`an amount that depends on the elasticity of domestic demand.`,
        ],
        explanation: R`"Small" means \(\XS\) is horizontal at \(p\wld\), so the foreign price cannot move and the wedge \(p-p^*=t\) must be absorbed entirely by the domestic price. Option (a) is the large-country answer, where the split is \(D/(B+D)\). Option (d) confuses the incidence of the tariff, which depends only on the relative slopes of \(\MD\) and \(\XS\), with the size of the deadweight loss, which does depend on the domestic elasticities.`
      } },

    { id: "policy1-mc02", topic: "policy1", type: "mc", answer: 2,
      en: {
        stem: R`In the welfare decomposition \(\Delta W=e-b-d\), area \(e\) is`,
        choices: [
          R`the part of tariff revenue paid by domestic consumers.`,
          R`the gain to domestic producers.`,
          R`the part of tariff revenue extracted from foreign exporters through a lower foreign price.`,
          R`the consumption distortion.`,
        ],
        explanation: R`Revenue is \(tM\), which splits into \(c=(p^{\mathrm{tar}}-p\wld)M\), paid by Home consumers through the higher domestic price, and \(e=(p\wld-p^{*\mathrm{tar}})M\), taken from foreign exporters through the lower foreign price. Only \(e\) survives the netting, because \(c\) cancels against part of the consumer loss. Option (a) describes \(c\) and (b) describes \(a\).`
      } },

    { id: "policy1-mc03", topic: "policy1", type: "mc", answer: 1,
      en: {
        stem: R`Why is the optimal tariff of a large country strictly positive?`,
        choices: [
          R`Because the terms-of-trade gain is much larger in magnitude than the distortions.`,
          R`Because the terms-of-trade gain is first-order in \(t\) while the distortions are second-order.`,
          R`Because tariff revenue is returned to consumers as a lump sum.`,
          R`Because domestic producers gain more than consumers lose.`,
        ],
        explanation: R`Area \(e\) is a rectangle, so it grows linearly in \(t\); areas \(b\) and \(d\) are triangles, so they grow quadratically. Near \(t=0\) a linear gain always dominates a quadratic loss, whatever the constants. Option (a) is a common misreading and is false in our numbers at \(t=0.6\), where \(e=2.4\) against \(b+d=1.6\) — the same order of magnitude. Option (d) is false: producers gain \(a\) and consumers lose \(a+b+c+d\).`
      } },

    { id: "policy1-mc04", topic: "policy1", type: "mc", answer: 1,
      en: {
        stem: R`Measured pass-through of recent US tariffs into duty-inclusive import prices is close to one, and the effect on exporters' pre-duty prices close to zero. The implication for the optimal-tariff argument is that`,
        choices: [
          R`the optimal US tariff is large, since consumers clearly bear the tax.`,
          R`the optimal US tariff is close to zero, since \(\varepsilon^*\) is very large in these markets.`,
          R`the argument cannot be tested with price data.`,
          R`pass-through is irrelevant to \(\tau\opt\).`,
        ],
        explanation: R`Complete pass-through into the domestic price with no movement in the foreign price is the definition of a small country in this market, which means \(\varepsilon^*\) is effectively infinite and \(\tau\opt=1/\varepsilon^*\approx0\). Option (a) inverts the logic: it is precisely because consumers bear the whole tax that the terms-of-trade gain is absent.`
      } },

    { id: "policy1-mc05", topic: "policy1", type: "mc", answer: 0,
      en: {
        stem: R`A quota of \(\bar M\) and a tariff of \(t\) chosen to yield the same import volume in a competitive small country`,
        choices: [
          R`yield the same domestic price and the same areas \(a\), \(b\), \(c\) and \(d\), differing only in who receives \(c\).`,
          R`yield the same domestic price but different distortion triangles.`,
          R`yield different domestic prices, because a quota is a quantity instrument.`,
          R`cannot be compared, since one is a price instrument and the other a quantity instrument.`,
        ],
        explanation: R`The theorem. With given schedules the map between import volume and domestic price is one-to-one, so fixing either one fixes the other and all four areas with it. The entire difference is the destination of \(c\): the treasury under a tariff or an auctioned quota, licence-holders under a free quota, and the foreign exporter under a VER.`
      } },

    { id: "policy1-mc06", topic: "policy1", type: "mc", answer: 2,
      en: {
        stem: R`Home is small and uses a voluntary export restraint rather than an equivalent tariff. Relative to the tariff, Home's welfare loss is`,
        choices: [
          R`smaller, because no tax is collected from its own consumers.`,
          R`the same, because prices and quantities are identical.`,
          R`larger by the rent rectangle \(c\), which accrues to foreign exporters.`,
          R`larger by the distortion triangles \(b+d\), which double.`,
        ],
        explanation: R`Prices and quantities are indeed identical, which disposes of (d), but the rectangle leaves the country: Home loses \(b+c+d\) rather than \(b+d\). In the chapter's numbers that is \(8.4\) against \(3.6\). Option (a) misreads the tariff: the revenue is collected from consumers but returned to them, so it is not a cost.`
      } },

    { id: "policy1-mc07", topic: "policy1", type: "mc", answer: 3,
      en: {
        stem: R`A car sells for \(\$20{,}000\) with \(\$12{,}000\) of imported parts. The tariff on cars is \(10\%\) and on parts \(20\%\). The effective rate of protection of assembly is`,
        choices: [
          R`\(+10\%\).`,
          R`\(+25\%\).`,
          R`\(0\%\).`,
          R`\(-5\%\).`,
        ],
        explanation: R`By with \(a=0.6\), \(\ERP =(0.10-0.6\times0.20)/0.4=(0.10-0.12)/0.4=-0.05\). Directly: the car price becomes \(\$22{,}000\) and parts cost \(\$14{,}400\), so value added falls from \(\$8{,}000\) to \(\$7{,}600\). Option (b) is the answer when parts enter duty free; the input tariff matters because it taxes \(60\%\) of the price while the output tariff subsidises \(100\%\) of it.`
      } },

    { id: "policy1-mc08", topic: "policy1", type: "mc", answer: 0,
      en: {
        stem: R`In the two-country tariff game, "impose a tariff" is a dominant strategy and the Nash equilibrium is Pareto-dominated. Reciprocity resolves this because it`,
        choices: [
          R`changes each country's payoff from unilateral protection by making retaliation automatic, removing the off-diagonal cells.`,
          R`makes tariffs illegal under international law.`,
          R`raises the deadweight loss of a tariff.`,
          R`compensates the losers from trade within each country.`,
        ],
        explanation: R`Reciprocity does not change the ranking of outcomes; it changes the feasible set. Once a tariff reliably triggers a counter-tariff, the choice is between (no tariff, no tariff) and (tariff, tariff), and each country prefers the first. Option (b) is wrong on the facts — the WTO permits tariffs within bound rates — and (d) describes a domestic policy with no bearing on the game.`
      } },

    { id: "policy1-mc09", topic: "policy1", type: "mc", answer: 1,
      en: {
        stem: R`Why does an import-weighted average tariff understate protection?`,
        choices: [
          R`Because bound tariffs exceed applied tariffs.`,
          R`Because prohibitive tariffs eliminate the imports that would give them weight.`,
          R`Because it over-weights narrowly defined goods that are barely traded.`,
          R`Because non-tariff barriers are excluded from the average.`,
        ],
        explanation: R`A tariff high enough to stop imports entirely receives a weight of zero, so the most protective measures are invisible in the statistic. Option (c) is the defect of the *simple* average, which is the opposite error. Option (d) is true of both averages but is not a reason that the weighting scheme in particular understates.`
      } },

    { id: "policy1-mc10", topic: "policy1", type: "mc", answer: 1,
      en: {
        stem: R`With linear schedules, the deadweight loss of a small-country tariff satisfies`,
        choices: [
          R`\(\DWL \propto t\), so doubling the tariff doubles the loss.`,
          R`\(\DWL \propto t^2\), so doubling the tariff quadruples the loss.`,
          R`\(\DWL\) is independent of the elasticities of demand and supply.`,
          R`\(\DWL =0\) if the revenue is returned as a lump sum.`,
        ],
        explanation: R`From the proposition, \(\DWL =\tfrac12 t^2(|Q_D'|+Q_S')\): the two triangles have base and height each proportional to \(t\). Option (c) is wrong because both slopes enter directly, and (d) is wrong because A7 already returns the revenue — the loss is forgone output and forgone consumption, not misplaced money.`
      } },

    { id: "policy1-tf01", topic: "policy1", type: "tf", answer: false,
      en: {
        stem: R`A tariff reduces welfare in a small country only if the government wastes the revenue it collects.`,
        explanation: R`False. Assumption A7 returns the revenue to households as a lump sum and the loss \(-(b+d)\) remains. The deadweight loss is resources used to produce at home what could have been bought more cheaply abroad, plus consumption valued above world cost and not enjoyed; neither is money that went somewhere else.`
      } },

    { id: "policy1-tf02", topic: "policy1", type: "tf", answer: true,
      en: {
        stem: R`In a large country, a tariff makes foreign exporters pay part of the tax.`,
        explanation: R`True. The tariff drives a wedge \(p-p^*=t\) and both prices move, with the split set. In the chapter's numbers, with \(t=0.6\) the foreign price falls by \(0.2\), so foreigners bear one third of the tariff and Home collects \(e=2.4\) of its \(7.2\) revenue from them.`
      } },

    { id: "policy1-tf03", topic: "policy1", type: "tf", answer: true,
      en: {
        stem: R`If a country is large, its optimal tariff is positive regardless of how elastic foreign export supply is, provided it is not perfectly elastic.`,
        explanation: R`True. The proposition requires only \(D<\infty\), \(B>0\) and \(M\ft>0\). The elasticity determines *how large* the optimal tariff is — \(\tau\opt=1/\varepsilon^*\) — but any finite \(\varepsilon^*\) leaves the first-order gain positive at \(t=0\).`
      } },

    { id: "policy1-tf04", topic: "policy1", type: "tf", answer: true,
      en: {
        stem: R`The welfare loss from a prohibitive tariff equals the gains from trade.`,
        explanation: R`True. A prohibitive tariff returns the domestic price to \(p\aut\) and imports to zero, which is autarky; so the loss relative to free trade is exactly what was gained on opening. With the chapter's schedules, \(\Delta W(1.5)=-10\), equal to the triangle computed.`
      } },

    { id: "policy1-tf05", topic: "policy1", type: "tf", answer: false,
      en: {
        stem: R`A tariff above the prohibitive level is worse than the prohibitive tariff itself.`,
        explanation: R`False. Beyond the prohibitive rate the welfare curve is flat, because there is no trade left to tax and no further distortion to create. A prohibitive tariff and a more-than-prohibitive tariff have identical effects.`
      } },

    { id: "policy1-tf06", topic: "policy1", type: "tf", answer: false,
      en: {
        stem: R`An export subsidy raises welfare in the subsidising country because it raises producer surplus by more than consumers lose.`,
        explanation: R`False on two counts. Producers do gain more than consumers lose — \(37.8\) against \(22.2\) in the section — but the budgetary cost of \(19.2\) exceeds the difference, leaving \(-3.6\). And for a large country the terms-of-trade effect reinforces the loss rather than offsetting it, because pushing more onto the world market lowers the price received.`
      } },

    { id: "policy1-tf07", topic: "policy1", type: "tf", answer: false,
      en: {
        stem: R`A nominal tariff of \(10\%\) on a finished good always gives its producers effective protection of at least \(10\%\).`,
        explanation: R`False. By the effective rate is \((t_f-a t_i)/(1-a)\), which falls below \(t_f\) and can go negative once the input tariff is high enough; the sign flips at \(t_i=t_f/a\). With \(a=0.6\), a \(20\%\) tariff on parts turns a \(10\%\) tariff on cars into effective protection of \(-5\%\).`
      } },

    { id: "policy1-tf08", topic: "policy1", type: "tf", answer: false,
      en: {
        stem: R`Because a quota and a tariff can be made equivalent, the GATT's prohibition on quantitative restrictions has no economic content.`,
        explanation: R`False. The equivalence holds under competition and certainty and fails under uncertainty, under domestic monopoly, and when licences are allocated by a rent-seeking procedure. More to the point, the prohibition is about transparency: a tariff is visible, measurable and negotiable, which is what makes reciprocal bargaining possible, while a quota's restrictiveness has to be inferred.`
      } },

    { id: "policy1-tf09", topic: "policy1", type: "tf", answer: false,
      en: {
        stem: R`The terms-of-trade argument for a tariff is an argument that protection creates value.`,
        explanation: R`False. Area \(e\) is a transfer from Foreign to Home's treasury, and world welfare falls by \(b+d+f\) whatever Home gains. The argument is beggar-thy-neighbour: it is about capturing surplus from foreigners, not about creating any.`
      } },

    { id: "policy1-tf10", topic: "policy1", type: "tf", answer: false,
      en: {
        stem: R`The finding that US washer prices fell after the 2012 Korean anti-dumping duties contradicts the claim that tariffs raise domestic prices.`,
        explanation: R`False as an interpretation, though the fact is correct. The duty made a relocation to a lower-cost origin worth its fixed cost: operating profit of \(3\times9=27\) in China against \(4\times6=24\) under the duty in Korea. The price fell because the tariff triggered an investment that was already close to profitable, which is a statement about where firms produce rather than a refutation of the partial-equilibrium arithmetic.`
      } },

    { id: "policy2-mc01", topic: "policy2", type: "mc", answer: 1,
      en: {
        stem: R`Full currency offset of an ad valorem tariff \(\tau\), starting from free trade and holding the foreign-currency price fixed, requires a dollar appreciation of`,
        choices: [
          R`exactly \(\tau\).`,
          R`\(\tau/(1+\tau)\).`,
          R`\((1+\tau)/\tau\).`,
          R`an amount that cannot be determined without the elasticity of import demand.`,
        ],
        explanation: R`From, \(e_1/e_0=1/(1+\tau)\), so the proportional appreciation is \(1-1/(1+\tau)=\tau/(1+\tau)\). For \(\tau=10\%\) that is \(9.09\%\), not \(10\%\); option (a) is the common approximation and is always too large, because the duty is levied on the already-reduced pre-duty price. Option (d) is wrong because is an accounting condition on prices, with no quantity response in it.`
      } },

    { id: "policy2-mc02", topic: "policy2", type: "mc", answer: 1,
      en: {
        stem: R`In the identity \(\CA =S_{\mathrm{priv}}+(T-G)-\INV\), a tax cut financed by borrowing, with private saving and investment unchanged,`,
        choices: [
          R`improves the current account.`,
          R`worsens the current account.`,
          R`leaves the current account unchanged, since identities have no causal content.`,
          R`worsens the current account only if the dollar appreciates.`,
        ],
        explanation: R`Lower \(T\) reduces government saving, and with the other two terms fixed \(\CA\) falls. This is the policy tension noted after: fiscal expansion widens the external deficit that protection is intended to reduce. Option (c) confuses the status of an identity with its usefulness; the identity constrains which stories are coherent even though it does not by itself choose between them.`
      } },

    { id: "policy2-mc03", topic: "policy2", type: "mc", answer: 2,
      en: {
        stem: R`If currency offset is complete, the tariff's effect on the incentive to substitute domestic production for imports is`,
        choices: [
          R`strengthened, because the dollar is stronger.`,
          R`unchanged, because the duty is still legally owed.`,
          R`removed, because the landed cost of the import relative to domestic goods is unchanged.`,
          R`ambiguous, depending on the elasticity of domestic supply.`,
        ],
        explanation: R`The theorem. Substitution responds to relative prices; if the appreciation cancels the duty, the import's landed price relative to a domestic substitute is where it started and no domestic producer has become more competitive. Option (b) mistakes the legal incidence for the economic one.`
      } },

    { id: "policy2-mc04", topic: "policy2", type: "mc", answer: 2,
      en: {
        stem: R`Tariffed goods are five per cent of consumer spending and their retail prices rise ten per cent, with all other prices unchanged. The effect on the overall price level is approximately`,
        choices: [
          R`\(10\%\).`,
          R`\(2\%\).`,
          R`\(0.5\%\).`,
          R`\(0.05\%\).`,
        ],
        explanation: R`By, \(\sigma\pi=0.05\times0.10=0.005\), or half a per cent, added to inflation during the adjustment and not in subsequent years. Option (d) is the same product with one decimal place misplaced, and the error matters: half a percentage point is within ordinary variation, while five hundredths would be undetectable.`
      } },

    { id: "policy2-mc05", topic: "policy2", type: "mc", answer: 1,
      en: {
        stem: R`A one-time tariff increase that raises the price level by three per cent`,
        choices: [
          R`raises the inflation rate permanently by three percentage points.`,
          R`raises inflation during the adjustment and leaves the price level permanently higher.`,
          R`raises inflation during the adjustment, after which prices return to their previous level.`,
          R`has no effect on either the price level or inflation if it is transitory.`,
        ],
        explanation: R`See the figure. The level shifts up and then runs parallel to the baseline, so the rate of change is elevated only while the shift is occurring. Option (c) is the most common misreading of the word "transitory": it describes the rate, not the level. Making the inflation persistent requires repeated increases, wage responses or unanchored expectations.`
      } },

    { id: "policy2-mc06", topic: "policy2", type: "mc", answer: 0,
      en: {
        stem: R`Dollar invoicing of imports matters for the offset argument because`,
        choices: [
          R`it means a dollar appreciation does not mechanically lower the import price, instead improving the foreign exporter's margin.`,
          R`it means tariffs cannot be collected.`,
          R`it makes exchange-rate pass-through immediate and complete.`,
          R`it eliminates the exchange-rate risk faced by the exporter.`,
        ],
        explanation: R`If the price is set in dollars by contract, an appreciation leaves the dollar price unchanged and raises the exporter's local-currency revenue. Competition should erode that margin over time, so the dollar price declines eventually, but the automatic link assumed by the offset mechanism is broken in the short run. Option (c) is the opposite of the finding.`
      } },

    { id: "policy2-mc07", topic: "policy2", type: "mc", answer: 1,
      en: {
        stem: R`The published 2 April 2025 formula, with \(\varepsilon=4\) and \(\phi=0.25\), reduces to`,
        choices: [
          R`ten per cent plus one quarter of the deficit-to-imports ratio.`,
          R`ten per cent plus the deficit-to-imports ratio.`,
          R`four times the deficit-to-imports ratio.`,
          R`a rate that depends on the partner's own tariffs.`,
        ],
        explanation: R`\(\varepsilon\phi=4\times0.25=1\), so the denominator is one and the two economic parameters cancel exactly. Option (d) is the natural reading of the word "reciprocal" and is false: the rule uses no information about the partner's barriers at all.`
      } },

    { id: "policy2-mc08", topic: "policy2", type: "mc", answer: 1,
      en: {
        stem: R`Measured pass-through of US tariffs into prices paid by importers is close to one. For the argument of Chapter 11 this implies that`,
        choices: [
          R`the terms-of-trade rationale is strengthened, since the tariff is clearly binding.`,
          R`the terms-of-trade rationale is close to empty, since foreign export supply is effectively perfectly elastic in these markets.`,
          R`the tariff must have been evaded.`,
          R`domestic producers captured the whole of the revenue.`,
        ],
        explanation: R`Complete pass-through into the domestic price means the foreign price did not fall, so area \(e\) is absent and \(\varepsilon^*\) is effectively infinite, giving \(\tau\opt=1/\varepsilon^*\approx0\). Option (a) confuses the tariff binding — which it did — with the tariff extracting surplus from foreigners, which requires the opposite finding on foreign prices.`
      } },

    { id: "policy2-mc09", topic: "policy2", type: "mc", answer: 1,
      en: {
        stem: R`Tinbergen's rule, applied to the policy menu described in this chapter, says that`,
        choices: [
          R`a tariff is the best instrument when there are several objectives.`,
          R`a single instrument cannot generally be expected to attain several independent objectives at once.`,
          R`objectives should be ranked and pursued sequentially.`,
          R`currency policy dominates tariff policy.`,
        ],
        explanation: R`Revenue, industrial rebalancing, burden shifting and leverage are distinct targets, and the theorem exhibits a case in which the mechanism that serves one actively undermines another. The rule is a statement about counting instruments against targets, not a ranking of particular instruments, which disposes of (a) and (d).`
      } },

    { id: "policy2-mc10", topic: "policy2", type: "mc", answer: 2,
      en: {
        stem: R`The observation that the dollar index rose about ten per cent in 2018--19 while the US two-year yield advantage over the G7 average fell from about \(2.00\%\) to about \(1.65\%\) is best described as`,
        choices: [
          R`proof that tariffs caused the appreciation.`,
          R`proof that monetary policy caused the appreciation.`,
          R`co-movement consistent with a tariff-related currency response but not sufficient to isolate tariffs from other drivers.`,
          R`evidence that the exchange rate is unrelated to interest rates.`,
        ],
        explanation: R`The narrowing spread makes a conventional interest-rate explanation awkward, which is the point the source draws, and that is a reason to take the tariff story seriously rather than a demonstration of it. The dollar was rising against many currencies at once, and a pair as large as dollar--renminbi can itself drive a broad index, so attribution requires identification a two-series chart cannot provide.`
      } },

    { id: "policy2-tf01", topic: "policy2", type: "tf", answer: false,
      en: {
        stem: R`The identity \(M-X=\) net financial inflows establishes that foreign demand for dollar assets causes the US trade deficit.`,
        explanation: R`False. The equation is an accounting identity and holds whichever side is driving. Establishing causation requires showing that the asset-demand shock is exogenous and large relative to the saving--investment channel of, which is exactly what is contested.`
      } },

    { id: "policy2-tf02", topic: "policy2", type: "tf", answer: false,
      en: {
        stem: R`Full currency offset means the US Treasury collects no tariff revenue.`,
        explanation: R`False. Under full offset revenue is positive but smaller: in the example the duty falls from \(\$25.00\) to \(\$20.00\) per unit, because the appreciation shrinks the pre-duty dollar value on which the duty is levied. Revenue goes to zero only if imports stop.`
      } },

    { id: "policy2-tf03", topic: "policy2", type: "tf", answer: true,
      en: {
        stem: R`A tariff can raise the price level permanently without raising the inflation rate permanently.`,
        explanation: R`True, and this is the central distinction of the section's neighbourhood. The level shifts up during adjustment and then runs parallel to the baseline, so the rate of change returns to where it was while prices remain permanently higher.`
      } },

    { id: "policy2-tf04", topic: "policy2", type: "tf", answer: false,
      en: {
        stem: R`Because aggregate inflation stayed near two per cent in 2018--19, tariffs were not passed through to the prices importers paid.`,
        explanation: R`False. Coverage was small, so even complete pass-through on affected goods contributes little to the aggregate; monetary tightening was restraining inflation over the same period; and Cavallo et al.\ (2021) measure pass-through at the border directly and find it nearly complete. Aggregate and product-level series answer different questions.`
      } },

    { id: "policy2-tf05", topic: "policy2", type: "tf", answer: false,
      en: {
        stem: R`The claim that the United States bears a burden from supplying reserve assets is supported by a well-identified estimate of its borrowing advantage.`,
        explanation: R`False. The source itself notes that with only one reserve currency for decades there is little variation to study, and describes the available estimates, including the 50 to 60 basis points quoted from McKinsey (2009), as unreliable. Several G7 and other advanced economies borrow more cheaply than the United States.`
      } },

    { id: "policy2-tf06", topic: "policy2", type: "tf", answer: false,
      en: {
        stem: R`If currency offset works as described, tariffs would both protect consumer purchasing power and rebuild US manufacturing employment.`,
        explanation: R`False, and the two halves are in direct tension by the theorem. Complete offset leaves the landed cost of imports unchanged, which is precisely the condition under which no domestic producer has become more competitive, and the appreciation simultaneously raises the foreign-currency price of US exports.`
      } },

    { id: "policy2-tf07", topic: "policy2", type: "tf", answer: false,
      en: {
        stem: R`The exclusion of textiles from the reshoring argument is inconsistent with the security rationale.`,
        explanation: R`False. The security rationale applies to goods whose production has strategic value — semiconductors, advanced computing, weapons systems, pharmaceuticals — and the argument explicitly accepts that countries such as Bangladesh retain comparative advantage in low-value-added manufacturing. The two positions are consistent, and the concession narrows the scope of the case rather than contradicting it.`
      } },

    { id: "policy2-tf08", topic: "policy2", type: "tf", answer: false,
      en: {
        stem: R`Rerouting of exports through third countries makes it easier to measure the effect of a tariff on prices.`,
        explanation: R`False. Re-export diversion means goods recorded as coming from one origin are substantially of another's production, so goods-level microdata no longer compare like with like. Iyoha et al.\ (2024) find rerouting of Chinese imports rose roughly fifty per cent after the tariff increases, which is a measurement problem, not a help.`
      } },

    { id: "policy2-tf09", topic: "policy2", type: "tf", answer: false,
      en: {
        stem: R`The August 2024 unwind of the yen carry trade is presented in the source as evidence that tariffs destabilise financial markets.`,
        explanation: R`False. It is presented explicitly as an illustration of financial amplification — how a large currency move can propagate through collateral values and leveraged positions — and not as evidence of a tariff shock. The inference drawn is conditional: a very large renminbi adjustment could have consequences beyond import prices.`
      } },

    { id: "policy2-tf10", topic: "policy2", type: "tf", answer: false,
      en: {
        stem: R`If strategic production has social value not captured in consumer and producer surplus, it follows that a tariff is the right instrument for securing it.`,
        explanation: R`False. The premise establishes only that something outside the surplus sum has value, which is Assumption A6. Whether a tariff is the right way to secure it requires comparing it with subsidies, procurement commitments and stockpiles on cost, and that comparison is not made in the material surveyed here.`
      } }

  ]
};
