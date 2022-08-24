const options = ["rock", "paper", "scissors"];
const getComputerChoice = () => options[Math.floor(Math.random()*options.length)];

let playerWins = 0;
let computerWins = 0;
let result = document.getElementById("result");
let playerPoints = document.getElementById("player");
let comPoints = document.getElementById("computer");
let displayWinner = document.getElementById("winner");

playerPoints.innerHTML = ("Player") + " " + playerWins + " " + ("points");
comPoints.innerHTML = ("Computer") + " " + computerWins + " " + ("points");

const rock = document.getElementById("rock");
rock.addEventListener("click", function() {
    playRound("rock", getComputerChoice());
    playerPoints.innerHTML = ("Player") + " " + playerWins + " " + ("points");
    comPoints.innerHTML = ("Computer") + " " + computerWins + " " + ("points");
    winner();
});
const paper = document.getElementById("paper");
paper.addEventListener("click", function() {
    playRound("paper", getComputerChoice());
    playerPoints.innerHTML = ("Player") + " " + playerWins + " " + ("points");
    comPoints.innerHTML = ("Computer") + " " + computerWins + " " + ("points");
    winner();
});
const scissors = document.getElementById("scissors");
scissors.addEventListener("click", function() {
    playRound("scissors", getComputerChoice());
    playerPoints.innerHTML = ("Player") + " " + playerWins + " " + ("points");
    comPoints.innerHTML = ("Computer") + " " + computerWins + " " + ("points");
    winner();
});

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
    result.innerHTML = ("It's a Tie!");
    } else if(playerSelection === "paper" && computerSelection === "rock") {
    result.innerHTML = ("You Win! Paper beats Rock");
    playerWins++;
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
    result.innerHTML = ("You Lose! Rock beats Scissors");
    computerWins++;
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
    result.innerHTML = ("You Win! Scissors beats Paper");
    playerWins++;
    } else if(playerSelection === "rock" && computerSelection === "paper") {
    result.innerHTML = ("You Lose! Paper beats Rock");
    computerWins++;
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
    result.innerHTML = ("You Win! Rock beats Scissors");
    playerWins++;
    } else {
    result.innerHTML = ("You Lose! Scissors beats Paper");
    computerWins++;
    } 
};

function winner() {
    if(playerWins === 5) {
        displayWinner.innerHTML = ("PLAYER IS THE WINNER!");
    } if(computerWins === 5) {
        displayWinner.innerHTML = ("COMPUTER IS THE WINNER!");
    }
};

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