const mobileNavMenu = document.querySelector(".mobile-nav");
const hamburgerIcon = document.querySelector(".icon-hamburger");
const closeIcon = document.querySelector(".icon-close");
const navWrapper = document.querySelector(".nav-wrapper");
const mainHeader = document.querySelector(".main-header");

// handle click event for mobile menu toggle
mobileNavMenu.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");

  // toggle navbar on click
  hamburgerIcon.classList.contains("hidden")
    ? navWrapper.classList.remove("hidden")
    : navWrapper.classList.add("hidden");

  // add background overlay while menu is active
  mainHeader.toggleAttribute("data-overlay");
});
