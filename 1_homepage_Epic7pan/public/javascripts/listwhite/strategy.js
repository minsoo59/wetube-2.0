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

const modal = document.getElementById("modalStrategy"),
  overlay = modal.querySelector(".overlay"),
  upload = document.getElementById("upload"),
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
function sOut() {
  location.href = "/";
}

function init() {
  overlay.addEventListener("click", sOut);
  uList.addEventListener("click", uListSeclected);
}

init();
