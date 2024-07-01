let form = document.querySelector(".form");
let fullName = document.querySelector("#inputFullName");
let email = document.querySelector("#Email");
let password = document.querySelector("#CreatePassword");
let passwordConfirm = document.querySelector("#ConfirmPassword");
let checkBox = document.querySelector("#checkBox");
let validFullName = document.querySelector("#alertFullName");
let validEmail = document.querySelector("#alertEmail");
let validPassword = document.querySelector("#alertPassword");
let validPasswordConfirm = document.querySelector("#alertConfirm");
let validCheckBox = document.querySelector(".checkBoxValidation");
let submitBtn = document.querySelector("#button");

let emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
let fullNameReg = /^[A-Za-z]+ [A-Za-z]+$/;

let arrayOfUsers = JSON.parse(window.localStorage.getItem("Users")) || [];
let id = arrayOfUsers.length + 1;

let emailFlag = false, passwordFlag = false, fullNameFlag = false, checkFlag = false;

let userObj = {};
console.log(fullName)
// Full name validation
fullName.addEventListener("input", () => {
    if (!fullNameReg.test(fullName.value)) {
        validFullName.textContent = "Invalid name, the name should be two parts";
        validFullName.style.color = "red";
        validFullName.style.fontSize = "15px";
        fullNameFlag = false;
    } else {
        validFullName.textContent = "";
        fullNameFlag = true;
    }
    enableDisableButton();
});

// Email validation
email.addEventListener("input", () => {
    if (!emailReg.test(email.value)) {
        validEmail.textContent = "Invalid Email";
        validEmail.style.color = "red";
        validEmail.style.fontSize = "15px";
        emailFlag = false;
    } else {
        validEmail.textContent = "";
        emailFlag = true;
    }
    enableDisableButton();
});

// Password validation
password.addEventListener("input", () => {
    if (!passwordReg.test(password.value)) {
        validPassword.textContent = "Invalid Password";
        validPassword.style.color = "red";
        validPassword.style.fontSize = "15px";
        passwordFlag = false;
    } else {
        validPassword.textContent = "";
        passwordFlag = true;
    }
    enableDisableButton();
    checkPasswordMatch();
});

// Confirm password validation
passwordConfirm.addEventListener("input", checkPasswordMatch);

function checkPasswordMatch() {
    if (password.value !== passwordConfirm.value) {
        validPasswordConfirm.textContent = "Passwords do not match";
        validPasswordConfirm.style.color = "red";
        validPasswordConfirm.style.fontSize = "15px";
        passwordFlag = false;
    } else {
        validPasswordConfirm.textContent = "";
        passwordFlag = true;
    }
    enableDisableButton();
}

// Checkbox validation
checkBox.addEventListener("change", (e) => {
    if (e.target.checked) {
        validCheckBox.textContent = "";
        checkFlag = true;
    } else {
        validCheckBox.textContent = "Required";
        validCheckBox.style.color = "red";
        validCheckBox.style.fontSize = "15px";
        checkFlag = false;
    }
    enableDisableButton();
});

function enableDisableButton() {
    if (emailFlag && passwordFlag && fullNameFlag && checkFlag) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (emailFlag && passwordFlag && fullNameFlag && checkFlag) {
        userObj = {
            id: id++,
            fullName: fullName.value,
            email: email.value,
            password: password.value,
        }
        arrayOfUsers.push(userObj);
        window.localStorage.setItem("Users", JSON.stringify(arrayOfUsers));
        alert("Account created");
        // window.location = "../home page/homePage.html";
    } else {
        alert("Please fill out all fields correctly.");
    }
});
