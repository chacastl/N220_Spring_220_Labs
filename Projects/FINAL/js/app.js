//Charlie Castle
//N220 Spring 2022
//4/18/2022

let earth = 0;
let tree = 5;
let water = 5;
let house = 5;
let sun = 0;
let earthUpgrades =0;
let treeUpgrades=0;
let waterUpgrades=0;
let houseUpgrades=0;
let sunUpgrades=0;
let x;
let y;
var newText;

let earthAutoButton;
let treeAutoButton;
let waterAutoButton;
let houseAutoButton;
let SunAutoButton;

let treeBuyButton;
let waterBuyButton;
let houseBuyButton;
let SunBuyButton;
//setup for creating the canvas
function setup()
{
    createCanvas(800,800);
    earthAutoButton = createButton('+1 Auto Earth Cost: 50 earth');
    earthAutoButton.position(600,10);
    treeAutoButton = createButton('+1 Auto Tree Cost: 5 trees');
    treeAutoButton.position(600,30);
    waterAutoButton = createButton('+1 Auto Water Cost : 5 water');
    waterAutoButton.position(600,50);
    houseAutoButton = createButton('+1 Auto House Cost : 5 houses');
    houseAutoButton.position(600,70);
    sunAutoButton = createButton('+1 Auto sun Cost : 5 suns');
    sunAutoButton.position(600,90);


    treeBuyButton = createButton('+1 Tree Cost : 50 earth');
    treeBuyButton.position(600,130);
    waterBuyButton = createButton('+1 Water Cost : 5 tree');
    waterBuyButton.position(600,150);
    houseBuyButton = createButton('+1 House Cost : 5 water');
    houseBuyButton.position(600,170);
    sunBuyButton = createButton('+1 Sun Cost : 5 house');
    sunBuyButton.position(600,190);

}

function draw()
{
    background('white');
    fill('black');
    text('earth: ' + Math.round(earth), 5,10);
    text('tree: ' + Math.round(tree), 65,10);
    text('water: ' + Math.round(water), 110,10);
    text('house: ' + Math.round(house), 170,10);
    text('sun: ' + Math.round(sun), 230,10);
    makeEarth(earth);
    if(tree >= 1)
    {
        makeTree(earth);
    }
    if(water >= 1)
    {
        makeWater(earth,water);
    }
    if(house >= 1)
    {
        makeHouse(earth);
    }
    earthAutoButton.mousePressed(earthUpgrade);
    treeAutoButton.mousePressed(treeUpgrade);
    waterAutoButton.mousePressed(waterUpgrade);
    houseAutoButton.mousePressed(houseUpgrade);
    treeBuyButton.mousePressed(treeBuy);
    waterBuyButton.mousePressed(waterBuy);
    houseBuyButton.mousePressed(houseBuy);
    sunBuyButton.mousePressed(sunBuy);
    upgrades();
    
}

function treeBuy()
{
    if(earth >= 50)
    {
        earth -= 50;
        tree += 1
        console.log("made tree");
    }

}

function waterBuy()
{
    if(tree >= 5)
    {
        tree -= 5;
        water += 1;
        console.log("made water");
    }
}

function houseBuy()
{
    if(water >= 5)
    {
        water -= 5;
        house += 1;
        console.log("made house");
    }
}

function sunBuy()
{
    if(house >= 5)
    {
        house -= 5;
        sun += 1;
        console.log("made Sun");
    }
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
    if(tree >= 5)
    {
        tree -= 5;
        treeUpgrades += .001;
        console.log("RAN UPGRADE");
    }
}

function waterUpgrade()
{
    if(water >= 5)
    {
        water -= 5;
        waterUpgrades += .0001;
        console.log("RAN UPGRADE");
    }
}

function houseUpgrade()
{
    if(house >= 5)
    {
        house -= 5;
        houseUpgrades += .00001;
        console.log("RAN UPGRADE");
    }
}

function sunUpgrade()
{
    if(sun >= 5)
    {
        house -= 5;
        houseUpgrades += .000001;
        console.log("RAN UPGRADE");
    }
}

function mouseClicked()
{
    earth ++;
}

function makeEarth(y)
{
    
    
    fill(155,118,83);
    rect(0,800 - y,600,800);
}

function makeTree(y)
{
    fill(37,21,11);
    for(var i = 50;i<=200;i+=50)
    {
        fill(37,21,11);
        rect(i,750 - y,20, 50); 
        fill(40,139,34);
        rect(i-5,730 - y,30, 30);
    }
    
    
    
}

function makeWater(y,w)
{

    fill(0,117,119);
    rect(250,800 -y,100,w*5);

}

function makeHouse(y)
{
    fill(202,164,114);
    rect(350,730-y,150,75);
    fill(102,51,0);
    rect(325,710-y,200,30);
    rect(410,760-y,30,45);
}

function makeSun(y)
{
    fill(249,215,28);
}

function upgrades()
{
    if(earthUpgrades >= .01)
    {
        console.log("Earth Upgrade" + earthUpgrades);
    earth += earthUpgrades;
    }
    if(treeUpgrades >= .001)
    {
        console.log("Tree Upgrade" + treeUpgrades);
    tree += treeUpgrades;
    }
    if(waterUpgrades >= .0001)
    {
        console.log("Water Upgrade" + waterUpgrades);
    water += waterUpgrades;
    }
    if(houseUpgrades >= .00001)
    {
        console.log("House Upgrade" + houseUpgrades);
    house += houseUpgrades;
    }
    if(sunUpgrades >= .000001)
    {
        console.log("Sun Upgrade" + sunUpgrades);
    sun += sunUpgrades;
    }
    
}
