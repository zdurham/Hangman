//---------- Variables and Setup ----------//
var words = ["the thing", "bladerunner", "they live", "aliens"];
var currentWord = words[Math.floor(Math.random() * words.length)];
var wins = 0; // Tracks wins
var losses = 0; // Tracks losses
var guessBank = []; // Will track incorrect guesses
var correctLetters;





function setup() {
	
	// Displays current word
	correctLetters = document.getElementById("currentWord");
	correctLetters.innerHTML = "<h2 class='currentWord'>Current Word: </h2>";

	for (var i = 0; i < currentWord.length; i++) {
		correctLetter = "<h2 id='correctLetters'>" + currentWord.charAt(i) + "</h2>"
		correctLetters.insertAdjacentHTML('beforeend', correctLetter)
	}
}




//---------- Object definition begins ----------//


//---------- Run Object Functions ----------//