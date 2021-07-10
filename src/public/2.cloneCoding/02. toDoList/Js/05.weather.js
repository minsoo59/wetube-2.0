const weather = document.querySelector(".js-weather");

const CORDS = "cords";
const API_KEY = "485152cb1a7ef3bee03f2324cbf22ae4";

// function getWeather(lat, log) {
//   // fetch함수는 외부의 자료를 request 함수
//   // then은 기본적으로 함수호출이지만 데이터가 완전히 들어온 다음 호출하는것.
//   fetch(
//     `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
//   )
//     .then(function (response) {
//       // 대기상태(가져온 데이터를 처리중)가 됨. 그럼 than을 써야함
//       // console.log(response.json());
//       return response.json();
//     })
//     .then(function (json) {
//       const temperature = json.main.temp;
//       const place = json.name;
//       weather.innerText = `${temperature} @ ${place}`;
//     });
// }

async function getWeather(lat, log) {
  let weatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
  await (
    await fetch(weatherUrl, {
      function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
      },
    })
  ).json();
}

function saveCoords(coordObj) {
  localStorage.setItem(CORDS, JSON.stringify(coordObj));
}

function handleGetSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordObj = {
    // 객체에 변수의 이름과 객체의key의 이름을 같게 저장할때는
    // latitude : latitude, longitude : longitude
    latitude,
    longitude,
  };
  saveCoords(coordObj);
  getWeather(lat, log);
}

function handleError() {
  console.log("Can't access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGetSuccess, handleError);
}

function loadCorods() {
  const loededCords = localStorage.getItem(CORDS);
  if (loededCords === null) {
    askForCoords();
  } else {
    //getWeather
    const parseCoords = JSON.parse(loededCords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCorods();
}

init();
