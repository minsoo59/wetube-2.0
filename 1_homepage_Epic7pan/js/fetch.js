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

export default fetch;
