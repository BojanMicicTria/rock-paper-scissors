let computerScore = 0
let playerScore = 0
let userChoice

let myCountScore = document.getElementById("my-score");
let computerCountScore = document.getElementById("computer-score");
const cards = document.querySelectorAll("img")
const answerDiv = document.querySelector(".answer");


const  getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3 ) + 1

    switch(random){
        case 1: return "Rock"
        case 2: return "Paper"
        case 3: return "Scissors"
    }
}

const playRound = (playerSelection, computerSelection) => {
    if(playerSelection === computerSelection ) {
        answerDiv.innerHTML = "It's a draw!"
    }

    if(computerSelection === "Paper" && playerSelection === "Scissors"){
        playerScore++
        answerDiv.innerHTML = "<div>You win! Scissors beats Paper</div>"
    }
    if(computerSelection === "Rock" && playerSelection === "Paper"){
        playerScore++
        answerDiv.innerHTML = "<div>You win! Paper beats Rock</div>"
    }
    if(computerSelection === "Scissors" && playerSelection === "Rock"){
        playerScore++
        answerDiv.innerHTML = "<div>You win! Rock beats Scissors</div>"
    }
    // computer score
    if(playerSelection === "Paper" && computerSelection === "Scissors"){
        computerScore++
        answerDiv.innerHTML = "<div>You lose! Scissors beats Paper</div>"
    }
    if(playerSelection === "Rock" && computerSelection === "Paper"){
        computerScore++
        answerDiv.innerHTML = "<div>You lose! Paper beats Rock</div>"
    }
    if(playerSelection === "Scissors" && computerSelection === "Rock"){
        computerScore++
        answerDiv.innerHTML = "<div>You lose! Rock beats Scissors</div>"
    }

    myCountScore.textContent = playerScore;
    computerCountScore.textContent = computerScore;

    if(playerScore === 5 || computerScore === 5){
    reset()
    }
}

const handleClick = (event) => {
    userChoice = event.target.id
    playRound(userChoice, getComputerChoice())
}

const game = () => {
    const computerSelection = getComputerChoice();
    let playerSelection = cards
    .forEach((card) => {
        card.addEventListener(("click") , (event) => {
            handleClick(event)
            playRound(playerSelection, computerSelection)
        })
    })
}

const reset = () => {
    playerScore = 0;
    computerScore = 0;
    myCountScore.innerText = 0
    computerCountScore.innerText = 0
    answerDiv.textContent = ""
}
game()