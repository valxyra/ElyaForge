// ===================================
// Dynamic Year in Footer
// ===================================
// Automatically set current year in footer copyright
document.getElementById("year").textContent = new Date().getFullYear();

// ===================================
// Mobile Nav: Hamburger Toggle
// ===================================
const navToggle = document.querySelector(".nav_toggle");
const links = document.querySelector(".nav_menu_list");
const menuItems = document.querySelectorAll(".nav_menu_list a");

// Toggle mobile nav menu open/close on hamburger click
navToggle.addEventListener("click", function () {
  links.classList.toggle("show_nav");
});

// Close nav menu when any link is clicked (auto-close on selection)
menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    links.classList.remove("show_nav");
  });
});

// ===================================
// Carousel: Auto-Advance Slider
// ===================================
const slides = document.querySelectorAll(".carousel input[name='slider']");
let current = 0;
const total = slides.length;

// Advance to the next slide (wraps around at the end)
function nextSlide() {
  slides[current].checked = false;
  current = (current + 1) % total;
  slides[current].checked = true;
}

// Auto-advance carousel every 8 seconds
setInterval(nextSlide, 8000);

// ===================================
// Back to Top Button
// ===================================
const backToTopBtn = document.getElementById("backToTop");

// Show button after scrolling down 300px, hide when near top
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// Scroll smoothly back to the top of the page on click
backToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
