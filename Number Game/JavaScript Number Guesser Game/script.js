let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {

return Math.floor(Math.random() * 10);

}

console.log(generateTarget());

const compareGuesses = (userGuess,computerGuess,targetGuess) => {

if(userGuess > targetGuess){
  return true;
}

else if(computerGuess === targetGuess){
  return 'players are tied'
}

else if(computerGuess > targetGuess){
  return false;
}

}
const updateScore = winner => {
  if(winner === 'human')
  {
    return humanScore++
  }
  else if(winner === 'computer')
  {
    return computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}





