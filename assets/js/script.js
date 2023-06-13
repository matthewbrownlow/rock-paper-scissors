/**
 * When this function is called, it randomly selects and returns one of the three choices
 * ("rock", "paper", or "scissors") as the computer's play in the game.
 */
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/** 
 * When this function is called, it takes the player's and computer's choices,
 * determines the outcome of a round in the "rock, paper, scissors" game,
 * and returns a string indicating whether the player won, lost, or tied the round.
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
 * When this function is called, it finds the specific HTML elements on a web page using their IDs,
 * and then updating the text content of those elements with the provided round and game result values.
 */
function updateResult(roundResult, gameResult) {
    const roundResultElement = document.getElementById("round-result");
    const gameResultElement = document.getElementById("game-result");
    roundResultElement.textContent = roundResult;
    gameResultElement.textContent = gameResult;
}

/** 
 * When this function is called, it sets up a game where the player and the computer make selections by clicking on choices.
 * The game keeps track of scores, updates the results after each round,
 * and determines the winner once either the player or the computer reaches a score of 5.
 */
 function game() {
    let playerScore = 0;
    let computerScore = 0;
    const choices = document.querySelectorAll(".choice");
  
    choices.forEach((choice) => {
      choice.addEventListener("click", function () {
        const playerSelection = choice.id;
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);
  
        if (roundResult.includes("win")) {
          playerScore++;
        } else if (roundResult.includes("lose")) {
          computerScore++;
        }
  
        updateResult(roundResult, "Player: " + playerScore + " Computer: " + computerScore);
  
        if (playerScore === 5 || computerScore === 5) {
          let gameResult;
          if (playerScore > computerScore) {
            gameResult = alert("You win the game!");
          } else {
            gameResult = alert("You lose the game!");
          }
          updateResult(roundResult, gameResult);
          playerScore = 0;
          computerScore = 0;
        }
      });
    });
  }
  
  // Start the game
  game();