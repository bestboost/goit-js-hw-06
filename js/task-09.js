const spanBackgroundColor = document.querySelector(".color");

const changeColorButton = document.querySelector(".change-color");

changeColorButton.addEventListener('click', onBodyColor);

function onBodyColor() {
  const colorChangerFunction = getRandomHexColor();
  document.body.style.backgroundColor = colorChangerFunction;
  spanBackgroundColor.innerHTML = ("beforeend", colorChangerFunction);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`; 
   
}





