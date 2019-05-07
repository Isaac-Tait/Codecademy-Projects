const getUserChoice = userInput => {
	userInput = userInput.toLowerCase();
if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
  return userInput;
}
  else{
    console.log("You must select rock, paper, scissors, or an unspecified cheat word to proceed.")
	}
};

const getComputerChoice = () =>{
  const randomNumber =
Math.floor(Math.random() * 3);

switch(randomNumber){
case 0:
return 'rock';

case 1:
return 'paper';

case 2:
return 'scissors';
    }
  }

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return "The game is a tie"
  }
if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return "The computer won :(";
    }
    else {
      return "You won!";
    }
  }
if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return "The computer won :(";
    }
    else {
      return "You won!";
    }
  }
if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return "The computer won :(";
      }
      else {
        return "You won!";
      }
    }
if(userChoice === 'bomb'){
      if(computerChoice === ('rock' , 'paper' , 'scissors')){
        return "You won";
      }
    }
}

// console.log(getComputerChoice());

const playGame = () =>{
const userChoice = getUserChoice ('rock');
const computerChoice = getComputerChoice();
  console.log('Your choice is:' + userChoice);
  console.log('The computers choice is:' + computerChoice);
    console.log(determineWinner(userChoice , computerChoice));
}

playGame();
