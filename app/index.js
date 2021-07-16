const playButton = document.querySelector(".elements__play-btn");
const pauseButton = document.querySelector(".elements__pause-btn");
const audio = document.querySelector(".audio__file");
let timeLeft = document.querySelector(".elements__time");


playButton.addEventListener("click", () => {
    pauseButton.classList.add("show");
    audio.play();
})

pauseButton.addEventListener("click", () => {
    pauseButton.classList.remove("show");
    audio.pause();
})


audio.addEventListener("timeupdate", function () {
    let duration = parseInt(audio.duration);
    let currentTime = parseInt(audio.currentTime);
    timeLeft = duration - currentTime;

    let s = timeLeft % 60;
    let m = Math.floor(timeLeft / 60 ) % 60;

    s = s < 10 ? "0"+s : s;
    m = m < 10 ? "0"+m : m;

    timeLeft.innerHTML = m+":"+s;
}, false)