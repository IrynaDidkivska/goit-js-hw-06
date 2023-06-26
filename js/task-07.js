// ___.style.fontSize = "24px";

const onInputEl = document.querySelector('#font-size-control');
const spanTextEl = document.querySelector('#text');
const changeFontSize = ( {target}) => { spanTextEl.style.fontSize = `${target.value}px` }

onInputEl.addEventListener('input',changeFontSize)

    

