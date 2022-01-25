let val = 0;
let x = 10;
function setup()
{
    createCanvas(800,800);
}

function draw()
{
    fill(shovel(12),shovel(43),shovel(1));
    line(shovel(8), shovel(4), shovel(7), shovel(3));
    
}


function shovel(val)
{
x++;
let y = random(-x/2,x);


return y;
}

