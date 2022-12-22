function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  // your code here!
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return 2;
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    return 0;
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    return 1;
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    return 0;
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    return 1;
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    return 1;
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    return 0;
  } else {
    return "Wrong input";
  }
}

const rockButton = document.getElementById("rock button");
const paperButton = document.getElementById("paper button");
const scissorsButton = document.getElementById("scissors button");

let human_score = 0;
let computer_score = 0;

rockButton.addEventListener("click", () => {
  playGame();
});

paperButton.addEventListener("click", () => {
  playGame();
});

scissorsButton.addEventListener("click", () => {
  playGame();
});

const human = document.getElementById("human score");
const computer = document.getElementById("computer score");

function playGame() {
  let round = playRound("rock", getComputerChoice());
  if (round === 1) {
    human_score++;
    human.innerText = `Human score: ${human_score}`;
  } else if (round === 0) {
    computer_score++;
    computer.innerText = `Human score: ${computer_score}`;
  } else if (round === 2) {
    human_score++;
    computer_score++;
    human.innerText = `Human score: ${human_score}`;
    computer.innerText = `Human score: ${computer_score}`;
  }

  if (human_score === 5) {
    alert(`You won ${human_score} to ${computer_score}`);
    human_score = 0;
    computer_score = 0;
  } else if (computer_score === 5) {
    alert(`You won ${computer_score} to ${human_score}`);
    human_score = 0;
    computer_score = 0;
  }
}
