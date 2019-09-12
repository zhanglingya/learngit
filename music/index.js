"use strict";
var icon = document.getElementById("icon");
var song = document.getElementById("song");
var cd = document.getElementById("cd");
var circle = document.getElementById("circle");
var goodnight = document.getElementById("goodnight");

icon.addEventListener('click',start);
icon.addEventListener('click',stop);

function start() {
    //点击播放按钮弹出歌曲信息
    song.style.display = "block";
    song.style.top = "130px";

    //点击播放按钮改变
    icon.style.backgroundImage = "url('asset/stop.png')";

    //点击播放按钮图片变大
    cd.style.height = cd.height * 1.2 + "px";
    cd.style.width = cd.width * 1.2 + "px";
    circle.style.height = circle.height * 2 + "px";
    circle.style.width = circle.width * 2 + "px";
    circle.style.top = "17px";
    circle.style.left = "57px";

    //点击播放按钮图片一直旋转
    var rotate = 0;
    var interval = setInterval(function() {
      rotate += 1;
      cd.style.transform = "rotate(" + rotate + "deg)";
      cd.style.transition = "0.2s linear";
    }, 100);

    //点击播放按钮播放音乐
      goodnight.play();
    
};

function stop() {
    clearInterval(interval);
    song.style.display = "none";
    cd.style.height = cd.height * 1 + "px";
    cd.style.width = cd.width * 1 + "px";
    circle.style.top = "10px";
    circle.style.left = "5px";
    goodnight.pause();
};
//根据进度条调整音乐
