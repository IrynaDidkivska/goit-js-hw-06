function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumberEl = document.querySelector('input');
const createBtnHandler = document.querySelector('[data-create]');
const destroyBtnHandler = document.querySelector('[data-destroy]');
const boxesMain = document.querySelector('#boxes');
let valueSize = 20; 
const boxElements = [];

createBtnHandler.addEventListener('click', onClickCreate)

function createBoxes(amount) {
   
  for (let i = 0; i < amount; i++ ) {
    const boxDivEl = document.createElement("div");
     valueSize += 10;
    boxDivEl.style.width = `${valueSize}px`;
    boxDivEl.style.height = `${valueSize}px`;
    boxDivEl.style.backgroundColor = getRandomHexColor(); 
    boxElements.push(boxDivEl);
  }
 boxesMain.append(...boxElements);
  return boxesMain;
}

function onClickCreate() {
  const value = inputNumberEl.value;
  boxesMain.innerHTML = "";
  createBoxes(value);
}

destroyBtnHandler.addEventListener('click',destroyBoxes)
function destroyBoxes() { 
  boxesMain.innerHTML = "";
  inputNumberEl.value = "";
}

