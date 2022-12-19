const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice(list) {
    return options[Math.floor(Math.random()*list.length)];
}

