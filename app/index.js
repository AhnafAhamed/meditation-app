const elements = document.querySelector(".elements");

const initialCards = [
    {
      title: "Meditation for beginners",
      time: "05:05",
      image: "./images/image.png",
      audio: "https://cdn.pixabay.com/download/audio/2021/02/21/audio_aeb0de1e93.mp3?filename=36-2991.mp3"
    },
    {
      title: "How to be more grateful",
      time: "05:05",
      image: "./images/image.png",
      audio: "https://cdn.pixabay.com/download/audio/2021/03/26/audio_294cdf43cb.mp3?filename=female-voice-and-electronica-2-3496.mp3"
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
        const cardElement = document.querySelector(this._template).
        content.querySelector(".elements__card").cloneNode(true);
        this._element = cardElement;
    }

    generateCard() {
        this._getTemplate();
        this._playButton = this._element.querySelector(".elements__play-btn");
        this._pauseButton = this._element.querySelector(".elements__pause-btn");
        this._audioSample = this._element.querySelector(".audio__file");
        this._audioSample.src = this._audio;
        this._element.querySelector(".elements__title").textContent = this._title;
        this._element.querySelector(".elements__time").textContent = this._time;
        this._setEventListeners();
        return this._element;
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
            this._pauseButton.classList.add("show");
            this._audioSample.play();
        })
        
        this._pauseButton.addEventListener("click", () => {
            this._pauseButton.classList.remove("show");
            this._audioSample.pause();
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
})