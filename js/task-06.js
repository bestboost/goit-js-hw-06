const textInput = document.querySelector("#validation-input");

const trueLength = document.querySelector('[data-length="6"]');
const trueLengthNumber = trueLength.dataset.length;    

textInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
       
    const symbolLength = event.currentTarget.value;
   
    if (symbolLength.length === Number.parseInt(trueLengthNumber)) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.add('invalid')
        textInput.classList.remove('valid');
    }
    
   }
