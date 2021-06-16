const modal = document.getElementById("modalGallery"),
  btn = modal.querySelector("button"),
  overlay = modal.querySelector(".overlay");

function gOut() {
  location.href = "/epic7pan";
}

function init() {
  btn.addEventListener("click", gOut);
  overlay.addEventListener("click", gOut);
}

init();

export default "overGall.js";
