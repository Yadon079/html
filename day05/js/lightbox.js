var pics = document.getElementsByClassName("pic");
var lightbox = document.getElementById("lightbox");
var lightboxImage = document.getElementById("lightboxImage");

for(let i = 0; i < pics.length; i++) {
  pics[i].addEventListener("click", showLightbox);
}

function showLightbox() {
  var bigLocation = this.getAttribute("data-src");
  lightboxImage.setAttribute("src", bigLocation);
  lightbox.style.display = "block";
}

lightbox.onclick = function() {
  lightbox.style.display = "none";
}