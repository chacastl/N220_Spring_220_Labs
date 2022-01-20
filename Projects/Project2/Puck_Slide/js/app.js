//Charlie Castle
//N220 Spring 2022
//1/20/2022


//setting up the canvas that is 400 by 300
function setup()
{
    createCanvas(400,300);
}

function draw()
{
    //setting the background black each time
    background("black");

    //if the mouseX is on the left then it will turn blue
    if(mouseX <= 200);
    {
        fill("blue");
    }
    //if the mouseX is on the right then it will turn red
    if(mouseX >= 200)
    {
        fill("red");
    }
    //making the circle follow the mouse with a size of 50
    circle(mouseX,mouseY,50);
}