console.log("hello");

var heading = document.querySelector("#heading");

heading.onclick = function () {
  heading.style.color = "red";
  // alert("hello");
  // var reply = confirm("저장하시겠습니까?");
  // console.log(reply); 
  var name = prompt("what is your name?");
  console.log(name);
  document.write("<h1>" + name + "님 환영합니다.</h1>");
};
