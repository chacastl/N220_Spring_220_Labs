//Charlie Castle
//N220 Spring 2022
//2/8/2022

//testing and making dvTest object
let dvTest = document.getElementById("dvTest");
let x = 100;
let y = 100;
let clickCount = 0;
console.log(dvTest);


//for the onclick it grabs the function click add and the runs it

dvTest.style.width = x + "px";
dvTest.style.height = y + "px";
document.getElementById("dvTest").onclick = function(){clickadd()};
// click add multiplys x and y and then sets them to the height and width
function clickadd()
{
    if(clickCount >= 1)
    {
        document.getElementById('dvTest').innerHTML += " div";
    }
    else
    {
        document.getElementById('dvTest').innerHTML += "mc ";
    }
    clickCount++;

}



