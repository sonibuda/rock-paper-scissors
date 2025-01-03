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


