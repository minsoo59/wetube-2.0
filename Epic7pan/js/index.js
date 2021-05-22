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
  changeImg = videoBig.querySelector(".video_mid > a > img"),
  overlay2 = videoBig.querySelector(".overlay2");

const gallery = listWhite.querySelector("li:nth-child(2)"),
  modalGallery = document.getElementById("modalGallery"),
  btnGallery = modalGallery.querySelector("button:nth-child(1)"),
  overlayGallery = modalGallery.querySelector(".overlay");

const strategy = listWhite.querySelector("li:nth-child(3)");

function videoOut(event) {
  event.preventDefault();
  videoBig.classList.add("hidden");
  overlay2.classList.add("hidden");
}

function ulVideoHandler(event) {
  videoBig.classList.remove("hidden");
  overlay2.classList.remove("hidden");
  changeImg.src = event.target.src;
}

function nextHandler() {
  // ul에 ul첫번째 자식요소를 이동시킴
  // = ul.firstElementChild.appendTo("ul")
  ul.append(ul.firstElementChild);
}
function prevHandler() {
  ul.prepend(ul.lastElementChild);
}

function galleryOut() {
  modalGallery.classList.add("hidden");
}

function detailout() {
  modalDetail.classList.add("hidden");
}

function detailClick() {
  modalDetail.classList.remove("hidden");
}

function galleryClick() {
  modalGallery.classList.remove("hidden");
}

function init() {
  detail.addEventListener("click", detailClick);
  btnDetail.addEventListener("click", detailout);
  overlayDetail.addEventListener("click", detailout);
  prev.addEventListener("click", prevHandler);
  next.addEventListener("click", nextHandler);
  ul.addEventListener("click", ulVideoHandler);
  videoBig.addEventListener("click", videoOut);
  overlay2.addEventListener("click", videoOut);

  gallery.addEventListener("click", galleryClick);
  btnGallery.addEventListener("click", galleryOut);
  overlayGallery.addEventListener("click", galleryOut);
}

init();
