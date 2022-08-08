// Задание 6

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

// const validBorderColor = document.querySelector('style');

// console.log(validBorderColor);
// const invalidBorderColor = document.querySelector(".invalid");


textInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
       
    const symbolLength = event.currentTarget.value;
 
    if (symbolLength.length === Number.parseInt(trueLengthNumber)) {
        console.log('true');
        console.log(input.classList.add('valid'));
    } else {
       
        console.log(input.classList.remove('invalid'));
    }
}