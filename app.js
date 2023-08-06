
//return the computer's random choice between rock paper and scissors
function getComputerChoice(){
let computerAnswer = Math.floor(Math.random() * 10);

if(computerAnswer <=3){
    return "rock"
} else if (computerAnswer <=6){
    return "paper"
} else { return "scissors"}
}

let playerScore = 0;
let computerScore = 0;


//single round of the game between the person and the computer and returns the result 
function singleRound(playerSelection, computerSelection){
if(playerSelection === computerSelection){
    return "tie"


} else if (playerSelection === "rock" && computerSelection == "paper"){
    computerScore += 1;
    return "You Lose! Paper beats Rock."


} else if (playerSelection === "rock" && computerSelection == "scissors"){
    playerScore += 1;
    return "You Win! Rock beats Scissors."
    

} else if (playerSelection === "paper" && computerSelection == "rock"){
    playerScore += 1;
    return  "You Win! Paper beats Rock."
    

} else if (playerSelection === "paper" && computerSelection == "scissors"){
    computerScore += 1;
    return "You Lose! Scissors beats Paper."
    

} else if (playerSelection === "scissors" && computerSelection == "rock") {
    computerScore += 1;
    return "You Lose! Rock beats Scissors."
    

} else if (playerSelection === "scissors" && computerSelection == "paper"){
    playerScore += 1;
    return "You Win! Scissors beats Paper."
    
} else { return "This answer is not valid."}

}









function game(){
    for (let i = 1; i<6; i++){
    let playerSelection = prompt("Do you choose rock paper or scissors?");
    const computerSelection = getComputerChoice();
    console.log(singleRound(playerSelection, computerSelection)); 
    }
    

}


function getPlayerScore(){
    if (playerScore > 4){
        console.log("Congratulations! You win!")
    } else { console.log("Sorry! You lose.")}

}


game();
getPlayerScore();

