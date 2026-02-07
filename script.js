const body = document.body;
const menuBtn = document.querySelector(".menu-btn");
const overlayNav = document.querySelector(".overlay-nav");
const overlayLinks = document.querySelectorAll(".overlay-link");

const setMenuState = (isOpen) => {
  body.classList.toggle("nav-open", isOpen);
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  overlayNav.setAttribute("aria-hidden", String(!isOpen));
};

menuBtn.addEventListener("click", () => {
  const isOpen = body.classList.contains("nav-open");
  setMenuState(!isOpen);
});

overlayLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuState(false);
  }
});

window.addEventListener("load", () => {
  body.classList.add("is-ready");
});
