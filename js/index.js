const skills = document.getElementById("skills");
let dropdown = document.getElementById("dropdown");

function skillsHandler(event) {
  event.preventDefault();
  dropdown.classList.toggle("on");
}

function init() {
  skills.addEventListener("click", skillsHandler);
}

init();
