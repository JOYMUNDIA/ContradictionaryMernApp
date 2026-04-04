// src/mockData/foodCardData.ts
import carbsImg from "../assets/FoodCategoryImages/carbs-food-category.png";
import condimentsImg from "../assets/FoodCategoryImages/Condiments-food-category.png";
import dairyImg from "../assets/FoodCategoryImages/dairy food category.png";
import drinkImg from "../assets/FoodCategoryImages/drink-food-category.png";
import fruitsImg from "../assets/FoodCategoryImages/fruits fruit category.png";
import nonMeatProteinImg from "../assets/FoodCategoryImages/Non-Meat Protein food-category.png";
import nutsImg from "../assets/FoodCategoryImages/nuts-food-category.png";
import redMeatImg from "../assets/FoodCategoryImages/red meat food category.png";
import vegetablesImg from "../assets/FoodCategoryImages/vegetables food category.png";
import whiteMeatImg from "../assets/FoodCategoryImages/white meat food-category.png";
import treatsImg from "../assets/FoodCategoryImages/treats food category.png";

export type FoodCategory = {
  title: string;
  image: string;
  items: string[];
  link: string;
};

export const foodCategoriesMock: FoodCategory[] = [
  {
    title: "Fruits",
    image: fruitsImg,
    //items: ["Papaya", "Apple", "Orange", "Banana", "Mango"],
    items: ["Papaya", "..."],
    link: "/foodcategoryRecordsNoOverview"
  },
  {
    title: "Vegetables",
    image: vegetablesImg,
    //items: ["Carrots", "Spinach", "Broccoli", "Kale", "Cauliflower"],
    items: ["Carrots", "..."],
    link: "/foodcategoryRecordsNoOverview"
  },
  {
    title: "Carbs",
    image: carbsImg,
    //items: ["Rice", "Bread", "Pasta"],
    items: ["Rice", "..."],
    link: "/foodcategoryRecordsNoOverview"
  },
  {
    title: "Dairy",
    image: dairyImg,
    //items: ["Milk", "Cheese", "Yogurt"],
    items: ["Milk", "..."],
    link: "/foodcategoryRecordsNoOverview"
  },
  {
    title: "Drinks",
    image: drinkImg,
    //items: ["Water", "Juice", "Soda"],
    items: ["Water", "..."],
    link: "/foodcategoryRecordsNoOverview"
  },
  {
    title: "Non-Meat Protein",
    image: nonMeatProteinImg,
    //items: ["Tofu", "Tempeh", "Beans"],
    items: ["Tofu", "..."],
    link: "/foodcategoryRecordsNoOverview"
  },
  {
    title: "Nuts",
    image: nutsImg,
    //items: ["Almonds", "Cashews", "Walnuts"],
    items: ["Almonds", "..."],
    link: "/foodcategoryRecordsNoOverview"
  },
  {
    title: "Red Meat",
    image: redMeatImg,
    //items: ["Beef", "Lamb", "Pork"],
    items: ["Beef", "..."],
    link: "/foodcategoryRecordsNoOverview"
  },
  {
    title: "White Meat",
    image: whiteMeatImg,
    //items: ["Chicken", "Turkey"],
    items: ["Chicken", "..."],
    link: "/foodcategoryRecordsNoOverview"
  },
  {
    title: "Condiments",
    image: condimentsImg,
    //items: ["Soy Sauce", "Mayonnaise", "Herbal Dips"],
    items: ["Soy Sauce", "..."],
    link: "/foodcategoryRecordsNoOverview"
  },
  {
    title: "Treats/Snacks",
    image: treatsImg,
    //items: ["Chocolate"],
    items: ["Chocolate", "..."],
    link: "/foodcategoryRecordsNoOverview"
  }
];
