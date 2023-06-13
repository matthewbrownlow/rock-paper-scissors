/**
 * When this function is called, it randomly selects and returns one of the three choices
 * ("rock", "paper", or "scissors") as the computer's play in the game
 */
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/** 
 * When this function is called, it takes the player's and computer's choices,
 * determines the outcome of a round in the "rock, paper, scissors" game,
 * and returns a string indicating whether the player won, lost, or tied the round
 * */
function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
        ) {
        return "You win! " + playerSelection + " beats " + computerSelection;
        } else if (playerSelection === computerSelection) {
        return "It's a tie!";
        } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
        }
    }

/** 
 * Function to update the result message
 */
function updateResult(roundResult, gameResult) {
  const roundResultElement = document.getElementById("round-result");
  const gameResultElement = document.getElementById("game-result");
  roundResultElement.textContent = roundResult;
  gameResultElement.textContent = gameResult;
}


/** 
 * Function to start the game
 */



/**
 * Start the game
 */