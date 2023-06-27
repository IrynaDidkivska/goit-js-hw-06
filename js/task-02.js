const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector("#ingredients");
const ingredientEl = ingredients.map((ingredient) => {
  const ingridientItemEl = document.createElement('li');
  ingridientItemEl.textContent = ingredient;
  ingridientItemEl.classList.add("item");
  return ingridientItemEl;
});

ingredientsListEl.append(...ingredientEl);





