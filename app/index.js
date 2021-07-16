const playButton = document.querySelector(".elements__play-btn");
const pauseButton = document.querySelector(".elements__pause-btn");
const audio = document.querySelector(".audio__file");

playButton.addEventListener("click", () => {
    pauseButton.classList.add("show");
    audio.play();
})

pauseButton.addEventListener("click", () => {
    pauseButton.classList.remove("show");
    audio.pause();
})

alert()
alert()