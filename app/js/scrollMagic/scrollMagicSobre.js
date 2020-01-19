$(document).ready(() => {
  var controller = new ScrollMagic.Controller();

  // Profile Images  -----------------------------------------------
  let sobreProfileImg = new ScrollMagic.Scene({
    triggerElement: "#profile__img",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#profile__img", "fadeIn")
    .addTo(controller);

  // Text  -----------------------------------------------
  let sobreTitle = new ScrollMagic.Scene({
    triggerElement: "#sobre__title",
    triggerHook: 0.6,
    reverse: false
  })
    .setClassToggle("#sobre__title", "fadeIn")
    .addTo(controller);

  let sobreParagraph = new ScrollMagic.Scene({
    triggerElement: "#sobre__paragraph",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#sobre__paragraph", "fadeIn")
    .addTo(controller);
});
