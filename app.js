const body = document.querySelector(`body`);
const colorPickerOne = document.querySelector(`.colorOne`);
const colorPickerTwo = document.querySelector(`.colorTwo`);
const css = document.querySelector(`.css`);
const h1 = document.querySelector(`h1`);
let defaultColorOne = `#00240b`
let defaultColorTwo = `#587901`

window.addEventListener(`load`, startUp);

function startUp() {
    colorPickerOne.value = defaultColorOne;
    colorPickerTwo.value = defaultColorTwo;

    changeBackgroundColor();
    colorPickerOne.addEventListener(`input`, changeBackgroundColor)
    colorPickerTwo.addEventListener(`input`, changeBackgroundColor)
}

function changeBackgroundColor () {

    body.style.background =
    "linear-gradient(to right, " 
    + colorPickerOne.value 
    + ", " 
    + colorPickerTwo.value 
    + ")";
    h1.style.color = getRandomColor();
    css.textContent = body.style.background + ";";
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }