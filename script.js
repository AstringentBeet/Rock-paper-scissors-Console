///next goal is to shorten the lines of code.

let userScore = 0;
let  notUserScore = 0;
let draw = 0;

//will be used for event listers 
let playGroup = {
  player : document.getElementById('player'),
  computer : document.getElementById('computer'),
  tie : document.getElementById('draw'),
  result : document.getElementById("result")
}

//Will most likely make a smaller, objectified version of the next few functions.

//increases the 'player' scoreboard.
let win = (userSelection, computerChoice) => {
    userScore++;
    playGroup.player.innerHTML = userScore;
    playGroup.computer.innerHTML = notUserScore;
    alert(`${userSelection} beats ${computerChoice}\nYou earned a point!`);
}

let middle = () => {
    draw++
    playGroup.tie.innerHTML = draw;
    playGroup.computer.innerHTML = notUserScore;
    playGroup.player.innerHTML = userScore;
    alert("This is a draw!");
}

//increases the 'lose' scoreboard.
let lose = (userSelection, computerChoice) => {
    notUserScore++;
    playGroup.computer.innerHTML = notUserScore;
    playGroup.player.innerHTML = userScore;
    alert(`${computerChoice} beats ${userSelection}\nComputer earned a point!`);
}

//restarts scoreboard.
let startOver = () =>{
    userScore = notUserScore = draw = 0;
    playGroup.player.innerHTML = userScore;
    playGroup.computer.innerHTML = notUserScore;
    playGroup.tie.innerHTML = draw;
    document.getElementById("result").innerHTML = "";
}

//Scoreboard ends

//creates the RPS Standard
const weapons = {
    rock: {weakTo: 'paper', strongTo: 'scissors'},
    paper: {weakTo: 'scissors', strongTo: 'Rock'},
    scissors: {weakTo: 'rock', strongTo: 'paper'}
 }

 //prompts user input for game to start
let userChoice = () => {
    start = prompt("Rock, paper, or scissors?").toLowerCase();
    let validResponse = ["rock", "paper", "scissors"];
    if(validResponse.includes(start)) {
        return start;
    } else {
        alert("That's not what we're looking for, friend. Try again");
        return userChoice();
    }
}

//generates a random input for computer to use
function computerChoice() {
    let input = Math.floor(Math.random() * 3);
    if (input === 0) {
        return "rock";
    } else if (input === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

//directly compares the two entries
let compare = (playerSelection, computerSelection) => {
    //Updates and keeps track of the score
    if(weapons[playerSelection].strongTo === computerSelection) {
        win(playerSelection, computerSelection);
    } else if(weapons[playerSelection].weakTo === computerSelection) {
        lose(playerSelection, computerSelection);
    } else {
        middle();
    }
}
    
//plays the actual game with rounds.
let playRound = (/*rounds*/) => {
    while(userScore + notUserScore !== 5) {
        compare(userChoice(), computerChoice());
    }
    if(userScore > notUserScore){
        console.log(`Player : ${userScore}\nComputer : ${notUserScore}\nLook at you earnin' that W. Way to go!`);
        playGroup.result.innerHTML = "Look at you earnin' that W. Way to go!"
    } else {
        console.log(`Player : ${userScore}\nComputer : ${notUserScore}\nOof...take this L, fam.`);
        playGroup.result.innerHTML = "Oof...take this L, fam."
    }
}