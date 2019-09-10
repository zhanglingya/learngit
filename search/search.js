'use strict';

function getKey(){ 
  if(event.keyCode==13){
    var text =document.getElementById("text").value;
    var node = document.createElement("li");
    var list = document.createTextNode(text);
    node.appendChild(list);
    document.getElementById("list").appendChild(node);
    document.getElementById("text").value="";
    
  }  
}
function del(){
  var text =document.getElementById("text").value;
    var node = document.createElement("li");
    node.innerHTML='<a href="javascript:;">删除</a>'
    node.appendChild(list);
};
