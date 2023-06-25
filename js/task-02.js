const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
//Напиши скрипт, який для кожного елемента масиву ingredients:



const ingredientsListEl = document.querySelector("#ingredients");
 // Розбере поелементно масив ingredients
const ingredientEl = ingredients.map((ingredient) => {
  // Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
  const ingridientItemEl = document.createElement('li');
  // Додасть назву інгредієнта як його текстовий вміст.
  ingridientItemEl.textContent = `${ingredient}`;
  // Додасть елементу клас item.
  ingridientItemEl.classList.add("item");
  // Після чого, вставить усі <li> за одну операцію у список ul#ingredients.  
  ingredientsListEl.append(ingridientItemEl);
  
});
// console.log(ingredientsListEl);




