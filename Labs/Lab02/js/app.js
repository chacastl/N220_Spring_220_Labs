
let size = 0;
//setup for the canvas and console.log for the size;
function setup()
{
    createCanvas(800,800);
    console.log(size);
}

function draw()
{
    //colors background to see the circle better
    background("black");
    //draw circle to follow the mouse and increase size with size variable
    circle(mouseX,mouseY,size);
    console.log(size);

    

}
// function that increases the size when ever the mouse is clicked up to 50
function mouseClicked()
{
    //if the size is less than or equal to 50 increase size by 1
    if(size <= 50)
    {
        size = size + 1;
    }
}