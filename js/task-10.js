function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumberEl = document.querySelector('input');
const createBtnHandler = document.querySelector('[data-create]');
const destroyBtnHandler = document.querySelector('[data-destroy]');
const boxesMain = document.querySelector('#boxes');


createBtnHandler.addEventListener('click', onClickCreate)

function createBoxes(amount) {
   let valueSize = 20; 
  for (let i = 0; i < amount; i++ ) {
    const boxDivEl = document.createElement("div");
     valueSize += 10;
    boxDivEl.style.width = `${valueSize}px`;
    boxDivEl.style.height = `${valueSize}px`;
    boxDivEl.style.backgroundColor = getRandomHexColor();
    boxesMain.append(boxDivEl);
  }
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

