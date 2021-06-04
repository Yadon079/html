function addNumber() {
  var num1 = 2;
  var num2 = 3;
  var localSum = num1 + num2;
  globalSum = num1 + num2;

  console.log(localSum);
}

addNumber();
console.log(globalSum);