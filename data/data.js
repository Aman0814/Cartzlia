import productOne from "../src/image/grocery01.png";
import productTwo from "../src/image/grocery02.png";
import productThree from "../src/image/grocery03.png";
import productFour from "../src/image/grocery04.png";
import productFive from "../src/image/grocery05.svg";
import productSix from "../src/image/grocery06.png";
import productSeven from "../src/image/grocery07.png";
import productEight from "../src/image/grocery08.png";
import recipeOne from "../src/image/grocery09.png";
import recipeTwo from "../src/image/grocery10.png";
import recipeThree from "../src/image/grocery11.png";

export const categories = [
  { icon: "🥖", name: "Bakery & bread", count: "234 products" },
  { icon: "🥬", name: "Vegetables", count: "180 products" },
  { icon: "🍎", name: "Fresh fruits", count: "205 products" },
  { icon: "🥩", name: "Meat Italian dinner", count: "305 products" },
  { icon: "🥤", name: "Beverages", count: "372 products" },
  { icon: "🥓", name: "Meat products", count: "125 products" },
  { icon: "🫙", name: "Sauces and ketchup", count: "215 products" },
  { icon: "🥚", name: "Dairy and eggs", count: "145 products" }
];

export const products = [
  {
    image: productOne,
    price: "$2.15",
    name: "Muesli Fitness Energy, gluten free",
    unit: "500g"
  },
  {
    image: productTwo,
    price: "$3.12",
    name: "Fresh orange Klementina, Spain",
    unit: "1kg",
    sale: true
  },
  {
    image: productThree,
    price: "$0.80",
    name: "Pepsi cola classic, can",
    unit: "330ml"
  },
  {
    image: productFour,
    price: "$2.99",
    name: "Mozzarella mini cheese",
    unit: "250g"
  },
  {
    image: productFive,
    price: "$1.24",
    name: "Coconut, Indonesia",
    unit: "1 pc"
  },
  {
    image: productSix,
    price: "$3.95",
    name: "Pesto sauce Barilla with parmesan",
    unit: "200g"
  },
  {
    image: productSeven,
    price: "$1.99",
    name: "Fresh mango, Spain",
    unit: "1 mango"
  },
  {
    image: productEight,
    price: "$2.40",
    name: "Fresh green asparagus",
    unit: "300g"
  }
];

export const lifestyle = [
  { icon: "🌱", title: "Gluten-Free", text: "Foods that don't contain gluten" },
  { icon: "🥦", title: "Vegan", text: "Vegetable based goodness" },
  { icon: "🍃", title: "Plant based", text: "Based on plant ingredients" },
  { icon: "🥚", title: "Keto", text: "Good fats served in food" }
];

export const recipes = [
  {
    image: recipeOne,
    title: "Garden salad with a mix of lettuce, cucumber and tomato",
    time: "30 min",
    servings: "4 por"
  },
  {
    image: recipeTwo,
    title: "Raspberry fresh lemonade with lemon, strawberry syrup and mint",
    time: "50 min",
    servings: "8 por"
  },
  {
    image: recipeThree,
    title: "Penne pasta with spinach and zucchini in a creamy sauce",
    time: "25 min",
    servings: "2 por"
  }
];

export const footerColumns = [
  ["Categories", "Weekly sale", "Special price", "Easter is coming", "Italian dinner", "Fresh fruits", "Exotic fruits"],
  ["Company", "Blog and news", "About us", "FAQ page", "Contact us", "Careers"],
  ["Account", "Your account", "Shipping & policies", "Refunds & replacements", "Order tracking", "Delivery info", "Taxes & fees"],
  ["Customer service", "Payment methods", "Money back guarantee", "Refunds & replacements", "Order tracking", "Delivery info", "Shipping"]
];