//Charlie Castle
//N220 Spring 2022
//3/1/2022

//score nad current move are global variables.
let score = 0;
let currentmove = "";
//making the score set to 0
document.getElementById("score").innerHTML = score;

//the onclick function calls each div and then set the currentmove to according what it is and the calls the play game function
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

//runs through the game and updates and displays moves and score
function playGame(move)
{

    //sets the computer move to a random number 1-3
    let computerMove = makeRandom();
    //each if statment is going through the logic if it looses and wins and if it is a tie it does not need to do anything
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

    //guard function just subtracts the score by .5
    if(move == "Guard")
    {
        score -= .5
    }
    //printing the new score and the moves ran for the current function call
    document.getElementById("score").innerHTML = score;
    document.getElementById("game").innerHTML = "you chose " + move + ", computer chose " + computerMove;
}

//make random creates a random number and assigns the randomMove 1-3 and assines computerMove a move accordingly
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
