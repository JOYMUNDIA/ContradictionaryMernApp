import type { DrugProfile } from "../types/drug"
import drugImg from "../assets/drug-profile-image.png"

export const warfarinMock: DrugProfile = {
  id: "warfarin",
  name: "Warfarin",
  image: drugImg,
  drugClass: "Anticoagulant (blood thinner)",
  system: "Cardiovascular System",
  uses: [
    "Prevent blood clots",
    "Treat DVT and PE",
    "AFib stroke prevention",
  ],

  interactions: [
    {
      foodCategory: "Leafy Green Vegetables",
      examples: "(Spinach, Kale, Broccoli, Collard Greens)",
      interaction: "⚠️ Reduces warfarin effect",
      layman:
        "High vitamin K foods make warfarin less effective. Keep intake consistent, don’t avoid completely.",
      scientific:
        "Vitamin K intake bypasses warfarin inhibition, reducing anticoagulation effect and causing INR fluctuations.",
    },
    {
      foodCategory: "Certain Fruits",
      examples: "(Avocado, Kiwi, Cranberry)",
      interaction: "🟡 Possible interaction",
      layman:
        "Avocados have moderate vitamin K. Cranberry juice may increase bleeding risk in some cases.",
      scientific:
        "Cranberry may inhibit CYP450 enzymes, raising warfarin levels. Avocado contributes moderate vitamin K, possibly reducing efficacy if intake varies.",
    },
    {
      foodCategory: "Alcohol & Green Tea",
      examples: "(Beverages)",
      interaction: "⚠️ Alters effect unpredictably",
      layman:
        "These drinks can make warfarin act stronger or weaker depending on quantity.",
      scientific:
        "Alcohol impairs liver metabolism, increasing INR. Green tea contains vitamin K, potentially interfering with warfarin’s mechanism.",
    },
    {
      foodCategory: "Herbal Sauces & Condiments",
      examples: "(Soy Sauce, Mayo, Herbal Dips)",
      interaction: "⚠️ Varies",
      layman:
        "Some sauces may contain herbs or fermented ingredients that interact with warfarin.",
      scientific:
        "Herbal compounds may modulate CYP enzymes; fermented condiments may contain vitamin K or interfere with metabolism pathways, altering INR unpredictably.",
    },
    {
      foodCategory: "Dark Chocolate",
      examples: "(Flavonoid-rich treat)",
      interaction: "🟡 Mild caution",
      layman:
        "Dark chocolate may mildly affect warfarin if consumed in large amounts, but small amounts are typically fine.",
      scientific:
        "Flavonoids may influence platelet activity or liver enzymes. Vitamin K content is low but not negligible; monitor if intake changes.",
    },
    {
      foodCategory: "Animal Liver",
      examples: "(Beef, Chicken Liver)",
      interaction: "⚠️ High vitamin K",
      layman:
        "Liver is very high in vitamin K and can interfere with warfarin. Best to avoid.",
      scientific:
        "Animal liver contains dense concentrations of vitamin K, which can reduce warfarin efficacy and alter INR control.",
    },
  ],

  advice: [
    "📊 Monitor INR regularly and report large diet changes to your doctor.",
    "🍽️ Keep intake of vitamin K–rich foods consistent — don’t suddenly eat more or less.",
    "🧃 Limit cranberry juice and alcohol unless cleared by your provider.",
    "📚 Read labels on herbal teas, sauces, and supplements — they can alter drug metabolism.",
    "💊 Consult a pharmacist or doctor before adding new supplements or making dietary changes.",
  ],

  scientificBackground: [
    "Warfarin works by inhibiting vitamin K–dependent clotting factors, which are essential for normal blood clotting.",
    "Vitamin K intake from diet (especially from leafy greens or liver) can reduce warfarin’s effect, while inconsistent intake can cause INR fluctuations.",
    "Other compounds (e.g., alcohol, cranberry juice, herbal products) can alter liver enzyme activity, affecting warfarin metabolism and therapeutic control.",
    "Maintaining a steady dietary pattern is essential to minimize risk and keep INR within therapeutic range.",
  ],
}
