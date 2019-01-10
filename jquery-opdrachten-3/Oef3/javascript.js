    $(document).ready(function(){

    //RANDOM NUM
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("generatedNumber: " + randomNumber);

    //NUM OF GUESSES LEFT
    var numberOfGuesses = document.getElementById("guessesLeft");
    numberOfGuesses.value = 6;

    document.getElementById("guess").onclick = function guess()
    {

        var userGuess = document.getElementById("userGuess").value;
        if(userGuess < 0 || userGuess > 100)
        {
            $('#answer').text("please enter a number between 0 and 100");
            numberOfGuesses.value++;
        }
        else if(numberOfGuesses.value == 1 && randomNumber != userGuess)
        {
            $("#answer").text("Uhoh out of guesses. The correct number was " + randomNumber + ". Press reset to play again.");
            $('#guess').hide();
            $('#reset').show();

        }
        else if(randomNumber == userGuess)
        {
            $("#answer").text("WOOHOO THATS CORRECT!!! Press reset to play again.");
            $('#guess').hide();
            $('#reset').show();
        }
        else if(userGuess > randomNumber)
        {
            $("#answer").text("too high");
        }
        else
        {
            $("#answer").text("too low")
        }

        numberOfGuesses.value--;
    }

    //RESET
    document.getElementById("reset").onclick = function reset()
    {
        location.reload(true);
    }
     });
