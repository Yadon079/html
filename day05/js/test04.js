var num1 = Math.floor(Math.random() * 10 + 1);
var num2 = Math.floor(Math.random() * 10 + 1);

function addNum(a, b) {
  return a + b;
}

var quiz = [];
var ans = [];

for(let i = 0; i < 5; i++) {
  quiz[i] = addNum(num1, num2);
}

for(let i = 0; i < 5; i++) {
  ans[i] = prompt("정답을 입력해주세요.");
}

var cnt = 0;

for(let i = 0; i < 5; i++) {
  if(quiz[i] === ans[i]) {
    cnt++;
  }
}

document.write("맞춘 문제의 개수는 " + cnt + "개입니다.");