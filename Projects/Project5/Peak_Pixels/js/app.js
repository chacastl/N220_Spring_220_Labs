//Charlie Castle
//N220 Spring 2022
//2/8/2022

//testing and making dvTest object
let dvTest = document.getElementById("dvTest");
let x = 100;
let y = 100;
console.log(dvTest);

//making the Square
dvTest.style.width = x + "px";
dvTest.style.height = y + "px";

//turning it to default to blue
dvTest.style.backgroundColor = "#00FF00";


//for the onclick it grabs the function click add and the runs it
document.getElementById("dvTest").onclick = function(){clickadd()};
// click add multiplys x and y and then sets them to the height and width
function clickadd()
{
    x =  1.1 * x;
    y = 1.1 * y;
    dvTest.style.width = x + "px";
    dvTest.style.height = y + "px";
}