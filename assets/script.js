// menu navigasi dropdown
const navToggle = document.querySelector(".nav_toggle");
const links = document.querySelector(".nav_menu_list");
const menuItems = document.querySelectorAll(".nav_menu_list a");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show_nav");
});

menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    links.classList.remove("show_nav");
  });
});

// carousel slider
const slides = document.querySelectorAll(".carousel input[name='slider']");
let current = 0;
const total = slides.length;

function nextSlide() {
  slides[current].checked = false;
  current = (current + 1) % total;
  slides[current].checked = true;
}

setInterval(nextSlide, 8000);
