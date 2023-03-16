let choices = ["Rock", "Paper", "Scissors"];
let counterComputer = 0;
let counterPlayer = 0;
let winner = "";
let gameOver = false

function game(){
    for (let i = 1; i <= 5; i++){
        alert(`This is round ${i}, the points are Computer: ${counterComputer} and Player: ${counterPlayer}.`);
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        let play = playRound(playerChoice, computerChoice);
        if (play === "computer win"){
            counterComputer++;
        }else if (play === "player win"){
            counterPlayer++;
        }else{
            i--;
        }
        if (counterPlayer === 3){
            winner = "Player";
            gameOver = true;
        }else if (counterComputer === 3){
            winner = "Computer";
            gameOver = true;
        }
        if (gameOver){
            break;
        }
    }
    return winner
}
function getComputerChoice(){
    let index = Math.floor(Math.random()*choices.length);
    alert(`The computer made a choice!`);
    console.log(choices[index]);
    return choices[index];
}

function getPlayerChoice(){
    let sign = window.prompt("What do you choose?", "Rock, Paper or Scissors?");
    let choice = "";
    if (sign.toLowerCase() === "rock"){
        alert("Okay! Rock it is!");
        choice = "Rock";
    }else if (sign.toLowerCase() === "paper"){
        alert("Okay! Paper it is!");
        choice = "Paper";
    }else if (sign.toLowerCase() === "scissors"){
        alert("Okay! Scissors it is!");
        choice = "Scissors";
    }else{
        alert("Hey, pick a correct option!");
    }
    alert(`You chose: ${choice}!`);
    console.log(choice);
    return choice;
}

function playRound(playerChoice, computerChoice){
    alert("The fight begins!");
    let state = "";
    if (playerChoice === computerChoice){
        alert("It's a draw!");
        state = "draw";
    }else if (playerChoice === "Rock" && computerChoice === "Paper"){
        alert("Computer wins with Paper!");
        state = "computer win";
    }else if (playerChoice === "Paper" && computerChoice === "Scissors"){
        alert("Computer wins with Scissors!");
        state = "computer win";
    }else if (playerChoice === "Scissors" && computerChoice === "Rock"){
        alert("Computer wins with Rock!");
        state = "computer win";
    }else{
        alert(`Computer chose ${computerChoice}. Player wins!`);
        state = "player win";
    }
    console.log(state);
    return state;
}

let output = game();
alert(`The winner is ${output}`);
console.log(output);