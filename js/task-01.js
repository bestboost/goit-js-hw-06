const mainEl = document.getElementById("categories");
console.log('Number of categories:', mainEl.children.length);

const itemElAll = mainEl.children

for (const item of itemElAll) {

    console.log('Category:', item.firstElementChild.textContent);

    const elements = item.lastElementChild
    console.log('Elements:', elements.children.length);
};

