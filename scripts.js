
function getComputerChoice(){
    let index = Math.floor(Math.random() * 3);
    let computerChoice;
    switch(index){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
        default:
            console.log("Incorrect choice!");
    }

    console.log("Computer has made its choice!");
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice  = prompt("It's your turn!\n\nPlease select one of the three choices:\nRock\nPaper\nScissors");
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice){

    let output = `Your selection: ${humanChoice}\nComputer selection: ${computerChoice}\n\n`;
    let winningChoice;
    let losingChoice;
    let humanWon;
    let youWin = "You win! "
    let youLose = "You lose. "

    switch(humanChoice){
        case("rock"):
            switch(computerChoice){
                case("rock"):
                    output += "Tied game! No points awarded!";
                    break;
                case("paper"):
                    winningChoice = "paper";
                    losingChoice = "rock";
                    humanWon = false;
                    break;
                case("scissors"):
                    winningChoice = "rock";
                    losingChoice = "scissors";
                    humanWon = true;
                    break;
            }
            break;
        case("paper"):
            switch(computerChoice){
                case("rock"):
                    winningChoice = "paper";
                    losingChoice = "rock";
                    humanWon = true;
                    break;
                case("paper"):
                    break;
                case("scissors"):
                    winningChoice = "scissors";
                    losingChoice = "paper";
                    humanWon = false;
                    break;
            }
            break;
        case("scissors"):
            switch(computerChoice){
                case("rock"):
                    winningChoice = "rock";
                    losingChoice = "scissors";
                    humanWon = false;
                    break;
                case("paper"):
                    winningChoice = "scissors";
                    losingChoice = "paper";
                    humanWon = true;
                    break;
                case("scissors"):
                    break;
            }
            break;
        }
    
    if (humanWon){
        output += youWin + `${winningChoice} beats ${losingChoice}\n`;
        humanScore++;
    }
    else if(humanWon == false){
        output += youLose + `${winningChoice} beats ${losingChoice}\n`;
        computerScore++;
    }
    else{
        output += "Tied game! No points awarded!";
    }


    return output;
}

function buttonClicked(button){
    docuBody = document.querySelector("body");
    outcomeMessage = playRound(button, getComputerChoice());
    outcomeMessage += `Score: Human - ${humanScore} | Computer - ${computerScore}`
    console.log(outcomeMessage);
    const div = document.createElement("div");
    div.textContent = outcomeMessage;
    docuBody.appendChild(div)
}

function finalOutcome(){

    console.log(computerScore);
    console.log(humanScore);
    let finalMessage = "Final outcome: ";

    if (computerScore > humanScore){
        finalMessage += "You lose! "
    }
    else{
        finalMessage += "You win! "
    }

    console.log(finalMessage);
    finalMessage += `Final Score: Human - ${humanScore} | Computer - ${computerScore}`;
    const finalMessageDiv = document.createElement("div");
    finalMessageDiv.textContent = finalMessage;
    docuBody.appendChild(finalMessageDiv);
    gameFinished = true;

}

console.log("Intializing game...")
let humanScore = 0;
let computerScore = 0;
let gameFinished = false;
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
i = 1;
totalGames = 5
// for (let i = 0; i <= 5; i++){
    
document.addEventListener('click', (event)=>{
    if (gameFinished == false){
        clickId = event.target.id;
        if (clickId == "rock" || clickId == "paper" || clickId == "scissors"){
            if(humanScore >= 5 || computerScore >=5){
                 finalOutcome();
            }
            else{
                console.log(`Game ${i} of ${totalGames}.`);
                buttonClicked(clickId);
                i++;
            }
            
        }
    }
});
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// console.log(`Turn ${i + 1} of 5...`)
// playRound(humanSelection, computerSelection);
// }


