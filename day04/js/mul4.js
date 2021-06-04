var start = document.querySelector("#start");

start.onclick = function () {
  var num = prompt("숫자를 입력하시오.");

  if (num != null) {
    if (num % 4 === 0) {
      document.body;
      document.write("<h1>4의 배수일까 아닐까</h1>");
      document.write(num + "는 4의 배수입니다.");
    } else {
      document.body;
      document.write("<h1>4의 배수일까 아닐까</h1>");
      document.write(num + "는 4의 배수가 아닙니다.");
    }
  }
};
