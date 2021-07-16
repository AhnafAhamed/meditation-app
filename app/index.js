const elements = document.querySelector(".elements");

const initialCards = [
    {
      title: "Meditaion for beginners",
      time: "05:05",
      image: "./images/image.png",
      audio: "./audio/audio.mp3"
    },
    {
      title: "How to be more grateful",
      time: "05:05",
      image: "./images/image.png",
      audio: "./audio/audio.mp3"
    },
    {
      title: "How to relieve stress",
      time: "05:05",
      image: "./images/image.png",
      audio: "./audio/audio.mp3"
    },
    {
      title: "How to sleep better",
      time: "05:05",
      image: "./images/image.png",
      audio: "./audio/audio.mp3"
    },
    {
      title: "How to reduce anxiety",
      time: "05:05",
      image: "./images/image.png",
      audio: "./audio/audio.mp3"
    },
    {
      title: "How to improve self esteem",
      time: "05:05",
      image: "./images/image.png",
      audio: "./audio/audio.mp3"
    },
  ];
class Card {
    constructor( data , template) {
        this._template = template;
        this._time = data.time;
        this._title = data.title;
        this._image = data.image;
        this._audio = data.audio;
    }

    _getTemplate() {
        this._element = document.querySelector(this._template).content.querySelector(".elements__card").cloneNode(true);
    }

    generateCard() {
        this._getTemplate();
        this._playButton = this._element.querySelector(".elements__play-btn");
        this._pauseButton = this._element.querySelector(".elements__pause-btn");
        this._title = this._element.querySelector(".elements__title");
        this._time = this._element.querySelector(".elements__time");
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
        
        this._playButton.addEventListener("timeupdate", this._timeUpdate);
    }
}

function createNewCard(cards, cardContainer){
  const newCard = new Card(cards, cardContainer);
  const newCardElement = newCard.generateCard();
  elements.prepend(newCardElement);
}

initialCards.forEach((item) => {
    createNewCard(item, "#card-template");
    console.log(createNewCard(item, "#card-template"));
})


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