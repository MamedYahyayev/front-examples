const CHOICE_X = "X";
const CHOICE_O = "O";
let CURRENT_CHOICE = CHOICE_X;

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

/**
 *  steps of x and o
 */
const STEP_X = [];
const STEP_O = [];

// dom
const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener(
    "click",
    (e) => {
      handlePlayerChoice(cell, e.target.id);
      handleSelectWinner();
    },
    { once: true }
  );
});

function handlePlayerChoice(cell, id) {
  const idValue = id.substr(4);

  if (CURRENT_CHOICE === CHOICE_X) {
    cell.innerHTML = CHOICE_X;
    STEP_X.push(+idValue);
    CURRENT_CHOICE = CHOICE_O;
  } else {
    cell.innerHTML = CHOICE_O;
    STEP_O.push(+idValue);
    CURRENT_CHOICE = CHOICE_X;
  }
}

function handleSelectWinner() {
  console.log(STEP_X);
  winningCombinations.forEach((comb) => {
    if (comb.every((num) => STEP_X.includes(num))) {
      console.log("Winner X");
    } else if (comb.every((num) => STEP_O.includes(num))) {
      console.log("Winner O");
    } else if (STEP_X.length === 5) {
      console.log("DRAW");
    }
  });
}
