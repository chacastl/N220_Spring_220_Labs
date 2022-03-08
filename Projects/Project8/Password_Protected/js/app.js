//Charlie Castle
//N220 Spring 2022
//3/8/2022

function Submit()
{
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if(user == pass)
    {
        document.getElementById("maindv").innerHTML = "Success";
    }
    else
    {
        document.getElementById("maindv").innerHTML = "Wrong information";

    }
    user = "";
    pass = "";
    
}