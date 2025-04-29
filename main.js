const buttons = document.querySelectorAll(".option-item");
const displayWinner = document.querySelector(".display-winner");
const displayMessage = document.querySelector(".display-message");

const GAME_OPTIONS = {
  rock: {
    beats: "scissors",
    losesTo: "paper",
    winsMsg: "Rock smashes Scissors.",
    losesMsg: "Paper wraps Rock."
  },
  paper: {
    beats: "rock",
    losesTo: "scissors",
    winsMsg: "Paper wraps Rock.",
    losesMsg: "Scissors cuts Paper."
  },
  scissors: {
    beats: "paper",
    losesTo: "rock",
    winsMsg: "Scissors cuts Paper.",
    losesMsg: "Rock smashes Scissors."
  }
};

const randomSelection = (obj) => {
  let keys = Object.keys(obj);
  return keys[(keys.length * Math.random()) << 0];
};

let player;
let computer = randomSelection(GAME_OPTIONS);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    player = e.currentTarget.id;

    if (GAME_OPTIONS[player].beats === computer) {
      displayWinner.innerText = "YOU WON!";
      displayMessage.innerText = GAME_OPTIONS[player].winsMsg;
      computer = randomSelection(GAME_OPTIONS);
    } else if (GAME_OPTIONS[player].losesTo === computer) {
      displayWinner.innerText = "COMPUTER WON!";
      displayMessage.innerText = GAME_OPTIONS[player].losesMsg;
      computer = randomSelection(GAME_OPTIONS);
    } else {
      displayWinner.innerText = "IT'S A TIE!";
      displayMessage.innerText = "";
      computer = randomSelection(GAME_OPTIONS);
    }
  });
});