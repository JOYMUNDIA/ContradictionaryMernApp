import type { FoodProfile } from "../types/food"
import grapefruitImg from "../assets/grapefruit.png"

export const grapefruitMock: FoodProfile = {
  id: "grapefruit",
  name: "Grapefruit",
  image: grapefruitImg,
  scientificName: "Citrus × paradisi",
  forms: ["Whole fruit", "Juice"],
  nutrients: ["Vitamin C", "Flavonoids", "Fiber"],
  effect: "Inhibits CYP3A4 enzyme → raises drug levels",

  interactions: [
    {
      drugClass: "Statins",
      category: "(Lipid-lowering agents)",
      interaction: "⚠️ Increases drug levels",
      layman:
        "Grapefruit juice can make some statins too strong in your body, raising risk of side effects like muscle pain or liver issues.",
      scientific:
        "Grapefruit inhibits CYP3A4 enzyme in the small intestine, decreasing metabolism of certain statins → higher blood levels → increased risk of rhabdomyolysis and hepatotoxicity.",
    },
    {
      drugClass: "Calcium Channel Blockers",
      category: "(Antihypertensives)",
      interaction: "⚠️ Increases drug levels",
      layman:
        "Can make blood pressure drop too low if taken with grapefruit juice.",
      scientific:
        "CYP3A4 inhibition by grapefruit leads to increased bioavailability of these antihypertensives, enhancing hypotensive effects.",
    },
    {
      drugClass: "Benzodiazepines",
      category: "(Anxiolytics / Sedatives)",
      interaction: "⚠️ Potentiates sedative effect",
      layman:
        "Makes sedatives stronger, which could cause excessive drowsiness or slowed breathing.",
      scientific:
        "Grapefruit inhibits metabolism via CYP3A4, resulting in increased plasma concentration and central nervous system depression.",
    },
    {
      drugClass: "Antiarrhythmics",
      category: "(Heart rhythm medications)",
      interaction: "⚠️ Increases risk of toxicity",
      layman:
        "Can increase heart rhythm drug levels, raising risk of side effects like heart rhythm disturbances.",
      scientific:
        "CYP3A4 inhibition reduces hepatic and intestinal metabolism of amiodarone → increased systemic exposure → potential for proarrhythmic effects.",
    },
    {
      drugClass: "Immunosuppressants",
      category: "(Used after transplants)",
      interaction: "⚠️ Increases drug levels",
      layman:
        "Grapefruit can dangerously raise levels of drugs used to prevent organ rejection.",
      scientific:
        "Strong CYP3A4 inhibition by grapefruit leads to significantly increased blood concentrations of immunosuppressants → risk of nephrotoxicity, neurotoxicity, and graft complications.",
    },
  ],

  advice: [
    "🚫 Avoid grapefruit with medications marked 'Do not take with grapefruit.'",
    "📅 Effect can last up to 72 hours after eating grapefruit.",
    "🍏 Safe alternatives: Orange, apple, pear juices",
    "💊 Always consult pharmacist before mixing meds with grapefruit",
  ],

  scientificBackground: [
    "Grapefruit contains furanocoumarins that irreversibly inhibit intestinal CYP3A4, an enzyme responsible for breaking down many drugs.",
    "This increases systemic drug exposure, leading to higher plasma levels and increased risk of adverse effects.",
    "Even a single glass of juice can have measurable effects lasting up to 3 days.",
  ],
}
