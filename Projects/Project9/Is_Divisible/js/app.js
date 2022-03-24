//Charlie Castle
//N220 Spring 2022
//3/24/2022

function Submit()
{
    var input = document.getElementById("divisible").value;
    if(True_False() == true)
    {
        document.getElementById("maindv").innerHTML = "Success";
    }
    if(True_False() == false)
    {
        document.getElementById("maindv").innerHTML = "Fail";
    }
}

function True_False()
{
    var input = document.getElementById("divisible").value;
    if((input % 7) == 0)
    {
        return true;
    }
    if((input % 7) != 0)
    {
        return false;
    }
}