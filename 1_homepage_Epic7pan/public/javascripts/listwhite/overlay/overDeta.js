const modal = document.getElementById("modalDetail"),
  btn = modal.querySelector("button"),
  overlay = modal.querySelector(".overlay");

function dout() {
  location.href = "/";
}

function init() {
  btn.addEventListener("click", dout);
  overlay.addEventListener("click", dout);
}

init();

export default "overDeta.js";
