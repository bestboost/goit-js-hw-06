const counterButtons = document.getElementById('counter')

const valueButton = document.getElementById('value');
 let counterValue = 0;

const decrementButton = counterButtons.firstElementChild;
const incrementButton = counterButtons.lastElementChild

decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    valueButton.innerHTML = counterValue;
}); 
incrementButton.addEventListener('click', () => {
    counterValue += 1;
    valueButton.innerHTML = counterValue;
}); 
