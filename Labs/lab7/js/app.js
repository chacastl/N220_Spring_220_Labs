
let arr = ["Indiana", "New York"];
let indianaSize = 50;
let newyorkSize = 100;
let x = 100;
let y = 100;

function setup()
{
    createCanvas(800,800);
}


function draw()
{
    background("red")
    for(let i = 0;i<arr.length;i++)
    {
        
        if(arr[i] == "Indiana")
        {
            DrawState(0,0,indianaSize);
        }
        if(arr[i] == "New York")
        {
            DrawState(100,100,newyorkSize);
        }
        
    }
    x++;
    y--;
    
    DrawState(x,y,newyorkSize);
    


}

function DrawState(x, y,size)
{
    circle(mouseX+x,mouseY-y,size);
}