let choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    let index = Math.floor(Math.random()*choices.length);
    return console.log(`The computer chooses: ${choices[index]}!`);
}
let computerChoice = getComputerChoice();
function getPlayerChoice(){
    let sign = window.prompt("What do you choose?", "Rock, Paper or Scissors?")
    let choice = ""
    if (sign.toLowerCase() === "rock"){
        alert("Okay! Rock it is!")
        choice = "Rock"
    }else if (sign.toLowerCase() === "paper"){
        alert("Okay! Paper it is!")
        choice = "Paper"
    }else if (sign.toLowerCase() === "scissors"){
        alert("Okay! Scissors it is!")
        choice = "Scissors"
    }else{
        alert("Hey, pick a correct option!")
    }
    return console.log(`You chose: ${choice}!`)
}
let playerChoice = getPlayerChoice();

function playRound(playerChoice, computerChoice){
        let sign = alert("The fight begins!")
        if (playerChoice === computerChoice){
            alert("It's a draw!")
        }else if (playerChoice === "Rock" && computerChoice === "Paper"){
            alert("Computer wins!")
        }



}
// make a power list (elif statement)
// get user choice function
// make rounds for player and comuter choice
// create a round counter
// for loop probably
// set up a winner/looser screen




for (round = 1; round > 5; round++){

}