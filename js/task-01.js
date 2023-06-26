const categoriesEl = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((element) => {
  const title = element.querySelector("h2");
  const item = element.querySelectorAll("ul li");
    console.log(`Category: ${title.textContent} 
Elements: ${item.length}`);
});


//Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item
// const categoriestEl = document.querySelectorAll(".item");

// console.log(`Number of categories: ${categoriestEl.length}`);

//Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента

// categoriestEl.forEach((element) => console.log(`Category: ${element.firstElementChild.textContent}
// Elements: ${element.lastElementChild.children.length}`));  


