const listWhite = document.getElementById("listWhite"),
  menu = listWhite.querySelector("li:nth-child(3)"),
  modal = document.getElementById("modalStrategy"),
  overlay = modal.querySelector(".overlay"),
  uList = document.getElementById("upload_list"),
  write = document.getElementById("write"),
  upload = document.getElementById("upload"),
  item_create = document.getElementById("item_create"),
  pageTitle = document.getElementById("pageTitle");
let uChild = uList.children;

function writeHandler() {
  // event.preventDefault();
  upload.style.display = "none";
  item_create.style.display = "block";
  pageTitle.style.display = "block";
  // location.href = "/create";
}

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
  write.addEventListener("click", writeHandler);
}

init();

export default "strategy.js";
