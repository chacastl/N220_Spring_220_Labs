let arr = [[ 22, 33, 44, 55], [ 1,2,3,4 ], [ 8, 2, 4, 10 ], [ 22,22,22,22 ]];
let count = 0;

document.getElementById("dvTest").innerHTML = counting(arr);

//Counting function goes through each element in the array and adds to the count if array is greater than 20
function counting(array)
{
    //goes through the first block of the array ex: [22,33,44,55], [ 1,2,3,4 ], [ 8, 2, 4, 10 ], [ 22,22,22,22 ]
    for(let i = 0;i < array.length;i++)
    { 
        //goes through each number in a single block ex [22,33,44,55]
        for(let y = 0;y<array[i].length;y++)
        {
            console.log(array[i][y]);
            //adds to count it the int is greater than 20
            if(array[i][y] > 20)
            {
                
                count++;
            } 
        }
        console.log("Count for " + i + ":" + count)

        
    }
    console.log("Final Count " + count);
    //the ending count is printed if it is less than 3
    if(count < 3)
        {
            return count;
        }
        //returns -1 if it is greater than 3
        if(count > 3)
        {
            return -1;
        }
}
