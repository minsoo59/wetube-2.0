const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volumen = document.getElementById("volumen");

const handlePlayClick = (e) => {
  // if the video is playing, pause it
  if (video.paused) {
    video.play();
  } else {
    // else paly the video
    video.pause();
  }
};
const handlePause = (e) => (playBtn.innerText = "Play");
const handlePlay = (e) => (playBtn.innerText = "Pause");
const handleMute = (e) => {};

playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMute);
video.addEventListener("pause", handlePause);
video.addEventListener("play", handlePlay);
