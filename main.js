const mobileNavMenu = document.querySelector(".mobile-nav");
const hamburgerIcon = document.querySelector(".icon-hamburger");
const closeIcon = document.querySelector(".icon-close");
const navWrapper = document.querySelector(".nav-wrapper");
const mainHeader = document.querySelector(".main-header");

mobileNavMenu.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");

  hamburgerIcon.classList.contains("hidden")
    ? navWrapper.classList.remove("hidden")
    : navWrapper.classList.add("hidden");

  mainHeader.toggleAttribute("data-overlay");
});
