
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

    let output = `Your selection: ${humanChoice}\nComputer selection: ${computerChoice}\n`;
    let winningChoice;
    let losingChoice;
    let tiedGame = false;
    let youWin = "You win! "
    let youLose = "You lose. "

    switch(humanChoice){
        case("rock"):
            switch(computerChoice){
                case("rock"):
                    tiedGame = true;
                    output = "Tied game! No points awarded!";
                    break;
                case("paper"):
                    output += youLose;
                    break;
                case("scissors"):
                    output += youWin;
                    break;
            }
        case("paper"):
            switch(computerChoice){
                case("rock"):
                    output += youWin;
                    break;
                case("paper"):
                    tiedGame = true;
                    output = "Tied game! No points awarded!";
                    break;
                case("scissors"):
                    output += youLose;
                    break;
            }
        case("scissors"):
            switch(computerChoice){
                case("rock"):
                    output += youLose;
                    break;
                case("paper"):
                    output += youWin;
                    break;
                case("scissors"):
                    tiedGame = true;
                    output = "Tied game! No points awarded!";
                    break;
            }
        }
    

    if (tiedGame == false) output += `${winningChoice} beats ${losingChoice}\n`;

    console.log(output)
}

console.log("Intializing game...")
let humanScore, computerScore = 0;

for (let i = 0; i <= 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Turn ${i + 1} of 5...`)
    playRound(humanSelection, computerSelection);
}


