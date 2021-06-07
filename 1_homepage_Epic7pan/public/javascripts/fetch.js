fetch("../javascripts/list/slide").then(function (res) {
  res.text().then(function (text) {
    let items = text.split(",");
    let tags = "";
    for (let n = 0; n < items.length; n++) {
      let item = items[n];
      item = item.trim();
      let tag = `<li><img src="images/row/JPEG/${item}.jpg" alt="${item}"/></li>`;
      tags = tags + tag;
    }
    document.getElementById("slide").innerHTML = tags;
  });
  if (res.status == "404") {
    alert("Not found");
  }
});

fetch("../javascripts/list/videos").then(function (res) {
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

fetch("../javascripts/list/upload_list").then(function (res) {
  res.text().then(function (text) {
    let items = text.split(",");
    let tags = "";
    for (let n = 0; n < items.length; n++) {
      let item = items[n];
      item = item.trim();
      let tag;
      if (item === "전체보기") {
        tag = `<li class="selected">${item}</li>`;
      } else {
        tag = `<li>${item}</li>`;
      }
      tags = tags + tag;
    }
    document.getElementById("upload_list").innerHTML = tags;
  });
  if (res.status == "404") {
    alert("Not found");
  }
});

export default fetch;
