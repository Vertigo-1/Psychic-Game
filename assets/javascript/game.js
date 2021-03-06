//define variables for game play
var winCount = 1;
var lossCount = 0;
var guessesRemaining = 10;
var guessedLetters = [];

// Array of letters that can be chosen:
var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// set up the computer to pick a random indexed value from aray
var randomIndex = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomIndex];

//Write the computers choice to the console...
console.log(computerChoice);

// Event key for key presses
document.onkeyup = function(event) {
  var userChoice = event.key;
  var regexp = /[a-z]/gi;
  if (!regexp.test(userChoice)) {
    alert("please enter a letter");
  } else {
    console.log(userChoice);
  }
  // once user reaches 10 guesses without a win then alert them that they lost
  if (guessesRemaining <= 0) {
    lossCount++;
    document.getElementById("lossCount").innerHTML = lossCount++;
    console.log("You lost!");
    alert("You lost!");
    guessesRemaining = 10;
    guessedLetters = [];
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
    document.getElementById("guessesRemaining").innerHTML = 10;
    randomIndex = Math.floor(Math.random() * alphabet.length);
    computerChoice = alphabet[randomIndex];
    console.log(computerChoice);
  }
  // if user choice matches computer choice show alert them that they won
  if (computerChoice === userChoice) {
    console.log("You won!");
    alert("You won!");
    document.getElementById("winCount").innerHTML = winCount++;
    guessedLetters = [];
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
    randomIndex = Math.floor(Math.random() * alphabet.length);
    computerChoice = alphabet[randomIndex];
    console.log(computerChoice);
    guessesRemaining = 10;
    document.getElementById("guessesRemaining").innerHTML = 10;

    //otherwise continue on till  guesses reach 10
  } else {
    console.log("Guess again!");
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;
    guessedLetters.push(userChoice);
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
  }
};
