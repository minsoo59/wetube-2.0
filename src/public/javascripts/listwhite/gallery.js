import "./overlay/overGall.js";
//gallery
fetch("../../javascripts/list/slide.txt").then(function (res) {
  res.text().then(function (text) {
    let items = text.split(",");
    let tags = "";
    for (let n = 0; n < items.length; n++) {
      let item = items[n];
      item = item.trim();
      let tag = `<li><img src="../../images/row/JPEG/${item}.jpg" alt="${item}"/></li>`;
      tags = tags + tag;
    }
    document.getElementById("slide").innerHTML = tags;
  });
  if (res.status == "404") {
    alert("Not found");
  }
});

const slide = document.getElementById("slide"),
  bullets = document.getElementById("bullets"),
  buLi = bullets.querySelectorAll("li"),
  slideToggle = document.getElementById("slideToggle");

let isToggle = true,
  timer = 0,
  phtoLength = 5, // 이 값이 fetch로 인해 0으로 바뀜 5에서
  photoindex = 0;

function slideHandler() {
  buLi[photoindex].classList.remove("on");
  photoindex++;
  photoindex %= phtoLength;
  buLi[photoindex].classList.add("on");

  slide.removeAttribute("style");
  slide.appendChild(slide.firstElementChild);
}

function init() {
  // slide
  let timer = setInterval(slideHandler, 2000);
  slideToggle.addEventListener("click", function (event) {
    event.preventDefault();
    let a = slideToggle.children[0];
    if (isToggle === true) {
      clearTimeout(timer);
      a.innerHTML = "▶";
      isToggle = false;
    } else {
      timer = setInterval(slideHandler, 2000);
      a.innerHTML = "||";
      isToggle = true;
    }
  });
}

init();
