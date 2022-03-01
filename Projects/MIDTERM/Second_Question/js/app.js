//Charlie Castle
//N220 Spring 2022
//MIDTERM

//for this program we will need to have a if statment that will change the innerHTML of the maindiv to the word no when clicked

//the first part is to make the onclick method and put inside of it the algorithm to change the innerHTML of the div from no if it is yes and yes if it is no
document.getElementById("maindv").onclick = function(){ 
    //if statment that checks if the inner HTML of maindv is yes
    if(document.getElementById("maindv").innerHTML == "yes")
    {
        //changes innerHTML of maindv to no
        document.getElementById("maindv").innerHTML = "no";
    }
    //else statment so if innerHTML is no
    else
    {
        //changes innerHTML of maindv to yes
        document.getElementById("maindv").innerHTML = "yes";
    }
};