
function getComputerChoice () {
let arrayOfChoices = ['Rock','Paper','Scissors'];
return arrayOfChoices[Math.floor(Math.random() * arrayOfChoices.length)];
}

function printUserInput () {
  const playerSelection = prompt("Please select your weapon");
  return playerSelection;
}
