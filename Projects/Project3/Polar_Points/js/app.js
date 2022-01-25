//Charlie Castle
//N220 Spring 2022
//1/25/2022

//set up the canvas for the program
function setup()
{
    createCanvas(800,800);
}

//function for draw and makes the art on the canvas
function draw()
{
    let res = polarPoint(123);
    console.log(res);
    translate(100,100);
    circle(res.x,res.y,10);
}

//function for the algorithm with agument r and makes x and gets the sin of mouse x and the cos of y then returns createVector(x,y)
function polarPoint(r)
{
    let x = r * Math.sin(mouseX);
    let y = r * Math.cos(mouseX);
    return createVector(x,y);
}