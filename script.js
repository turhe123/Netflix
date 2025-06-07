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

  // ======= MOVIE CAROUSEL =======
  const rows = document.querySelectorAll(".movie-row");
  rows.forEach((row) => {
    const container = row.querySelector(".movie-thumbnails");
    if (!container) return;
    const left = row.querySelector(".arrow-left");
    const right = row.querySelector(".arrow-right");

    // Clone thumbnails for seamless looping
    const images = Array.from(container.children);
    images.forEach((img) => {
      container.appendChild(img.cloneNode(true));
    });

    const scrollStep = images[0]?.offsetWidth + 15 || 200;

    right?.addEventListener("click", () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      container.scrollBy({ left: scrollStep, behavior: "smooth" });
    });

    left?.addEventListener("click", () => {
      if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth / 2;
      }
      container.scrollBy({ left: -scrollStep, behavior: "smooth" });
    });
  });
});
