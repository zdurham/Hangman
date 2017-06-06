//---------- Variables and Setup ----------//
var words = ["bladerunner"];
var currentWord = words[Math.floor(Math.random() * words.length)];
var correctLetters; // Used to display the letters of currentWord
var wins = 0; // Tracks wins
var losses = 0; // Tracks losses
var guessBank = []; // Will track incorrect guesses
var guessedLetters; // This will be used to display the array of guessBank
var guessRemain; // Area where remaining guesses are tracked
var guessNum = 10; //Actuall number of guesses that remain. Begins at 10
var guess; // This will be the user's key input guess
var lettersMatched = 0; // Tracks number of matched guesses and correctLetters
var matchedLetters;

//---------- Setup Function ----------//
function setup() {
	
	// Displays current word
	correctLetters = document.getElementById("currentWord");
	correctLetters.innerHTML = "<h2 class='currentWord'>Current Word: </h2>";

	for (var i = 0; i < currentWord.length; i++) {
		correctLetter = "<h2 class='correctLetters' id =" + i + ">" + currentWord.charAt(i) + "</h2>"
		correctLetters.insertAdjacentHTML('beforeend', correctLetter)

	}

	// Displays remaining guesses
	guessRemain = document.getElementById("guessesRemaining");
	guessRemain.innerHTML = "<h2>You have " + guessNum + " guesses remaining!</h2>";


	// Displays letters that have already been guessed
	guessedLetters = document.getElementById("guessedLetters");
	guessedLetters.innerHTML = "<h2>You have guessed:" + guessBank + " </h2>";

}

//---------- Input Function ----------//

function input() {
	document.onkeyup = function(event) {
		guess = event.key.toLowerCase();

		// Check to see if input was a letter, if so, carry on
		if (/^[a-zA-Z]$/.test(guess)) {
			for (var i = 0; i <= guessBank.length; i++) {
				if (guess === guessBank[i]) {
					alert("You've guessed that before");
					break;
				}

				else {
					

					for (var j = 0; j < currentWord.length; j++) {
						if (guess === currentWord.charAt[j]) {
							var correct = document.getElementById("correctLetters")
							correct[j].setAttribute("class", "correct");
							matchedLetters += guess;


						}

						else {
							guessBank.push(guess)
						}
					}
				}
			}
		}
	}	
}


window.onload = setup(); // Will wait for page to load before running JS

setup();
input();


//---------- Object definition begins ----------//


//---------- Run Object Functions ----------//