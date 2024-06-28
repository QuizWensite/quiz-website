//move variables inside the function when running the real thing
let emailSignUpInput = "osama@gmail.com";
let passSignUpInput = "11111!qQ";
let nameSignUpInput = "Osama Alhyari";
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function checkValid() {
  // runs whenever a change in sign up form is made.
  // if everything is fine, Sign up button becomes clickable (enabled).
  if (
    emailPattern.test(emailSignUpInput) &&
    passwordPattern.test(passSignUpInput) &&
    checkBox.checked
  ) {
    // signUpButton.removeAttribute("disabled");
    console.log("user signed up");
  } else {
    // signUpButton.disabled = "true";
    console.log("user cant sign up");
  }
}

function passwordCorrect() {
  // showing errors until password is strong
  // runs on every change in email sign up input
  let errorMessage = document.querySelector("#errPass"); // error message span should have #errPass as ID
  let capitalLetterPattern = /[A-Z]/;
  let lowerLetterPattern = /[a-z]/;
  let numberPattern = /\d/;
  let symbolPattern = /[!@#$%^&*(),.?":{}|<>]/;
  if (passSignUpInput.length < 8) {
    errorMessage.textContent = "Password must be 8 characters long";
  } else if (!capitalLetterPattern.test(passSignUpInput)) {
    errorMessage.textContent = "Password must contain a capital letter";
  } else if (!lowerLetterPattern.test(passSignUpInput)) {
    errorMessage.textContent = "Password must contain a lower letter";
  } else if (!numberPattern.test(passSignUpInput)) {
    errorMessage.textContent = "Password must contain a number";
  } else if (!symbolPattern.test(passSignUpInput)) {
    errorMessage.textContent = "Password must contain a special character";
  } else {
    errorMessage.textContent = "";
  }
}

function emailCorrect() {
  // showing errors until email is valid
  // runs on every change in email sign up input
  let errorMessage = document.querySelector("#errEmail"); // error message span should have #errEmail as ID
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailPattern.test(emailSignUpInput)) {
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Please enter a valid email";
  }
}
