/*global $ , alert, console*/ 

$(function(){
    'use strict';
    // $('html').niceScroll();

    //calling owl plugin slider
    $('.testimonial .owl-carousel',).owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    //calling owl plugin partner sec in testimonial page 
    $('.partner .owl-carousel').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        slideTransition: 'linear',
        smartSpeed: 6500,
        center: true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3.5
            },
            1000:{
                items:5
            }
        }
    });


    // open & close side-nav from burger icon
    
    let  sidebar = $('.navbar .side-nav');

    $('.navbar nav .main-nav .burger-icon').on('click',function(){


        sidebar.toggleClass('isvisible');
        if(sidebar.hasClass('isvisible')){

            sidebar.animate({
                left: 0
            },500);

        } else{

            sidebar.animate({
                left: '-400px'
            },500);
        }
    });


    //close side-nav
    $('.navbar .side-nav .side-nav-header').on('click','.close-menu',function(){
        sidebar.animate({
            left: '-400px'
        },500);
    });

    document.onclick = function(e){
        if(e.target.className !== 'side-nav' && e.target.className !== 'burger-icon'){ 
            sidebar.animate({
                left: '-400px'
            },500);
        }
    }


    //tabes show up $ hide
    $('.tabes ul.btn-list').on('click','li' ,function (e) {

        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).data('content') === 'All') {
            $('.tabes .cards .box').fadeIn(500);
            $('.tabes .cards .row').css('height','auto');
        }
        else {
            $('.tabes .cards .row').css('min-height','480px');

            $('.tabes .cards div.card-body').not($($(this).data('content'))).parent().fadeOut(400).delay(300);
            $($(this).data('content')).parent().fadeIn(500);
          }

    });

    //











    


    //         to show instgram icon 
    // $('.inst .box').hover(function(){
    //     $('.inst .box a i').show(100);
    // },function(){
    //     $('.inst .box  i').hide(100);
    // });





});


