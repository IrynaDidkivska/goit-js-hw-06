
const onInputEl = document.querySelector('#validation-input');

onInputEl.addEventListener('blur', symbolCheck);

function symbolCheck(event) {
    const { target: { value, dataset, classList } } = event;
    const inputValueLength = value.length;
    console.dir(value);
    const expectedLength = Number(dataset.length);
        console.dir(dataset);
    if (inputValueLength === expectedLength) {
       classList.add("valid");
        classList.remove("invalid");
    } else {
        classList.remove("valid");
        classList.add( "invalid");
    }
}
