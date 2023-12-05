var swiper = new Swiper('.swiper-container', {
    // Autres options...
    navigation: {
      nextEl: '.swiper-button-next-custom',
      prevEl: '.swiper-button-prev-custom',
    },
    pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      loop: true,
      breakpoints: {
          767: {
              slidesPerView: 2,
              spaceBetween: 1,
          },
          1200: {
              spaceBetween: 10,
              slidesPerView: 4,
          },
      },
      initialSlide: 2, 
  });
  