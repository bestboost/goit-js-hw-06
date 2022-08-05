// Задание 5
// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет
// его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться
// строка "Anonymous".

// < input type = "text" id = "name-input"
// placeholder = "Please enter your name" />
//     <h1>Hello, <span id="name-output">Anonymous
//     </span>!</h1>

const inputNamePlace = document.querySelector('#name-input');
console.log(inputNamePlace);

const outputNamePlace = document.querySelector('#name-output');
console.log(outputNamePlace);

inputNamePlace.addEventListener('input', onInputEvent);
outputNamePlace.addEventListener('output', onOutputEvent);

function onInputEvent(event) {
    const inputNameLetters = event.data
    console.log(inputNameLetters);
}

function onOutputEvent(events) {
    console.log(events);
}

// конспект input