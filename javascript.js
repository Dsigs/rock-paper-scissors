let userChoice = getPrompt()
const computerChoice = getComputerChoice()
let gameScore

function getPrompt() {
  let userChoice = prompt('Choose your weapon!');
  return userChoice
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;

  switch (randomNumber) {
    case 0:
      computerChoice = 'Rock';
      break;
    case 1:
      computerChoice = 'Paper';
      break;
    case 2:
      computerChoice = 'Scissors';
      break;
  }
  return computerChoice
}

console.log(computerChoice);




