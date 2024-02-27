function random(max, min){
    randmomNum =  Math.floor(Math.random() * (max - min + 1) + min)
    console.log(randmomNum)
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

function play(playerName){
    player = prompt("whats your move?", "rock")
    computer = getcomputer()
    let winner = "draw"
    if(player !== computer){

        if (player === "rock" && computer == "paper"){
            console.log("You lose. Paper beats rock")
            winner = "Computer"
            return winner
        }
        else if (player === "rock" && computer == "scisors"){
            console.log("You Win! Rock beats Scisors")
            winner = playerName
            return winner
        }

        else if (player === "paper" && computer == "rock"){
            console.log("You Win! Paper beats rock")
            winner = playerName
            return winner
        }
        else if (player === "paper" && computer == "scisors"){
            console.log("You lose. scisors beats paper")
            winner = "Computer"
            return winner
        }

        else if (player === "scisors" && computer == "paper"){
            console.log("You Win! Paper beats rock")
            winner = playerName
            return winner
        }
        else if (player === "scisors" && computer == "rock"){
            console.log("You lose! rock beats scisors")
            winner = "Computer"
            return winner
    }

        
    }
    else{
        console.log("draw")
        play()
    }
}

function playMatch(bestOf = 1){
    let playerScore = 0
    let compScore = 0
    let round = 1

    let playerName = prompt("Whhat is your name?", "Player")
    while(round <= bestOf){

        result = play(playerName)
        if (result === "Computer"){
            ++compScore
        }
        else if (result === playerName){
            ++playerScore
        }
        console.log(playerName + ": " + playerScore)
        console.log("Computer: " + compScore)

        round++
    }
    matchWinner = playerScore > compScore ? playerName : "Computer"
    return "The winner of the match is: " + matchWinner
}
