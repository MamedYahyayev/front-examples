// Dom Elements
const startgame = document.querySelector(".startgame");
const backdrop = document.querySelector(".backdrop");
const choices = document.querySelectorAll(".choice");
const playerChoice = document.querySelector(".pChoice");
const compChoice = document.querySelector(".cChoice");
const fightButton = document.querySelector(".fightbutton");
const resultText = document.querySelector(".result-text");

// Global Variables
const PAPER = "Paper";
const ROCK = "Rock";
const SCISSORS = "Scissors";
const RESULT_DRAW = "Draw";
const RESULT_PLAYER_WINS = "Player Wins";
const RESULT_COMPUTER_WINS = "Computer Wins";

const getPlayerChoice = () => {
  for (const choice of choices) {
    choice.addEventListener("click", () => {
      playerChoice.innerHTML = choice.innerHTML;
    });
  }
};

const getComputerChoice = () => {
  const options = [PAPER, ROCK, SCISSORS];
  const randomValue = Math.random();
  if (randomValue < 0.45) return options[0];
  else if (randomValue < 0.76) return options[1];
  else return options[2];
};

fightButton.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  const pChoice = playerChoice.innerHTML;
  compChoice.innerHTML = computerChoice;

  fight(computerChoice, pChoice);
});

startgame.addEventListener("click", () => {
  backdrop.style.display = "none";
  getPlayerChoice();
});

function fight(computerChoice, pChoice) {
  if (computerChoice === pChoice) {
    resultText.innerHTML = RESULT_DRAW;
  } else if (
    (pChoice === ROCK && computerChoice === SCISSORS) ||
    (pChoice === PAPER && computerChoice === ROCK) ||
    (pChoice === SCISSORS && computerChoice === PAPER)
  ) {
    resultText.innerHTML = RESULT_PLAYER_WINS;
  } else {
    resultText.innerHTML = RESULT_COMPUTER_WINS;
  }
}
