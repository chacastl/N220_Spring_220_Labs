//Charlie Castle
//N220 Spring 2022
//Midterm

//making an array with the move set
let moves = ["up", "up", "down", "down", "down", "left", "right", "left", "right", "a", "b", "start"];

//First I will need to make a for loop and put inside it a innerHTML that writes the move with a - at the end
for(let i = 0;i<moves.length;i++)
{
    //writing the move from the array and then concatinating a - at the end
    document.getElementById("maindv").innerHTML += moves[i] + "-";
    //if statment to make sure there is no dash at the end of the string of moves
    if(i == (moves.length-1))
    {
        //writing the last move without a dash at the end
        document.getElementById("maindv").innerHTML += moves[i];
    }
}