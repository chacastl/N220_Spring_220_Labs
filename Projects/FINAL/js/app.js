//Charlie Castle
//N220 Spring 2022
//4/18/2022

let earth = 0;
let tree = 0;
let water = 0;
let house = 0;
let earthUpgrades =0;
let treeUpgrades=0;
let waterUpgrades=0;
let houseUpgrades=0;
let x;
let y;
var newText;
let earthAutoButton;
let treeAutoButton;
let waterAutoButton;
let houseAutoButton;
//setup for creating the canvas
function setup()
{
    createCanvas(800,800);
    earthAutoButton = createButton('+1 Auto Earth Cost: 50 earth');
    earthAutoButton.position(600,10);
    treeAutoButton = createButton('+1 Auto Tree Cost: 50 trees');
    treeAutoButton.position(600,30);
    waterAutoButton = createButton('+1 Auto Water Cost : 50 water');
    waterAutoButton.position(600,50);
    houseAutoButton = createButton('+1 Auto House Cost : 50 houses');
    houseAutoButton.position(600,70);

}

function draw()
{
    background('white');
    fill('black');
    text('earth: ' + Math.round(earth), 10,10);
    text('tree: ' + Math.round(tree), 60,10);
    text('water: ' + Math.round(water), 100,10);
    text('house: ' + Math.round(house), 150,10);
    makeEarth(earth);
    earthAutoButton.mousePressed(earthUpgrade);
    treeAutoButton.mousePressed(treeUpgrade);
    waterAutoButton.mousePressed(waterUpgrade);
    houseAutoButton.mousePressed(houseUpgrade);
    upgrades();
    
}

function earthUpgrade()
{
    if(earth >= 50)
    {
        earth -= 50;
        earthUpgrades += .01;
        console.log("RAN UPGRADE");
    }
}

function treeUpgrade()
{

}

function waterUpgrade()
{

}

function houseUpgrade()
{

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
    if(earthUpgrades >= .01)
    {
        console.log("Earth Upgrade" + earthUpgrades);
    earth += earthUpgrades;
    }
}
