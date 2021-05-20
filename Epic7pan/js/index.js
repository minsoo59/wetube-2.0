const listWhite = document.getElementById("listWhite"),
  detail = listWhite.querySelector("li:nth-child(1)"),
  gallery = listWhite.querySelector("li:nth-child(2)"),
  strategy = listWhite.querySelector("li:nth-child(3)"),
  modal = document.getElementById("modal"),
  btn = modal.querySelector("button"),
  overlay = modal.querySelector(".overlay"),
  prev = document.getElementById("prev"),
  next = document.getElementById("next"),
  videoList = document.getElementById("videoList"),
  ul = videoList.querySelector("ul");
let videos = ul.querySelectorAll(".video");
let i = 0;

function nextHandler() {
  if (i == videos.length) {
    i = 0;
  }
  ul.append(videos[i]);
  i++;
}
function prevHandler() {
  if (i == videos.length) {
    i = 0;
  }
  ul.append(videos[i]);
  i--;
}

function menuOut() {
  modal.classList.add("hidden");
}

function listClick() {
  modal.classList.remove("hidden");
}

function init() {
  detail.addEventListener("click", listClick);
  btn.addEventListener("click", menuOut);
  overlay.addEventListener("click", menuOut);
  prev.addEventListener("click", prevHandler);
  next.addEventListener("click", nextHandler);
}

init();
