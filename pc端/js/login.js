window.onload = function() {
    //获取元素
    //点击自动出现扫码登录
    var saomaLogin = document.querySelector('#zidong-login');
    //点击手动出现账号密码框
    var iptLogin = document.querySelector('#shou-login');
    //扫码模块
    var saoBlock = document.querySelector('.pic-ma-box');
    //账号密码模块
    var iptBlock = document.querySelector('.login-block');
    //给两个分别添加点击事件
    saomaLogin.onclick = function() {
        //显示扫码模块
        saoBlock.style.display = 'block';
        //添加类
        saomaLogin.classList.add('active');
        //隐藏账号密码输入模块
        iptBlock.style.display = 'none';
        //删除类
        iptLogin.classList.remove('active');
    }
    iptLogin.onclick = function() {
        //隐藏扫码模块
        saoBlock.style.display = 'none';
        //删除类
        saomaLogin.classList.remove('active');
        //显示账号密码输入模块
        iptBlock.style.display = 'block';
        //添加类
        iptLogin.classList.add('active');
    }
}