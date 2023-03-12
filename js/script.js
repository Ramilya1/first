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

document.addEventListener('DOMContentLoaded', function(){
    const form2 = document.getElementById('form2');
    form2.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form2);
    }

    function formValidate(form2) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')){
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }

            }else if(input.getAttribute("type") === "checkbox" && input.checked === false){
                formAddError(input);
                error++;
            }else{
                if (input.value === ''){
                    formAddError(input);
                    error++;
                }
            }
        }
        
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    //email
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2.8})+$/.test(input.value);
    }
});