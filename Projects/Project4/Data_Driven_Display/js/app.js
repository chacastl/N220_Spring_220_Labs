//Charlie Castle
//N220 Spring 2022
//2/3/2022

let art =
{
 size: 50,
 red: 123,
 green: 65,
 blue: 50,
 width: 40,
 height:90,
 x: 400,
 y: 400,
};

function setup()
{
    createCanvas(800,800);
}

function draw()
{
    drawCar(art.x,art.y)
}

function drawCar(x,y)
{
    background("yellow");
    //body of the car
    fill(art.red,art.green,art.blue);
    noStroke();
    rect(x+100, y+100, art.width, art.height);
    rect(x+150,y+25,art.width,art.height);
    //making the wheels
    fill("Black");
    circle(x+175,y+200,art.size);
    circle(x+425,y+200,art.size);
    fill("white)");
    circle(x+175,y+200,art.size);
    circle(x+425,y+200,art.size);
    //adding the windows
    fill("black");
    rect(x+175,y+50,art.width, art.height);
    rect(x+325,y+50,art.width, art.height);

}