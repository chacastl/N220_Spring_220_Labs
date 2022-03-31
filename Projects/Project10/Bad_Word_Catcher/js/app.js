//Charlie Castle
//N220 Spring 2022
//3/24/2022
const words = ["clear", "water", "tires"];
var counter = 0;
function Submit()
{
    var input = document.getElementById("word").value;
    const split = input.split(" ");
    for(var i = 0;i<split.length;i++)
    {
        for(var x = 0;x<words.length;x++)
        {
            if(split[i] == words[x]) 
            {
                counter++;
                console.log(counter);
            }
        }
    }
    if(counter >= 1)
    {
        document.getElementById("maindv").innerHTML = counter + " bad words were found :O"; 
    }
    if(counter == 0)
    {
        document.getElementById("maindv").innerHTML = "Nothing found you are clean :)"; 
    }
    document.getElementById("word").value = "";
    counter = 0;
}

