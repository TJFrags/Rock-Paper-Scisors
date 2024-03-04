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
const roundCounter = documet.querySelector("round-status > h2")
const drawText = documet.querySelector("round-status > h3")

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
        return "scisors"
    }
}

function play(move, computerScoreHolder, playerScoreHolder){
    let player = move;
    let computer = getcomputer();
    if(player !== computer){

        if (player === "rock" && computer == "paper"){
            computerScoreHolder.textContent = Number(computerScoreHolder.textContent) + 1;
        }
        else if (player === "rock" && computer == "scisors"){
            playerScoreHolder.textContent = Number(playerScoreHolder.textContent) + 1;
        }

        else if (player === "paper" && computer == "rock"){
            playerScoreHolder.textContent = Number(playerScoreHolder.textContent) + 1;

        }
        else if (player === "paper" && computer == "scisors"){
            computerScoreHolder.textContent = Number(computerScoreHolder.textContent) + 1;

        }

        else if (player === "scisors" && computer == "paper"){
            playerScoreHolder.textContent = Number(playerScoreHolder.textContent) + 1;

        }
        else if (player === "scisors" && computer == "rock"){
            computerScoreHolder.textContent = Number(computerScoreHolder.textContent) + 1;
        }

        if (currentRound >= rounds){
            console.log("EEEEEEEEEENNNNNNNNNNNNNNNNNNNNNNNNNNNDDDDDDDDDDDDDDDDDDDDDDDDD");
            winner = Number(computerScoreHolder.textContent) > Number(playerScoreHolder.textContent) ? 
            "computer" : Number(computerScoreHolder.textContent) === Number(playerScoreHolder.textContent)?
            "draw" : playerName;
            endMatch(wnner);
            
        }
        else{
            currentRound++;

        }


        
    }
    else{
        console.log("draw");

        play(arguments[0], arguments[1], arguments[2])
    }
}

function startMatch(){
    rounds = Number(inputRounds.value);
    playerName.textContent = inputName.value;
    currentRound = 1;

}

async function endMatch(winner){
    //winner = playerName;
    if (winner === playerName){
        divWinner.style.display = "flex";
        divWinner.style.justifyContent = "flex-end";
    }
    else if (winner === "draw"){
        WinnerText.textContent = "Draw";
        divWinner.style.display = "flex";
        divWinner.style.justifyContent = "center";
    }
    else if (winner === "computer"){
        divWinner.style.display = "flex";
        divWinner.style.justifyContent = "flex-start";
    }

    await sleep(3000);

    inputName.setAttribute("value", playerName);
    inputRounds.setAttribute("value", rounds);
    modal.style.display = "flex";
    compScore.textContent = 0;
    playerScore.textContent = 0;



}


btnStartMatch.addEventListener("click", () => {
    startMatch();
    modal.style.display = "none";
    divWinner.style.display = "none";
})

btnsMoves.forEach((button) => {
    button.addEventListener("click", () => play(button.textContent.toLowerCase(), compScore, playerScore))
})