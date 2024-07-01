let form = document.querySelector(".half");
let fullName = document.querySelector(".inputFullName")
let email = document.querySelector(".inputEmail")
let password = document.querySelector(".inputpassword")
let checkBox = document.querySelector(".checkBox")
let validFullName = document.querySelector(".fullNameValidation")
let validEmail = document.querySelector(".emailValidation")
let validPassword = document.querySelector(".passwordValidation")
let validCheckBox = document.querySelector(".checkBoxValidation")
let submitBtn = document.querySelector(".submit")
let emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
let phoneReg = /^077\d{7}$/;
let fullNameReg = /^[A-Za-z]+ [A-Za-z]+$/;
let arrayOfUsers = JSON.parse(window.localStorage.getItem("Users")) || [];
let id = arrayOfUsers.length + 1;
let emailFlag = false, passwordFlag = false, fullNameFlag = false, checkFlag = false
let userObj = {};
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
    enabelDisableButton();
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
    enabelDisableButton();
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
    enabelDisableButton();
    // isPasswordEqual();
});
// Checkbox1 validation
checkBox.addEventListener("change", (e) => {
    if (e.target.checked) {
        validCheckBox.textContent = " ";
        checkFlag = true;
    } else {
        validCheckBox.textContent = "Required ";
        checkFlag = false;
        submitBtn.disabled = true;
        validCheckBox.style.color = "red";
        validCheckBox.style.fontSize = "15px";
        validCheckBox.style.fontWeight = "0";
    }
    enabelDisableButton();
});

function enabelDisableButton() {
    if (emailFlag && passwordFlag && fullNameFlag && validCheckBox)
        submitBtn.disabled = false;
    else
        submitBtn.disabled = true;
}
window.location = "";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (emailFlag && passwordFlag && fullNameFlag && validCheckBox) {
        userObj = {
            id: id++,
            fullName: fullName.value,
            email: email.value,
            password: password.value,
        }
        arrayOfUsers.push(userObj);
        window.localStorage.setItem("Users", JSON.stringify(arrayOfUsers));
        alert("Account created");
        window.location = "../";
    } else {
        alert("Please fill out all fields correctly.");
    }
});