var swiper = new Swiper('.swiper-container',{
    centeredSlides: true,
    effect: 'coverflow',
    grabCursor: true,
    slidersPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
    },
});