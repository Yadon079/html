// 이미지 투명도
var carouselImg = document.querySelector(".img-hover");

carouselImg.addEventListener("mouseover", function() {
  carouselImg.style.opacity = "0.5";
});
carouselImg.addEventListener("mouseout", function() {
  carouselImg.style.opacity = "1";
});

// 이미지 슬라이드
var clicker = document.querySelector(".card-body");

clicker.addEventListener("click", function() {
  clicker.style.transform = "translateY(164px)";
});