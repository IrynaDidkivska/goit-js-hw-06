// ___.style.fontSize = "24px";

const onInputEl = document.querySelector('#font-size-control');
const spanTextEl = document.querySelector('#text');
const changeFontSize = () => { spanTextEl.style.fontSize = `${onInputEl.value}px` }

onInputEl.addEventListener('input',changeFontSize)

    

