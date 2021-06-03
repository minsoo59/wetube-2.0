const listWhite = document.getElementById("listWhite"),
  menu = listWhite.querySelector("li:nth-child(2)"),
  modal = document.getElementById("modalGallery"),
  btn = modal.querySelector("button"),
  overlay = modal.querySelector(".overlay"),
  slide = document.getElementById("slide"),
  bullets = document.getElementById("bullets"),
  buLi = bullets.querySelectorAll("li"),
  slideToggle = document.getElementById("slideToggle");

let isToggle = true,
  timer = 0,
  phtoLength = 5, // 이 값이 fetch로 인해 0으로 바뀜 5에서
  photoindex = 0;

function slideHandler() {
  // if (photoindex == 0) buLi[photoindex].classList.add("on");
  buLi[photoindex].classList.remove("on");
  photoindex++;
  photoindex %= phtoLength;
  buLi[photoindex].classList.add("on");

  slide.removeAttribute("style");
  slide.appendChild(slide.firstElementChild);
}
let mClass = modal.classList;
let h = "hiddenGallery";
function gOut() {
  mClass.add(h);
}
function gClick() {
  mClass.remove(h);
}

function init() {
  menu.addEventListener("click", gClick);
  btn.addEventListener("click", gOut);
  overlay.addEventListener("click", gOut);

  // slide
  let timer = setInterval(slideHandler, 2000);
  slideToggle.addEventListener("click", function (event) {
    event.preventDefault();
    let a = slideToggle.children[0];
    if (isToggle === true) {
      clearTimeout(timer);
      a.innerHTML = "▶";
      isToggle = false;
    } else {
      timer = setInterval(slideHandler, 2000);
      a.innerHTML = "||";
      isToggle = true;
    }
  });
}

init();

export default "gallery.js";
