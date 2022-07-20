const mainEl = document.querySelector('ul');
console.log('Number of categories:', mainEl.children.length);

// const itemList = mainEl.children;

// const itemElAll = mainEl.querySelector('.item');
// console.log(itemElAll.firstElementChild.textContent);

const categoryEl = mainEl.querySelector('.item');
console.log('Category:', categoryEl.firstElementChild.textContent);

const sumEl = categoryEl.querySelectorAll('li');
console.log('Elements:', sumEl.length);
