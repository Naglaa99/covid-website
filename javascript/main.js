window.onscroll = () => stickyHeader();

function stickyHeader() {
  const header = document.getElementById("header");
  if (window.scrollY > 0) header.classList.add("sticky");
  else header.classList.remove("sticky");
}

const menuToggle = document.getElementById("menu");
const dropdownMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li a");

menuToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
  menuToggle.classList.toggle("bx-icon");
  menuToggle.classList.toggle("bx-x");
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    dropdownMenu.classList.remove("active");
    menuToggle.classList.remove("bx-icon");
    menuToggle.classList.remove("bx-x");
  });
});
