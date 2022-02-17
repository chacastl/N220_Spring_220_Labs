//Charlie Castle
//N220 Spring 2022
//2/17/2022

//testing and making dvTest object
let dvTest = document.getElementById("dvTest");
const things = ["Food", "Games", "Water","Nature","Fruit Loops"];
console.log(dvTest);

for(let i = 0;i<5;i++)
{
    document.getElementById('dvTest').innerHTML += things[i] + ", ";
}
