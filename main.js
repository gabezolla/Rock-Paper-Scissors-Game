const optionButtons = document.querySelectorAll("button")
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".pc-choice");
const showWinner = document.querySelector(".show-winner");
const playerPoints = document.querySelector(".player-points")
const computerPoints = document.querySelector(".pc-points")
let playerScore = 0;
let computerScore = 0;

optionButtons.forEach(button => {
    const computerOption = ["rock", "paper", "scissors"];

    button.addEventListener("click", () => {
        const computerPlay = computerOption[Math.floor(Math.random()*3)];
        
        setTimeout(() => {
            playerChoice.src = `../images/${button.textContent}.png`
            computerChoice.src = `../images/${computerPlay}.png`
            
            whoWins(button.textContent, computerPlay)
            updateScore();

        }, 1000)
    })
})

function whoWins(playerOption, computerOption) {
    if(playerOption === computerOption) {
        showWinner.innerHTML = "It was a tie!"; 
        return;       
    }

    if(playerOption === 'rock') {
        if(computerOption === 'paper') {
            showWinner.innerHTML = "Computer won!";
            computerScore++;
            return
        }
        if(computerOption === 'scissors') {
            showWinner.innerHTML = "You won!";
            playerScore++;
            return
        }
    }

    if(playerOption === 'scissors') {
        if(computerOption === 'paper') {
            showWinner.innerHTML = "You won!";
            playerScore++;
            return
        }
        if(computerOption === 'rock') {
            showWinner.innerHTML = "Computer won!";
            computerScore++;
            return
        }        
    }

    if(playerOption === 'paper') {
        if(computerOption === 'rock') {
            showWinner.innerHTML = "You won!";
            playerScore++;
            return
        }
        if(computerOption === 'scissors') {
            showWinner.innerHTML = "Computer won!";
            computerScore++;
            return
        }        
    }
}

function updateScore() {
    computerPoints.innerHTML = computerScore;
    playerPoints.innerHTML = playerScore;
}