const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return options[Math.floor(Math.random()*options.length)];
}

let computerSelection = "";
let playerSelection = "";
let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
    console.log("It's a Tie!");
    } else if(playerSelection === "paper" && computerSelection === "rock") {
    console.log("You Win! Paper beats Rock");
    playerWins++;
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You Lose! Rock beats Scissors");
    computerWins++;
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You Win! Scissors beats Paper");
    playerWins++;
    } else if(playerSelection === "rock" && computerSelection === "paper") {
    console.log("You Lose! Paper beats Rock");
    computerWins++;
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You Win! Rock beats Scissors");
    playerWins++;
    } else {
    console.log("You Lose! Scissors beats Paper");
    computerWins++;
    } 
}

/*function playRound(playerSelection, computerSelection) {
    switch (playerSelection, computerSelection) {
        case "rock":
            if(playerSelection === "rock") {
            console.log("It's a Tie!");
            } else if(playerSelection === "paper") {
            console.log("You Win! Paper beats Rock");
            playerWins++;
            } else {
            console.log("You Lose! Rock beats Scissors");
            computerWins++;
            }
            break;
        case "paper":
            if(playerSelection === "paper") {
            console.log("It's a Tie!");
            } else if(playerSelection === "scissors") {
            console.log("You Win! Scissors beats Paper");
            playerWins++;
            } else {
            console.log("You Lose! Paper beats Rock");
            computerWins++;
            }
            break;
        case "scissors":
            if(playerSelection === "scissors") {
            console.log("It's a Tie!");
            } else if(playerSelection === "rock") {
            console.log("You Win! Rock beats Scissors");
            playerWins++;
            } else {
            console.log("You Lose! Scissors beats Paper");
            computerWins++;
            }
            break;
    }
}*/

function game() {
    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Let's Play!").toLowerCase();
        while(["rock", "paper", "scissors", " "].indexOf(playerSelection) === -1) {
            alert('Invalid Answer. Choose Rock, Paper or Scissors!');
            playerSelection = prompt("Let's Play!").toLowerCase();
            };
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

console.log(game());

if (playerWins > computerWins) {
    console.log("Player is the Winner!");
} else if(computerWins > playerWins) {
    console.log("Computer is the Winner!");
} else {
    console.log("It's a Tie! Play Again!");
}
