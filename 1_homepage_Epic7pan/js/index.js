const listWhite = document.getElementById("listWhite");

const detail = listWhite.querySelector("li:nth-child(1)"),
  modalDetail = document.getElementById("modalDetail"),
  btnDetail = modalDetail.querySelector("button"),
  overlayDetail = modalDetail.querySelector(".overlay"),
  prev = document.getElementById("prev"),
  next = document.getElementById("next"),
  videoList = document.getElementById("videoList"),
  ul = videoList.querySelector("ul"),
  videoBig = document.getElementById("videoBig"),
  changeImg = videoBig.querySelector("img.video_mid");

const gallery = listWhite.querySelector("li:nth-child(2)"),
  modalGallery = document.getElementById("modalGallery"),
  btnGallery = modalGallery.querySelector("button"),
  overlayGallery = modalGallery.querySelector(".overlay"),
  slide = document.getElementById("slide"),
  bullets = document.getElementById("bullets"),
  bulletsLi = bullets.querySelectorAll("li"),
  slideToggle = document.getElementById("slideToggle");
let isToggle = true,
  timer = 0,
  phtoLength = slide.children.length,
  photoindex = 0;

const strategy = listWhite.querySelector("li:nth-child(3)"),
  modalStrategy = document.getElementById("modalStrategy"),
  overlayStrategy = modalStrategy.querySelector(".overlay"),
  uploadList = document.getElementById("upload_list"),
  uploadChild = uploadList.querySelectorAll("li");
let selected = document.querySelectorAll("#upload_list li.selected");

//strategy
function uploadListSeclected(event) {
  // for (let i = 0; i < uploadChild.length; i++) {
  //   uploadChild[i].classList.remove("selected");
  // }
  uploadChild.forEach((list) => list.classList.remove("selected"));
  let p = event.target.parentElement;
  let selecIndex = Array.prototype.indexOf.call(p.children, event.target);
  uploadChild[selecIndex].classList.add("selected");
}

function strategyOut() {
  modalStrategy.classList.add("hiddenStrategy");
}
function strategyClick() {
  modalStrategy.classList.remove("hiddenStrategy");
}

//gallery
function slideHandler() {
  bulletsLi[photoindex].classList.remove("on");
  photoindex++;
  photoindex %= phtoLength;
  bulletsLi[photoindex].classList.add("on");

  slide.removeAttribute("style");
  slide.appendChild(slide.firstElementChild);
}

function galleryOut() {
  modalGallery.classList.add("hiddenGallery");
}
function galleryClick() {
  modalGallery.classList.remove("hiddenGallery");
}
//detail
function videoOut(event) {
  event.preventDefault();
  videoBig.classList.add("hiddenDetail");
}
function ulVideoHandler(event) {
  videoBig.classList.remove("hiddenDetail");
  changeImg.src = event.target.src;
}
function nextHandler() {
  // = ul.firstElementChild.appendTo("ul") ul에 ul첫번째 자식요소를 이동시킴
  ul.append(ul.firstElementChild);
}
function prevHandler() {
  ul.prepend(ul.lastElementChild);
}
function detailout() {
  modalDetail.classList.add("hiddenDetail");
}
function detailClick() {
  modalDetail.classList.remove("hiddenDetail");
}
function init() {
  //detail
  detail.addEventListener("click", detailClick);
  btnDetail.addEventListener("click", detailout);
  overlayDetail.addEventListener("click", detailout);
  prev.addEventListener("click", prevHandler);
  next.addEventListener("click", nextHandler);
  ul.addEventListener("click", ulVideoHandler);
  videoBig.addEventListener("click", videoOut);
  //gallery
  gallery.addEventListener("click", galleryClick);
  btnGallery.addEventListener("click", galleryOut);
  overlayGallery.addEventListener("click", galleryOut);
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
  //strategy
  strategy.addEventListener("click", strategyClick);
  overlayStrategy.addEventListener("click", strategyOut);
  uploadList.addEventListener("click", uploadListSeclected);
}

init();
