// main.js
let theSlider = document.getElementById("volume-slider");
let theVol = document.getElementById("volume-number");
let hornS = document.getElementById("horn-sound");
let volImg = document.getElementById("volume-image");
let soundImg = document.getElementById("sound-image");
let aHorn = document.getElementById("radio-air-horn");
let cHorn = document.getElementById("radio-car-horn");
let pHorn = document.getElementById("radio-party-horn");
let theForm = document.getElementById("party-horn-form");
let honkBtn = document.getElementById("honk-btn");

theSlider.addEventListener('input', function () {
	theVol.value = theSlider.value;
  hornS.volume = (theSlider.value/100);
  if (theSlider.value < 67 && theSlider.value > 33) {
    volImg.src = "./assets/media/icons/volume-level-2.svg";
    honkBtn.disabled = false;
  }
  else if (theSlider.value < 34 && theSlider.value > 0) {
    volImg.src = "./assets/media/icons/volume-level-1.svg";
    honkBtn.disabled = false;
  }
  else if (theSlider.value < 1) {
    volImg.src = "./assets/media/icons/volume-level-0.svg";
    honkBtn.disabled = true;
  }
  else {
    volImg.src = "./assets/media/icons/volume-level-3.svg";
    honkBtn.disabled = false;
  }
}, false);


theVol.addEventListener('input', function () {
	theSlider.value = theVol.value;
  hornS.volume = (theVol.value/100);
  if (theVol.value < 67 && theSlider.value > 33) {
    volImg.src = "./assets/media/icons/volume-level-2.svg";
    honkBtn.disabled = false;
  }
  else if (theVol.value < 34 && theSlider.value > 0) {
    volImg.src = "./assets/media/icons/volume-level-1.svg";
    honkBtn.disabled = false;
  }
  else if (theVol.value < 1) {
    volImg.src = "./assets/media/icons/volume-level-0.svg";
    honkBtn.disabled = true;
  }
  else {
    volImg.src = "./assets/media/icons/volume-level-3.svg";
    honkBtn.disabled = false;
  }
}, false);

aHorn.addEventListener('click', function() {
  hornS.src="./assets/media/audio/air-horn.mp3";
  soundImg.src="./assets/media/images/air-horn.svg";
}, false);

cHorn.addEventListener('click', function() {
  hornS.src="./assets/media/audio/car-horn.mp3";
  soundImg.src="./assets/media/images/car.svg";
}, false);

pHorn.addEventListener('click', function() {
  hornS.src="./assets/media/audio/party-horn.mp3";
  soundImg.src="./assets/media/images/party-horn.svg";
}, false);

theForm.addEventListener('submit', function(event) {
    event.preventDefault();
	hornS.play();
}, false);















