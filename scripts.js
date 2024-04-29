console.log("Hello Worlds!")

function getComputerChoice(){
    let index = Math.floor(Math.random() * 3);
    let choice;
    switch(index){
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
        default:
            console.log("Incorrect choice!");

    }
}
