const categoriesItems = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesItems.length);
categoriesItems.forEach((item) => {
  const title = item.querySelector("h2");
  const list = item.querySelector("ul");
  console.log("Category: ", title.textContent);
  console.log("Elements: ", list.childElementCount);
});
