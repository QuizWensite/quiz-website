function handleLogoutClick()
{
    window.location.href =  "../register/register.html";
}


document.addEventListener("DOMContentLoaded", () => {

if (sessionStorage.getItem("id") && sessionStorage.getItem("name")) {
  document.querySelector("#loginLogout").textContent = "Log Out";
  document.querySelector("#loginLogout").addEventListener("click", () => {
    sessionStorage.clear();
    location.reload();
  });
} else {
  document.querySelector("#loginLogout").textContent = "Log In";
  document.querySelector("#loginLogout").addEventListener("click", () => {
    window.location = "../register/register.html";
})}
});
