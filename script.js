let colors = ["black", "green", "yellow", "#CA8A4B", "rgba(133,122,200)"];
let maxNumber = colors.length;

let changeColorBtn = document.querySelector("#change-color-btn");
let colorValue = document.querySelector("#color");

changeColorBtn.addEventListener("click", changeBgColor);

function changeBgColor() {
  document.body.style.backgroundColor = `${getRandomHex()}`;
}

/*function getRandomColor(max) {
  let randomNumber = Math.floor(Math.random() * max);
  let color = colors[randomNumber];

  changeColorValue(color);

  return color;
}

function changeColorValue(color) {
  colorValue.innerHTML = `${color}`;
}  */

function getRandomHex() {
  let letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += letters[Math.floor(Math.random() * 16)];
  }
  return hexColor;
}
