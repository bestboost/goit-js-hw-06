// // Задание 4
// // Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать
//  и уменьшать его значение на единицу.

// // <div id="counter">
// //   <button type="button" data-action="decrement">-1</button>
// //   <span id="value">0</span>
// //   <button type="button" data-action="increment">+1</button>
// // </div>
// // Создай переменную counterValue в которой будет храниться текущее значение
//  счетчика и инициализируй её значением 0.
// // Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай
// значение счтетчика.
// // Обновляй интерфейс новым значением переменной counterValue.

const counterButtons = document.getElementById('counter')

const decrementButton = counterButtons.firstElementChild;
const incrementButton = counterButtons.lastElementChild
console.log(decrementButton);
console.log(incrementButton);

// const decrementButton = counterButton[0].dataset.action;
// const incrementButton = counterButton[1].dataset.action;

decrementButton.addEventListener('click', () => {
    console.log('- Klik');
}); 
incrementButton.addEventListener('click', () => {
    console.log('+ Klik');
}); 