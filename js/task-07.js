const fontSizeControl = document.querySelector("#font-size-control");
const fontSizeText = document.querySelector("#text");

fontSizeControl.addEventListener("input", event => {
     fontSizeText.style.fontSize = event.currentTarget.value + 'px';
  
});







