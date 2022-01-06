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

let playerInput = prompt("Choose between Rock, Paper or Scissor")

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
        alert("Your input is incorrect");
    }
}

// Plays a round of Rock Paper Scissor
function playRound(playerChoice, computerChoice) {
    playerIndex = choices.indexOf(playerChoice);
    computerIndex = choices.indexOf(computerChoice);
    if (playerSelection === computerChoice){
        return "This is a tie !" + "\n" + "Computer played " + computerChoice;
    }
    else if ((((playerIndex - computerIndex) % 3 + 3 ) % 3) == 1 ){
        return "You win ! " + playerChoice + " beats " + computerChoice;
    }
    else return "You lose ! " + computerChoice + " beats " + playerChoice;
}

function game () {
    playRound(playerSelection, computerSelection)
}

const playerSelection = fixPlayerInput(playerInput);
const computerSelection = computerPlay();
const choices = ["Rock", "Paper", "Scissor"];

console.log(playRound(playerSelection, computerSelection));