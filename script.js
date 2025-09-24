
function getComputerChoice() {
  const random = Math.random();

  if (random > 0 && random <= 1/3) {
    return 'rock';
  } else if (random > 1/3 && random <= 2/3) {
    return 'paper';
  } else if (random > 2/3 && random <= 1) {
    return 'scissors';
  }
}

function getHumanChoice() {
  return prompt('What\'s your choice:');
}

console.log(getHumanChoice());
console.log(getComputerChoice());

let humanScore = 0;
let computerScore = 0;

