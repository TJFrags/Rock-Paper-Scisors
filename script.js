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

function play(){
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
            winner = "Player 1"
            return winner
        }

        else if (player === "paper" && computer == "rock"){
            console.log("You Win! Paper beats rock")
            winner = "Player 1"
            return winner
        }
        else if (player === "paper" && computer == "scisors"){
            console.log("You lose. scisors beats paper")
            winner = "Computer"
            return winner
        }

        else if (player === "scisors" && computer == "paper"){
            console.log("You Win! Paper beats rock")
            winner = "Player 1"
            return winner
        }
        else if (player === "scisors" && computer == "rock"){
            console.log("You lose! rock beats scisors")
            winner = "Computer"
            return winner
    }

        
    }
    else{
        return winner
    }
}
console.log(random(3, 1));