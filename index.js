import LocomotiveScroll from 'locomotive-scroll';

const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  //lerp: 1 // +/- fps / refresh images
});


/* const target = document.querySelector('#js-target');

scroll.scrollTo(target); */