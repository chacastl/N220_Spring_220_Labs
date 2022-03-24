//Charlie Castle
//N220 Spring 2022
//3/24/2022

function Submit()
{
    document.getElementById("maindv").innerHTML = Random();

}

function Random()
{
   return Math.floor(Math.random() * (10 + 1));
}