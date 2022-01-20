//Charlie Castle
//N200 Spring 2022
//1/20/2022

//creating the variables x and y to check location and speedX and speedY to change the speed for each x and Y
let x = 0;
let y = 0;
let speedX = 5;
let speedY = 5;

//setup for the Canvas nothing else here :(
function setup()
{
    createCanvas(800,600);
}

function draw()
{
    //creating the main circle that will follow the x and y variable 
    circle(x,y,50);
    //moving the x and y depending on the positive or negitive speedX and speedY
    x = x + speedX;
    y = y + speedY;
    //if statment checks if x is at the left or right of the canvas and then if it is it will set speed to negitive to make it look like it is bouncing
    if((x < 0) || (x > 800))
    {
        //making the speed x oposite
        speedX= speedX * -1;
    }

    //this if statment is the same as the last one but it is for the y plane up and down
    if((y < 0) || (y > 600))
    {
        //making speed y oposite 
        speedY = speedY * -1;
    }

}