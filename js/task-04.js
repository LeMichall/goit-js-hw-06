let counterValue = 0;
let counter = document.querySelector("#value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
btnDecrement.addEventListener("click", () => {
  counterValue--;
  counter.textContent = counterValue;
});
btnIncrement.addEventListener("click", () => {
  counterValue++;

  counter.textContent = counterValue;
});
