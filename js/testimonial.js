// Initialisation de la galerie de vignettes
var galleryThumbs = new Swiper('.gallery-thumbs', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 6,
        slideShadows: false,
    },
    loop: true,
    initialSlide: 0, // Commence à l'index 0
});

// Initialisation du slider principal de témoignages avec le contrôleur
var galleryTop = new Swiper('.swiper-container.testimonial', {
    speed: 400,
    spaceBetween: 50,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    direction: 'horizontal',
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
    navigation: {
        nextEl: '.swiper-button-next-customize',
        prevEl: '.swiper-button-prev-customize',
    },
    controller: {
        control: galleryThumbs,
        by: 'container',
    },
    loop: true,
    initialSlide: 0, // Commence à l'index 0
});
