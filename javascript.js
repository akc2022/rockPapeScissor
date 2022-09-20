
let userScore=0;
let computerScore=0;

function getComputerChoice () {
let arrayOfChoices = ['rock','paper','scissors'];
return arrayOfChoices[Math.floor(Math.random() * arrayOfChoices.length)];
}

function getUserChoice() {
let validResponse = false;
const validEntries = new Set (["rock", "paper", "scissors"]);
while (!validResponse) {
let playerSelection = prompt("Please select your weapon! rock, paper or scissors");
playerSelection=playerSelection.toLowerCase();
if (validEntries.has(playerSelection)) {
  validResponse=true;
  return playerSelection;
}
}
}

function playRound (){
  const computerSelection = getComputerChoice();
  let playerSelection=getUserChoice();
  console.log(playerSelection);
  console.log(computerSelection);
  if (computerSelection=='paper' && playerSelection=='rock' || computerSelection=='scissors' && playerSelection=="paper" || computerSelection=='rock' && playerSelection=="scissors") {
     console.log( `You LOSE this round! ${computerSelection} beats ${playerSelection}  `);
    return computerScore+=1;
  }
  else if (playerSelection=='paper' && computerSelection=="rock" || playerSelection=='scissors' && computerSelection=="paper" || playerSelection=='rock' && computerSelection=="scissors") {
      console.log( `You Win this round! ${playerSelection} beats ${computerSelection}  `);
      return userScore+=1;
    }
  else {
    console.log("Tie!");
  }
}


function game() {
  for (i=1; i<=5; i++) {
  playRound();
  }
  if (userScore > computerScore) {
    console.log("Congrats! You beat the computer");
  }
  else if (computerScore > userScore) {
    console.log("Womp womp womp! YOU LOSE!");
  }
  else {
    console.log("You tied with the computer!");
  }

}

game ();
