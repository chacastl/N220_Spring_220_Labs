//Charlie Castle 1/18/2022
//N220
let width = 300;
let height = 300;
//setup for the canvas
function setup()
{
    //creating the canvas that is 800 by 600
    createCanvas(800,600);
}

function draw()
{
    stroke("blue");
    fill("blue");
    rect(50,50,width,height);

    //main body   
    fill(242,242,0);
     stroke("black")
     circle(200,200,200);
     //eye 1
     fill("black");
     stroke("black");
     circle(160,180,20);
     fill("white");
     stroke("white");
     circle(160,180,10);
    //eye 2
     fill("black");
     stroke("black");
     circle(240,180,20);
     fill("white");
     stroke("white");
     circle(240,180,10);
     //smile
     noFill();
     stroke("Black");
     strokeWeight(6);
     arc(200, 250, 50, 50, 0, PI);
     
    
}