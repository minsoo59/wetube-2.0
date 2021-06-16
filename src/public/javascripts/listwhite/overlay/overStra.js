const modal = document.getElementById("modalStrategy"),
  overlay = modal.querySelector(".overlay");

function sOut() {
  location.href = "/epic7pan";
}

function init() {
  overlay.addEventListener("click", sOut);
}

init();

export default "overStra.js";
