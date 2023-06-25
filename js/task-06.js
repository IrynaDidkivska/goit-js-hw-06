
const onInputEl = document.querySelector('#validation-input');

onInputEl.addEventListener('blur', symbolCheck);

function symbolCheck({ target }) {
    const inputValueLength = target.value.length;
    const expectedLength = Number(target.dataset.length);
    if (inputValueLength === expectedLength) {
        target.classList.add("valid");
        target.classList.remove("invalid");
    } else {
        target.classList.remove("valid");
        target.classList.add( "invalid");
    }
}
