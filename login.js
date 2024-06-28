//move variables inside the function when running the real thing
let emailLoginInput = "osama@gmail.com";
let passLoginInput = "11111!qQ";

function checkCreds(e) {
  e.preventDefault();
  let users = localStorage.getItem("users");
  users = JSON.parse(users);
  let found = false;
  for (let i = 0; i < users.length; i += 1) {
    if (
      emailLoginInput === users[i].email &&
      passLoginInput === users[i].password
    ) {
      sessionStorage.setItem("id", `${users[i].id}`);
      sessionStorage.setItem("name", `${users[i].name}`);
      found = true;
      console.log(users[i]);
      break;
    }
  }
  if (found) {
    window.location = "http://127.0.0.1:5500/JS/3/page.html";
  } else {
    alert("wrong email or password");
  }
}
