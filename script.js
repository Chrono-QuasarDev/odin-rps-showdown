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
  let choice = prompt('Choose Rock, Paper, or Scissors:').toLowerCase(); // It takes an input form the user.
  return choice;
}

//Logic for a single round.
// This place is important so pay attention. We create a function 'playRound' and give it the humanChoice and computerChoice parameters.
function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  if (human === computer) {
    return "tie";
  }

  if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    return `win`;
  } else {
    return `lose`;
  }
}


function playGame() {
  alert("Welcome to Rock, Paper, Scissors!\nYou will play 5 rounds against the computer.\nCheck in the console to see your results after each round.")

  // These variables will store the game scores.
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 0; round <= 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let result = playRound(humanSelection, computerSelection);

    console.log(`Round ${round}`);
    console.log(`You chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    if (result === "win") {
      humanScore++
      console.log("You win this round");
    } else if (result === "lose") {
      computerScore++
      console.log("You lost this round");
    } else {
      console.log("This round is a tie");
    }

    console.log(`Score: ${humanScore} : ${computerScore}`);

    if (humanScore > computerScore) {
      console.log("🎉 You are the winner of the game!");
    } else if (computerScore > humanScore) {
      console.log("💻 Computer wins the game!");
    } else {
      console.log("🤝 It's an overall tie!");
    }
  }
}

console.log("Welcome once again to Rock, Paper, Scissors!");
console.log("Type `playgame()` in the console to start the game");