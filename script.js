let colors = ["black", "green", "yellow", "#CA8A4B", "rgba(133,122,200)"];
let maxNumber = colors.length;

let changeColorBtn = document.querySelector("#change-color-btn");
let colorValue = document.querySelector("#color");

changeColorBtn.addEventListener("click", changeBgColor);

function changeBgColor() {
  document.body.style.backgroundColor = `${getRandomColor(maxNumber)}`;
}

function getRandomColor(max) {
  let randomNumber = Math.floor(Math.random() * max);
  let color = colors[randomNumber];

  changeColorValue(color);

  return color;
}

function changeColorValue(color) {
  colorValue.innerHTML = `${color}`;
}
