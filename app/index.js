
class Card {
    constructor({ data }, template) {
        this._audio = data.audioButton;
        this._time = data.time;
        this._title = data.title;
        this._template = template;
    }

    _getTemplate() {
        this._element = document.querySelector(this._template).content.querySelector(".elements__card").cloneNode(true);
    }

    generateCard() {
        this._getTemplate();
        this._playButton = this._element.querySelector(".elements__play-btn");
        this._pauseButton = this._element.querySelector(".elements__pause-btn");
        this._element.querySelector(".elements__title") = this._title;
        this._element.querySelector(".elements__time") = this._time;
        this._setEventListeners();
    }

    _timeUpdate() {
        this._duration = parseInt(this._audio.duration);
        this._currentTime = parseInt(this._audio.currentTime);
        this._timeLeft = this._duration - this._currentTime;
    
    
        var s;
        var m;
    
        s = this._timeLeft % 60;
        m = Math.floor(timeLeft / 60) % 60;
    
        s = s < 10 ? "0" + s : s;
        m = m < 10 ? "0" + m : m;
    
    
        this._time.innerHTML = m + ":" + s;
    }

    _setEventListeners() {
        this._playButton.addEventListener("click", () => {
            pauseButton.classList.add("show");
            audio.play();
        })
        
        this._pauseButton.addEventListener("click", () => {
            pauseButton.classList.remove("show");
            audio.pause();
        })
        
        window.addEventListener("load", this._timeUpdate);
        
        this._audio.addEventListener("timeupdate", this._timeUpdate);
    }
}





// const playButton = document.querySelector(".elements__play-btn");
// const pauseButton = document.querySelector(".elements__pause-btn");
// const audio = document.querySelector(".audio__file");
// let time = document.querySelector(".elements__time");


// playButton.addEventListener("click", () => {
//     pauseButton.classList.add("show");
//     audio.play();
// })

// pauseButton.addEventListener("click", () => {
//     pauseButton.classList.remove("show");
//     audio.pause();
// })

// window.addEventListener("load", timeUpdate);

// audio.addEventListener("timeupdate", timeUpdate);

// function timeUpdate() {
//     let duration = parseInt(audio.duration);
//     let currentTime = parseInt(audio.currentTime);
//     timeLeft = duration - currentTime;


//     var s;
//     var m;

//     s = timeLeft % 60;
//     m = Math.floor(timeLeft / 60) % 60;

//     s = s < 10 ? "0" + s : s;
//     m = m < 10 ? "0" + m : m;


//     time.innerHTML = m + ":" + s;
// }