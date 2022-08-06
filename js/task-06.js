// Задание 6
// Напиши скрипт, который при потере фокуса на
// инпуте(событие blur), проверяет его содержимое
// на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
//     Сколько символов должно быть в инпуте, указывается
// в его атрибуте data - length.
// Если введено подходящее количество символов,
//     то border инпута становится зелёным, если
// неправильное - красным.
// Для добавления стилей, используй CSS - классы valid
// и invalid, которые мы уже добавили в исходные файлы
// задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const textInput = document.querySelector("#validation-input");
const trueLength = document.querySelector('[data-length="6"]');
    
const trueLengthNumber = trueLength.dataset.length;    
console.log(trueLengthNumber);

const validBorderColor = document.querySelector(".valid");
const invalidBorderColor = document.querySelector(".invalid");

textInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    console.log('событие blur');
   
    const symbolLength = event.currentTarget.value;
    console.log(event.currentTarget.value);
    console.log(symbolLength.length);

    if (symbolLength.length === trueLengthNumber (НАДО ПРИВЕСТИ К ЧИСЛУ)) {
        console.log('true');
    } else {
       
        console.log('false');
    }
}