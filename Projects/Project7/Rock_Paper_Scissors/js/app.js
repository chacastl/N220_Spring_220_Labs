//Charlie Castle
//N220 Spring 2022
//3/1/2022

let score = 0;
let currentmove = "";
document.getElementById("score").innerHTML = score;

document.getElementById("rock").onclick = function(){
    currentMove = "Rock";
    playGame(currentMove);
};
document.getElementById("paper").onclick = function(){
    currentMove = "Paper";
    playGame(currentMove);
};
document.getElementById("scissors").onclick = function(){
    currentMove = "Scissors";
    playGame(currentMove);
};
document.getElementById("guard").onclick = function(){
    currentMove = "Guard";
    playGame(currentMove);
};

function playGame(move)
{

    let computerMove = makeRandom();
    if(move == "Rock")
    {
        if(computerMove == "Scissors")
        {
            score += 1
        }
        if(computerMove == "Paper")
        {
            score -= 1;
        }
    }


    if(move == "Paper")
    {
        if(computerMove == "Rock")
        {
            score += 1;
        }
        if(computerMove == "Scissors")
        {
            score -= 1;
        }
    }


    if(move == "Scissors")
    {
        if(computerMove == "Paper")
        {
            score += 1;
        }
        if(computerMove == "Rock")
        {
            score -= 1;
        }
    }


    if(move == "Guard")
    {
        score -= .5
    }

    document.getElementById("score").innerHTML = score;
    document.getElementById("game").innerHTML = "you chose " + move + ", computer chose " + computerMove;
}

function makeRandom()
{
    let computerMove = "";
    let randomMove = 0;
    randomMove = Math.floor(Math.random() * 3) + 1;
        if(randomMove == 1)
        {
            computerMove = "Rock"
        }
        if(randomMove == 2)
        {
            computerMove = "Paper"
        }
        if(randomMove == 3)
        {
            computerMove = "Scissors"
        }
        return computerMove;
}
