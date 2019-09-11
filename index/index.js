"use strict";
var text = document.getElementById("text");
document.onkeydown=function getKey() {
  if (event.keyCode === 13) {
    var otab = document.getElementById('list');
    var otr = document.createElement('tr');
    var otd = document.createElement('td');
    otd.innerHTML = text.value;
    otr.appendChild(otd);
    document.getElementById('text').value = "";
    var otd = document.createElement('td');
    otd.innerHTML = '<a href="#">×</a>';
    otr.appendChild(otd);
    otd.getElementsByTagName('a')[0].onclick = function() {
      otab.tBodies[0].removeChild(this.parentNode.parentNode);
    };
    otab.tBodies[0].appendChild(otr);
  }
}
