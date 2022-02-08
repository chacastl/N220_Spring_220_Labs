//Charlie Castle
//N220 Spring 2022
//2/3/2022

// creating a Pet
let pet =
{
    x: 0,
    y: 0,
    size: 50,
    offsetX: 0,
};

// creating a canvas
function setup()
{
    createCanvas(800,800);
}

// draw moves the x when pressed
function draw()
{
    // moves the x till 0
    if((mouseIsPressed) && (pet.offsetX != 0))
    {
        pet.offsetX = pet.offsetX - 1;
    }
    // moves the x + 1 over forever
    if(!(mouseIsPressed))
    {
        pet.offsetX = pet.offsetX + 1;
    }
    circle(mouseX-pet.offsetX, mouseY, pet.size);
    console.log(pet.offsetX);
}