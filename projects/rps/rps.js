const rulesElement = document.querySelector(".rules");

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const resetButton = document.querySelector("#reset-button");

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));
resetButton.addEventListener("click", () => resetRound());

function getRandomComputerResult() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function evaluateAction(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return -1;
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return 1;
  }
  return 0;
}

function getRoundResult(playerSelection, computerSelection) {
  const result = evaluateAction(playerSelection, computerSelection);
  if (result === 1) {
    return `Player wins! Player Choice: ${playerSelection} Computer Choice: ${computerSelection}`;
  }
  if (result === 0) {
    return `Computer wins! Player Choice: ${playerSelection} Computer Choice: ${computerSelection}`;
  }
  return `It's a tie! Player Choice: ${playerSelection} Computer Choice: ${computerSelection}`;
}

function updateScore(playerSelection, computerSelection) {
  const playerScoreElement = document.querySelector("#player-score");
  const computerScoreElement = document.querySelector("#computer-score");
  const resultElement = document.querySelector("#round-result");

  if (evaluateAction(playerSelection, computerSelection) === 1) {
    playerScoreElement.textContent = Number(playerScoreElement.textContent) + 1;
  } else if (evaluateAction(playerSelection, computerSelection) === 0) {
    computerScoreElement.textContent =
      Number(computerScoreElement.textContent) + 1;
  }
  resultElement.textContent = getRoundResult(
    playerSelection,
    computerSelection
  );

  if (playerScoreElement.textContent === "5") {
    resultElement.textContent = "Player wins the game!";
  } else if (computerScoreElement.textContent === "5") {
    resultElement.textContent = "Computer wins the game!";
    playerScoreElement.textContent = 0;
    computerScoreElement.textContent = 0;
  }
}

function playRound(playerSelection) {
  const computerSelection = getRandomComputerResult();
  updateScore(playerSelection, computerSelection);
}

function resetRound() {
  const playerScoreElement = document.querySelector("#player-score");
  const computerScoreElement = document.querySelector("#computer-score");
  const resultElement = document.querySelector("#round-result");
  playerScoreElement.textContent = 0;
  computerScoreElement.textContent = 0;
  resultElement.textContent = "Make your choice!";
}
