import carts from "./Data.js";
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();
if (day < 10) {
    day = '0' + day;
}
if (month < 10) {
    month = '0' + month;
}
var D = year + '-' + month + '-' + day;
document.getElementById('today').textContent = D;
function generateNumber() {
    var number = "";
    for (var i = 0; i < 4; i++) {
        var N = Math.floor(Math.random() * 10); 
        number += N;
    }
    return number;
}
var devisNumber = year + "-" + month + "-" + generateNumber();
var devisNumber = localStorage.getItem("devisNumber");
if (!devisNumber) {
    devisNumber = year + "-" + month + "-" + generateNumber();
    localStorage.setItem("devisNumber", devisNumber);
}
document.getElementById("devisNumber").textContent = devisNumber;

function printPage() {
    window.print(); 
}
document.getElementById("printpg").addEventListener("click", printPage);