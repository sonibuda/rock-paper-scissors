//rock = 1, paper 2, scissors 3


 //get Computer Choice multiplies random number between 0 and 0.99 by 3, then
// rounds it down to get a whole number between 1 and 3.

alert("Let's play! Best of 5.")

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

function playRound(humanScore, computerScore) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    switch (humanSelection + computerSelection) {
        case "rockrock":
            alert("Computer chose rock. It's a tie.");
            break;
        case "rockscissors":
            alert("Rock crushes scissors. You win this round!");
            humanScore++;
            break;
        case "rockpaper":
            alert("Paper covers rock. Computer wins this round.");
            computerScore++;
            break;
        case "scissorsrock":
            alert("Scissors get crushed by the computer's rock. Better luck next time.");
            computerScore++;
            break;
        case "scissorsscissors":
            alert("Computer also chose scissors. You tied.");
            break;
        case "scissorspaper":
            alert("Scissors slices paper. You win this round!");
            humanScore++;
            break;
        case "paperrock":
            alert("Paper covers rock. You win this round!");
            humanScore++;
            break;
        case "paperscissors":
            alert("The computer's scissors chopped up your paper. 2nd place isn't too bad.");
            computerScore++;
            break;
        case "paperpaper":
            alert("You both chose paper. It's a tie.");
            break;

    }
    return [humanScore, computerScore];
}



function playGame() {
    let humanScore = 0; //declares a variable to track the player's score and initializes it to 0.
    let computerScore = 0; //declares a variable to track computer score and initializes it to 0.
[humanScore, computerScore] = playRound(humanScore, computerScore);
alert("Your score for round 1 is " + humanScore + " The computer's score is " + computerScore);
[humanScore, computerScore] = playRound(humanScore, computerScore);
alert("Your score for round 2 is " + humanScore + " The computer's score is " + computerScore);
[humanScore, computerScore] = playRound(humanScore, computerScore);
alert("Your score for round 3 is " + humanScore + " The computer's score is " + computerScore);
[humanScore, computerScore] = playRound(humanScore, computerScore);
alert("Your score for round 4 is " + humanScore + " The computer's score is " + computerScore);
[humanScore, computerScore] = playRound(humanScore, computerScore);
alert("Your score for round 5 is " + humanScore + " The computer's score is " + computerScore);
if (humanScore > computerScore) {
    alert("You win!");
} else if (humanScore < computerScore) {
    alert("Computer wins.");
} else {
    alert("It's a tie.");
}
}


playGame();