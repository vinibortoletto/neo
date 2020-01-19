const menuBtn = document.getElementById("menu__btn");
const menu = document.getElementById("menu__list");

let menuOpen = false;

menuBtn.addEventListener("click", e => {
  menu.classList.toggle("toggleMenu");
  menuBtn.classList.toggle("toggleMenuIcon");

  if (!menuOpen) {
    menuOpen = true;
    document.querySelector("body").style.overflow = "hidden";
  } else {
    menuOpen = false;
    document.querySelector("body").style.overflow = "visible";
  }
});
