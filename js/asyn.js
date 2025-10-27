// nhap ten : <input id="input" value>
// <button onclick="hello()">ok</button>
// <div id="loi"></div>

var hello = function name(params) {
 var ten = document.getElementById("input").value;
 var loi = "xin chao" + ten
 document.writeln(loi)
}
var not = function () {
  document.getElementById("loi")
  .innerHTML += "bye <br>"
}
setTimeout(not, 3000)
document.getElementById("loi")
.innerHTML += "hello <br>"