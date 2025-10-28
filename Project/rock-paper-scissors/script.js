let humanScore = 0;
let computerScore = 0;

//username = prompt("Enter your name to start the game :)");

function getComputerChoice(){
    let rcc = Math.floor(Math.random() * 3);
    if (rcc == 0){
        return "rock";
    }
    else if (rcc == 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(){
    let uc = prompt("Enter the Choice: Rock, Paper, Scissor");
    uc = uc.toLocaleLowerCase();
    if (uc == "rock"){
        return "rock";
    }
    else if (uc == "paper"){
        return "paper";
    }
    else if (uc == "scissors"){
        return "scissors";
    }
    else {
        return "Invalid Input :("
    }

}

function playRound(humanChoice, computerChoice){
    if (
        humanChoice !== "rock" && 
        humanChoice !== "paper" &&
        humanChoice !== "scissors"
    ){
        return "Invalid input! Please enter Rock, Paper, or Scissors.";
    }

    if (humanChoice == computerChoice){
        return "It's a tie :|"
    }

    if (
        (humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore++;
        return `You Win! ${humanChoice} beats ${computerChoice}.`;
    }
    else{
        computerScore++;
        return `You Loss! ${computerChoice} beats ${humanChoice}.`;
    }
}

//let humanChoice = getHumanChoice();
//let computerChoice = getComputerChoice();

function playGame() {
    let result1 = playRound(getHumanChoice(), getComputerChoice());
    console.log("Round 1:", result1);
    console.log(`Current Score => User: ${humanScore}, Computer: ${computerScore}`);

    let result2 = playRound(getHumanChoice(), getComputerChoice());
    console.log("Round 2:", result2);
    console.log(`Current Score => User: ${humanScore}, Computer: ${computerScore}`);

    let result3 = playRound(getHumanChoice(), getComputerChoice());
    console.log("Round 3:", result3);
    console.log(`Current Score => User: ${humanScore}, Computer: ${computerScore}`);

    let result4 = playRound(getHumanChoice(), getComputerChoice());
    console.log("Round 4:", result4);
    console.log(`Current Score => User: ${humanScore}, Computer: ${computerScore}`);

    let result5 = playRound(getHumanChoice(), getComputerChoice());
    console.log("Round 5:", result5);
    console.log(`Current Score => User: ${humanScore}, Computer: ${computerScore}`);

    // Final Result
    if (humanScore > computerScore) {
        console.log("FINAL RESULT: YOU WIN THE GAME! 🏆");
    } else if (humanScore < computerScore) {
        console.log("FINAL RESULT: COMPUTER WINS! 🤖");
    } else {
        console.log("FINAL RESULT: IT'S A TIE!");
    }
}

// Call to start the game
playGame();

// using for loop
/*
function playGame() {
    for (let i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        console.log(`Round ${i}: ${result}`);
        console.log(`Current Score => User: ${humanScore}, Computer: ${computerScore}`);
    }

    // Final Result
    if (humanScore > computerScore) {
        console.log("FINAL RESULT: YOU WIN THE GAME! 🏆");
    } else if (humanScore < computerScore) {
        console.log("FINAL RESULT: COMPUTER WINS! 🤖");
    } else {
        console.log("FINAL RESULT: IT'S A TIE!");
    }
}

playGame();
*/