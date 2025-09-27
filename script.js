// Logic for the computer to select a choice. Since math.Random genarates numbers from 0-1, we use that to let the computer genenate its choices.
function getComputerChoice() {
  const random = Math.random();

// Here, if the computer generates a number between 0 and one-third(including one-third) then it means the computer chose Rock.
  if (random > 0 && random <= 1/3) {
    return 'rock';
  } else if (random > 1/3 && random <= 2/3) { // If it genarates a number between one-third and two-third then it means the computer chose Paper.
    return 'paper';
  } else if (random > 2/3 && random <= 1) { // Whereas if, it generates a number between two-third and 1 then the computer chose Scissors.
    return 'scissors';
  }
}

function getHumanChoice() {
  let choice = prompt('What\'s your choice:').toLowerCase(); // It takes an input form the user.
  return choice;
}

// These variables will store the game scores.
let humanScore = 0;
let computerScore = 0;


//Logic for a single round.
// This place is important so pay attention. We create a function 'playRound' and give it the humanChoice and computerChoice parameters.
function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  if (human === computer) {
    return "It's a tie";
  }

  if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    humanChoice++
    return `You win! ${human} beats ${computer}`;
  } else {
    computerChoice++
    return `You lose! ${computer} beats ${human}`;
  }
  
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let result = playRound(humanSelection, computerSelection);
console.log(result);
