const getRandomNumber = document.getElementById("random");

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3 ) + 1

    switch(random){
        case 1: return "ROCK"
        case 2: return"PAPER"
        case 3: return "SCISSCORS"
    }
}

getRandomNumber.addEventListener("click", () => {
    console.log(getComputerChoice())
})

getComputerChoice()