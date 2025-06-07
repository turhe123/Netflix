// If on home page and not logged in, redirect to login
if (window.location.pathname.includes("index.html") && localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username && password) {
        // Simulate successful login
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
      } else {
        alert("Enter both fields.");
      }
    });
  }
  const themeBtn = document.getElementById("theme-toggle");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
  });
}

});