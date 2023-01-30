let choices = ["🪨", "🧻", "✂️"];

function getComputerChoice() {
    //get random choice
    let random = Math.floor(Math.random() * choices.length)
    return choices[random]
}

const computerSelection = getComputerChoice()

let playerScore = 0
let computerScore = 0

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")



const results = document.querySelector("#results");


rock.addEventListener('click', function() {
    playerSelection = "🪨"
    playRound(playerSelection, computerSelection)
})

paper.addEventListener('click', function(e) {
    playerSelection = "🧻"
    playRound(playerSelection, computerSelection)

})

scissors.addEventListener('click', function(e) {
    playerSelection = "✂️"
    playRound(playerSelection, computerSelection)

})

function playRound(playerSelection, computerSelection) {    
    if (playerSelection == "🪨" && computerSelection == "✂️" ||
        playerSelection == "🧻" && computerSelection == "🪨" ||
        playerSelection == "✂️" && computerSelection == "🧻") {
        playerScore++
        results.textContent = `You win! Player: ${playerSelection} Computer: ${computerSelection}`

    } else if (playerSelection === computerSelection) {
        results.textContent = `Tie! Player: ${playerSelection} Computer: ${computerSelection}`
    } else {
        computerScore++
        results.textContent = `You lose! Player: ${playerSelection} Computer: ${computerSelection}`

    }
}

/*
function game() {
    //loop through 5 games
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection) 
        console.log("Computer:"+computerScore+' 👀 '+'Player:'+playerScore);
        if (computerScore > playerScore) {
            console.log(`You lose! Computer: ${computerSelection} Player: ${playerSelection}`)
        } else if (computerScore < playerScore) {
            console.log( `You win! Player: ${playerSelection} Computer: ${computerSelection}`)
        } else {
            console.log(`Both computer and player won same number of rounds, no overall winner, yet. Player selected: ${playerSelection} Computer selected: ${computerSelection}`)
        }    
    }
}
game()

*/