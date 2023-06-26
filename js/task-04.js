// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
let counterValue = 0;
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
const onDecrementBtn = document.querySelector('[data-action="decrement"]');
const onIncrementBtn = document.querySelector('[data-action="increment"]');
const updateValueUI = document.querySelector('#value');

onDecrementBtn.addEventListener('click', updateCounter);

onIncrementBtn.addEventListener('click', updateCounter);

function updateCounter({ target: { dataset} }) { 
    if (dataset.action === "decrement") {
        counterValue -= 1;
    }
    else {
          counterValue += 1;
    }
    updateValueUI.textContent = counterValue;
}


