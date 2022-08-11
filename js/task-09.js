const spanBackgroundColor = document.querySelector(".color");

const changeColorButton = document.querySelector(".change-color");

changeColorButton.addEventListener('click', onBodyColor);

function onBodyColor () {
  document.body.style.backgroundColor = getRandomHexColor();
  spanBackgroundColor.innerHTML = ("beforeend",'-', getRandomHexColor());
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`; 
}


