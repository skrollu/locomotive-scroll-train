import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  repeat: true,
  getSpeed: !1,
//  multiplier:0.9
  //lerp: 1 // +/- fps / refresh images
});


/* const target = document.querySelector('#js-target');

scroll.scrollTo(target); */

scroll.on('call', func => {
  if(func === "slowDown")
    slowDown();
  else if(func === "delay")
    console.log('delay')
});

const slowDown = () => {
  console.log("coucou");
}