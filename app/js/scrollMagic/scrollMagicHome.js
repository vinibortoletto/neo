$(document).ready(() => {
  var controller = new ScrollMagic.Controller();

  // Intro  -----------------------------------------------
  let introTitle = new ScrollMagic.Scene({
    triggerElement: "#intro__title",
    triggerHook: 0.5,
    reverse: false
  })
    .setClassToggle("#intro__title", "fadeIn")
    .addTo(controller);

  let introSkillCardTeal = new ScrollMagic.Scene({
    triggerElement: "#skills__card--teal",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#skills__card--teal", "fadeIn")
    .addTo(controller);
  let introSkillCardBlack = new ScrollMagic.Scene({
    triggerElement: "#skills__card--black",
    triggerHook: 0.6,
    reverse: false
  })
    .setClassToggle("#skills__card--black", "fadeIn")
    .addTo(controller);

  // Projetos Recentes  -----------------------------------------------
  let ProjetosRecentesTitle1 = new ScrollMagic.Scene({
    triggerElement: "#projetosRecentes__title--projetos",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projetosRecentes__title--projetos", "fadeIn")
    .addTo(controller);

  let ProjetosRecentesTitle2 = new ScrollMagic.Scene({
    triggerElement: "#projetosRecentes__title--recentes",
    triggerHook: 0.6,
    reverse: false
  })

    .setClassToggle("#projetosRecentes__title--recentes", "fadeIn")
    .addTo(controller);

  // --- Projeto 1  -----------------------------------------------
  let ProjetosRecentesImg1 = new ScrollMagic.Scene({
    triggerElement: "#projeto__img--1",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__img--1", "fadeIn")
    .addTo(controller);

  let ProjetosRecentesContent1 = new ScrollMagic.Scene({
    triggerElement: "#projeto__content--1",
    triggerHook: 0.6,
    reverse: false
  })
    .setClassToggle("#projeto__content--1", "fadeIn")
    .addTo(controller);

  // --- Projeto 2  -----------------------------------------------
  let ProjetosRecentesImg2 = new ScrollMagic.Scene({
    triggerElement: "#projeto__img--2",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__img--2", "fadeIn")
    .addTo(controller);

  let ProjetosRecentesContent2 = new ScrollMagic.Scene({
    triggerElement: "#projeto__content--2",
    triggerHook: 0.6,
    reverse: false
  })
    .setClassToggle("#projeto__content--2", "fadeIn")
    .addTo(controller);

  // --- Projeto 3  -----------------------------------------------
  let ProjetosRecentesImg3 = new ScrollMagic.Scene({
    triggerElement: "#projeto__img--3",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#projeto__img--3", "fadeIn")
    .addTo(controller);

  let ProjetosRecentesContent3 = new ScrollMagic.Scene({
    triggerElement: "#projeto__content--3",
    triggerHook: 0.6,
    reverse: false
  })
    .setClassToggle("#projeto__content--3", "fadeIn")
    .addTo(controller);
});
