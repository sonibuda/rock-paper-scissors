//rock = 1, paper 2, scissors 3
var humanScore = 0; //declares a variable to track the player's score and initializes it to 0.
var computerScore = 0; //declares a variable to track computer score and initializes it to 0.

 //get Computer Choice multiplies random number between 0 and 0.99 by 3, then
// rounds it down to get a whole number between 1 and 3.
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
    const humanChoice = prompt("To play, enter rock, paper or scissors.").toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    switch (humanSelection + computerSelection) {
        case "rockrock":
            console.log("Computer chose rock. It's a tie.");
            break;
        case "rockscissors":
            console.log("Rock crushes scissors. You win this round!");
            humanScore++;
            break;
        case "rockpaper":
            console.log("Paper covers rock. Computer wins this round.");
            computerScore++;
            break;
        case "scissorsrock":
            console.log("Scissors get crushed by the computer's rock. Better luck next time.");
            computerScore++;
            break;
        case "scissorsscissors":
            console.log("Computer also chose scissors. You tied.");
            break;
        case "scissorspaper":
            console.log("Scissors slices paper. You win this round!");
            humanScore++;
            break;
        case "paperrock":
            console.log("Paper covers rock. You win this round!");
            humanScore++;
            break;
        case "paperscissors":
            console.log("The computer's scissors chopped up your paper. 2nd place isn't too bad.");
            computerScore++;
            break;
        case "paperpaper":
            console.log("You both chose paper. It's a tie.");
            break;

    }
}

playRound();
console.log(humanScore);
console.log(computerScore);