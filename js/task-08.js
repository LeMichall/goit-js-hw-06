const form = document.querySelector(".login-form");
form.addEventListener("submit", submitHandler);

function submitHandler(evt) {
  evt.preventDefault();

  const {
    elements: { email, password },
  } = evt.currentTarget;
  const credentials = {
    email: email.value,
    password: password.value,
  };
  if (email.value === "" || password.value === "") {
    alert("All fields should be filled!");
    return;
  }
  console.log(credentials);
  evt.currentTarget.reset();
}
