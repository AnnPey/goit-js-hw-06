const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = this.elements.email.value;
  const password = this.elements.password.value;
  const credentials = {
    email: email,
    password: password,
  };

  if (email.trim() === "" || password.trim() === "") {
    alert("Please fill all the fields");
  // } else if (email !== "example@example.com" || password !== "password") {
  //   alert("Incorrect data");
  } else {
    alert("Success");
    console.log(credentials);
    
  }
});

