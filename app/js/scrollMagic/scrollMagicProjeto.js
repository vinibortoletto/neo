$(document).ready(() => {
  var controller = new ScrollMagic.Controller();

  // Project 1 -----------------------------------------------
  let project1Title = new ScrollMagic.Scene({
    triggerElement: "#projetoPage__title--1",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projetoPage__title--1", "fadeIn")
    .addTo(controller);

  let project1Paragraph = new ScrollMagic.Scene({
    triggerElement: "#projetoPage__paragraph--1",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projetoPage__paragraph--1", "fadeIn")
    .addTo(controller);

  let project1Img = new ScrollMagic.Scene({
    triggerElement: "#projetoPage__imgBox--1",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projetoPage__imgBox--1", "fadeIn")
    .addTo(controller);

  // Project 2 -----------------------------------------------
  let project2Title = new ScrollMagic.Scene({
    triggerElement: "#projetoPage__title--2",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projetoPage__title--2", "fadeIn")
    .addTo(controller);

  let project2Paragraph = new ScrollMagic.Scene({
    triggerElement: "#projetoPage__paragraph--2",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projetoPage__paragraph--2", "fadeIn")
    .addTo(controller);

  let project2Img = new ScrollMagic.Scene({
    triggerElement: "#projetoPage__imgBox--2",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projetoPage__imgBox--2", "fadeIn")
    .addTo(controller);

  // Project 3 -----------------------------------------------
  let project3Title = new ScrollMagic.Scene({
    triggerElement: "#projetoPage__title--3",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projetoPage__title--3", "fadeIn")
    .addTo(controller);

  let project3Paragraph = new ScrollMagic.Scene({
    triggerElement: "#projetoPage__paragraph--3",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projetoPage__paragraph--3", "fadeIn")
    .addTo(controller);

  let project3Img = new ScrollMagic.Scene({
    triggerElement: "#projetoPage__imgBox--3",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projetoPage__imgBox--3", "fadeIn")
    .addTo(controller);

  // Live Preview Button -----------------------------------------------
  let livePreviewBtn = new ScrollMagic.Scene({
    triggerElement: "#livePreview__btn",
    triggerHook: 0.9,
    reverse: false
  })
    .setClassToggle("#livePreview__btn", "fadeIn")
    .addTo(controller);
});
