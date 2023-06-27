const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 700,
  effect: 'cards',
  cardsEffect: {
    slideShadows:false,
  },
   slidesPerView: 1,
  direction: 'horizontal',
  loop: true,
   autoplay: {
   delay: 1000,
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
