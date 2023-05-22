const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const liArray = [];
ingredients.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add("item");
  liArray.push(li);
});
list.append(...liArray);
