let choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    let index = Math.floor(Math.random()*choices.length);
    alert(`The computer made a choice!`);
    console.log(choices[index])
    return choices[index]
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
    alert(`You chose: ${choice}!`)
    console.log(choice)
    return choice
}
let playerChoice = getPlayerChoice();

function playRound(playerChoice, computerChoice){
        let sign = alert("The fight begins!")
        if (playerChoice === computerChoice){
            alert("It's a draw!")
        }else if (playerChoice === "Rock" && computerChoice === "Paper"){
            alert("Computer wins!")
        }else if (playerChoice === "Paper" && computerChoice === "Scissors"){
            alert("Computer wins!")
        }else if (playerChoice === "Scissors" && computerChoice === "Rock"){
            alert("Computer wins!")
        }else{
            alert("Player wins!")
        }



}
let round = playRound(playerChoice, computerChoice);




// make a power list (elif statement)
// get user choice function
// make rounds for player and comuter choice
// create a round counter
// for loop probably
// set up a winner/looser screen




for (i = 1; i > 6; i++){
    
}