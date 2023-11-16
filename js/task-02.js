const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

const newArr = [];

ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");

  listItem.textContent = ingredient;

  listItem.classList.add("item");

  newArr.push(listItem)
  
});

ingredientsList.append(...newArr);