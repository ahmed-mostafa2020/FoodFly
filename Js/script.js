/*global $ , alert, console*/ 

$(function(){
    'use strict';
    // $('html').niceScroll();

    //calling owl plugin
    $('.owl-carousel').owlCarousel({
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


    // open & close side-nav from burger icon
    $('.navbar nav .main-nav ').on('click','.burger-icon',function(){

        let  sidebar = $('.navbar .side-nav');
        if(sidebar.hasClass('block')){

            sidebar.css('left','-400px');
            sidebar.removeClass('block');
        }
        else{
            sidebar.css('left','0');
            sidebar.addClass('block');
        }
    });

    //close side-nav
    $('.navbar .side-nav .side-nav-header').on('click','.close-menu',function(){
        $('.navbar .side-nav').css('left','-400px');
    });

    document.onclick = function(e){
        if(e.target.className !== 'side-nav' && e.target.className !== 'burger-icon'){ 
            $('.navbar .side-nav').css('left','-400px');
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


