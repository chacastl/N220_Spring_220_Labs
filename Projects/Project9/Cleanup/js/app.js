//Charlie Castle
//N220 Spring 2022
//3/24/2022

function Submit()
{
    var input = document.getElementById("word").value;
    document.getElementById("maindv").innerHTML = Remove();

}

function Remove()
{
    var input = document.getElementById("word").value;
    for(var i = 0;i< input.length;i++)
    {
    input = input.replace('#','');
    }
    return input;
}