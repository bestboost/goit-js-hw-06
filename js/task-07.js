// Задание 7
// Напиши скрипт, который реагирует на изменение
// значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя
// свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.

// < input id = "font-size-control" type = "range"
// min = "16" max = "96" />
// <br />
// <span id="text">Abracadabra!</span>

const fontSizeControl = document.querySelector("input#font-size-control");
console.log(fontSizeControl);
const fontSize = document.querySelector("span#text");
console.dir(fontSize);

fontSizeControl.addEventListener("change", setOutput);

fontSize.addEventListener("input", (event) => {
    fontSize.textContent = event.currentTarget.value;
    fontSize.textContent = event.style.fontSize;
});

function setOutput() {
    const rangeMin = fontSizeControl.min;
    console.log(rangeMin);
  
    const rangeMax = fontSizeControl.max;
    console.log(rangeMax);

};
