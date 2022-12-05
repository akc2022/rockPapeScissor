
let userScore=0;
let computerScore=0;
let buttons=document.querySelectorAll('button');
let results =document.getElementById('results');
let computerChoiceDisplay = document.getElementById('computerChoice')
let score = document.getElementById('displayScore')
score.textContent = "0 - 0";
let body = document.body

for (i=0; i<buttons.length; i++) {
  buttons[i].addEventListener('click', playRound);
}

// buttons[0].addEventListener('click', playRound);




function getComputerChoice () {
let arrayOfChoices = ['rock','paper','scissors'];
return arrayOfChoices[Math.floor(Math.random() * arrayOfChoices.length)];
}

function playRound (e){
  if (userScore == 5  || computerScore == 5) {
    return;
  }
  else {
const playerSelection = e.target.id;
const computerSelection = getComputerChoice()
computerChoiceDisplay.textContent = computerSelection
if (computerSelection=='paper' && playerSelection=='rock' || computerSelection=='scissors' && playerSelection=="paper" || computerSelection=='rock' && playerSelection=="scissors") {
     results.textContent= `You LOSE this round! ${computerSelection} beats ${playerSelection}  `;
    computerScore+=1
    if (computerScore == 5) {
      body.innerHTML="<h1>You lose! The computer is victorious once again!</h1>"
    };
  }
  else if (playerSelection=='paper' && computerSelection=="rock" || playerSelection=='scissors' && computerSelection=="paper" || playerSelection=='rock' && computerSelection=="scissors") {
      results.textContent =  `You WIN this round! ${playerSelection} beats ${computerSelection}  `;
      userScore+=1
      if (userScore== 5) {
        body.innerHTML="<h1>You win!</h1>"
      };
    }
  else {
    results.textContent = "Tie!" ;
  }
score.textContent = `${userScore} - ${computerScore}`
}
}


// function game() {
//   for (i=1; i<=5; i++) {
//   playRound();
//   }
//   if (userScore > computerScore) {
//     console.log("Congrats! You beat the computer");
//   }
//   else if (computerScore > userScore) {
//     console.log("Womp womp womp! YOU LOSE!");
//   }
//   else {
//     console.log("You tied with the computer!");
//   }
//
// }

// game ();
