Number Guesser Game
Blake Worsley and Jeff Duke

Intro
------
This game asks the player to try and guess a number that the game has randomly guessed.  The range is 0-100 by default but the player can enter their own range if they wish.  The game will give the player hints if their guess is too low or too high.  Once the player guesses correcly, they're congratulated, the range decreases by 10 on the minimum and increases by 10 on the maximum to make the game a little more difficult.  The player "levels up" and a new number is chosen for the next round.  

Logic behind the game
------
On page load the game chooses a random number, sets the current level to 1, displays instructions for the player based on the specified range (0-100 by default) and disables the clear and reset buttons.  The clear button will be disabled if there is nothing to clear in the guess box.  The reset button will enable once the state of the game has changed.  

The player enters a number in the guess box and submits their guess.  The guess event then evaluates the guess input for the following:  if the guess is NaN, an alert is displayed, the player is told to enter a number and the input field is cleared;  if the guess is outside the established range, the player is told to enter a number within the range and the input field is cleared; if the the guess is a number, and is within range, it goes through a series of comparisons.  The guess is evaluated to see if it matches the random number, is too low or is too high.  If too low they are told to guess a higher number; if too high they are told to guess a lower number.  If the guess matches the random number, a few things happen: they see a congratulations message, the level indicator increases by 1 and the range widens by 10 at each end.  The player can continue to play in this manner as long as they like or they can reset the game to start over or enter a new custom range.
