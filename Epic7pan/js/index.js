const listWhite = document.getElementById("listWhite"),
  detail = listWhite.querySelector("li:nth-child(1)"),
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
  btnGallery = modalGallery.querySelector("button:nth-child(2)"),
  overlayGallery = modalGallery.querySelector(".overlay");

const strategy = listWhite.querySelector("li:nth-child(3)"),
  modalStrategy = document.getElementById("modalStrategy"),
  overlayStrategy = modalStrategy.querySelector(".overlay");

//strategy
function strategyOut() {
  modalStrategy.classList.add("hiddenStrategy");
}
function strategyClick() {
  modalStrategy.classList.remove("hiddenStrategy");
}
//gallery
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
  //strategy
  strategy.addEventListener("click", strategyClick);
  overlayStrategy.addEventListener("click", strategyOut);
}

init();
