'use strict';
var icon = document.getElementById('icon');
icon.addEventListener('click',function(){
    //点击播放按钮弹出歌曲信息
    var song = document.getElementById('song');
    song.style.display='block';
    song.style.top='130px';

    //点击播放按钮改变
    icon.style.backgroundImage="url('asset/stop.png')";

    

})