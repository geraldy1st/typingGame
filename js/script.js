window.addEventListener('load', init);

// Globlas
let time = 5;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'seconds',
    'magic',
    'techtrap',
    'bounce',
    'throw',
    'break',
    'swing',
    'echo',
    'symptom',
    'wall',
    'laughter',
    'cocktail',
    'family',
    'investigate',
    'master',
    'noob',
    'hero',
    'hokage',
    'akatsuki',
    'generate',
    'jutsu',
    'dragon',
    'flamingo',
    'respect',
    'okizeme',
    'abare',
    'frames',
    'block',
    'promoted',
    'ranking',
    'challenger',
    'perfect'
];

// Initialize Game
function init(){
    // Load word from array
    showWord(word);
}

// Pick and show random word
function showWord(word){
    
}