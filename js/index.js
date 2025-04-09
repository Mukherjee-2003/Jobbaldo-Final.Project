var swiper = new Swiper(".scrollSwiper", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
  });
  // ---------TOP COMPANIES SWIPER---------------------------
  var swiperTwo = new Swiper(".mySwiper", {
    slidesPerView: 3,
    grid: {
      rows: 2,
      fill: 'row',
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // Medium screens (e.g., tablets)
      991: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      // Small/mobile screens
      0: {
        slidesPerView: 1,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
    }
  });
  