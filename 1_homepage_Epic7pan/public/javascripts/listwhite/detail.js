//detail
fetch("../../javascripts/list/videos").then(function (res) {
  res.text().then(function (text) {
    let items = text.split(",");
    let tags = "";
    for (let n = 0; n < items.length; n++) {
      let item = items[n];
      item = item.trim();
      let tag = `
                  <li id="${item}" class="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${item}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                  </li>
                `;
      tags = tags + tag;
    }
    document.querySelector("#videoList > ul").innerHTML = tags;
  });
  if (res.status == "404") {
    alert("Not found");
  }
});

const listWhite = document.getElementById("listWhite"),
  // menu = listWhite.querySelector("li:nth-child(1)"),
  modal = document.getElementById("modalDetail"),
  btn = modal.querySelector("button"),
  overlay = modal.querySelector(".overlay"),
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
  location.href = "/";
}

function init() {
  // menu.addEventListener("click", dClick);
  btn.addEventListener("click", dout);
  // 이벤트발생한거랑 컨트롤러 부분 그러니까 프론트엔드쪽 이벤트 발생부분이랑 백엔드 컨트롤러 이어야함.
  overlay.addEventListener("click", dout);
  // slide button
  prev.addEventListener("click", prevHandler);
  next.addEventListener("click", nextHandler);
}
init();
