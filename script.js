let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let secretNumber = 0
const generateTarget = () => { 
  secretNumber = Math.floor(Math.random() * 10)
}
generateTarget()
console.log(secretNumber)
const compareGuesses = (human, computer, secret) => {
  const humanDiff = Math.abs(secret - human)
  const computerDiff = Math.abs(secret - computer)
  console.log(humanDiff, computerDiff)
  return humanDiff < computerDiff ? true : false
}
console.log(compareGuesses(1,3,secretNumber))

const updateScore = (str) => {
  if(str === 'human'){
    humanScore = humanScore + 1
  }
  computerScore = computerScore + 1
}

const advanceRound = () => {
  currentRoundNumber = currentRoundNumber + 1
}