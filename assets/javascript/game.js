// Array of random numbers
var Words = [
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
            "TOSH.0",
            ];

// Random word generator
    var randmWords = Words[Math.floor(Math.random() * Words.length)];
    var chosenWord = Words[randmWords];
    var rightWords = [];
    var wrongWords = [];
    var underScore = [];

// Generate underscore to words length
    var generateUnderscore = () => {
        for (var i = 0; i < randmWords.length; i++) {
            underScore.push('_');
        }
        return underScore;
    }

    console.log(generateUnderscore());
    console.log(randmWords);
// Guess
        
    document.addEventListener("keypress",(event) => {
        var keyword = String.fromCharCode(event.keyCode);

// Right word
        if (chosenWord.indexOf(keyword) > -1) {

            rightWords.push(keyword);

            underScore[chosenWord.indexOf(keyword)] = keyword;
            if (underScore.join("") == chosenWord) {
                alert(":)");
            }
        }else{
                wrongWords.push(keyword);
        }
    });