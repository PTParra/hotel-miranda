const swiperFacilites = new Swiper('.facilities-list-swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  // Navigation arrows
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const swiperCounter = new Swiper('.counter__images-swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  // Navigation arrows
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});