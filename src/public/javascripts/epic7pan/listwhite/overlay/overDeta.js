const modal = document.getElementById("modalDetail"),
  btn = modal.querySelector("button"),
  overlay = modal.querySelector(".overlay");

function dout() {
  location.href = "/epic7pan";
}

function init() {
  btn.addEventListener("click", dout);
  overlay.addEventListener("click", dout);
}

init();

export default "overDeta.js";
