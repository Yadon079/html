/* 전체 응모자 수 -> 당첨자 발표 */
var seed = prompt("전체 응모자 수 : ", "");
var picked = Math.floor(Math.random() * seed + 1);

document.write("전체 응모자 수 : " + seed + "명<br>");
document.write("당첨자 : " + picked + "번<br>");

/* 문제 정답 맞추기 */
function addNum(a, b) {
  return a + b;
}

var quiz = [];
var ans = [];

for (let i = 0; i < 5; i++) {
  let num1 = Math.floor(Math.random() * 5 + 1);
  let num2 = Math.floor(Math.random() * 5 + 1);

  quiz[i] = addNum(num1, num2);
}

for (let i = 0; i < 5; i++) {
  ans[i] = parseInt(prompt("정답을 입력해주세요."));
}

var cnt = 0;

for (let i = 0; i < 5; i++) {
  if (quiz[i] === ans[i]) {
    cnt = cnt + 1;
  }
}

document.write("정답 : ", quiz, "<br>");
document.write("작성한 답 : ", ans, "<br>");
document.write("맞춘 문제의 개수는 " + cnt + "개입니다.");
