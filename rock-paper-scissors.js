let choices = ["Rock", "Paper", "Scissors"];
let counterComputer = 0
let counterPlayer = 0
let winner = ""
function game(){
    for (i = 1; i < 6; i++){
        alert(`This is round ${i}, the points are Computer: ${counterComputer} and Player: ${counterPlayer}.`);
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        let play = playRound(playerChoice, computerChoice)
        if (play === "computer win"){
            counterComputer++
        }else if (play === "player win"){
            counterPlayer++
        }else i--

    }if (counterComputer > counterPlayer){
        winner = "Computer!"
    }else if (counterComputer < counterPlayer){
        winner = "Player!"
    }else{
        winner = "It's a draw!"
    }
    return winner
}

function getComputerChoice(){
    let index = Math.floor(Math.random()*choices.length);
    alert(`The computer made a choice!`);
<<<<<<< Updated upstream
    console.log(choices[index])
    return choices[index]
=======
    console.log(`Computer choice: ${choices[index]}`);
    return choices[index];
>>>>>>> Stashed changes
}
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
<<<<<<< Updated upstream
    alert(`You chose: ${choice}!`)
    console.log(choice)
    return choice
=======
    alert(`You chose: ${choice}!`);
    console.log(`Player choice: ${choice}`);
    return choice;
>>>>>>> Stashed changes
}

function playRound(playerChoice, computerChoice){
        let sign = alert("The fight begins!")
        if (playerChoice === computerChoice){
<<<<<<< Updated upstream
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
=======
            alert(`It's a draw! Computer also chose ${computerChoice}!`);
            state = "draw"
        }else if (playerChoice === "Rock" && computerChoice === "Paper"){
            alert("Computer wins with Paper!");
            state = "computer win"
        }else if (playerChoice === "Paper" && computerChoice === "Scissors"){
            alert("Computer wins with Scissors!");
            state = "computer win"
        }else if (playerChoice === "Scissors" && computerChoice === "Rock"){
            alert("Computer wins with Rock!");
            state = "computer win"
        }else{
            alert(`Computer chose ${computerChoice}. Player wins!`);
            state = "player win"
        }
        console.log(`Round outcome: ${state}`)
        return state
        
}

let output = game()
alert(`The winner is: ${output}`)
console.log(`The winner is computer ${output}`)

>>>>>>> Stashed changes




for (i = 1; i > 6; i++){
    
}