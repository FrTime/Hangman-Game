$(document).ready(function() {
   
    function randomRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function allEqual(arr) {
        return new Set(arr).size == 1;
    }

    function PlaySound(soundobj) {
        var thissound=document.getElementById(soundobj);
        thissound.play();
    }

    $(".btn").on("click", function() {
    console.log("ye have been warned!");
        
        var userKeyGuess;
            console.log("userKeyGuess var created")

        var wordsList = {
            "0" : ["h", "o", "r", "n", "s", "w", "a", "g", "g", "l", "e"],
            "1" : ["b", "i", "n", "n", "a", "c", "l", "e"],
            "2" : ["d", "u", "f", "f", "l", "e"],
            "3" : ["h", "o", "l", "y", "s", "t", "o", "n", "e"],
            "4" : ["o", "r", "l", "o", "p"],
            "5" : ["f", "l", "i", "b", "u", "s", "t", "i", "e", "r"],
            "6" : ["f", "r", "e", "e", "b", "o", "o", "t", "e", "r"],
            "7" : ["l", "a", "n", "d", "l", "u", "b", "b", "e", "r"],
            "8" : ["b", "o", "o", "t", "y"],
            "9" : ["b", "u", "c", "c", "a", "n", "e", "e", "r"],
            "10" : ["c", "u", "t", "l", "a", "s", "s"],
            "11" : ["p", "r", "i", "v", "a", "t", "e", "e", "r"],
            "12" : ["s", "c", "a", "l", "l", "y", "w", "a", "g"],
            "13" : ["s", "c", "u", "t", "t", "l", "e"],
            "14" : ["s", "e", "a", "d", "o", "g"],
            "15" : ["p", "l", "a", "n", "k"],
            "16" : ["f", "l", "o", "g", "g", "i", "n", "g"],
            "17" : ["g", "a", "l", "l", "e", "y"],
            "18" : ["g", "a", "n", "g", "p", "l", "a", "n", "k"],
            "19" : ["l", "o", "o", "k", "o", "u", "t"],
            "20" : ["m", "a", "r", "o", "o", "n", "e", "d"],
            "21" : ["m", "u", "t", "i", "n", "e", "y"],
            "22" : ["p", "i", "l", "l", "a", "g", "e"],
            "23" : ["p", "l", "u", "n", "d", "e", "r"],
            "24" : ["s", "c", "u", "r", "v", "y"],
            "25" : ["c", "a", "u", "l", "k"],
            "26" : ["p", "i", "r", "a", "c", "y"],
            };

                console.log("wordsList var populated")

        pirateWord = wordsList[randomRange(0,26)];
            console.log("The chosen word is: " + pirateWord);

        var pirateArr = [];

        for (i = 0; i < pirateWord.length; i++) {
            pirateArr.push("_");
        }

        console.log(pirateArr);

        var guessCount = 7;
        var wordsGuessed = 0;
        $(".remainingGuesses").text("Remaining guesses: " + guessCount);
        $(".guess").text("Letters guessed: ");
        $(".currentWord").text(pirateArr.join(" "));
        $(".wordsGuessed").text("Words guessed: " + wordsGuessed);
        
        document.onkeyup = function(event) {
            userKeyGuess = event.key;
                console.log("userKeyGuess = '" + userKeyGuess + "'");
                $(".guess").append(userKeyGuess + "  ");
                $(".remainingGuesses").text("Remaining guesses: " + guessCount);
            if (pirateWord.indexOf(userKeyGuess) >= 0) {
                for (j = 0; j < pirateArr.length; j++) {
                    if (pirateWord.indexOf(userKeyGuess) >= 0) {
                        console.log("Letter is in the word!");
                        console.log(pirateWord.indexOf(userKeyGuess));
                        pirateArr.splice(pirateWord.indexOf(userKeyGuess), 1, userKeyGuess);
                        pirateWord.splice(pirateWord.indexOf(userKeyGuess), 1, "*");
                        console.log(pirateArr);
                        console.log(pirateWord);
                        $(".currentWord").text(pirateArr.join(" "));
                        $(".wordsGuessed").text("Words guessed: " + wordsGuessed);
                    } 
                    }
            } else {
                guessCount--;
                console.log("Letter is not in the word!");    
                $(".remainingGuesses").text("Remaining guesses: " + guessCount);    
            } if (guessCount < 0) {
                alert("You lose. Say hello to Davy Jones for me!");
                $(".wordsGuessed").text("Words guessed: " + wordsGuessed);
                location.reload(); 
            } if (allEqual(pirateWord)) {
                pirateArr = [];
                wordsGuessed++;
                guessCount = 7;
                PlaySound('cannon');
                $(".wordsGuessed").text("Words guessed: " + wordsGuessed);
                pirateWord = wordsList[randomRange(0,26)];
                for (i = 0; i < pirateWord.length; i++) {
                    pirateArr.push("_");
                }   
                    console.log("The chosen word is: " + pirateWord);
                    console.log(pirateArr);
                $(".currentWord").text(pirateArr.join(" "));
                $(".wordsGuessed").text("Words guessed: " + wordsGuessed);
                $(".guess").text("Letters guessed: ");
                $(".remainingGuesses").text("Remaining guesses: " + guessCount);
            }
        }
    });

});    
    