// Dairy Imports
import dairyImg from "../assets/FoodImages/Dairy/dairy_food_category.png";
import milkImg from "../assets/FoodImages/Dairy/dairy_food_category.png";
import cheeseImg from "../assets/FoodImages/Dairy/cheese.png";
import yoghurtImg from "../assets/FoodImages/Dairy/yoghurt.png";

// Fruit Imports
import fruitImg from "../assets/FoodCategoryImages/fruits_fruit_category.png";
import appleImg from "../assets/FoodImages/Fruits/apple.png";
import bananaImg from "../assets/FoodImages/Fruits/banana.png";
import cranberryImg from "../assets/FoodImages/Fruits/cranberry.png";
import grapefruitImg from "../assets/FoodImages/Fruits/grapefruit.png";
import pomeloImg from "../assets/FoodImages/Fruits/pomelo.png";

export type FoodCategoryDetail = {
  title: string;
  image: string;
  hasOverview: boolean;
  overview?: {
    description: string;
    scientificClassification?: string;
    commonForms?: string[];
    nutritionalHighlights?: string[];
    effect?: string;
    interactions?: {
      drugClass: string;
      category?: string;
      interaction: string;
      layman: string;
      scientific: string;
    }[];
    advice?: string[];
    scientificBackground?: string[];
  };
  items: {
    name: string;
    image: string;
  }[];
};

export const foodCategoryDetails: Record<string, FoodCategoryDetail> = {
  dairy: {
    title: "Dairy",
    image: dairyImg,
    hasOverview: true,
    overview: {
      description: "Dairy products are derived from milk of cows, goats, or sheep.",
      scientificClassification: "Bos taurus (cow), Capra aegagrus hircus (goat), Ovis aries (sheep)",
      commonForms: ["Milk", "Cheese", "Yogurt", "Butter", "Ice Cream"],
      nutritionalHighlights: ["Calcium", "Phosphorus", "Vitamin D (fortified)", "Protein"],
      effect: "May reduce drug absorption due to chelation with divalent cations",
      interactions: [
        {
          drugClass: "Tetracyclines",
          category: "Antibiotics",
          interaction: "Decreases drug absorption",
          layman: "Dairy can make antibiotics like tetracycline less effective.",
          scientific: "Calcium binds tetracyclines forming insoluble chelates → reduced bioavailability.",
        },
        {
          drugClass: "Fluoroquinolones",
          category: "Antibiotics",
          interaction: "Impairs absorption",
          layman: "Dairy can reduce how well your body absorbs these drugs.",
          scientific: "Divalent cations in dairy chelate with fluoroquinolones → reduced systemic levels.",
        },
        {
          drugClass: "Bisphosphonates",
          category: "Osteoporosis Drugs",
          interaction: "Severely reduces absorption",
          layman: "Dairy may block your osteoporosis medication.",
          scientific: "Calcium competes for absorption → lowers bioavailability of bisphosphonates.",
        },
        {
          drugClass: "Levothyroxine",
          category: "Thyroid Hormone",
          interaction: "Decreased effectiveness",
          layman: "Dairy might reduce the benefit of your thyroid medicine.",
          scientific: "Calcium interferes with absorption of levothyroxine in GI tract.",
        },
        {
          drugClass: "Iron Supplements",
          category: "e.g., ferrous sulfate",
          interaction: "Impairs iron absorption",
          layman: "Avoid dairy around iron pills.",
          scientific: "Calcium inhibits non-heme iron uptake → may worsen anemia.",
        },
      ],
      advice: [
        "Avoid dairy 1–2 hours before and after certain drugs",
        "Read drug labels for 'empty stomach' instructions",
        "Use water or non-dairy calcium-free beverages",
        "Consult your pharmacist if unsure about dairy interactions",
      ],
      scientificBackground: [
      "Dairy products contain high levels of divalent cations such as calcium and magnesium.",
      "These ions can chelate with drugs in the gastrointestinal tract, forming non-absorbable complexes.",
      "This process impairs drug absorption and may reduce clinical effectiveness.",
      "Proper dose timing is essential to avoid therapeutic failure."
    ]
    },
    items: [
      { name: "Milk", image: milkImg },
      { name: "Cheese", image: cheeseImg },
      { name: "Yogurt", image: yoghurtImg },
    ],
  },

  fruits: {
    title: "Fruits",
    image: fruitImg,
    hasOverview: false,
    items: [
      { name: "Grapefruit", image: grapefruitImg },
      { name: "Banana", image: bananaImg },
      { name: "Pomelo", image: pomeloImg },
      { name: "Cranberry", image: cranberryImg },
      { name: "Apple", image: appleImg },
    ],
  },
};