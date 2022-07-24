const mainEl = document.getElementById("categories");
console.log('Number of categories:', mainEl.children.length);
 

const itemElAll = mainEl.children
for (const item of itemElAll) {
//    console.log(item)
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild);
};
 
