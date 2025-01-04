//rock = 1, paper 2, scissors 3


 //get Computer Choice multiplies random number between 0 and 0.99 by 3, then
// rounds it down to get a whole number between 1 and 3.



let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() *3) +1;
    switch (computerChoice) {
        case 1:
            return 'rock';
        case 2: 
            return 'paper';
        case 3: 
            return 'scissors';
    }
}


function getHumanChoice() {
    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');

   rockButton.addEventListener("click", () => {
    playRound("rock");
   });

   paperButton.addEventListener("click", () => {
    playRound("paper");
   });

  scissorsButton.addEventListener("click", () => {
    playRound("scissors");
  });
   
}



function playRound(humanSelection) {
    const computerSelection = getComputerChoice();

    let resultMessage = "";

    switch (humanSelection + computerSelection) {
        case "rockrock":
            resultMessage = "Computer chose rock. It's a tie.";
            break;
        case "rockscissors":
            resultMessage = "Rock crushes scissors. You win this round!";
            humanScore++;
            break;
        case "rockpaper":
            resultMessage = "Paper covers rock. Computer wins this round.";
            computerScore++;
            break;
        case "scissorsrock":
            resultMessage ="Scissors get crushed by the computer's rock. Better luck next time.";
            computerScore++;
            break;
        case "scissorsscissors":
            resultMessage ="Computer also chose scissors. You tied.";
            break;
        case "scissorspaper":
            resultMessage ="Scissors slices paper. You win this round!";
            humanScore++;
            break;
        case "paperrock":
           resultMessage = "Paper covers rock. You win this round!";
            humanScore++;
            break;
        case "paperscissors":
            resultMessage = "The computer's scissors chopped up your paper. 2nd place isn't too bad.";
            computerScore++;
            break;
        case "paperpaper":
            resultMessage = "You both chose paper. It's a tie.";
            break;

    }

    document.getElementById('resultContainer').innerHTML = "";

    const resultDiv = document.createElement('div');
    resultDiv.textContent = resultMessage;
    document.getElementById('resultContainer').appendChild(resultDiv);
    

    document.getElementById('humanScore').textContent = `Human Score: ${humanScore}`;
    document.getElementById('computerScore').textContent = `Computer Score: ${computerScore}`;
    

}

getHumanChoice();

function playGame() {
humanScore = 0; //declares a variable to track the player's score and initializes it to 0.
computerScore = 0; //declares a variable to track computer score and initializes it to 0.
let roundsPlayed = 0;


const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener("click", () => {
    playRound("rock");
    roundsPlayed++;
    checkGameEnd();
});

paperButton.addEventListener("click", () => {
    playRound("paper");
    roundsPlayed++
    checkGameEnd();
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors");
    roundsPlayed++
    checkGameEnd();
});

function checkGameEnd() {
    if (roundsPlayed === 5) {
        let finalResultMessage = "";
    
        if (humanScore > computerScore) {
            finalResultMessage = 'Game over. You are the champion!';
        } else if (humanScore < computerScore) {
            finalResultMessage = 'Game over. The computer wins. At least you got second place.';
        } else {
           finalResultMessage = 'Game over. You tied with the computer.';
        }
    
        const finalResultDiv = document.getElementById('finalResult');
        finalResultDiv.textContent = finalResultMessage;
      


        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

        const restartButton = document.createElement('button');
        restartButton.textContent = 'Restart';
        restartButton.id = "restartButton";
        restartButton.addEventListener('click', () => {
            location.reload();
        });

        finalResultDiv.appendChild(restartButton);
    }

    } 
    
}

playGame();


