//Charlie Castle

let exampleDiv = document.getElementById("example");

exampleDiv.addEventListener("click",dothing);

let exampleDiv2 = document.getElementById("example2");

exampleDiv2.addEventListener("click",dothing);

function dothing(event)
{
    console.log(event.target);
    event.target.innerHTML = "DONE";
    
    console.log("DID THING");
}