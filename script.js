let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10)
console.log(generateTarget())
const compareGuesses = (human, computer, secret) => {
  const humanDiff = secret - human
  const computerDiff = secret - computer
  return humanDiff < computerDiff ? true : false
}
console.log(compareGuesses(1,3,5))

const updateScore = (str) => {
  if(str === 'human'){
    return humanScore + 1
  }
  return computerScore + 1
}

const advanceRound = () => {
  return currentRoundNumber + 1
}