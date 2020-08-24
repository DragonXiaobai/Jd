$(function() {
    //获取元素
    //京东秒杀高度
    var navTopHeight = document.querySelector('.bg-container').offsetTop;
    var flag = true;
   
    
    //电梯点击模块
    $('.aside-nav-container').find('.aside-item').click(function() {
        flag = false;     
        let current = $('.ele-height').eq($(this).index()).offset().top;
        $('body, html').stop().animate({
            scrollTop: current
        }, function() {
            flag = true;
        });

        $(this).addClass('active-nav').siblings().removeClass('active-nav');
    })
    $('#goback').click(function() {
        $('body, html').stop().animate({
            scrollTop: 0,
        });
    })
    $(window).scroll(function() {
        if(flag) {
            $('.ele-height').each(function(i, ele) {
                var height = $(ele).offset().top;
                if ($(document).scrollTop() >= height) {
                    $('.aside-nav-container .aside-item').eq(i).addClass('active-nav').siblings().removeClass('active-nav');
                }
            });
        }
        if($(document).scrollTop() >= $('.space-module').offset().top) {
            $('#goback').slideDown(300);
        } else {
            $('#goback').slideUp(300);
        }
        if($(document).scrollTop() >= navTopHeight) {
            $('.aside-nav-container').css({
                "position":"fixed",
                left: 1457,
                top: 80
            });
        
            // $('.aside-nav-container').animate({
            //     top: 80
            // })
            $('.nav-block').slideDown(300);
        } else {
            $('.nav-block').slideUp(300);
            $('.aside-nav-container').css({
                "position": "absolute",
                left: 220,
                top: 0,
            });
         
            // $('.aside-nav-container').animate({
            //     top: 0,
            // })
        }
    })
})