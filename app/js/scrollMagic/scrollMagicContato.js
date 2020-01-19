$(document).ready(() => {
  var controller = new ScrollMagic.Controller();

  let meioDeContato1 = new ScrollMagic.Scene({
    triggerElement: "#meioDeContato__item--1",
    triggerHook: 0.8,
    reverse: false
  })
    .setClassToggle("#meioDeContato__item--1", "fadeIn")
    .addTo(controller);

  let meioDeContato2 = new ScrollMagic.Scene({
    triggerElement: "#meioDeContato__item--2",
    triggerHook: 0.7,
    reverse: false
  })
    .setClassToggle("#meioDeContato__item--2", "fadeIn")
    .addTo(controller);

  let meioDeContato3 = new ScrollMagic.Scene({
    triggerElement: "#meioDeContato__item--3",
    triggerHook: 0.6,
    reverse: false
  })
    .setClassToggle("#meioDeContato__item--3", "fadeIn")
    .addTo(controller);
});
