//Charlie Castle
//N220 Spring 2022
//4/18/2022


//This game is a clicker game that builds a little area as the games goes by the end of the game is when the sun consumes the entire map.

//Base values and upgrade values
let earth = 0;
let tree = 0;
let water = 0;
let house = 0;
let sun = 0;
let earthUpgrades =0;
let treeUpgrades=0;
let waterUpgrades=0;
let houseUpgrades=0;
let sunUpgrades=0;

let y;
var newText;

//button variables
let earthAutoButton;
let treeAutoButton;
let waterAutoButton;
let houseAutoButton;
let SunAutoButton;
let move = 0;
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
    //creates the text for the values given round becuase they are incrementing by decimals and it would look really messy
    background('white');
    fill('black');
    text('earth: ' + Math.round(earth), 5,10);
    text('tree: ' + Math.round(tree), 65,10);
    text('water: ' + Math.round(water), 110,10);
    text('house: ' + Math.round(house), 170,10);
    text('sun: ' + Math.round(sun), 230,10);
    makeEarth(earth);
    
    //if statments for each value that will make the value on the canvas and show it on the canvas
    if(sun >= 1)
    {
        //incrementer for the sun and will move it till 500 and then repeate
        move = move + 1
        if(move == 500)
        {
            move = 0;
        }
        makeSun(move,earth);
    }
    //making the tree if there is at least one 
    if(tree >= 1)
    {
        makeTree(earth);
    }
    //making the water if there is at least one make water grabs earth and water to have it move with the canvas
    if(water >= 1)
    {
        makeWater(earth,water);
    }

    //making the house if there is at least one and moves it with the earth
    if(house >= 1)
    {
        makeHouse(earth);
    }
    

    //all of the buttons for increment upgrades and buying single units
    earthAutoButton.mousePressed(earthUpgrade);
    treeAutoButton.mousePressed(treeUpgrade);
    waterAutoButton.mousePressed(waterUpgrade);
    houseAutoButton.mousePressed(houseUpgrade);
    sunAutoButton.mousePressed(sunUpgrade);
    treeBuyButton.mousePressed(treeBuy);
    waterBuyButton.mousePressed(waterBuy);
    houseBuyButton.mousePressed(houseBuy);
    sunBuyButton.mousePressed(sunBuy);
    upgrades();

    
    
}

//function treeBuy is to buy a tree with 50 earth will remove 50 earth and add one tree and log it in the console
function treeBuy()
{
    if(earth >= 50)
    {
        earth -= 50;
        tree += 1
        console.log("made tree");
    }

}

//function waterBuy is bought with 5 trees and removes 5 trees and adds one water and logs it into the console
function waterBuy()
{
    if(tree >= 5)
    {
        tree -= 5;
        water += 1;
        console.log("made water");
    }
}

//function houseBuy is bought with 5 trees and removes 5 water and adds one house
function houseBuy()
{
    if(water >= 5)
    {
        water -= 5;
        house += 1;
        console.log("made house");
    }
}

//function sunBuy is bought with 5 house and removes 5 house and adds one sun
function sunBuy()
{
    if(house >= 5)
    {
        house -= 5;
        sun += 1;
        console.log("made Sun");
    }
}

//function earthUpgrade is bought with 50 earth and will be able to add the earthUpgrade by .01 and will continue 
function earthUpgrade()
{
    if(earth >= 50)
    {
        earth -= 50;
        earthUpgrades += .01;
        console.log("RAN UPGRADE");
    }
}

//function treeUpgrade is bought with 5 trees and will increment the tree by .001 
function treeUpgrade()
{
    if(tree >= 5)
    {
        tree -= 5;
        treeUpgrades += .001;
        console.log("RAN UPGRADE");
    }
}

//function waterUpgrade is bought with 5 water and will increment the water by .0001
function waterUpgrade()
{
    if(water >= 5)
    {
        water -= 5;
        waterUpgrades += .0001;
        console.log("RAN UPGRADE");
    }
}

//function houseUpgrade is bougth with 5 house and will increment the house by .00001
function houseUpgrade()
{
    if(house >= 5)
    {
        house -= 5;
        houseUpgrades += .00001;
        console.log("RAN UPGRADE");
    }
}
//function sunUpgrade is bought with 5 sun and will increment the sun by .000001
function sunUpgrade()
{
    if(sun >= 5)
    {
        sun -= 5;
        sunUpgrades += .000001;
        console.log("RAN UPGRADE");
    }
}


//when ever the mouse is clicked it will add one earth
function mouseClicked()
{
    earth ++;
}


//function make earth makes the ground of the game and is a rectanlge that goes up with earths value
function makeEarth(y)
{
    
    
    fill(155,118,83);
    rect(0,800 - y,600,800);
}

//function makeTree makes 5 trees and goes up with the earths value
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

//function makeWater goes up with the earths value and grows down with water value
function makeWater(y,w)
{

    fill(0,117,119);
    rect(250,800 -y,100,w*5);

}

//function make house makes a house and moves the entire building with the earth value so it does not fly away
function makeHouse(y)
{
    fill(202,164,114);
    rect(350,730-y,150,75);
    fill(102,51,0);
    rect(325,710-y,200,30);
    rect(410,760-y,30,45);
}

//function makeSun will create the sun with x that is a incrementer in draw and earths value so that it will move left to right and repeat and follow earths level
function makeSun(x,y)
{
    fill(253, 184, 19);
    
    console.log(x);
    ellipse(x,400-y,sun*50,sun*50);

    
}


//function upgrades goes through if statments and adds the upgrade value to the main value to make it sort of like a clicker game
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
