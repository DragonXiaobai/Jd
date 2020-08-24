$(function() {
    
    //1.首先做控制器光标移进移出事件
    $('.left-swiper').on('mouseover', function() {
        $('.l-toggle').show();
        $('.r-toggle').show();
        
        //关闭定时器
        clearInterval(timer);
        timer = null;
    })
    $('.left-swiper').on('mouseout', function() {
        $('.l-toggle').hide();
        $('.r-toggle').hide();
        //开启定时器
        timer = setInterval(function() {
            $('.r-toggle').click();
        }, 2000)
    })
    //2.获取图片自身的宽度
    var imgWidth = $('#imgWidth').width();
    //3.遍历轮播图图片的li标签，动态生成小li
    $('.main-swiper li').each(function(i, ele) {
        //动态创建一个li标签 给小圆圈的
        var li = $('<li></li>');
        //自定义索引属性
        li.attr('index', i);
        $('.circle').append(li);
        //给图片上标识
        clickPic = i;
        //给小圆圈上标识
        circle = i;
        
        
    })
    //给小圆圈下的li标签添加点击事件
    $('.circle li').on('click', function() {
        //给此时的小li添加样式
        $(this).addClass('active').siblings().removeClass('active');
        //相应的对应是第几张图片
        //获取此时索引
        var index = $(this).index();
        //索引赋值给第几张图片
        clickPic = index;
        //索引值重新赋值给小圆圈
        circle = index;
        //移动图片
        $('.main-swiper').animate({
            left: - clickPic * imgWidth
        }, 500);
    })
    //节流阀 防止多次点击产生连动
    var flag = true;
    //定义是第几张图片被点击
    var clickPic = 0;

    //定义是第几个小圆圈被点击
    var circle = 0;
    //给第一个小圆圈添加一个样式
    $('.circle').children().eq(0).addClass('active');
    //把一个li标签里的图片克隆到最后的li标签里
    var newli = $('.main-swiper').children().eq(0).clone(true);
    $('.main-swiper').append(newli);
    
    //.给右控制器添加点击事件
    $('.r-toggle').on('click', function() {
        
        //点击一下 移动图片
        if (flag) {
            //关闭节流阀
            flag = false;
            
            //判断是否为最后一张图片
            if (clickPic == $('.main-swiper li').length - 1) {
                //清零
                clickPic = 0;
                $('.main-swiper').css('left', 0);
                
            } 
            clickPic++;
           
            $('.main-swiper').animate({
                left: - imgWidth * clickPic
            }, 500, function() {
                flag = true;
            });
            //判断是否为最后一个圆圈
            if (circle == $('.circle li').length - 1) {
                //清零
                circle = 0;
                $('.circle li').eq(0).addClass('active').siblings().removeClass('active');
                return;
            }
            circle++;
            $('.circle li').eq(circle).addClass('active').siblings().removeClass('active');
        }
    })
    //给做控制器添加点击事件
    $('.l-toggle').on('click', function() {
        if (flag) {
            flag = false;
            //判断此时是否为第一张图片
            if (clickPic == 0) {
                //重新赋值
                clickPic = $('.main-swiper li').length - 1; 
                $('.main-swiper').css('left', - clickPic * imgWidth);    
            }
            clickPic--;
            $('.main-swiper').animate({
                left: - imgWidth * clickPic
            }, 500, function() {
                flag = true;
            });
            //判断此时是否为第一个圆圈
            if (circle == 0) {
                //重新赋值
                circle = $ ('.circle li').length - 1;
                $('.circle li').eq(circle).addClass('active').siblings().removeClass('active');
                return;
            }
            circle--;
            $('.circle li').eq(circle).addClass('active').siblings().removeClass('active');

        }
    })
    //定义一个自动轮播图
    var timer = setInterval(function() {
        $('.r-toggle').click();
    }, 2000);
})