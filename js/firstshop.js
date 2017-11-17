/**
 * Created by h on 17-11-16.
 */
var oVis = document.querySelector(".turn-vis .pic"),
    oBg = document.querySelector(".turn-wrap"),
    aPic = oVis.querySelectorAll(".pic-main img"),
    aMark = oVis.querySelectorAll(".mark span"),
    aBtn = oVis.querySelectorAll(".btn div"),
    num= 0,
    k = ["00","01","02","03","04","05","06","07","08"],
    length = aMark.length;
for(i=0;i<length;i++){
    //添加自定义属性保存i序列号
    aMark[i].index = i;
    aMark[i].onmouseenter = fn;
    function fn(){
        //隐藏前一张图片 去掉标签的背景色与盒子阴影
        aPic[num].className = "";
        aMark[num].style.backgroundColor = "#fff";
        aMark[num].style.boxShadow = "none";
        //改变j的值
        num = this.index;
        //显示当前图片
        aPic[num].className += "on";
        //添加当前标签的背景色与盒子阴影
        aMark[num].style.backgroundColor = "red";
        aMark[num].style.boxShadow = "0 0 0 2px #fff";
        //添加当前图片的背景以保持与可视窗口的图片同色调显示
        oBg.style.backgroundImage = "url('images/01-banner/" + k[num] + ".jpg')";
        oBg.style.backgroundSize = "cover";
        oBg.style.backgroundRepeat = "no";
    }
}
var j = 0;
//右侧按钮 用if判断实现循环轮播
aBtn[1].onclick = function () {
    //隐藏前一张图片 去掉标签的背景色与盒子阴影
    aPic[j].className = "";
    aMark[j].style.backgroundColor = "#fff";
    aMark[j].style.boxShadow = "none";
    j++;
    if(j>length-1){
        j = 0;
    }
    //显示当前图片
    aPic[j].className += "on";
    //添加当前标签的背景色与盒子阴影
    aMark[j].style.backgroundColor = "red";
    aMark[j].style.boxShadow = "0 0 0 2px #fff";
    //添加当前图片的背景以保持与可视窗口的图片同色调显示
    oBg.style.backgroundImage = "url('images/01-banner/" + k[j] + ".jpg')";
    oBg.style.backgroundSize = "cover";
    oBg.style.backgroundRepeat = "no";
};
//左侧按钮 用if判断实现循环轮播
aBtn[0].onclick = function () {
    //隐藏前一张图片 去掉标签的背景色与盒子阴影
    aPic[j].className = "";
    aMark[j].style.backgroundColor = "#fff";
    aMark[j].style.boxShadow = "none";
    j--;
    if(j<0){
        j = length-1;
    }
    //显示当前图片
    aPic[j].className += "on";
    //添加当前标签的背景色与盒子阴影
    aMark[j].style.backgroundColor = "red";
    aMark[j].style.boxShadow = "0 0 0 2px #fff";
    //添加当前图片的背景以保持与可视窗口的图片同色调显示
    oBg.style.backgroundImage = "url('images/01-banner/" + k[j] + ".jpg')";
    oBg.style.backgroundSize = "cover";
    oBg.style.backgroundRepeat = "no";
};