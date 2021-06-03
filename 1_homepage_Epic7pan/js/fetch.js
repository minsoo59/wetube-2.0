fetch("list/slide").then(function (response) {
  response.text().then(function (text) {
    let items = text.split(",");
    let tags = "";
    for (let n = 0; n < items.length; n++) {
      let item = items[n];
      item = item.trim();
      let tag = `<li><img src="images/row/JPEG/${item}.jpg" alt="${item}"/></li>`;
      tags = tags + tag;
    }
    document.querySelector("#slide").innerHTML = tags;
  });
  if (response.status == "404") {
    alert("Not found");
  }
});

fetch("list/videos").then(function (response) {
  response.text().then(function (text) {
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
  if (response.status == "404") {
    alert("Not found");
  }
});

fetch("list/upload_list").then(function (response) {
  response.text().then(function (text) {
    let items = text.split(",");
    let tags = "";
    for (let n = 0; n < items.length; n++) {
      let item = items[n];
      item = item.trim();
      let tag = `<li>${item}</li>`;
      tags = tags + tag;
    }
    document.querySelector("#upload_list").innerHTML = tags;
  });
  if (response.status == "404") {
    alert("Not found");
  }
});

export default "fetch".js;
