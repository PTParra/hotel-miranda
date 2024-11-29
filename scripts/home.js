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
  breakpoints: {
    1000: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});


// Seccion para swippers que existen o no dependiendo de si es movil o no


const checkVariableSwipers = () => {
  const anchoVentana = window.innerWidth;

  if (anchoVentana < 1000) {
    if(!swiperFacilites){
      swiperFacilites = new Swiper('.features-list-swiper', {
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
    if(!swiperHotelPhotos){
      swiperHotelPhotos = new Swiper('.hotel-images-swiper', {
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

    if(swiperHotelPhotos){
      swiperHotelPhotos.destroy(true, true);
      swiperHotelPhotos = false;
    }
  }
}

let swiperFacilites = false;


let swiperHotelPhotos = false;

checkVariableSwipers();

window.addEventListener('resize', checkVariableSwipers);