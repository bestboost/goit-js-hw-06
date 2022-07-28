const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const containerForList = document.getElementById("ingredients");
const arrayForContainer = [];

ingredients.forEach((ingredient) => {

  const list = document.createElement("li");
  list.classList.add('item');
  list.textContent = `${ingredient}`;
  arrayForContainer.push(list);
  
})

containerForList.append(...arrayForContainer);
