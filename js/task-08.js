
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = this.elements.email.value;
  const password = this.elements.password.value;

  if (email.trim() === "" || password.trim() === "") {
   return alert("Please fill all the fields");
  } 

  const userData = {
    email: email,
    password: password,
  };

  console.log(userData);
  event.target.reset()

});


