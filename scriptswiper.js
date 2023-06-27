const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 700,
   slidesPerView: 2,
  direction: 'horizontal',
  loop: true,
   autoplay: {
   delay: 2000,
 },
  
  //effect creative
  effect: 'creative',
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -600],
    },

    next: {
      // will set `translateX(100%)` on next slides
      translate: ['100%', 0, 0],
    },
  },
  
 

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
