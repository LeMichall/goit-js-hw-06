const input = document.querySelector("#validation-input");

console.log(input.dataset.length);
input.addEventListener("blur", (e) => {
  console.log(e.currentTarget.value.length);
  if (e.currentTarget.value.length >= input.dataset.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
