// Image call function
const body = document.querySelector("body");
const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  const image = new Image();
  //   image.src = `../../backgroundPicture/${imgNumber + 1}.jpg`;
  image.src = `./backgroundPicture/${3}.jpg`;
  image.classList.add("bgImage");
  // body.appendChild(image);
  // 조사요망 appendChild랑 비슷한 효과인듯?
  body.prepend(image);
}

function getRandom() {
  // math 함수 = math.cell(올림), math.floor(내림)
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
