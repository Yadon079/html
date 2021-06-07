      // 매개변수가 있는 함수
      // function addNumber(num1, num2 = 5) {
      //   return num1 + num2;
      // }

      // var result = addNumber(5);
      // console.log(result);

      // function calcSum(n) {
      //   var sum = 0;

      //   for(let i = 1; i <= n; i++) {
      //     sum += i;
      //   }

      //   document.write("1부터 " + n + "까지의 합은 " + sum);
      // }

      // var userNumber = prompt("숫자를 입력해주세요.");

      // if(userNumber !== null) {
      //   calcSum(parseInt(userNumber));
      // }

      // 익명 함수 즉시 실행 함수
      // (function() {
      //   var username = prompt("이름을 입력하세요.");
      //   document.write("안녕하세요! <span class='accent'>" + username + "</span>님!");
      // }());

      var sum = (a, b) => {
        return a + b;
      }
