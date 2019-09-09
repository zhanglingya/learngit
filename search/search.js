'use strict';

function getKey(){
  if(event.keyCode==13){
    var text =document.getElementById("text").value;
    document.getElementById("check").value =text;
  }
};
function del(){
  document.getElementById("check").value = "";
};
$('dropdown').each(function(){
  this.style='display:none'
});