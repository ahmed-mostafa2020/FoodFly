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


    // faq question border & arrow icon

    //adjust sec padding
    if (($('.question .container')).height() <= 460){
        $('.question').css('padding','0px');
    }

    $('.question .box button').on('click', function(){
        //border
        $(this).siblings().removeClass('red');
        $(this).toggleClass('red').delay(700);
        $($(this).data('target')).parent().siblings().find('div').removeClass('show').delay(500);

        //arrow
        $(this).find('i').toggleClass('bx-rotate-180 red');
        $(this).siblings().find('i').removeClass('red bx-rotate-180');
    });


    //increase and decrease no of items in cart
    //plus
    $(' .quantity .plus-btn').on('click', function(){
        let counter = $(this).siblings('.counter') ;

        counter.val( parseInt(counter.val()) + 1 );
    });

    //minus
    $('.quantity .minus-btn').on('click', function(){
        let counter = $(this).siblings('.counter') ;
        
        if(counter.val() > 0){
            counter.val( parseInt(counter.val()) - 1 );
        }
        else{
             counter.val( 0 );
        }
    });


    //shop items shows

    //to show quick box when hover origin of img
    $('.card-body>a .origin').hover(function(){
    
        $(this).parent('a').siblings('.quick-box').css('opacity','1');
    },function(){

        $(this).parent('a').siblings('.quick-box').css('opacity','0');
    });

    //to show quick box when hover quick box
    $('.card-body .quick-box').hover(function(){
        $(this).css('opacity','1');
    },function(){
            $(this).css('opacity','0');
    });


    //gallery silder shop details
    $('.product .box ul.small-items li').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        console.log($(this).attr('src'))
        $('.product .box a img.main-img').hide().attr('src', $(this).find('a img').attr('src')).fadeIn(300);
    });




        //switch describtion shop details
    $('.describtion .box .content .desc-content').addClass('show');

    $('.describtion .box ul.switch li').on('click',function(e){
        e.preventDefault();
        $(this).siblings().removeClass('active');
        $($(this).siblings().data('target')).removeClass('show') ;

        $(this).addClass('active');
    });


    //rating stars in shop details
    $('.rating ul.stars li').on('click','a',function(e){
        e.preventDefault();
        // $(this).addClass('checked');
        $(this).css('color','rgba(251, 173, 65, 1)');
        $(this).parent().prevAll().find('a').addClass('checked');
        $(this).parent().prevAll().find('a').css('color','rgba(251, 173, 65, 1)');
    });


    //     $('.rating ul.stars li a').hover(function(){
        
    //     $(this).css('color','rgba(251, 173, 65, 1)');
    //     $(this).parent().prevAll().find('a').css('color','rgba(251, 173, 65, 1)');
    // },function(){
    //     if($(this).hasClass('checked') && $(this).parent().prevAll().find('a').hasClass('checkedd') ){
    //         $(this).css('color','rgba(251, 173, 65, 1)');
    //         $(this).parent().prevAll().find('a').css('color','rgba(251, 173, 65, 1)');
    //     }
    //     else{
    //         $(this).css('color','rgba(0, 0, 0, 0.8)');
    //         $(this).parent().prevAll().find('a').css('color','rgba(0, 0, 0, 0.8)');
    //     }
    // });


    //

    














    //         to show instgram icon 
    // $('.inst .box').hover(function(){
    //     $('.inst .box a i').show(100);
    // },function(){
    //     $('.inst .box  i').hide(100);
    // });





});


