let colors = ["black", "green", "yellow", "#CA8A4B", "rgba(133,122,200)"];

let changeColorBtn = document.querySelector("#change-color-btn");
let colorValue = document.querySelector("#color");

let simpleLink = document.querySelector("#simple");
let hexLink = document.querySelector("#hex");

hexLink.addEventListener("click", selectHexVersion);
simpleLink.addEventListener("click", selectSimpleVersion);
changeColorBtn.addEventListener("click", changeBgColor);

function selectHexVersion() {
  hexLink.classList.add("active");
  simpleLink.classList.remove("active");
}
function selectSimpleVersion() {
  hexLink.classList.remove("active");
  simpleLink.classList.add("active");
}

function changeBgColor() {
  hexLink.className == "active"
    ? (document.body.style.backgroundColor = `${getRandomHex()}`)
    : (document.body.style.backgroundColor = `${getRandomColor()}`);
}

function getRandomHex() {
  let letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    let maxNumber = letters.length;
    let randomNumber = getRandomNumber(maxNumber);

    hexColor += letters[randomNumber];
  }

  changeColorValue(hexColor);

  return hexColor;
}

function getRandomColor() {
  let randomNumber = getRandomNumber(colors.length);
  let color = colors[randomNumber];

  changeColorValue(color);

  return color;
}

function getRandomNumber(max) {
  let randomNumber = Math.floor(Math.random() * max);
  return randomNumber;
}

function changeColorValue(color) {
  colorValue.innerHTML = `${color}`;
}
