/* 객체 인스턴스 : 시간 */
// var now = new Date();
// document.write("현재 시간은 " + now);

/* 객체 프로퍼티 혹은 메서드*/
// var now = new Date();
// document.write("현재 시각은 " + now.toLocaleString());

/* 배열 */
// var numbers = ["spring", "summer", "autumn", "winter"];

// for(let i = 0; i < numbers.length; i++) {
//   document.write("<p>" + numbers[i] + "</p>");
// }

/* concat() */
// var num = [1, 2, 3];
// var char = ["a", "b", "c"];

// var numChar = num.concat(char);
// var charNum = char.concat(num);

// document.write("num에 char를 더하면 ", numChar, "<br>char에 num을 더하면 ", charNum);

/* join() */
// var num = [1, 2, 3];
// var char = ["a", "b", "c"];

// var string1 = num.join();
// document.write("구분자 없이 ", string1, "<br>");
// var string2 = char.join('/');
// document.write("'/'로 구분하면 ", string2);

/* push(), unshift() */
// var num = [1, 2, 3];

// var numPush = num.push(4, 5); // 맨 뒤
// document.write("length : ", numPush, " | 배열 : ", num, "<br>");
// var numUnshift = num.unshift(0); // 맨 앞
// document.write("length : ", numUnshift, " | 배열 : ", num, "<br>");

/* pop(), shift() */
// var char = ["a", "b", "c"];

// var poped = char.pop(); // 마지막 요소
// document.write("꺼낸 거 : ", poped, " | 배열 : ", char, "<br>");
// var shifted = char.shift(); // 첫 번째 요소
// document.write("꺼낸 거 : ", shifted, " | 배열 : ", char);

/* slice() */
// var num = [1, 2, 3, 4, 5, 6];

// var num2 = num.slice(2);
// document.write(num2, "<br>");
// var num3 = num.slice(2, 4);
// document.write(num3, "<br>");
// document.write(num);

