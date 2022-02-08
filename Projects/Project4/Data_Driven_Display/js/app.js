//Charlie Castle
//N220 Spring 2022
//2/3/2022

//creating the object that I will use the data from to make the art below
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

//creating the canvas 
function setup()
{
    createCanvas(800,800);
}
// running the drawCar function with the x and y from the art object
function draw()
{
    drawCar(art.x,art.y)
}

//the draw car function works with the art object to create art :)
function drawCar(x,y)
{
    background("yellow");
    
    fill(art.red,art.green,art.blue);
    noStroke();
    rect(x+100, y+100, art.width, art.height);
    rect(x+150,y+25,art.width,art.height);
    
    fill("Black");
    circle(x+175,y+200,art.size);
    circle(x+425,y+200,art.size);
    fill("white)");
    circle(x+175,y+200,art.size);
    circle(x+425,y+200,art.size);
    
    fill("black");
    rect(x+175,y+50,art.width, art.height);
    rect(x+325,y+50,art.width, art.height);

}