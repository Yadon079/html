var name = prompt("과일 이름");
var box = prompt("상자에 들어갈 수 있는 " + name + "의 개수");
var total = prompt(name + "의 총 개수");

document.write(total + "개의 " + name + "을 담기 위해서는 " + (parseInt(total / box)) + "개의 상자가 필요합니다. 남은 과일의 개수는 " + (total % box) + "개입니다.")