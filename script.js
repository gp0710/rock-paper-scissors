let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    //get random choice
    let random = Math.floor(Math.random() * choices.length)
    return choices[random]
}

const computerSelection = getComputerChoice()

let playerScore = 0
let computerScore = 0

//This code works the same as lines 56-93; I am just experimenting with different 
// ways of writing the game.

/* 
function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("pick Rock, Paper, or Scissors")
        function playRound(playerSelection, computerSelection) {
            let playRock = /\brock\b/i
            let playPaper = /\bpaper\b/i
            let playScissors = /\bscissors\b/i

            let rock = playerSelection.match(playRock)
            let paper = playerSelection.match(playPaper)
            let scissors = playerSelection.match(playScissors)
            
            if (playerSelection == rock && computerSelection == "scissors" ||
                playerSelection == paper && computerSelection == "rock" ||
                playerSelection == scissors && computerSelection == "paper") {
                playerScore++
                return `You win! ${playerSelection} beats ${computerSelection}`
            } else if (playerSelection === computerSelection) {
                return `Tie!`
            } else {
                computerScore++
                return `You lose! ${computerSelection} beats ${playerSelection}`
            }
        }
        playRound(playerSelection, computerSelection)
        console.log("Computer:"+computerScore+' vs '+'Player:'+playerScore);
        if (computerScore > playerScore) {
            console.log("computer wins!")
        } else {
            console.log("player wins!")
        }
        console.log(computerScore)
        console.log(playerScore)

    }
}
game()
*/


function playRound(playerSelection, computerSelection) {
    let playRock = /\brock\b/i
    let playPaper = /\bpaper\b/i
    let playScissors = /\bscissors\b/i

    let rock = playerSelection.match(playRock)
    let paper = playerSelection.match(playPaper)
    let scissors = playerSelection.match(playScissors)
    
    if (playerSelection == rock && computerSelection == "scissors" ||
        playerSelection == paper && computerSelection == "rock" ||
        playerSelection == scissors && computerSelection == "paper") {
        playerScore++
        //return `You win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === computerSelection) {
        return `Tie!`
    } else {
        computerScore++
        //return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
    //loop through 5 games
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("pick Rock, Paper, or Scissors")
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