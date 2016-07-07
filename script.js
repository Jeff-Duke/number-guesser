var guessButton = document.querySelector('#guess-button');
var guessInput = document.querySelector('#user-guess');
var guessOutput = document.querySelector('#guess-output');
var userMessage = document.querySelector('.user-message');
var lastGuess = document.querySelector('.last-guess')
var clearButton = document.querySelector('#clear-button');
var resetButton = document.querySelector('#reset-button');
var minInput = document.querySelector('#min-input');
var maxInput = document.querySelector('#max-input');
var randomNumber = Math.round((Math.random() * (maxInput.value - minInput.value) + minInput.value));
var setButton = document.querySelector('#set-button');
var instructionsBox = document.querySelector('#instructions');
var currentLevel = document.querySelector('#current-level');

var pageReset = function() { document.location.reload(true);}

function setInstructions (){
  instructionsBox.innerText = ('Guess a number between ' + minInput.value + ' and ' + maxInput.value + ' or, enter a new range below.');
}

function setCurrentLevel (){
currentLevel.innerText = ("Current Level is: " + currentLevel.value);
}

currentLevel.value = 1;
clearButton.disabled = true;
resetButton.disabled = true;
setInstructions();
setCurrentLevel();

guessButton.addEventListener('click', function(){
  var guessInputParsed = parseInt(guessInput.value);
  var minInputParsed = parseInt(minInput.value);
  var maxInputParsed = parseInt(maxInput.value);
  guessOutput.innerText = guessInputParsed;
  setButton.disabled = true;
  minInput.disabled = true;
  maxInput.disabled = true;

  if (isNaN(guessInputParsed) === true) {
    alert('Please enter a whole number');
    pageReset();
  }
  if (guessInputParsed < minInput.value || guessInputParsed > maxInput.value) {
    alert('Trying to cheat the system I see... Input a number within ' + minInput.value + ' and ' + maxInput.value);
    pageReset();
  }
  lastGuess.innerText = 'Your last guess was...';
  if (randomNumber == guessInput.value){
  }
  if (randomNumber < guessInput.value) {
    userMessage.innerText = 'Sorry, that guess is too high. Try a lower number.';
  }
  if (randomNumber > guessInput.value) {
    userMessage.innerText = 'Sorry, that guess is too low. Try a higher number.';
  }
  if (randomNumber == guessInput.value){
    minInput.value = (minInputParsed - 10);
    maxInput.value = (maxInputParsed + 10);
    randomNumber = Math.round((Math.random() * (maxInputParsed - minInputParsed) + minInputParsed));
    userMessage.innerText = 'Congratulations you guessed it!!';
    setInstructions();
    currentLevel.value++;
    setCurrentLevel();
  };
  console.log(randomNumber);
});

clearButton.addEventListener('click', function(){
  var clearInput = document.querySelector('#user-guess');
  clearInput.value = '';
});

resetButton.addEventListener('click', pageReset);

setButton.addEventListener('click', function(){
  var minInputParsed = parseInt(minInput.value);
  var maxInputParsed = parseInt(maxInput.value);
  if (minInputParsed >= maxInputParsed) {
    alert('Nice try cheater... Min Range must be lower than Max Range.');
    pageReset();
  };
  randomNumber = Math.round((Math.random() * (maxInputParsed - minInputParsed) + minInputParsed));
  setButton.disabled = true;
  minInput.disabled = true;
  maxInput.disabled = true;
  setInstructions();

});

guessInput.addEventListener('change', function(){
  clearButton.disabled = false;
  resetButton.disabled = false;
});
