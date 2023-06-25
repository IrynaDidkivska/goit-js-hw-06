function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Напиши скрипт, який змінює кольори фону елемента <body> 
// через інлайн - стиль по кліку на button.change - color і 
// виводить значення кольору в span.color.
const onBtnChangeColor = document.querySelector('.change-color');
const spanText = document.querySelector('.color');
const body = document.querySelector('body');

onBtnChangeColor.addEventListener('click',backgroundColor)

function backgroundColor(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanText.textContent = color;
}