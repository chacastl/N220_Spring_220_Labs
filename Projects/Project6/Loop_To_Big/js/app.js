//Charlie Castle
//N220 Spring 2022
//2/17/2022

//testing and making dvTest object
let dvTest = document.getElementById("dvTest");
console.log(dvTest);

//for loop that increments by 1000 to 5000
for(let i = 1000;i<=5000;i+= 1000)
{
    //making the numbers
    document.getElementById('dvTest').innerHTML += i + " ";
}