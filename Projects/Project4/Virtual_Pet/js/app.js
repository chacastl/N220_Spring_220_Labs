//Charlie Castle
//N220 Spring 2022
//2/3/2022

let pet =
{
    x: 0,
    y: 0,
    size: 50,
    offsetX: 0,
};

function setup()
{
    createCanvas(800,800);
}

function draw()
{
    if((mouseIsPressed) && (pet.offsetX != 0))
    {
        pet.offsetX = pet.offsetX - 1;
    }
    if(!(mouseIsPressed))
    {
        pet.offsetX = pet.offsetX + 1;
    }
    circle(mouseX-pet.offsetX, mouseY, pet.size);
    console.log(pet.offsetX);
}