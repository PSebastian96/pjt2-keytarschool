const pianoKeys = document.querySelectorAll('#piano-keyboard .key');
let volumeSlider = document.querySelector('#volume-slider input');
let noteReveal = document.querySelector('#keys-reveal input')

// alert the user to view the page horizontally
function screenSize(pagePiano) {
    if (pagePiano.matches) { 
        window.alert("Turn your device horizontally for better experience.");
    }
  };
  
  let pagePiano = window.matchMedia("(max-width: 540px)")
  screenSize(pagePiano);
  pagePiano.addListener(screenSize);

// audio source and passing the key the right sound 
let audio = new Audio("assets/piano-sound/c4.mp3");

const playTune = (key) => {
    audio.src = `assets/piano-sound/${key}.mp3`;
    audio.play();
}

pianoKeys.forEach(key => {
    key.addEventListener('click', () => playTune(key.dataset.key))
});

const volumeSwitch = (e) => {
    audio.volume = e.target.value;
}

const hideNotes = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

volumeSlider.addEventListener("input", volumeSwitch);
noteReveal.addEventListener("click", hideNotes);
