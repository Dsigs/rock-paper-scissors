let userChoice = getPrompt()
const computerChoice = getComputerChoice()
let userScore = 0
let computerScore = 0


function getPrompt() {
  let userChoice = prompt('Choose your weapon for Rock, Papers, Scissors:').toLowerCase();
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
      return userChoice
    }

    while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
      alert('Invalid choice! Please choose between Rock, Paper, or Scissors:');
      userChoice = getPrompt('Choose your weapon for Rock, Papers, Scissors:');
      userChoice = userChoice.toLowerCase();
    }

  return userChoice
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;

  switch (randomNumber) {
    case 0:
      computerChoice = 'rock';
      break;
    case 1:
      computerChoice = 'paper';
      break;
    case 2:
      computerChoice = 'scissors';
      break;
  }
  return computerChoice
}

function playRound() {
  let result

  switch(userChoice) {
    case 'rock':
      switch(computerChoice) {
        case 'scissors':
          result = 'You win! Rock beats scissors.';
          userScore++; 
          break;
        case 'paper':
          result = 'You lose! Paper beats rock.';
          computerScore++;
          break;
        default:
          result = 'Tie!';
          break;
      }
      break;
    case 'paper':
      switch(computerChoice) {
        case 'rock':
          result = 'You win! Paper beats rock.';
          userScore++;
          break;
        case 'scissors':
          result = 'You lose! Scissors beats paper.';
          computerScore++;
          break;
        default:
          result = 'Tie!';
          break;
      }
      break;
    case 'scissors':
      switch(computerChoice) {
        case 'paper':
          result = 'You win! Scissors beats paper.';
          userScore++;
          break;
        case 'rock':
          result = 'You lose! Rock beats scissors.';
          computerScore++;
          break;
        default:
          result = 'Tie!';
          break;
      }
  }

  console.log(userChoice);
  console.log(computerChoice);
  console.log(result)
  console.log(`User score: ${userScore}`);
  console.log(`Computer score: ${computerScore}`);

return {userScore, computerScore}
}

playRound();
