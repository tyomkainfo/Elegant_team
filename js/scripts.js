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
    $('.header_burger').click(function(event){
        $('.header_burger,.header_menu,.header_menu_new').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

