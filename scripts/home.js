const swiperRooms = new Swiper('.rooms-section__swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    breakpoints: {
      1000: {
        slidesPerView: 2.5,
        spaceBetween: 50,
        centeredSlides: true,
      },
    },
});

const swiperFacilites = new Swiper('.features-list-swiper', {
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



const swiperMenu = new Swiper('.food-list-swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const swiperHotelPhotos = new Swiper('.hotel-images-swiper', {
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