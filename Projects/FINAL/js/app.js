//Charlie Castle
//N220 Spring 2022
//4/18/2022

let earth = 0;
let tree = 0;
let water = 0;
let house = 0;
let x;
let y;
var newText;

//setup for creating the canvas
function setup()
{
    createCanvas(800,800);
}

function draw()
{
    background('white');
    fill('black');
    text('earth: ' + earth, 10,10);
    text('tree: ' + tree, 60,10);
    text('water: ' + water, 100,10);
    text('house: ' + house, 150,10);
    makeEarth(earth);
}

function mouseClicked()
{
    earth ++;
}

function makeEarth(y)
{
    y += 500;
    
    fill(155,118,83);
    rect(0,y,500,800);
}

function makeTree(x,y)
{

}

function makeWater(x,y)
{

}

function makeHouse(x,y)
{

}

function upgrades()
{

}
