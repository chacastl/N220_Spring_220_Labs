//Charlie Castle
//N220 Spring 2022
//2/8/2022

//testing and making dvTest object
let dvTest = document.getElementById("dvTest");
console.log(dvTest);


//making the Square
dvTest.style.width = "100px";
dvTest.style.height = "100px";

//turning it to default to blue
dvTest.style.backgroundColor = "#0000FF";

//on mouse over it runs the function that turns the background to black
dvTest.onmouseover = function(){dvTest.style.backgroundColor = "#000000"};
//when the mouse goes out of the box it turns the box back to blue
dvTest.onmouseout = function(){dvTest.style.backgroundColor = "#0000FF"};
