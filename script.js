// An input field for guessing the number
// A button for submitting a guess
// A button for clearing the input field
// A button that resets the game to its initial state
// An element that displays the users most recent guess
// An element that displays a message to user
// If their guess is too high, it should display: “Sorry, that guess is too high. Try a lower number.”
// If their guess is too low, it should display: “Sorry, that guess is too low. Try a higher number.”


var guessButton = document.querySelector('#guess-button');
var guessInput = document.querySelector('#user-guess');
var guessOutput = document.querySelector('#guess-output');
var randomNumber = Math.round(Math.random() * 100);
var userMessage = document.querySelector('.user-message');
var lastGuess = document.querySelector('.last-guess')
var clearButton = document.querySelector('#clear-button');
var resetButton = document.querySelector('#reset-button');
var minInput = document.querySelector('#min-input');
var maxInput = document.querySelector('#max-input');


guessButton.addEventListener('click', function(){
  lastGuess.innerText = 'Your last guess was...';
  guessOutput.innerText = parseInt(guessInput.value);
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

resetButton.addEventListener('click', function(){
  document.location.reload(true);
});

console.log(randomNumber);
console.log(guessInput.value);

//Phase 2
//min input text
  //min must be number
  //if min is greater than max return error
  //min sets constraint on random number
//max input text
  //max must be a number
  //if max is less than min
//if guessInput.value is outside of range create error

minInput.addEventListener('click' funciton(){
  
});



                  //PHASE 2

// The type attribute for the guess input should be “number”.
// It should have “min” and a “max” attributes equal to the minimum and maximum of the reange of guesses (e.g. 1 and 100, respectively).
// The application should display an error message if the guess is not a number (e.g. parseInt() returns NaN).
// The application should display an error if the guess is outside of the range of possible answers.
// The clear button should be disabled if there is nothing to clear.
// The reset button should be disabled if there is nothing to reset.

    // if user-input === NaN - throw error
    // create min/max attributes
      //if user-input < min - throw error to enter a higher number
      //if user-input > max - throw error to enter a lower number
    //if user-input field is empty - disable clear and reset buttons (CSS?)

    //PHASE 1
    //User opens page
    //User enters a number from 1-100 as their guess
    //user clicks Guess button
    //use parseInt to turn user input into a number
    //on click, mathrandom generates number
    //multiply by 100 to make 1-100, use mathCeil to round the number
    //compare users guess to random number
    //display users guess to the <h1 id="guess-output">
    // if user number === random number - display in user-message "Congratulations you guessed it!!"
    // if user number < random number - display in user-message “Sorry, that guess is too low. Try a higher number.”
    // if user number > random number - display in user-message “Sorry, that guess is too high. Try a lower number.”

    // if user clicks clear button - clear user-guess input field

    // if user clicks reset button - resets the game ( no random number present)
