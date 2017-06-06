// Function will run when page has loaded
window.onload = function() {
	//---------- Variables ----------//
	var words = ["bladerunner"];
	var alphabet = "abcdefghijklmnopqrstuvwxyc"
	var currentWord = words[Math.floor(Math.random() * words.length)];
	var winCounter = 0;
	var lossCounter = 0;
	var guessBank = []; // Array of incorrect guesses
	var guessNum = 10; // Actual number of guesses that remain
	var guessRemain; // Grabs "guessesRemaining"
	var matches = []; // Array of letters that match
	var lettersMatched = 0; // Tracks number of matches, when equal to currentWord.length, user wins
	var correctLetters; // Used to grab Current Word <h2> element
	var letter; // Used to display letters

	//---------- Setup Function ----------//
	function setup() {

		// This whole bit displays the letters of the chosen word
		correctLetters = document.getElementById("currentWord")
		correctLetters.innerHTML = "<h2 class='currentWord'>Current Word: </h2>";

		for (var i = 0; i < currentWord.length; i++) {
			letter = "<h2 class='correctLetters' id='l' " + i + ">" + currentWord.charAt(i) + "</h2>";
			correctLetters.insertAdjacentHTML('beforeend', letter)
		}

		// This bit displays remaining guesses
		guessRemain = document.getElementById("guessesRemaining")
		guessRemain.innerHTML = "<h2>You have " + guessNum + " guesses remaining!</h2>";

		// This bit displays incorrect guesses
		guessedLetters = document.getElementById("guessedLetters")
		guessedLetters.innerHTML = "<h2>You have guessed: </h2>"
	}

	//---------- Input Function ----------//
	document.onkeyup = function() {
		guess = event.key.toLowerCase();
		oldGuess = false; //This value is used to check if the value has been guessed


	}




setup();
} 