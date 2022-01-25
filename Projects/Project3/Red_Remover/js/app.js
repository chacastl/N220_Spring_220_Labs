//Charlie Castle
//N220 Spring 2022
//1/25/2022

function setup()
{
    createCanvas(800,800);
}

function noRed(r,g,b)
{
    r = 0;
    return color(r,g,b);
}


function draw()
{
let nred = noRed(170,200,150);
fill(nred);
circle(200,200,300);
}