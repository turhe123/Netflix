// Redirect to login.html if not logged in and trying to access index.html
if (
  window.location.pathname.includes("index.html") &&
  localStorage.getItem("loggedIn") !== "true"
) {
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function () {
  // ======= LOGIN HANDLING =======
  const form = document.getElementById("login-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username && password) {
        // Save login state and redirect
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
      } else {
        alert("Enter both fields.");
      }
    });
  }

  // ======= THEME TOGGLER =======

  // Apply saved theme on load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
  }

  // Handle theme toggle button
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      // Toggle theme class
      document.body.classList.toggle("light");

      // Save new preference
      const newTheme = document.body.classList.contains("light") ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
    });
  }
});
