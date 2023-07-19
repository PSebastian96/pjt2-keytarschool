const pianoKeys = document.querySelectorAll('#piano-keyboard .key');
let volumeSlider = document.querySelector('#volume-slider input');
let noteReveal = document.querySelector('#keys-reveal input')

// audio source and passing the key the right sound 
let audio = new Audio("assets/piano-sounds/c4.mp3");

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
