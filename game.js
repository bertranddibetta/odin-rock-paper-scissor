const choices = ["Rock", "Paper", "Scissor"];
let playerScore = 0;
let compScore = 0;
let round = 1;

function computerPlay () {
    i = Math.floor((Math.random() * 3) + 1);{
        if (i === 1) {
            return "Rock";
        }
        else if (i === 2) {
            return "Paper";
        }
        else return "Scissor";
    }
}

// Make playerInput case insensitive
function fixPlayerInput(input){
    if (input.toLowerCase() === "rock"){
        return "Rock";
    }
    else if (input.toLowerCase() == "paper"){
        return "Paper";
    }
    else if (input.toLowerCase() == "scissor"){
        return "Scissor";
    }
    else {
        return "invalid"
    }
}

// 
function game () {
    for (round; ; ++round) {
        if (playerScore == 3 || compScore == 3){
            break
        }
        let playerInput = prompt("Choose between Rock, Paper or Scissor");
        let playerChoice = fixPlayerInput(playerInput);
        let compChoice = computerPlay();
        let playerIndex = choices.indexOf(playerChoice);
        let compIndex = choices.indexOf(compChoice);
        if (playerChoice == "invalid"){
            alert ("Oops, you typed " + playerInput + ". Try again with a correct value !");
        }
        else if (playerChoice === compChoice){
            alert ("This is a tie !" + "\n" + "Computer played " + compChoice + "\n" +
            "The score is " + playerScore + " for you vs " + compScore + " for the computer.");
        }
        else if ((((playerIndex - compIndex) % 3 + 3 ) % 3) == 1 ){
            ++playerScore;
            alert ("You win ! " + playerChoice + " beats " + compChoice + "\n" +
            "The score is " + playerScore + " for you vs " + compScore + " for the computer.");
        }
        else { 
            ++compScore;
            alert ("You lose ! " + compChoice + " beats " + playerChoice + "\n" +
            "The score is " + playerScore + " for you vs " + compScore + " for the computer.");
        }
    }
    if (playerScore == 3) {
        alert ("You win the game !\n" +
        "The final score is " + playerScore + " for you vs " + compScore + " for the computer.")
    }
    else {
        alert ("You lost the game !\n" +
        "The final score is " + playerScore + " for you vs " + compScore + " for the computer.")
    }
}

game();