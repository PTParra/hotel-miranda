let swiperPopularRooms = false;

const checkVariableSwipers = () => {
  const anchoVentana = window.innerWidth;
  if (anchoVentana < 1000) {
    if (!swiperPopularRooms) {
      swiperPopularRooms = new Swiper('.popular-rooms-swiper', {
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
    })
    }

  } else {
    if (swiperPopularRooms) {
      swiperPopularRooms.destroy(true, true);
      swiperPopularRooms = false;
    }
  }
}

checkVariableSwipers();

window.addEventListener('resize', checkVariableSwipers);