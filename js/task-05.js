const inputNamePlace = document.querySelector('#name-input');

const outputName = document.querySelector('#name-output');

inputNamePlace.addEventListener("input", (event) =>
{
    outputName.textContent = event.currentTarget.value;
});

