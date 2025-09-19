let computerChoice = Math.random();

function getComputerChoice() {
  if (computerChoice > 0 && computerChoice <= 1/3) {
    return 'rock';
  } else if (computerChoice > 1/3 && computerChoice <= 2/3) {
    return 'paper';
  } else if (computerChoice > 2/3 && computerChoice <= 1) {
    return 'scissors';
  }
}

console.log(getComputerChoice());
