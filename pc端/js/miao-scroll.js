window.onload = function() {
    //获取元素
    var titHeight = document.querySelector('#tit-height').offsetTop;
    var navBlock = document.querySelector('.nav-block');
    var miaoBlock = document.querySelector('.miao-block');
    var asideBlock = document.querySelector('.nav-aside-block');
    var goback = document.querySelector('#goBack');
    //屏幕滚动事件
    this.onscroll = function() {
        if (this.pageYOffset >= titHeight) {
            navBlock.style.display = 'block';
            miaoBlock.style.display = 'block';
            
            asideBlock.style.position = 'fixed';
            // asideBlock.style.left = '1415px';
            // asideBlock.style.top = '115px';
        } else {
            navBlock.style.display = 'none';
            miaoBlock.style.display = 'none';
            asideBlock.style.position = 'absolute';
            // asideBlock.style.left = '1415px';
            // asideBlock.style.top = '115px';
        }
    }
    //返回顶部
    goback.onclick = function() {
        window.scrollTop = 0;
    }
}