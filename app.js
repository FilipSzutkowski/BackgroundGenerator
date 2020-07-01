const body = document.querySelector(`body`);
const colorPickerOne = document.querySelector(`.colorOne`);
const colorPickerTwo = document.querySelector(`.colorTwo`);
const css = document.querySelector(`.css`);
const h1 = document.querySelector(`h1`);
const degree = document.querySelector(`.degree`);
const typeLinear = document.querySelector(`#linear`);
const typeRadial = document.querySelector(`#radial`);
const newColors = document.querySelector(`.newColors`);

let defaultDegree = `90`;

window.addEventListener(`load`, startUp);
newColors.addEventListener(`click`, startUp);

function startUp() {
    colorPickerOne.value = getRandomColor();
    colorPickerTwo.value = getRandomColor();
    degree.value = defaultDegree;

    changeBackgroundColor();
    colorPickerOne.addEventListener(`input`, changeBackgroundColor);
    colorPickerTwo.addEventListener(`input`, changeBackgroundColor);
    degree.addEventListener(`input`, changeDegree);
}

function changeBackgroundColor () {
    body.style.background =
    `linear-gradient(` + degree.value + `deg, ` 
    + colorPickerOne.value 
    + `, ` 
    + colorPickerTwo.value 
    + `)` + `no-repeat center center fixed`;
    h1.style.color = getRandomColor();
}

function changeDegree () {
    body.style.background =
    `linear-gradient(` + degree.value + `deg, ` 
    + colorPickerOne.value 
    + `, ` 
    + colorPickerTwo.value 
    + `)` + `no-repeat center center fixed`;    
}

function getRandomColor() {
    let letters = `0123456789ABCDEF`;
    let color = `#`;
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }