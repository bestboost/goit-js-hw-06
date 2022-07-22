const mainEl = document.getElementById("categories");
console.log('Number of categories:', mainEl.children.length);


const itemElAll = mainEl.children 
console.log(itemElAll);

//     const newArray = [];
// itemElAll.forEach(itemEl => {
//   newArray.push(itemEl);
// });
// // console.log(newArray);

    const categoryEl = mainEl.querySelector('.item');
    console.log('Category:', categoryEl.firstElementChild.textContent);

    const sumEl = categoryEl.querySelectorAll('li');
    console.log('Elements:', sumEl.length);

