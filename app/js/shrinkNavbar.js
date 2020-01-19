const navbar = document.getElementById("nav");
let initialPosition = $(window).scrollTop();

$(window).scroll(() => {
  let currentPosition = $(window).scrollTop();

  if (currentPosition > 500) {
    navbar.classList.add("shrinkNavbar");
  } else {
    navbar.classList.remove("shrinkNavbar");
  }
});
