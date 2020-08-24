let goodList = [{
    "checkBtn": "<input type='checkbox'>",
    "goods": {
        "img": "./carPic/pro01.jpg",
        "word": "公牛（BULL） 新国标插座/插线板/插排/排插/接线板/拖线板 GN-607 4位总控全长3米",
        "other": "4位总控3米"
    },
    "price": ["￥33.20", "促销"],
    "count": ["-", "<input type='text'  value='1'>", "+"],
    "sum": "￥33.20",
    "delete": "删除"
}, {
    "checkBtn": "<input type='checkbox'>",
    "goods": {
        "img": "./carPic/pro02.jpg",
        "word": "鞋子男潮鞋学生2020夏季新款男鞋INS潮流网红内增高老爹鞋男小白鞋板鞋户外运动休闲鞋跑步鞋 AW-8555黑蓝 40",
        "other": "AW-8555黑蓝"
    },
    "price": ["￥128.20", "促销"],
    "count": ["-", "<input type='text'  value='1'>", "+"],
    "sum": "￥128.20",
    "delete": "删除"
}, {
    "checkBtn": "<input type='checkbox'>",
    "goods": {
        "img": "./carPic/pro03.jpg",
        "word": "鞋子男潮鞋学生2020夏季新款男鞋INS潮流网红内增高老爹鞋男小白鞋板鞋户外运动休闲鞋跑步鞋 AW-8555黑蓝 40",
        "other": "AW-8555黑蓝"
    },
    "price": ["￥128.20", "促销"],
    "count": ["-", "<input type='text'  value='1'>", "+"],
    "sum": "￥128.20",
    "delete": "删除"
}, {
    "checkBtn": "<input type='checkbox'>",
    "goods": {
        "img": "./carPic/pro04.jpg",
        "word": "鹏威夏季男鞋子男士休闲鞋 青少年韩版潮流板鞋学生透气ins老爹鞋时尚男生运动鞋春夏天网面鞋 D87米色网面 40",
        "other": "AW-8555黑蓝"
    },
    "price": ["￥138.00", "促销"],
    "count": ["-", "<input type='text'  value='1'>", "+"],
    "sum": "￥138.00",
    "delete": "删除"
}, {
    "checkBtn": "<input type='checkbox'>",
    "goods": {
        "img": "./carPic/pro06.jpg",
        "word": "【买2份减3元】渝美滋3斤五香麻辣香菇豆干条独立小包装零食散装多口味休闲小吃食品一整箱整件豆腐干 混合全部口味 3斤",
        "other": "2斤 混装全部口味"
    },
    "price": ["￥34.90", "促销"],
    "count": ["-", "<input type='text'  value='1'>", "+"],
    "sum": "￥34.90",
    "delete": "删除"
}, {
    "checkBtn": "<input type='checkbox'>",
    "goods": {
        "img": "./carPic/pro05.jpg",
        "word": "福事多坚果水果燕麦片 即食玉米片麦片早餐食品 冲饮代餐速食1Kg",
        "other": "坚果水果麦片1kg"
    },
    "price": ["￥30.50", "促销"],
    "count": ["-", "<input type='text'  value='1'>", "+"],
    "sum": "￥30.50",
    "delete": "删除"
}];

