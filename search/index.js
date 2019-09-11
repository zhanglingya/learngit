"use strict";
var text = document.getElementById('text');
text.addEventListener("keydown",function getKey(){
  if (event.keyCode === 13) {
    var table = document.getElementById('list');
    var line = document.createElement('tr');
    var row = document.createElement('td');
    row.innerHTML = text.value;
    line.appendChild(row);
    var rank = document.createElement('td');
    rank.innerHTML = '<a href="#">×</a>';
    line.appendChild(rank);
    rank.getElementsByTagName('a')[0].onclick = function() {
      table.tBodies[0].removeChild(this.parentNode.parentNode);
    };
    table.tBodies[0].appendChild(line);
    document.getElementById('text').value = '';
  }
})

