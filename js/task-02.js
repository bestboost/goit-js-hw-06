// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
for (const ingredient of ingredients) {

const list = document.createElement("li");
list.textContent = `${ingredient}`;
list.classList.add('item');
console.log(list); 
}
const containerForList = document.getElementById("ingredients");
// console.log(containerForList);
containerForList.after(list);

