"use strict";
var icon = document.getElementById("icon");
var song = document.getElementById("song");
var cd = document.getElementById("cd");
var circle = document.getElementById("circle");
var goodnight = document.getElementById("goodnight");
var menu = document.getElementById("menu");
var interval;

//点击播放
icon.addEventListener("click", function() {
  //点击播放按钮弹出歌曲信息
  song.style.display = "block";
  song.style.top = "130px";

  //弹出暂停按钮，隐藏播放按钮
  icon.style.display = "none";
  menu.style.display = "block";
  menu.style.left = "-10px";

  //点击播放按钮图片变大
  cd.style.height = cd.height * 1.2 + "px";
  cd.style.width = cd.width * 1.2 + "px";
  circle.style.height = circle.height * 2 + "px";
  circle.style.width = circle.width * 2 + "px";
  circle.style.top = "17px";
  circle.style.left = "57px";

  //点击播放按钮图片一直旋转
  var rotate = 0;
  interval = setInterval(function() {
    rotate += 1;
    cd.style.transform = "rotate(" + rotate + "deg)";
    cd.style.transition = "0.2s linear";
  }, 100);

  //点击播放按钮播放音乐
  goodnight.play();
});



//点击暂停
menu.addEventListener("click", function() {
  //缩回歌曲信息
  song.style.display = "none";
  //弹出播放按钮，隐藏暂停按钮
  icon.style.display = "block";
  menu.style.display = "none";
  //恢复图片原始状态
  cd.style.height = "75px";
  cd.style.width = "75px";
  circle.style.top = "10px";
  circle.style.left = "50px";
  //清除定时器
  clearInterval(interval);
  //暂停音乐
  goodnight.pause();
});
