const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

console.log(images);
// Напиши скрипт для створення галереї зображень на підставі масиву даних.
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. 

const galleryListEl = document.querySelector(".gallery");

const galleryItemMarkup = images
  .map(({ url, alt }) => `<li class="gallery-item"><img src="${url}" alt="${alt}" class="gallery-img"></li> `)
  .join("");
 // Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().
// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
galleryListEl.insertAdjacentHTML("afterbegin",galleryItemMarkup)





  // const imagesEl = images
  // .map(({ url, alt }) => {
//   const galleryItemEl = document.createElement("li");
//   galleryItemEl.classList.add("gallery-item");
  
//   const galleryImgEl = document.createElement("img");
//   galleryImgEl.classList.add("gallery-img");
//   galleryImgEl.src = url;
//   galleryImgEl.alt = alt;
//   galleryItemEl.append(galleryImgEl);

//   return galleryItemEl.outerHTML;
  
  // })
  // .join("")


// galleryListEl.insertAdjacentHTML("afterbegin",imagesEl)