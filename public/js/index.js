const skills = document.getElementById("skills");
let dropdown = document.getElementById("dropdown");

fetch("list/skills_list").then(function (response) {
  response.text().then(function (text) {
    let items = text.split(",");
    let tags = "";
    for (let n = 0; n < items.length; n++) {
      let item = items[n];
      item = item.trim(); // 앞뒤에 쓰잘떼기 없는 스페이스 공간 자르기 위해
      let tag = `<li><a href=${"skills" + item + ".html"}>${item}</a></li>`;
      tags = tags + tag;
    }
    document.querySelector("#skills_list").innerHTML = tags;
    document.querySelector("#dropdown").innerHTML = tags;
  });
  if (response.status == "404") {
    alert("Not found");
  }
});

fetch("list/design_list").then(function (response) {
  response.text().then(function (text) {
    let items = text.split(",");
    let tags = "";
    for (let n = 0; n < items.length; n++) {
      let item = items[n];
      item = item.trim();
      let tag = `<li>${item}<img src="images/300size/${item}.png" alt="${item}"/></li>`;
      tags = tags + tag;
    }
    document.querySelector("#design_list").innerHTML = tags;
  });
  if (response.status == "404") {
    alert("Not found");
  }
});

function skillsHandler(event) {
  console.log(event);
  dropdown.classList.toggle("on");
}

function init() {
  skills.addEventListener("click", skillsHandler);
}

init();
