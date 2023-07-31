let computerScore = 0
let playerScore = 0


function getComputerChoice(){
    let random = Math.floor(Math.random() * 3 ) + 1

    switch(random){
        case 1: return "Rock"
        case 2: return "Paper"
        case 3: return "Scissors"
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection ) return "Draw"

    if(computerSelection === "Paper" && playerSelection === "Scissors"){
        playerScore++
        return "You win! Scissors beats Paper"
    }
    if(computerSelection === "Rock" && playerSelection === "Paper"){
        playerScore++
        return "You win! Paper beats Rock"
    }
    if(computerSelection === "Scissors" && playerSelection === "Rock"){
        playerScore++
        return "You win! Rock beats Scissors"
    }
    // computer score
    if(playerSelection === "Paper" && computerSelection === "Scissors"){
        computerScore++
        return "You lose! Scissors beats Paper"
    }
    if(playerSelection === "Rock" && computerSelection === "Paper"){
        computerScore++
        return "You lose! Paper beats Rock"
    }
    if(playerSelection === "Scissors" &&  computerSelection === "Rock"){
        computerScore++
        return "You lose! Rock beats Scissors"
    }
}

function game(){
    while(true){
        const playerSelection = prompt("Player's turn:")
        const computerSelection = getComputerChoice()

        playRound(playerSelection,computerSelection)
        console.log(computerScore, playerScore)

        if(playerScore === 5){
            console.log("Congradulations you win!")
            break
        }
        if(computerScore === 5){
            console.log("You lost!")
            break
        }
    }
}

game()