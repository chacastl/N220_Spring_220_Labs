//Charlie Castle
//N200 Spring 2022
//1/20/2022

//creating the variables x and y to check location and speedX and speedY to change the speed for each x and Y


let ball = {
    x: 0,
    y: 0,
    speedX: 5,
    speedY: 5,
};

//setup for the Canvas nothing else here :(
function setup()
{
    createCanvas(800,600);
}

function draw()
{
    //creating the main circle that will follow the x and y variable 
    circle(ball.x,ball.y,50);
    //moving the x and y depending on the positive or negitive speedX and speedY
    ball.x = ball.x + ball.speedX;
    ball.y = ball.y + ball.speedY;
    //if statment checks if x is at the left or right of the canvas and then if it is it will set speed to negitive to make it look like it is bouncing
    if((ball.x < 0) || (ball.x > 800))
    {
        //making the speed x oposite
        ball.speedX= ball.speedX * -1;
    }

    //this if statment is the same as the last one but it is for the y plane up and down
    if((ball.y < 0) || (ball.y > 600))
    {
        //making speed y oposite 
        ball.speedY = ball.speedY * -1;
    }

}