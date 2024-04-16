function getComputerChoice () {
   let a= Math.floor(Math.random()* 3) +1;
   return (a === 1) ? 'rock' : (a === 2) ? 'paper' :'scissors';
  
}

let playerScore=0
let computerScore=0

function playRound (playerSelection, computerSelection) {

    // switch (computerSelection) {
    //     case 'rock':
    //         (playerSelection=='rock') ? result= "It's a tie":
    //         (playerSelection == 'paper') ?  result = "Computer:Rock vs You:Paper-You win":
    //         (playerSelection == 'scissors') ? result=  "Computer:Rock vs You:Scissors-You lose":
    //         result='invalid';
    //         break;
    //     case 'paper':
    //         (playerSelection=='paper') ? result= "It's a tie":
    //         (playerSelection == 'rock') ?  result = "Computer:Paper vs You:Rock-You lose":
    //         (playerSelection == 'scissors') ? result=  "Computer:Paper vs You:Scissors-You win":
    //         result='invalid';
    //         break;
    //     case 'scissors' :
    //         (playerSelection=='scissors') ? result= "It's a tie":
    //         (playerSelection == 'paper') ?  result = "Computer:Scissors vs You:Paper-You lose":
    //         (playerSelection == 'rock') ? result=  "Computer:Scissors vs You:Rock-You win":
    //         result='invalid'
    //         break;

        
    // }

    if (playerSelection === computerSelection) {
        return "Tie!"
    }


    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection == 'paper' && computerSelection === 'rock' || playerSelection==='scissors' && computerSelection==='paper') {
        console.log(playerScore)
        playerScore++
        return "You Win"
        
    }
    console.log(computerScore)
    computerScore++
    return "You lose"
    

} 

function playGame() {


   let playerSelection= prompt("rock,paper, or scissors?");
   let computerSelection= getComputerChoice();
    testMessage=playRound(playerSelection, computerSelection);
    console.log(testMessage,"Your score " + playerScore,"Comp score " + computerScore);


}

function playFive() {


    playGame()
    playGame()
    playGame()
    playGame()
    playGame()
    
}




/* Get computer random choice*/
/* Get players chocie*/
/*Compare the choices for a winner*/
/*Return the message on the result*/