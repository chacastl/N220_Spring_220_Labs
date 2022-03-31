//Charlie Castle
//N220 Spring 2022
//3/24/2022
const words = ["clear", "water", "tires"];
var counter = 0;
function Submit()
{
    var input = document.getElementById("word").value;
    var split = input.split(",");
    var sum = 0;
    for(var i = 0;i<split.length;i++)
    {
        console.log(split[i]);
        split[i] = parseInt(split[i], 10);
    }
    for(var x = 0;x<split.length;x++)
    {
        sum = sum + split[x];
        console.log(sum);
    }
    var average = sum/split.length;

    document.getElementById("maindv").innerHTML = sum + " the Sum " + average + " The average."; 

    document.getElementById("word").value = "";
    split = 0;
    sum = 0;
}

