import Timer from "./timer.js"

// Tempo section
const tempoInput = document.getElementById('tempo-input');
const decreaseTempoBtn = document.getElementById('decrease-tempo');
const increaseTempoBtn = document.getElementById('increase-tempo');

// Beats per measure section
const measureInput = document.getElementById('measure-input');
const increaseBeats = document.getElementById('increase-measure');
const decreaseBeats = document.getElementById('decrease-measure');;

// Play - Stop button section
const playStopBtn = document.getElementById('play-pause');

// audio source of the metronome clicks
const click1 = new Audio('assets/metronome-sound/click1.wav');
const click2 = new Audio('assets/metronome-sound/click2.wav');

let bpm = 90;
let beat = 4
let count = 0;
let isRunning = false;

//Tempo section (Increase and decrease button functionality)
decreaseTempoBtn.addEventListener('click', () => {
    if (bpm <= 60) { 
    alert('60 BPM is minimum!');
    return;
};
    bpm--;
    tempoInput.value = bpm;
    metronome.timeInterval = 60000 / bpm;
});

increaseTempoBtn.addEventListener('click', () => {
    if (bpm >= 180) { 
        alert('180 BPM is maximum!');
        return;
    };
    bpm++;
    tempoInput.value = bpm;
    metronome.timeInterval = 60000 / bpm;
});

// Beats per measure section (Increase and decrease button functionality)
decreaseBeats.addEventListener('click', () => {
    while (beat <= 1) { 
    alert('1 Beat Per Measure is minimum!');
    return;
};
    beat--;
    measureInput.value = beat;
    count = 0;
});

increaseBeats.addEventListener('click', () => {
    while (beat >= 6) { 
        alert('6 Beat Per Measure is maximum!');
        return;
    };
    beat++;
    measureInput.value = beat;
    count = 0;
});

// play and stop function
playStopBtn.addEventListener('click', () => {
    if (!isRunning) {
        metronome.start();
        isRunning = true;
        playStopBtn.textContent = "STOP";
    } else {
        metronome.stop();
        isRunning = false;
        playStopBtn.textContent = "START";
    }
});

function playClick() {
    while (count === beat) {
        count = 0;
    }
    if ( count === 0) {
        count = 0;
        click1.play();
        click1.currentTime = 0;
    } else {
        click2.play();
        click2.currentTime = 0;
    }
    count++;
};
//metronome - 60000 / bpm will give the timer in milliseconds, since the timer uses millisecond value
const metronome = new Timer (playClick, 60000 / bpm, {immediate : true});