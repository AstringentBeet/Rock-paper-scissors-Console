///next goal is to shorten the lines of code.
let userScore = 0;
let  computerScore = 0;
let draw = 0;
console.log(`Player : ${userScore}\nComputer : ${computerScore}\nEnter 'playRound()' in console to begin game, 'scoreBoard.startOver()' to restart`);
//creates a scoreboard that directly connects 
let scoreBoard = {
    player : document.getElementById('player'),
    computer : document.getElementById('computer'),
    tie : document.getElementById('draw'),
    result : document.getElementById("result"),
    //increases the scoreboards through incremental operators.
    winPoint(userChoice, computerChoice){
        userScore++;
        this.player.innerHTML = userScore;
        alert(`${userChoice} beats ${computerChoice}\nYou earned a point!`);
    },
    drawMatch(){ 
        draw++;
        this.tie.innerHTML = draw;
        alert("This is a draw!");
    },
    noPoint(userChoice, computerChoice){
        computerScore++;
        this.computer.innerHTML = computerScore;
        alert(`${computerChoice} beats ${userChoice}\nComputer earned a point!`)
    },
    //sets all scores back to zero, and does away with the result <p> tag
    startOver(){
        userScore = computerScore = draw = 0;
        this.player.innerHTML = userScore;
        this.computer.innerHTML = computerScore;
        this.tie.innerHTML = draw;
        document.getElementById("result").innerHTML = "";
        console.log(`Player : ${userScore}\nComputer : ${computerScore}\nEnter 'playRound()' in console to begin game, 'scoreBoard.startOver()' to restart`);
    }
}

//creates the RPS commands
const rps = {
    rock: {weakTo: 'paper', strongTo: 'scissors'},
    paper: {weakTo: 'scissors', strongTo: 'Rock'},
    scissors: {weakTo: 'rock', strongTo: 'paper'}
 }

 //will prompt user for answer until the entry is correct. 
function userInput(){
    start = prompt("Rock, paper, or scissors?").toLowerCase();
    let validResponse = ["rock", "paper", "scissors"];
    if(validResponse.includes(start)) {
        return start;
    } else {
        alert("That's not what we're looking for, friend. Try again");
        return userInput();
    }
}

//generates a random input for computer to use in match.
function genComputerInput() {
    let input = Math.floor(Math.random() * 3);
    if (input === 0) {
        return "rock";
    } else if (input === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

//Updates and keeps track of the score while keeping count of draws within match.
let compareInput = (playerSelection, computerSelection) => {
    if(rps[playerSelection].strongTo === computerSelection) {
        scoreBoard.winPoint(playerSelection, computerSelection);
    } else if(rps[playerSelection].weakTo === computerSelection) {
        scoreBoard.noPoint(playerSelection, computerSelection);
    } else {
        scoreBoard.drawMatch();
    }
}

//Will create five rounds, excluding the draws, till both user and computer will have a sum of five. 
function playRound(){
    while(userScore + computerScore !== 5) {
        compareInput(userInput(), genComputerInput());
    }
    if(userScore > computerScore){
        console.log(`Player : ${userScore}\nComputer : ${computerScore}\nLook at you earnin' that W. Way to go!`);
        scoreBoard.result.innerHTML = "Look at you earnin' that W. Way to go!"
    } else {
        console.log(`Player : ${userScore}\nComputer : ${computerScore}\nOof...take this L, fam.`);
        scoreBoard.result.innerHTML = "Oof...take this L, fam.";
    }
}