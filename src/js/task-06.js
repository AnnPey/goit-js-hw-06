const inputField = document.querySelector("#validation-input");

inputField.addEventListener("blur", () => {
  const requiredLength = parseInt(inputField.getAttribute("data-length"), 10);
  const inputLength = inputField.value.length;

  if (inputLength === requiredLength) {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
  } else {
    inputField.classList.remove("valid");
    inputField.classList.add("invalid");
  }
});