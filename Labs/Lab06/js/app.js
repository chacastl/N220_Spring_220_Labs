//Charlie Castle
//N220 Spring 2022
//2/17/2022

//testing and making dvTest object
let dvTest = document.getElementById("dvTest");
const things = ["Food", "Games", "Water","Nature","Fruit Loops"];
let x = 0;
console.log(dvTest);

for(let i = 0;i<10;i++)
{
    console.log(i)
}

for(let i = 10;i>=0;i--)
{
    console.log(i)
}

for(let i = 0;i<20;i++)
{
    if(i ==0)
    {
        console.log(i);
    }
    else
    {
        x += i;
        console.log(x + "x");
        console.log(i + "i");
    }
    
}


let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ];

for(let i = 4;i>=0;i--)
{
    console.log(words[i]);
}


for(let i = 4;i>=0;i--)
{
    console.log(words[i].toUpperCase());
}

for(let i = 4;i>=0;i--)
{
    console.log(words[i] + "! Yeah!");
}