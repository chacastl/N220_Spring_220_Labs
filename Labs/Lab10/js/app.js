var grid = [

    [ 0,1,0 ],

    [ 0,0,2 ],

    [ 0,0,0 ],

];



    for(var i =0;grid.length;i++)
    {
        for(var x = 0;grid[0].length;x++)
        {
            if(grid[i][x] == 0)
            {
                grid[i][x] = " ";
                console.log(grid[i][x]);
            }
            if(grid[i][x] == 1)
            {
                grid[i][x] = "X";
                console.log(grid[i][x]);
            }
            if(grid[i][x] == 2)
            {
                grid[i][x] = "O";
                console.log(grid[i][x]);
            }
        }
    }
