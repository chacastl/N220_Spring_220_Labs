//Charlie Castle
//N220 Spring 2022
//2/8/2022

//testing and making dvTest object
let dvTest = document.getElementById("dvTest");
let x = 20;
let y = 20;
console.log(dvTest);

for(let i = 0;i<100;i++)
{
    //making the Square
    dvTest.style.width = x + "px";
    dvTest.style.height = y + "px"; 
    dvTest.style.backgroundColor = "#00FF00";
    dvTest.style.float = "left";
}



