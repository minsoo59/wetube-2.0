const skills = document.getElementById("skills");
let dropdown = document.getElementById("dropdown");
const desiginList = document.querySelector("#design_list");
const skillsList = document.querySelector("#skills_list");

if (dropdown && skillsList) {
  fetch("../list/skills_list.txt").then(function (response) {
    response.text().then(function (text) {
      let items = text.split(",");
      let tags = "";
      for (let n = 0; n < items.length; n++) {
        let item = items[n];
        item = item.trim(); // 앞뒤에 쓰잘떼기 없는 스페이스 공간 자르기 위해
        let tag = `<li><a href=/${"skills" + item}>${item}</a></li>`;
        tags = tags + tag;
      }
      skillsList.innerHTML = tags;
      dropdown.innerHTML = tags;
    });
    if (response.status == "404") {
      alert("fetch Not Read");
    }
  });
}
if (desiginList) {
  fetch("../list/design_list.txt").then(function (response) {
    response.text().then(function (text) {
      let items = text.split(",");
      let tags = "";
      for (let n = 0; n < items.length; n++) {
        let item = items[n];
        item = item.trim();
        let tag = `<li>${item}<img src="images/300size/${item}.png" alt="${item}"/></li>`;
        tags = tags + tag;
      }
      desiginList.innerHTML = tags;
    });
    if (response.status == "404") {
      alert("fetch Not Read");
    }
  });
}

function skillsHandler() {
  dropdown.classList.toggle("on");
}

function init() {
  skills.addEventListener("click", skillsHandler);
}

init();
