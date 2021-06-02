const listWhite = document.getElementById("listWhite"),
  strategy = listWhite.querySelector("li:nth-child(3)"),
  modalStrategy = document.getElementById("modalStrategy"),
  overlayStrategy = modalStrategy.querySelector(".overlay"),
  uploadList = document.getElementById("upload_list"),
  uploadChild = uploadList.querySelectorAll("li");

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
let mClass = modalStrategy.classList;
let h = "hiddenStrategy";
function sOut() {
  mClass.add(h);
}
function sClick() {
  mClass.remove(h);
}

function init() {
  strategy.addEventListener("click", sClick);
  overlayStrategy.addEventListener("click", sOut);
  uploadList.addEventListener("click", uploadListSeclected);
}

init();

export default "strategy.js";
