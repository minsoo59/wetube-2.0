const listWhite = document.getElementById("listWhite"),
  menu = listWhite.querySelector("li:nth-child(3)"),
  modal = document.getElementById("modalStrategy"),
  overlay = modal.querySelector(".overlay"),
  uList = document.getElementById("upload_list");
let uChild = uList.children;

function uListSeclected(event) {
  // uChild.forEach((list) => list.classList.remove("selected"));
  for (let n = 0; n < uChild.length; n++) {
    uChild[n].classList.remove("selected");
  }
  let p = event.target.parentElement;
  let selecIndex = Array.prototype.indexOf.call(p.children, event.target);
  uChild[selecIndex].classList.add("selected");
}
let mClass = modal.classList;
let h = "hiddenStrategy";
function sOut() {
  mClass.add(h);
}
function sClick() {
  mClass.remove(h);
}

function init() {
  menu.addEventListener("click", sClick);
  overlay.addEventListener("click", sOut);
  uList.addEventListener("click", uListSeclected);
}

init();

export default "strategy.js";
