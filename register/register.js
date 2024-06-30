const signUpButtonGhost = document.getElementById("signUp");
const signInButtonGhost = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButtonGhost.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButtonGhost.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

let emailReg =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let passwordReg =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
let fullNameReg = /^[A-Za-z]+ [A-Za-z]+$/;
let nameSignUpAlert = document.querySelector("#nameSignUpAlert");
let emailSignUpAlert = document.querySelector("#emailSignUpAlert");
let passwordSignUpAlert = document.querySelector("#passwordSignUpAlert");
let confirmSignUpAlert = document.querySelector("#confirmSignUpAlert");
let signUpButton = document.querySelector("#signUpButton");
let signUpName = document.querySelector("#signUpName");
let signUpEmail = document.querySelector("#signUpEmail");
let signUpPassword = document.querySelector("#signUpPassword");
let signUpConfirm = document.querySelector("#signUpConfirm");

function enableDisableButton() {
  if (emailFlag && passwordFlag && fullNameFlag) {
    signUpButton.disabled = false;
  } else {
    signUpButton.disabled = true;
  }
}

signUpName.addEventListener("input", () => {
  if (!fullNameReg.test(signUpName.value)) {
    nameSignUpAlert.textContent = "Invalid name, the name should be two parts";
    nameSignUpAlert.style.display = "inline";
    fullNameFlag = false;
  } else {
    nameSignUpAlert.textContent = "";
    nameSignUpAlert.style.display = "none";
    fullNameFlag = true;
  }
  enableDisableButton();
});

function checkPasswordMatch() {
  if (signUpPassword.value !== signUpConfirm.value) {
    confirmSignUpAlert.textContent = "Passwords do not match";
    confirmSignUpAlert.style.display = "inline";
    passwordFlag = false;
  } else {
    confirmSignUpAlert.textContent = "";
    confirmSignUpAlert.style.display = "none";
    passwordFlag = true;
  }
  enableDisableButton();
}

signUpPassword.addEventListener("input", () => {
  if (!passwordReg.test(signUpPassword.value)) {
    passwordSignUpAlert.textContent = "Invalid Password";
    passwordSignUpAlert.style.display = "inline";
    passwordFlag = false;
  } else {
    passwordSignUpAlert.textContent = "";
    passwordSignUpAlert.style.display = "none";
    passwordFlag = true;
  }
  enableDisableButton();
  checkPasswordMatch();
});

signUpConfirm.addEventListener("input", checkPasswordMatch);

signUpEmail.addEventListener("input", () => {
  if (!emailReg.test(signUpEmail.value)) {
    emailSignUpAlert.textContent = "Invalid Email";
    emailSignUpAlert.style.display = "inline";
    emailFlag = false;
  } else {
    emailSignUpAlert.textContent = "";
    emailSignUpAlert.style.display = "none";

    emailFlag = true;
  }
  enableDisableButton();
});

let arrayOfUsers = JSON.parse(window.localStorage.getItem("Users")) || [];
let id = arrayOfUsers.length + 1;

let emailFlag = false,
  passwordFlag = false,
  fullNameFlag = false;

let userObj = {};

signUpButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailFlag && passwordFlag && fullNameFlag) {
    console.log("hi");
    userObj = {
      id: id++,
      name: signUpName.value,
      email: signUpEmail.value,
      password: signUpPassword.value,
    };
    arrayOfUsers.push(userObj);
    window.localStorage.setItem("Users", JSON.stringify(arrayOfUsers));
    alert("Account created");
    // window.location = "../home page/homePage.html";
  } else {
    alert("Please fill out all fields correctly.");
  }
});

let btn = document.getElementById("signInButton");
let navgateToWelcome = false;
let signInAlert = document.querySelector("#signInAlert");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.getElementById("signInEmail").value;
  let password = document.getElementById("signInPassword").value;

  let userFound = false;

  for (let i = 0; i < arrayOfUsers.length; i++) {
    if (
      arrayOfUsers[i].email.value === email.value &&
      arrayOfUsers[i].password.value === password.value
    ) {
      userFound = true;
      window.sessionStorage.setItem("name", arrayOfUsers[i].FullName);
      window.sessionStorage.setItem("id", arrayOfUsers[i].id);
      window.location = "./welcome.html"; // put home page
      break;
    }
  }

  if (!userFound) {
    signInAlert.textContent = "Wrong Email or Password";
    signInAlert.style.display = "inline";
  }
});
