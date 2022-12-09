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


    $('.question .box button').on('click', function(){
        // $(this).siblings().removeClass('red').find('i').removeClass('bx-rotate-180 red');
        //border
        $(this).toggleClass('red');

        if($(this).hasClass('red')){
            $(this).css('border-color','rgba(232, 0, 0, 1)');
        }
        else{
            $(this).css('border-color','rgba(58, 58, 58, 0.4)');
        }

        //arrow
        $(this).find('i').toggleClass('bx-rotate-180 red');

        if($(this).find('i').hasClass('red')){
            $(this).find('i').css('color','rgba(232, 0, 0, 1)');
        }
        else{
            $(this).find('i').css('color','rgba(58, 58, 58, 0.4)');
        }
    });


    //increase and decrease no of items in cart
    //plus
    $('.price-table .box .table .body .col .quantity .plus-btn').on('click', function(){
        let counter = $(this).siblings('.counter') ;

        counter.val( parseInt(counter.val()) + 1 );
    });

    //minus
    $('.price-table .box .table .body .col .quantity .minus-btn').on('click', function(){
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
    $('.shop-tabes .cards .card-body>a .origin').hover(function(){
    
        $(this).parent('a').siblings('.quick-box').css('opacity','1');
    },function(){

        $(this).parent('a').siblings('.quick-box').css('opacity','0');
    });

    //to show quick box when hover quick box
    $('.shop-tabes .cards .card-body .quick-box').hover(function(){
        $(this).css('opacity','1');
    },function(){
            $(this).css('opacity','0');
    });

    
    //






    


    //         to show instgram icon 
    // $('.inst .box').hover(function(){
    //     $('.inst .box a i').show(100);
    // },function(){
    //     $('.inst .box  i').hide(100);
    // });





});


