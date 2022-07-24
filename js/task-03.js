// -  Напиши скрипт для создания галереи изображений
//  по массиву данных.В HTML есть список ul.gallery.
//  <ul class="gallery"></ul>
// -   Используй массив объектов images для создания
//   элементов < img > вложенных в < li >.
// -    Для создания разметки используй шаблонные 
//   строки и метод insertAdjacentHTML().

// -  Все элементы галереи должны добавляться в 
// DOM за одну операцию вставки.
// -  Добавь минимальное оформление галереи
//  флексбоксами или гридами через CSS классы.



const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const refs = {
  list: document.querySelector('.gallery')
};

const listItemsImages = createListItemsImages(images);

// refs.list.insertAdjacentHTML() = listItemsImages;

console.log(listItemsImages);

function createListItemsImages(items) {
  return items.map(item => `<li>${item.url}, ${item.alt}</li>`).join('');
}

// const listImagesAttribute = createListImagesAttribute(images); 
// const listImg = listImagesAttribute;

// listImagesAttribute.innerHTML("beforeend", listImg);

// function createListImagesAttribute(items) { 
//   return items.map(item => `<li>${item.url}, ${ item.alt } </li>`).join('')
// }
   
//   console.log (listImagesAttribute);

  


// const listImg = document.createElement("li");
// console.log(listImg); 

// const image = document.createElement("img");
// listImg.image = 
//  `${ image.url }, 
// ${ image.alt }`;
// console.log(image);

// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");