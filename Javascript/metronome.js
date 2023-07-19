import Timer from "Javascript/timer.js"

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