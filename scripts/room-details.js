const swiperRelatedRooms = new Swiper('.related-rooms-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    /*autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },*/
});