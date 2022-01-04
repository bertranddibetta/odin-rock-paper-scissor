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

function fixedPlayerInput(input){
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

const playerSelection = fixedPlayerInput(playerInput);
const computerSelection = computerPlay();

const choices = ["Rock", "Paper", "Scissor"];

function playRound(playerSelection, computerSelection) {
    playerIndex = choices.indexOf(playerSelection);
    computerIndex = choices.indexOf(computerSelection);
    if (playerSelection === computerSelection){
        return "This is a tie !"
    }
    else if ((((playerIndex - computerIndex) % 3 + 3 ) % 3) == 1 ){
        return "You win ! " + playerSelection + " beats " + computerSelection;
    }
    else return "You lose ! " + computerSelection + " beats " + playerSelection;
}


console.log(playRound(playerSelection, computerSelection));