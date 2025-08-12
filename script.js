// Toggle Hamburger Menu
const hamburger = document.getElementById("hamburger");
const menuList = document.querySelector(".menu-list");
const hamburgerIcon = hamburger.querySelector(".hamburger-icon");
const crossIcon = hamburger.querySelector(".cross-icon");

hamburger.addEventListener("click", () => {
  menuList.classList.toggle("active");
  hamburgerIcon.classList.toggle("hidden");
  crossIcon.classList.toggle("hidden");
});

// Close menu when clicking a menu link (mobile)
document.querySelectorAll(".menu-list a").forEach((link) => {
  link.addEventListener("click", () => {
    if (menuList.classList.contains("active")) {
      menuList.classList.remove("active");
      hamburgerIcon.classList.remove("hidden");
      crossIcon.classList.add("hidden");
    }
  });
});

// Simple contact form submission handler
function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all required fields.");
    return false;
  }

  // For demonstration: show a thank you message
  alert(`Thank you, ${name}! Your message has been received.`);
  form.reset();

  return false; // prevent default form submission
}
