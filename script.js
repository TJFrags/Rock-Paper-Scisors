const btnStartMatch = document.querySelector(".start-button");
const inputName = document.querySelector(".name-input");
const inputRounds = document.querySelector(".rounds-input");
const modal = document.querySelector(".modal");
const btnsMoves = document.querySelectorAll(".moves > *");
const compScore = document.querySelector("#compScore");
const playerScore = document.querySelector("#playerScore");
const playerName = document.querySelector(".score-player > h2");
const divWinner = document.querySelector(".winner");
const WinnerText = document.querySelector(".winner > h2");
const roundCounter = document.querySelector(".round-status > h2");
const drawText = document.querySelector(".round-status > h3");
const game = document.querySelector(".game");
const divCompMove = document.querySelector(".comp-move");
const divPlayerMove = document.querySelector(".player-move");

const rockIcon = document.querySelector(".rock-mini-comp");
const paperIcon = document.querySelector(".paper-mini-comp");
const scissorsIcon = document.querySelector(".scissors-mini-comp");

const rockIconP = document.querySelector(".rock-mini-player");
const paperIconP = document.querySelector(".paper-mini-player");
const scissorsIconP = document.querySelector(".scissors-mini-player");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let rounds, currentRound;

function random(max, min){
    randmomNum =  Math.floor(Math.random() * (max - min + 1) + min)
    return randmomNum
}

function getcomputer(){
    number = random(3,1 )

    if (number === 1){
        return "rock"
    }
    else if (number === 2){
        return "paper"
    }
    else if (number === 3){
        return "scissors"
    }
}

async function play(move, computerScoreHolder, playerScoreHolder){
    btnsMoves.forEach((button) => button.disabled = true);

    let player = move;
    let computer = getcomputer();

    if (player === "rock"){
        rockIconP.style.color = "#a8ffbf";
    }
    else if (player === "paper"){
        paperIconP.style.color = "#a8ffbf";
    }
    else if (player === "scissors"){
        scissorsIconP.style.color = "#a8ffbf";
    }

    if (computer === "rock"){
        rockIcon.style.color = "#a8ffbf";
    }
    else if (computer === "paper"){
        paperIcon.style.color = "#a8ffbf";
    }
    else if (computer === "scissors"){
        scissorsIcon.style.color = "#a8ffbf";
    }
    
    if(player !== computer){

        if (player === "rock" && computer == "paper"){
            computerScoreHolder.textContent = Number(computerScoreHolder.textContent) + 1;
            

        }
        else if (player === "rock" && computer == "scissors"){
            playerScoreHolder.textContent = Number(playerScoreHolder.textContent) + 1;
        }

        else if (player === "paper" && computer == "rock"){
            playerScoreHolder.textContent = Number(playerScoreHolder.textContent) + 1;

        }
        else if (player === "paper" && computer == "scissors"){
            computerScoreHolder.textContent = Number(computerScoreHolder.textContent) + 1;

        }

        else if (player === "scissors" && computer == "paper"){
            playerScoreHolder.textContent = Number(playerScoreHolder.textContent) + 1;

        }
        else if (player === "scissors" && computer == "rock"){
            computerScoreHolder.textContent = Number(computerScoreHolder.textContent) + 1;
        
        }


        
    }
    else{
        drawText.textContent = "Draw";       
    }

    await sleep(1200);

    rockIconP.style.color = "#000000";
    paperIconP.style.color = "#000000";
    scissorsIconP.style.color = "#000000";

    rockIcon.style.color = "#000000";
    paperIcon.style.color = "#000000";
    scissorsIcon.style.color = "#000000";

    btnsMoves.forEach((button) => button.disabled = false);

    if (currentRound >= rounds){
        winner = Number(computerScoreHolder.textContent) > Number(playerScoreHolder.textContent) ? 
        "computer" : Number(computerScoreHolder.textContent) === Number(playerScoreHolder.textContent)?
        "draw" : playerName;
        endMatch(winner);
        
    }
    else if (currentRound < rounds && player !== computer){
        currentRound++;
        roundCounter.textContent = currentRound + "/" + rounds;
    }
    drawText.textContent = "";       

}



async function endMatch(winner){
    btnsMoves.forEach((button) => button.disabled = true);

    if (winner === playerName){
        WinnerText.textContent = "Winner";
        divWinner.style.justifyContent = "flex-end";
    }
    else if (winner === "draw"){
        WinnerText.textContent = "Draw";
        divWinner.style.justifyContent = "center";
    }
    else if (winner === "computer"){
        WinnerText.textContent = "Winner";
        divWinner.style.justifyContent = "flex-start";
    }

    await sleep(3000);
    roundCounter.textContent = "0/0";

    inputName.setAttribute("value", playerName.textContent);
    inputRounds.setAttribute("value", rounds);
    modal.style.visibility = "visible";
    compScore.textContent = 0;
    playerScore.textContent = 0;



}


btnStartMatch.addEventListener("click", () => {
    modal.style.visibility = "hidden";
    WinnerText.textContent = "";
    rounds = Number(inputRounds.value);
    playerName.textContent = inputName.value;
    roundCounter.textContent = "1/" + rounds;
    currentRound = 1;
    game.style.visibility = "visible";

    btnsMoves.forEach((button) => button.disabled = false);
})

btnsMoves.forEach((button) => {
    button.addEventListener("click", () => play(button.id.toLowerCase(), compScore, playerScore))
})