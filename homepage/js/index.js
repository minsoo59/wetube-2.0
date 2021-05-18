// const home = document.getElementById("home");
// const introduce = document.getElementById("introduce");
const skills = document.getElementById("skills");
let dropdown = document.getElementById("dropdown");
// const coding = document.getElementById("coding");
// const coding2 = document.getElementById("coding2");
// const projects = document.getElementById("projects");
// const projects2 = document.getElementById("projects2");

// function clickHome() {
//   location.href = "home.html";
// }
// function clickIntroduce() {
//   location.href = "index.html";
// }
// function codingHandler() {
//   location.href = "skillsCoding.html";
// }
// function projectsHandler() {
//   location.href = "skillsProjects.html";
// }
function skillsHandler(event) {
  event.preventDefault();
  dropdown.classList.toggle("on");
}

function init() {
  // home.addEventListener("click", clickHome);
  // introduce.addEventListener("click", clickIntroduce);
  skills.addEventListener("click", skillsHandler);
  // coding.addEventListener("click", codingHandler);
  // projects.addEventListener("click", projectsHandler);
  // coding2.addEventListener("click", codingHandler);
  // projects2.addEventListener("click", projectsHandler);
}

init();
