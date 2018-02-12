// Array of words to be used in Hang man
var word = [
    "RICK AND MORTY",
    "FUTURAMA",
    "SOUTH PARK",
    "FAMILY GUY","KEY AND PEELE",
    "ONE PUNCH MAN",
    "SPONGEBOB SQUAREPANTS",
    "DRAKE AND JOSH",
    "ROBOT CHICKEN",
    "THE SIMPSONS",
    "AMERICAN DAD",
    "MANSWERS",
    "THE BIG BANG THEORY",
    "SCRUBS",
    "THE FRESH PRINCE OF BEL-AIR",
    "WORKAHOLICS",
    "ARCHER",
    "TOSH.0",]

// Random words
var randNum = Math.floor(Math.random() * word.length);
var choosenWord = word[randNum]; // Variable for my random word that has been chosen
var underScore = []; // Array to push my underscore and paste them in HTML
var rightWord = []; // Array to push the right words
var wrongWord = []; // Array to push the wrong words

// DOM manipulation
var docUnderScore = document.getElementsByClassName('underscore'); // Variable to call out underscore class in HTML
var docRightGuess = document.getElementsByClassName('rightguess'); // Variable to call out rightguess class in HTML
var docWrongGuess = document.getElementsByClassName('wrongguess'); // Variable to call out wrongguess class in HTML

// Underscore variable
var generateUnderscore = () => {
for (var i = 0; i < choosenWord.length; i++) {
    underScore.push('_'); // Loop through the amount of my chosen word length and place an underscore
}
return underScore; // return underscore length
}
docUnderScore[0].innerHTML = generateUnderscore().join(' '); // Paste the underscore length in HTML

// User guess
document.addEventListener('keypress', (event) =>{ // Listen for keypresses
var keyword = String.fromCharCode(event.keyCode); // Variabl for changing the pressed key into a word from its code
var capShift = keyword.toUpperCase(); // Get the key pressed and change it into a an uppercase key

// User's right guess
for ( i = 0; i < choosenWord.length; i++) {
    if(capShift == choosenWord.charAt(i)) { // If keypressed is found in the chosen word

// Add to right words array
    rightWord.push(); // Push it into the right words array

// Replace underscore with right word
    underScore[choosenWord.charAt(i)] = capShift; // Replace the underscore with the right word
    docUnderScore[0].innerHTML = underScore.join(' '); // After right word is paste in HTML, seperate the words with a space    
    docRightGuess[0].innerHTML = rightWord; // Paste the right word array in HTML

}else{
    wrongWord.push(capShift); // If key pressed is not in the chosen word then push it to the wrong words array
    docWrongGuess[0].innerHTML = wrongWord; // Paste the wrong word array into HTML
}
}
});

document.getElementById("refresh").onclick.addEventListener("click", window.location);
console.log(choosenWord);
// console.log(generateUnderscore());