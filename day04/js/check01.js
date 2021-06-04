var userNum = prompt("숫자를 입력하세요");

// if (userNum !== null) {
//   if (userNum % 3 === 0) alert("3의 배수입니다");
//   else alert("3의 배수가 아닙니다.");
// } else {
//   alert("입력이 취소되었습니다.");
//   console.log(userNum);
// }

if(userNum !== null) {
  (userNum % 3 === 0) ? alert("3의 배수입니다.") : alert("3의 배수가 아닙니다.");
} else {
  alert("입력이 취소되었습니다.");  
}