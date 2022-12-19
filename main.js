const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice(list) {
    return options[Math.floor(Math.random()*list.length)];
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "It's a draw!"
    }
    else if(playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase()== "paper"){
        return "Computer wins!"
    }
    else if(playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase()== "rock"){
        return "Player wins!"
    }
    else if(playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase()== "scissors"){
        return "Computer wins!"
    }
    else if(playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase()== "scissors"){
        return "Player wins!"
    }
    else if(playerSelection.toLowerCase()=="scissors" && computerSelection.toLowerCase()== "paper"){
        return "Player wins!"
    }
    else if(playerSelection.toLowerCase()=="scissors" && computerSelection.toLowerCase()== "rock"){
        return "Computer wins!"
    }
    else{
        return "Wrong input"
    }
  }

const playerSelection = "rock";
const computerSelection = getComputerChoice(options);
console.log(playRound(playerSelection, computerSelection));