// strategy
fetch("../javascripts/list/upload_list").then(function (res) {
  res.text().then(function (text) {
    let items = text.split(",");
    let tags = "";
    for (let n = 0; n < items.length; n++) {
      let item = items[n];
      item = item.trim();
      let tag;
      if (item === "전체보기") {
        tag = `<li class="selected">${item}</li>`;
      } else {
        tag = `<li>${item}</li>`;
      }
      tags = tags + tag;
    }
    document.getElementById("upload_list").innerHTML = tags;
  });
  if (res.status == "404") {
    alert("Not found");
  }
});

const listWhite = document.getElementById("listWhite"),
  // menu = listWhite.querySelector("li:nth-child(3)"),
  modal = document.getElementById("modalStrategy"),
  overlay = modal.querySelector(".overlay"),
  uList = document.getElementById("upload_list"),
  write = document.getElementById("write"),
  upload = document.getElementById("upload"),
  item = document.getElementById("item"),
  // itemTitle = item.querySelectorAll("div > h4 > li"),
  writeingList = document.getElementById("writeingList"),
  pageTitle = document.getElementById("pageTitle");
let uChild = uList.children;

function writeHandler() {
  upload.style.display = "none";
  writeingList.style.display = "block";
  pageTitle.style.display = "block";
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
  location.href = "/";
}
function sClick() {
  mClass.remove(h);
}

function init() {
  // menu.addEventListener("click", sClick);
  overlay.addEventListener("click", sOut);
  uList.addEventListener("click", uListSeclected);
  write.addEventListener("click", writeHandler);
  // itemTitle.addEventListener("click", writeHandler);
}

init();
