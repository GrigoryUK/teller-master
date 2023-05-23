import Swiper, {EffectCreative, Navigation, Pagination, Scrollbar,} from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar, EffectCreative]);


export default function slidersJs() {
    const swiper1 = new Swiper('.home', {
      slidesPerView: '1',
      loop: true,
      slideToClickedSlide: true,
      spaceBetween: 10,
      breakpoints: {
        // when window width is >= 320px
        576: {
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: '.Mmain-next',
            prevEl: '.Mmain-prev'
          }
        }
      }
    });

  const swiper2 = new Swiper('.swaper__what', {
    slidesPerView: '1',
    loop: true,
    slideToClickedSlide: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  const swiper3 = new Swiper('.letter__swiper', {
    slidesPerView: 1,
    slideToClickedSlide: true,
    centeredSlides: true,
    loop: true,
    // spaceBetween: 24,
    // translate: [-80, 0, 0],
    effect: 'creative',
    creativeEffect: {
      limitProgress: 4,
      prev: {
        // will set `translateZ(-400px)` on previous slides
        translate: [-80, 0, 0],
        opacity: 0.7
      },
      next: {
        // will set `translateX(100%)` on next slides
        translate: [640, 0, 0],
        opacity: 0.7
      }
    },
    breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  const swiper4 = new Swiper('.podcasts__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    }
  });
}
