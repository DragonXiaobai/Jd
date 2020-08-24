function animate(obj, target, callback) {
    //核心 是给目标对象添加一个定时器的方法
    clearInterval(obj.timer);
    
    obj.timer = setInterval(() => {
        let step = (target - obj.offsetTop) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetTop === target) {
            clearInterval(obj.timer);
            callback && callback();
        }
        obj.style.top = obj.offsetTop + step + "px";
       
    }, 15);
}
function animateGoTop(obj, target, callback) {
    //核心 是给目标对象添加一个定时器的方法
    clearInterval(obj.timer);
    
    obj.timer = setInterval(() => {
        let step = (target - getScroll().top) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (getScroll().top === target) {
            clearInterval(obj.timer);
            callback && callback();
        }
        window.scroll(0, getScroll().top + step);
       
    }, 15);
}
//滚动事件兼容处理
function getScroll() {
    return {
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    }
}