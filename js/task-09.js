function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorName = document.querySelector(".color");
const btn = document.querySelector(".change-color");
console.log(btn);
btn.addEventListener("click", colorChange);

function colorChange(color) {
  color = getRandomHexColor();
  console.log(color);
  document.body.style.backgroundColor = color;
  colorName.textContent = color;
}
