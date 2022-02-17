//Charlie Castle
//N220 Spring 2022
//2/17/2022

//testing and making dvTest object
let dvTest = document.getElementById("dvTest");
console.log(dvTest);

//for loop that increments by 1000 to 5000
for(let i = 0;i<25;i++)
{
    //making the numbers
    if((i % 3) == 0)
    {
        document.getElementById('dvTest').innerHTML += "beep" + " ";
    }

    if((i % 5) == 0)
    {
        document.getElementById('dvTest').innerHTML += "bop" + " ";
    }

    if(((i % 3) == 0) && ((i % 5) == 0))
    {
        document.getElementById('dvTest').innerHTML += "beepbop" + " ";
    }
    
}