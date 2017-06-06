// Function will run when page has loaded
window.onload = function() {
	//---------- Variables ----------//
	var words = ["bladerunner", "aliens"];
	var alphabet = "abcdefghijklmnopqrstuvwxyz"
	var currentWord = words[Math.floor(Math.random() * words.length)];
	var winCounter = 0; //counts wins
	var lossCounter = 0; //counts losses
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
			letter = "<h2 class='correctLetters' id=l" + i + ">" + currentWord.charAt(i) + "</h2>";
			correctLetters.insertAdjacentHTML('beforeend', letter)
		}

		// This bit displays remaining guesses
		guessRemain = document.getElementById("guessesRemaining")
		guessRemain.innerHTML = "<h2>You have " + guessNum + " lives remaining!</h2>";

		// This bit displays incorrect guesses
		guessedLetters = document.getElementById("guessedLetters")
		guessedLetters.innerHTML = "<h2>You have guessed: </h2>"
	}


	//---------- GameOver Function ----------//
	function gameOver(win) {
		if (win) {
			alert("We got em!")
		}

		else {
			alert("Game over man! Game over!")
		}

	}

	//---------- Input Function ----------//
	document.onkeyup = function input() {
		guess = event.key.toLowerCase();

		/* Check to make sure the input is a letter first. If yes, then continue with the rest of the function */
		if (alphabet.indexOf(guess) > -1) {

			// Check if guess is old. If old, stop
			if (guessBank.indexOf(guess) > -1) {
				alert("You have already guessed that letter!");
				

			}

			// If guess is new, then proceed
			else if (guessBank.indexOf(guess) <= -1) {

				// Push guess to guessBank
				guessBank.push(guess)
				console.log(guessBank)

				if (currentWord.indexOf(guess) > -1) {
					// Check if guess matches the letters of currentWord
					for (var i = 0; i < currentWord.length; i++) {

						if (guess === currentWord[i]) {
							lettersMatched++;
							var showLetter = document.getElementById("l" + i)
							console.log(showLetter)
							showLetter.classList.add("correct")
							console.log(lettersMatched)
							if (lettersMatched === currentWord.length) {
								gameOver(true)
							}
						}			
					}
				}

				else if (currentWord.indexOf(guess) <= -1) {
					guessNum--;
					guessRemain.innerHTML = "<h2>You have " + guessNum + " lives remaining!</h2>"
					guessedLetters.innerHTML += "<h2 id='incorrectLetters'>" + guess + "</h2>";
					if (guessNum === 0) {
						gameOver();
					}
				}
			}
		}
	}


// Run setup
setup();
} 