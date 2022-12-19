function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return 1
    }
    else if(playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase()== "paper"){
        return 0
    }
    else if(playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase()== "rock"){
        return 1
    }
    else if(playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase()== "scissors"){
        return 0
    }
    else if(playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase()== "scissors"){
        return 1
    }
    else if(playerSelection.toLowerCase()=="scissors" && computerSelection.toLowerCase()== "paper"){
        return 1
    }
    else if(playerSelection.toLowerCase()=="scissors" && computerSelection.toLowerCase()== "rock"){
        return 0
    }
    else{
        return "Wrong input"
    }
}

function playGame(){
    let human_score = 0
    for (let i = 0; i < 5; i++) {
        let user_input = prompt("Make choice");
        let round = playRound(user_input,getComputerChoice())
        console.log(round)
        if (round == 1){
            ++human_score
        };
     }

    let computer_score = 5-human_score
    console.log(human_score,computer_score)
}

playGame()
