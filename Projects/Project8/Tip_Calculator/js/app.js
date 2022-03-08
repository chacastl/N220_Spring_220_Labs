//Charlie Castle
//N220 Spring 2022
//3/8/2022

function Submit()
{
    let input = document.getElementById("tip").value;
    //??????
    let tip = input * 0.15;
    console.log(tip);
    console.log(input);
    let total = input * 1.15;
    console.log(total);
    document.getElementById("maindv").innerHTML = "Tip $" + tip + " Total $" + total;
    total = "";
    tip = "";
}