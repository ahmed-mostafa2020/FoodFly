/*global $ , alert, console*/ 

$(function(){
    'use strict';
    // $('html').niceScroll();

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


    //





    



    //         to show instgram icon 
    // $('.inst .box').hover(function(){
    //     $('.inst .box a i').show(100);
    // },function(){
    //     $('.inst .box  i').hide(100);
    // });





});


