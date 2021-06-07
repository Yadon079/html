// 이미지 투명도
var carouselImg = document.querySelector(".img-hover");

carouselImg.addEventListener("mouseover", function() {
  carouselImg.style.opacity = "0.5";
});
carouselImg.addEventListener("mouseout", function() {
  carouselImg.style.opacity = "1";
});

// 이미지 슬라이드
// var clicker1 = document.querySelector("#text-click1");
// var clicker2 = document.querySelector("#text-click2");
// var clicker3 = document.querySelector("#text-click3");
// var chk1 = new Boolean(false);
// var chk2 = new Boolean(false);
// var chk3 = new Boolean(false);

// clicker1.addEventListener("click", function() {
//   if(chk1) {
//     clicker1.style.transform = "translateY(164px)";
//     chk1 = false;
//   } else {
//     clicker1.style.transform = "translateY(0)";
//     chk1 = true;
//   }
// });

// clicker2.addEventListener("click", function() {
//   if(chk2) {
//     clicker2.style.transform = "translateY(164px)";
//     chk2 = false;
//   } else {
//     clicker2.style.transform = "translateY(0)";
//     chk2 = true;
//   }
// });

// clicker3.addEventListener("click", function() {
//   if(chk3) {
//     clicker3.style.transform = "translateY(164px)";
//     chk3 = false;
//   } else {
//     clicker3.style.transform = "translateY(0)";
//     chk3 = true;
//   }
// });

// display 활용
var clicker1 = document.querySelector("#text-click1");
var clicker2 = document.querySelector("#text-click2");
var clicker3 = document.querySelector("#text-click3");
var img1 = document.querySelector(".img-card1");
var img2 = document.querySelector(".img-card2");
var img3 = document.querySelector(".img-card3");
var chk1 = new Boolean(false);
var chk2 = new Boolean(false);
var chk3 = new Boolean(false);

clicker1.addEventListener("click", function() {
  if(chk1) {
    img1.style.display = "block";
    chk1 = false;
  } else {
    img1.style.display = "none";
    chk1 = true;
  }
});

clicker2.addEventListener("click", function() {
  if(chk2) {
    img2.style.display = "block";
    chk2 = false;
  } else {
    img2.style.display = "none";
    chk2 = true;
  }
});

clicker3.addEventListener("click", function() {
  if(chk3) {
    img3.style.display = "block";
    chk3 = false;
  } else {
    img3.style.display = "none";
    chk3 = true;
  }
});