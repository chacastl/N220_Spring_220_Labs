//Charlie Castle
//N220 Spring 2022
//1/20/2022

//main counter for the program
let counter = 0;

//creating a basic canvas that is 800, 800
function setup()
{
    createCanvas(800,800);

}

function draw()
{
    //setting the background to black each time and then making a circle at mouse x and y and changing size depending on my x value.
    background("black");
    circle(mouseX,mouseY,pmouseX);

    //adding the counter and then printing in the console
    counter++;
    console.log(counter);
    
}