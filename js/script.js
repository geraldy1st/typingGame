window.addEventListener('load', init);

// Globlas

// Available Levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 1
}

// To change level
const currentLevel = levels.medium;

let time = currentLevel;
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
    'angular',
    'magic',
    'tech',
    'bounce',
    'throw',
    'break',
    'swing',
    'echo',
    'symptom',
    'wall',
    'laughter',
    'cocktail',
    'spinner',
    'family',
    'ninja',
    'javascript',
    'master',
    'program',
    'incremental',
    'coding',
    'hero',
    'hokage',
    'framework',
    'generate',
    'accessibility',
    'react',
    'dragon',
    'rush',
    'language',
    'flamingo',
    'respect',
    'motion',
    'google',
    'tiger',
    'frames',
    'block',
    'promoted',
    'ranking',
    'python',
    'machine',
    'challenger',
    'perfect',
    'collaboration',
    'deploy',
    'terminal',
    'array',
    'vue',
    'node',
    'html',
    'frontend',
];

// Initialize Game
function init(){
    // Show number of sec in UI
    seconds.innerHTML = currentLevel;
    // Load word from array
    showWord(words);
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
}

//Start match
function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    // If score is -1 display zero
    if(score === -1){
        scoreDisplay.inner = 0;
    }else{
        scoreDisplay.innerHTML = score;
    }
    scoreDisplay.innerHTML = score;
}

// Match currentWord to wordInput
function matchWords(){
    
        if(wordInput.value === currentWord.innerHTML){
            message.innerHTML = 'Great 👌';
            return true;
        }else{
            message.innerHTML = '🙄';
            return false;
        }
    
}

// Pick and show random word
function showWord(word){
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}
// Countdown timer

function countdown(){
    // Make sure time is not runout
    if(time > 0){
        // decrement
        time--;
    }else if(time === 0){
        // Game is over
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!🙅🏽';
        score = -1;
    }
}