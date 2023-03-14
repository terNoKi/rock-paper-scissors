const choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    let index = Math.floor(Math.random(choices.length));
    return console.log(`The computer chooses: ${choices[index]}!`);
}
getComputerChoice();
