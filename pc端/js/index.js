
var hour = document.querySelector('#hour');
var fen = document.querySelector('#min');
var miao = document.querySelector('#s');

var time1 = +new  Date("2021-8-26 00:00:00"); /*用户输入的毫秒数*/
countTime();
setInterval(countTime, 1000);
function countTime() {
    var ms = +new Date(); /*当前的时间戳，毫秒数*/
    
    var newms = (time1 - ms) / 1000; /*算出总的秒数*/
    var hours = parseInt(newms / 60 / 60 % 24);
    hours = hours < 10 ? '0' + hours : hours;
    var min =parseInt( newms / 60 % 60);
    min = min < 10 ? '0' + min : min;
    var s = parseInt(newms % 60);
    s = s < 10 ? '0' + s : s;
    hour.innerHTML = hours;
    fen.innerHTML = min;
    miao.innerHTML = s;
}