let playerSelection = 'Paper';
let computerSelection = getComputerChoice();
let gameScore;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  let computerSelection;

  switch (randomNumber) {
    case 0:
      computerSelection = 'Rock';
      break;
    case 1:
      computerSelection = 'Paper';
      break;
    case 2:
      computerSelection = 'Scissors';
      break;
  }
  
  return computerSelection
}

console.log(computerSelection);
