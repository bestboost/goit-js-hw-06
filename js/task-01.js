const mainEl = document.querySelector('ul');
console.log('Number of categories:', mainEl.children.length);

const itemList = mainEl.children;
console.log(itemList);  


const itemElAll = itemList.map(item => item());
console.log(itemElAll);

const categoryEl = mainEl.querySelector('.item');
console.log('Category:', categoryEl.firstElementChild.textContent);

const sumEl = categoryEl.querySelectorAll('li');
console.log('Elements:', sumEl.length);
