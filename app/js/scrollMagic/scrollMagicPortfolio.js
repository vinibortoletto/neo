$(document).ready(() => {
  var controller = new ScrollMagic.Controller();

  // Projeto 1  -----------------------------------------------
  let portfolioProjeto1Img = new ScrollMagic.Scene({
    triggerElement: "#projeto__img--1",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__img--1", "fadeIn")
    .addTo(controller);

  let portfolioProjeto1Date1 = new ScrollMagic.Scene({
    triggerElement: "#projeto__date--1",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__date--1", "fadeIn")
    .addTo(controller);

  let portfolioProjeto1Title1 = new ScrollMagic.Scene({
    triggerElement: "#projeto__title--1",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__title--1", "fadeIn")
    .addTo(controller);

  let portfolioProjeto1Description1 = new ScrollMagic.Scene({
    triggerElement: "#projeto__description--1",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__description--1", "fadeIn")
    .addTo(controller);

  let portfolioProjeto1Btn1 = new ScrollMagic.Scene({
    triggerElement: "#projeto__btn--1",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__btn--1", "fadeIn")
    .addTo(controller);

  // Projeto 2  -----------------------------------------------

  let portfolioProjeto2Img = new ScrollMagic.Scene({
    triggerElement: "#projeto__img--2",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__img--2", "fadeIn")
    .addTo(controller);

  let portfolioProjeto2Date = new ScrollMagic.Scene({
    triggerElement: "#projeto__date--2",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__date--2", "fadeIn")
    .addTo(controller);

  let portfolioProjeto2Title = new ScrollMagic.Scene({
    triggerElement: "#projeto__title--2",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__title--2", "fadeIn")
    .addTo(controller);

  let portfolioProjeto2Description = new ScrollMagic.Scene({
    triggerElement: "#projeto__description--2",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__description--2", "fadeIn")
    .addTo(controller);

  let portfolioProjeto2Btn = new ScrollMagic.Scene({
    triggerElement: "#projeto__btn--2",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__btn--2", "fadeIn")
    .addTo(controller);

  // Projeto 3  -----------------------------------------------

  let portfolioProjeto3Img = new ScrollMagic.Scene({
    triggerElement: "#projeto__img--3",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__img--3", "fadeIn")
    .addTo(controller);

  let portfolioProjeto3Date = new ScrollMagic.Scene({
    triggerElement: "#projeto__date--3",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__date--3", "fadeIn")
    .addTo(controller);

  let portfolioProjeto3Title = new ScrollMagic.Scene({
    triggerElement: "#projeto__title--3",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__title--3", "fadeIn")
    .addTo(controller);

  let portfolioProjeto3Description = new ScrollMagic.Scene({
    triggerElement: "#projeto__description--3",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__description--3", "fadeIn")
    .addTo(controller);

  let portfolioProjeto3Btn = new ScrollMagic.Scene({
    triggerElement: "#projeto__btn--3",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__btn--3", "fadeIn")
    .addTo(controller);

  // Projeto 4  -----------------------------------------------

  let portfolioProjeto4Img = new ScrollMagic.Scene({
    triggerElement: "#projeto__img--4",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__img--4", "fadeIn")
    .addTo(controller);

  let portfolioProjeto4Date = new ScrollMagic.Scene({
    triggerElement: "#projeto__date--4",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__date--4", "fadeIn")
    .addTo(controller);

  let portfolioProjeto4Title = new ScrollMagic.Scene({
    triggerElement: "#projeto__title--4",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__title--4", "fadeIn")
    .addTo(controller);

  let portfolioProjeto4Description = new ScrollMagic.Scene({
    triggerElement: "#projeto__description--4",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__description--4", "fadeIn")
    .addTo(controller);

  let portfolioProjeto4Btn = new ScrollMagic.Scene({
    triggerElement: "#projeto__btn--4",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__btn--4", "fadeIn")
    .addTo(controller);

  $(".projeto__ferramentasUsadas").each(function() {
    let portfolioFerramentasUsadas = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7,
      reverse: false
    })
      .setClassToggle(this, "fadeIn")
      .addTo(controller);
  });
});
