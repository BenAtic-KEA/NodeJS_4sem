let score;

let playerOne;
let playerTwo;

export function initializePlayers(playerOneInit, playerTwoInit) {
playerOne = playerOneInit;
playerTwo = playerTwoInit;
}

export function initializeScore(startScore = 301){
    score = startScore;
}

export function initializeGame(){
    console.log(playerOne,playerTwo);
    console.log("game starts with score...", score)
}