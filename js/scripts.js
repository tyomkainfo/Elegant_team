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


    $('.open-overlay').click(function() {
        var overlay_navigation = $('.overlay-navigation'),
            nav_item_1 = $('nav li:nth-of-type(1)'),
            nav_item_2 = $('nav li:nth-of-type(2)'),
            nav_item_3 = $('nav li:nth-of-type(3)'),
            nav_item_4 = $('nav li:nth-of-type(4)'),
            nav_item_5 = $('nav li:nth-of-type(5)'),
            top_bar = $('.bar-top'),
            middle_bar = $('.bar-middle'),
            bottom_bar = $('.bar-bottom');

        overlay_navigation.toggleClass('overlay-active');
        if (overlay_navigation.hasClass('overlay-active')) {

            top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
            middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
            bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
            overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
            nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
            nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
            nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
            nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
            nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
        } else {
            top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
            middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
            bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
            overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
            nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
            nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
            nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
            nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
            nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
        }
    })
});

