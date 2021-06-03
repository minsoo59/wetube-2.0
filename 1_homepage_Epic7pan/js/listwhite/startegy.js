const listWhite = document.getElementById("listWhite"),
  menu = listWhite.querySelector("li:nth-child(3)"),
  modal = document.getElementById("modalStrategy"),
  overlay = modal.querySelector(".overlay"),
  uList = document.getElementById("upload_list"),
  uChild = uList.querySelectorAll("li");

function uListSeclected(event) {
  uChild.forEach((list) => list.classList.remove("selected"));
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

  // ajax로 목록을 생성했을 때 이 이벤트명령이 씹힘. 비동기 코드라서 다 실행되고 되니까 그런듯?
  // uChild[0].classList.add("selected");

  uList.addEventListener("click", uListSeclected);
}

init();

export default "strategy.js";
