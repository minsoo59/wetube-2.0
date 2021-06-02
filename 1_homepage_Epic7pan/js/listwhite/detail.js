const listWhite = document.getElementById("listWhite"),
  menu = listWhite.querySelector("li:nth-child(1)"),
  modal = document.getElementById("modalDetail"),
  btn = modalDetail.querySelector("button"),
  overlay = modalDetail.querySelector(".overlay"),
  prev = document.getElementById("prev"),
  next = document.getElementById("next"),
  videoList = document.getElementById("videoList"),
  ul = videoList.querySelector("ul");

function nextHandler() {
  ul.append(ul.firstElementChild);
}
function prevHandler() {
  ul.prepend(ul.lastElementChild);
}
let mClass = modal.classList;
let h = "hiddenDetail";
function dout() {
  mClass.add(h);
}
function dClick() {
  mClass.remove(h);
}

function init() {
  menu.addEventListener("click", dClick);
  btn.addEventListener("click", dout);
  overlay.addEventListener("click", dout);
  prev.addEventListener("click", prevHandler);
  next.addEventListener("click", nextHandler);
}
init();

export default "detail.js";
