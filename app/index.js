const playButton = document.querySelector(".elements__play-btn");
const pauseButton = document.querySelector(".elements__pause-btn");
const audio = document.querySelector(".audio__file");
let time = document.querySelector(".elements__time");


playButton.addEventListener("click", () => {
    pauseButton.classList.add("show");
    audio.play();
})

pauseButton.addEventListener("click", () => {
    pauseButton.classList.remove("show");
    audio.pause();
})

window.addEventListener("load", timeUpdate);

audio.addEventListener("timeupdate", timeUpdate);

function timeUpdate() {
    let duration = parseInt(audio.duration);
    let currentTime = parseInt(audio.currentTime);
    timeLeft = duration - currentTime;

    
    var s;
    var m;

    s = timeLeft % 60;
    m = Math.floor(timeLeft / 60 ) % 60;

    s = s < 10 ? "0"+s : s;
    m = m < 10 ? "0"+m : m;


    time.innerHTML = m+":"+s;
}