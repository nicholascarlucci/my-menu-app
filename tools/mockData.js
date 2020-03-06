const meals = [
  {
    id: 1,
    title: "Chicken w/ Spinach",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "Low Carb"
  },
  {
    id: 2,
    title: "Tuna and Hard Boiled Eggs",
    slug: "react-big-picture",
    authorId: 1,
    category: "Protein Packed"
  },
  {
    id: 3,
    title: "Steak w/ Asparagus & Salad",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "Protein Packed"
  },
  {
    id: 4,
    title: "Salmon with Cauliflower Puree & Red Bean Salad",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 5,
    title: "Ratatouille",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "Vegitarian"
  },
  {
    id: 6,
    title: "Pork Tenderloin with Apple Puree & Brussel Sprouts",
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 7,
    title: "Fried Eggs with Bacon and Spinach",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices"
  },
  {
    id: 8,
    title: "Eggs Florentine",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture"
  },
  {
    id: 9,
    title: "Oatmeal",
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    category: "Career"
  },
  {
    id: 10,
    title: "Yogurt",
    slug: "web-components-shadow-dom",
    authorId: 1,
    category: "HTML5"
  }
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const newMeal = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newMeal,
  meals,
  authors
};
