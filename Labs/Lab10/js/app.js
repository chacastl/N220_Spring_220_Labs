var grid = [

    [ 0,1,0 ],

    [ 0,0,2 ],

    [ 0,0,0 ],

];

var stringArray = new Array(3);
for(var i = 0;stringArray.length;i++)
{
    stringArray[i] = new Array(3);
}

function Submit()
{
    for(var i =0;grid[i].length;i++)
    {
        for(var x = 0;grid[i][x].length;x++)
        {
            if(grid[i][x] == 0)
            {
                stringArray[i][x] = " ";
            }
            if(grid[i][x] == 1)
            {
                stringArray[i][x] = "X";
            }
            if(grid[i][x] == 2)
            {
                stringArray[i][x] = "O";
            }
        }
    }

    
}