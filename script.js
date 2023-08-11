let colors = ["black", "green", "yellow", "#CA8A4B", "rgba(133,122,200)"];

let changeColorBtn = document.querySelector("#change-color-btn");
let colorValue = document.querySelector("#color");

changeColorBtn.addEventListener("click", changeBgColor);

function changeBgColor() {
  document.body.style.backgroundColor = `${getRandomColor(5)}`;
}

function getRandomColor(max) {
  let randomNumber = Math.floor(Math.random() * max);
  let color = colors[randomNumber];

  return color;
}
