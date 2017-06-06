// Function will run when page has loaded
window.onload = function() {
	//---------- Variables ----------//
	var words = ["bladerunner", "aliens", "tron", "scanners", "dune", "brazil", "robocop", "akira"];
	var alphabet = "abcdefghijklmnopqrstuvwxyz"
	var currentWord = words[Math.floor(Math.random() * words.length)];
	var winCounter = 0; //counts wins
	var winHolder;
	var guessBank = []; // Array of incorrect guesses
	var guessNum = 10; // Actual number of guesses that remain
	var guessRemain; // Grabs "guessesRemaining"
	var lettersMatched = 0; // Tracks number of matches, when equal to currentWord.length, user wins
	var correctLetters; // Used to grab Current Word <h2> element
	var letter; // Used to display letters
	var hint = {
		bladerunner: "A future cop must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator. This movie stars Harrison Ford, Rutger Hauer, and Sean Young. Directed by Ridley Scott. Released in 1982.",
		aliens: "The highly acclaimed sequel to the similarly named 1979 film directed by Ridley Scott. Stars Sigourney Weaver, Michael Bien, and Bill Paxton. Directed by James Cameron. Released in 1986",
		tron: "Released in 1982, this movie features a computer hacker who is abducted into the digital world and forced to participate in gladiatorial games where his only chance of escape is with the help of a heroic security program. Stars Jeff Bridges. Directed by Steven Lisberger",
		scanners: "A scientist sends a man with extraordinary psychic powers to hunt others like him. Released in 1981, this movie stars Jennifer O'Neil and Stephen Lack. Directed By David Cronenberg",
		dune: "A Duke's son leads desert warriors against the galactic emperor and his father's evil nemesis when they assassinate his father and free their desert world from the emperor's rule. Stars Kyle MacLachlan and was directed by David Lynch. Released in 1984.",
		brazil: "A bureaucrat in a retro-future world tries to correct an administrative error and himself becomes an enemy of the state. Stars Jonathan Pryce, Kim Greist, and Robert DeNiro. Directed by Terry Gillam. Released in 1985.",
		robocop: "In a dystopic and crime-ridden Detroit, a terminally wounded cop returns to the force as a powerful cyborg haunted by submerged memories. Stars Peter Weller, Nancy Allen, and Dan O'Herlihy. Directed by Paul Verhoeven. Released in 1987.",
		akira: "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath that only two teenagers and a group of psychics can stop. Based on the best-selling manga of the same name. Directed and written by Katsuhiro Otomo. Released in 1988.",

	}

	//---------- Setup Function ----------//
	function setup() {

		// This whole bit displays the letters of the chosen word
		correctLetters = document.getElementById("currentWord")
		correctLetters.innerHTML = "<h2 class='currentWord'>Current Word: </h2>";

		for (var i = 0; i < currentWord.length; i++) {
			letter = "<h2 class='correctLetters' id=l" + i + ">" + currentWord.charAt(i) + "</h2>";
			correctLetters.insertAdjacentHTML('beforeend', letter)
		}

		// Displays hints
		hints = document.getElementById("hint")
		function hintCreator() {
			if (currentWord === words[0]) {
				hints.innerHTML = hint.bladerunner
			}
			else if (currentWord === words[1]) {
				hints.innerHTML = hint.aliens
			}
			else if (currentWord === words[2]) {
				hints.innerHTML = hint.tron
			}
			else if (currentWord === words[3]) {
				hints.innerHTML = hint.scanners
			}
			else if (currentWord === words[4]) {
				hints.innerHTML = hint.dune
			}
			else if (currentWord === words[5]) {
				hints.innerHTML = hint.brazil
			}
			else if (currentWord === words[6]) {
				hints.innerHTML = hint.robocop
			}
			else if (currentWord === words[7]) {
				hints.innerHTML = hint.akira
			}
		}

		hintCreator();

		// This bit displays wins
		winHolder = document.getElementById("wins")
		winHolder.innerHTML = "<h2>Wins: " + winCounter + "</h2>";

		// This bit displays remaining guesses
		guessRemain = document.getElementById("guessesRemaining")
		guessRemain.innerHTML = "<h2>You have " + guessNum + " lives remaining!</h2>";

		// This bit displays incorrect guesses
		guessedLetters = document.getElementById("guessedLetters")
		guessedLetters.innerHTML = "<h2>You have guessed: </h2>"

		// Will display a gameOver message
		message = document.getElementById("output")
		
	}


	//---------- GameOver Function ----------//
	function gameOver(win) {
		if (win) {
			message.innerHTML = "I'd buy that for a dollar!"
		}

		else {
			message.innerHTML = "Game over man, game over!"
			
		}

	}

	//---------- Reset Function ----------//
	function reset() {
		guessNum = 10;
		lettersMatched = 0;
		guessBank = []
		currentWord = words[Math.floor(Math.random() * words.length)];
		setup();
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
								gameOver(true);
								winCounter++;
								reset();
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
						reset();
					}
				}
			}
		}

		else {
			alert("Please choose a letter from the keyboard.")
		}
	}


// Run setup
setup();
} 