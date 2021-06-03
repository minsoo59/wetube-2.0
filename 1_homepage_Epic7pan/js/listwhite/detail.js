const listWhite = document.getElementById("listWhite"),
  menu = listWhite.querySelector("li:nth-child(1)"),
  modal = document.getElementById("modalDetail"),
<<<<<<< HEAD
  btn = modal.querySelector("button"),
  overlay = modal.querySelector(".overlay"),
=======
  btn = modalDetail.querySelector("button"),
  overlay = modalDetail.querySelector(".overlay"),
>>>>>>> ab560b1cb87f258c5ff105a05e5b63f6b51d3de5
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
<<<<<<< HEAD
  // slide button
=======
>>>>>>> ab560b1cb87f258c5ff105a05e5b63f6b51d3de5
  prev.addEventListener("click", prevHandler);
  next.addEventListener("click", nextHandler);
}
init();

export default "detail.js";
