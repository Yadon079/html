var now = new Date();
var firstDay = new Date("2021-05-31");

var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passTime = toNow - toFirst;

passTime = Math.round(passTime / (1000 * 60 * 60 * 24));

document.querySelector('#result').innerText = passTime;
// document.querySelector('#result').innerHTML = "<em>" + passTime + "</em>"; 