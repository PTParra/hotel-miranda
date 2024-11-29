const checkVariableSwipers = () => {
  const anchoVentana = window.innerWidth;

  if (anchoVentana < 1000) {
    if(!swiperFacilites){
      swiperFacilites = new Swiper('.facilities-list-swiper', {
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

    }
    if(!swiperCounter){
      swiperCounter = new Swiper('.counter__images-swiper', {
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
    }

  }else{

    if(swiperFacilites){
      swiperFacilites.destroy(true, true);
      swiperFacilites = false;
    }

    if(swiperCounter){
      swiperCounter.destroy(true, true);
      swiperCounter = false;
    }
  }
}

let swiperFacilites = false;


let swiperCounter = false;

checkVariableSwipers();

window.addEventListener('resize', checkVariableSwipers);