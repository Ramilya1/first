var swiper = new Swiper('.gallery',{
    //стрелки
    loop: true,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    //точки указатели
    //pagination: {
        //el: '.swiper-pagination',
        //clickable: true
    //},
    
    //scrollbar: {
        //el: '.swiper-scrollbar',
        //draggable: true
    //},
    touchRatio: 1,
    //переключение клавиатурой
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    //скролмышью
    mousewheel: {   
        sensitivity: 1,
        //eventsTarget: '.gallery'
    },


    //centeredSlides: true,
    //effect: 'coverflow',
    //grabCursor: true,
    //slidersPerView: 'auto',
    //spaceBetween: 0,
    //loop: true,

    //coverflowEffect: {
        //rotate: 0,
        //stretch: 0,
        //depth: 0,
        //modifier: 1
    //},

});