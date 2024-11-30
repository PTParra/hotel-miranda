
const checkVariableSwipers = () => {
  const anchoVentana = window.innerWidth;
  if (anchoVentana < 1000) {
    if (!swiperRelatedRooms) {
      swiperRelatedRooms = new Swiper('.related-rooms-swiper', {
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
    }

  } else {
    if (swiperRelatedRooms) {
      swiperRelatedRooms.destroy(true, true);
      swiperRelatedRooms = false;
    }
  }
}


let swiperRelatedRooms = false;

checkVariableSwipers();

window.addEventListener('resize', checkVariableSwipers);