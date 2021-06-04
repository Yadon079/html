// let 재선언
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += i  
//   }
//   let sum;
//   console.log(sum);
// }

// calcSum(10);

// let 호이스팅
var x = 10;

function displayName() {
  console.log("x is " + x);
  console.log("y is " + y);

  let y = 20;
}

displayName();