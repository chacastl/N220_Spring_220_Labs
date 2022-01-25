//Charlie Castle
//N220 Spring 2022
//1/25/2022


//setup for creating the canvas
function setup()
{
    createCanvas(800,800);
}
//drawing the Car and adding the mouseX and mouseY to each x and y
function drawCar(x,y)
{
    background("yellow");
    //body of the car
    fill("red");
    noStroke();
    rect(x+100, y+100, 400, 100);
    rect(x+150,y+25,300,100);
    //making the wheels
    fill("Black");
    circle(x+175,y+200,100);
    circle(x+425,y+200,100);
    fill("white)");
    circle(x+175,y+200,50);
    circle(x+425,y+200,50);
    //adding the windows
    fill("black");
    rect(x+175,y+50,100,50);
    rect(x+325,y+50,100,50);

}
function draw()
{
    //draw Car function with mouseX and mouseY
    drawCar(mouseX,mouseY);
}