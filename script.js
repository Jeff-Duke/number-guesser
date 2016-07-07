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
var pageReset = function() { document.location.reload(true);}
var buttonDisable = function() { value }

clearButton.disabled = true;
resetButton.disabled = true;

guessButton.addEventListener('click', function(){
  var guessInputParsed = parseInt(guessInput.value);
  guessOutput.innerText = guessInputParsed;
  if (isNaN(guessInputParsed) === true) {
    alert('Please enter a whole number');
    pageReset();
  }
  if (guessInputParsed < minInput.value || guessInputParsed > maxInput.value) {
    alert('Trying to cheat the system I see... Input a number within ' + minInput.value + ' and ' + maxInput.value);
    pageReset();
  }
  lastGuess.innerText = 'Your last guess was...';
  if (randomNumber == guessInput.value) {
    userMessage.innerText = 'Congratulations you guessed it!!';
  }
  if (randomNumber < guessInput.value) {
    userMessage.innerText = 'Sorry, that guess is too high. Try a lower number.';
  }
  if (randomNumber > guessInput.value) {
    userMessage.innerText = 'Sorry, that guess is too low. Try a higher number.';
  };
});

clearButton.addEventListener('click', function(){
  var clearInput = document.querySelector('#user-guess');
  clearInput.value = '';
});

resetButton.addEventListener('click', pageReset);

setButton.addEventListener('click', function(){
  minInputParsed = parseInt(minInput.value);
  maxInputParsed = parseInt(maxInput.value);
  if (minInputParsed >= maxInputParsed) {
    alert('Nice try cheater... Min Range must be lower than Max Range.');
    pageReset();
  };
  randomNumber = Math.round((Math.random() * (maxInputParsed - minInputParsed) + minInputParsed));
  setButton.disabled = true;
  minInput.disabled = true;
  maxInput.disabled = true;
});

guessInput.addEventListener('change', function(){
  clearButton.disabled = false;
  resetButton.disabled = false;
});
