// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
const handleInput = document.querySelector('#name-input');
const outputTextEl = document.querySelector('#name-output');

handleInput.addEventListener('input', onInputChange);


function onInputChange({target }) {
    console.log(target.value);
    // Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
    if (target.value === "") { 
       outputTextEl.textContent = 'Anonymous';
        return;
    }
   // підставляє його поточне значення в span#name - output.
    outputTextEl.textContent = target.value
 }
