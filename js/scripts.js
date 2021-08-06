$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });

    $('.header_menu_new').click(function(event){
        $('.header_burger,.header_menu,.header_menu_new').toggleClass('active');
        $('body').toggleClass('lock');
    });


    function toggleScrollClass() {
        let nav = document.querySelectorAll('.header')[0];
        window.pageYOffset > 600? nav.classList.remove('fade')  : nav.classList.add('fade')
    }
    window.addEventListener('scroll', function() {toggleScrollClass()});
    toggleScrollClass();



    $('a[href^="#gallery_anchor"]').click(function(){ //
        let anchor = $(this).attr('href');
        $('html, body').animate({
            scrollTop:  $(anchor).offset().top
        }, 600);
    });
});

