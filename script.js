function random(max, min){
    return Math.floor(Math.random() * (max - min)) + min;
}

function getcomputer(){
    lst = []
    number = random()

    if (number === 1){
        return (1, "rock")
    }
    else if (number === 2){
        return (2, "paper")
    }
    else if (number === 3){
        return (3, "scisors")
    }
}

function play(){
    player = prompt()
    computer = getcomputer()
    if(player !== computer){

        let winner = "draw"

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
console.log(random(4, 1));