function render() {
    for (let i = 0; i < goodList.length; i++) {
        let tr = document.createElement('tr');
        for (let key in goodList[i]) {
            let td = document.createElement('td');
            if (key === "checkBtn") {
                td.className = "check";
                td.innerHTML = goodList[i][key];
    
            } else if (key === "goods") {
                td.className = "goods";
                for (let k in goodList[i][key]) {
                    if (k === "img") {
                        let img = document.createElement('img');
                        img.src = goodList[i][key][k];
                        td.appendChild(img);
                    } else if (k === "word") {
                        let p = document.createElement('p');
                        p.innerHTML = goodList[i][key][k];
                        td.appendChild(p);
                    } else {
                        let span = document.createElement('span');
                        span.innerHTML = goodList[i][key][k];
                        td.appendChild(span)
                    }
                    
                }
            } else if (key === "price") {
                td.className = "price";
                let p = document.createElement('p');
                p.innerHTML = goodList[i][key][0];
                let select = document.createElement('select');
                let option = document.createElement('option');
                option.innerHTML = goodList[i][key][1];
                select.appendChild(option);
                td.appendChild(p);
                td.appendChild(select);
            } else if (key === "count") {
                td.className = "count";
                let span = document.createElement('span');
                span.className = "sub";
                span.innerHTML = goodList[i][key][0];
                let div = document.createElement('div');
                div.className = "pri-box";
                div.innerHTML = goodList[i][key][1];
                let span1 = document.createElement('span');
                span1.className = "add";
                span1.innerHTML = goodList[i][key][2];
                td.appendChild(span);
                td.appendChild(div);
                td.appendChild(span1);
            } else if (key === "sum") {
                td.className = "sum";
                td.innerHTML = goodList[i][key];
            } else {
                td.className = "delete";
                let span = document.createElement('span');
                span.innerHTML = goodList[i][key];
                td.appendChild(span);
            }
            tr.appendChild(td);
           
        }
        document.querySelector('tbody').appendChild(tr);
    }
}
render();
let goodCounts = 0;
let countIpt = document.querySelectorAll('.count input');
//计算数量展示
let countShow = document.querySelector('.right i');
//计算总价展示
let priceShow = document.querySelector('.pri-sum b');
//删除功能
let deleteBtns = document.querySelectorAll('.delete span');
let checkBtns = document.querySelectorAll('.check input');
//点击按钮添加数量
let adds = document.querySelectorAll('.add');
let subs = document.querySelectorAll('.sub');
let prices = document.querySelectorAll('.price p');
let sums = document.querySelectorAll('.sum');
for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', function() {
        if (confirm("您确定要把这个商品从购物车移出吗？")) {
            this.parentElement.parentElement.remove();           
            renderCount();
            renderPrice();
        }       
    })
}
for (let i = 0; i < adds.length; i++) {
    let num = 1;
    let price = prices[i].innerHTML.split('￥')[1];
    adds[i].addEventListener('click', function() {       
        if (num === 5) {
            this.style.color = "#f4f4f4";
            alert("已是该商品的最大购买数量");          
            return;
        }
        num++;
        if (num <= 5) {
            this.previousElementSibling.firstElementChild.value = num;
            this.style.color = "#666"; 
            if (sums[i]) {
                sums[i].innerHTML = '￥' + (num * price).toFixed(2);
            } else {
                sums[i - 1].innerHTML = '￥' + (num * price).toFixed(2);
            }           
            renderCount();
            renderPrice();
        }
    })

    subs[i].addEventListener('click', function() {        
        if(num === 1) {
            alert("已经是最低数量了");
            this.style.color = "#f4f4f4";
            return;
        } 
        num--;
        if (num >= 1) {
            this.style.color = "#666";
            this.nextElementSibling.firstElementChild.value = num;
            if (sums[i]) {
                sums[i].innerHTML = '￥' + (num * price).toFixed(2);
            } else {
                sums[i - 1].innerHTML = '￥' + (num * price).toFixed(2);
            }
            renderCount();
            renderPrice();
        }      
    })   
}
//全选和单选
let checkAll = document.querySelectorAll('.checkAll');

let checkedNum = 0;

for (let i = 0; i < checkAll.length; i++) {
    checkAll[i].addEventListener('change', function() {
        let state = this.checked;
        if (state) {
            checkedNum = checkBtns.length;
        }
        for (let k = 0; k < checkAll.length; k++) {
            checkAll[k].checked = state;
        }
        for (let j = 0; j < checkBtns.length; j++) {
            checkBtns[j].checked = state;            
        }     
        renderCount();   
        renderPrice();
    })
}

for (let i = 0; i < checkBtns.length; i++) {
    checkBtns[i].addEventListener('change', function() {
        if (this.checked) {
            checkedNum++;
        } else {
            checkedNum--;
        }
        if (checkedNum === checkBtns.length) {
            for (let k = 0; k < checkAll.length; k++) {
                checkAll[k].checked = true;
            }
        } else {
            for (let k = 0; k < checkAll.length; k++) {
                checkAll[k].checked = false;
            }
        }
        renderCount();  
        renderPrice();
    })
}
function renderCount() {
    let countAry = [];
    countIpt = document.querySelectorAll('.count input');
    checkBtns = document.querySelectorAll('.check input');
    for(let m = 0; m < countIpt.length; m++) {
        if (checkBtns[m].checked) {
            countAry.push(Number(countIpt[m].value));
        } else {
            countAry.push(0);
        }
    }
    let res = countAry.reduce((pre, next) => pre + next);
    countShow.innerHTML = res;
}

function renderPrice() {
    let priceAry = [];
    sums = document.querySelectorAll('.sum');
    checkBtns = document.querySelectorAll('.check input');
    // console.log(sums);
    for (let i = 0; i < sums.length; i++) {
        if (checkBtns[i].checked) {
            priceAry.push(Number(sums[i].innerHTML.split('￥')[1]));
        } else {
            priceAry.push(0);
        }
    }
    let priceSum = priceAry.reduce((pre, next) => pre + next);
    priceShow.innerHTML = '￥' + priceSum.toFixed(2);
}