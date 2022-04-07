//Charlie Castle

let exampleDiv = document.getElementById("example");
exampleDiv.style.height = "200px";
exampleDiv.style.width = "200px";
exampleDiv.style.margin = "5px";
exampleDiv.style.backgroundColor = "#808080";
exampleDiv.style.display = "inline-block";

exampleDiv.addEventListener("click",dothing);

let exampleDiv2 = document.getElementById("example2");

exampleDiv2.style.height = "200px";
exampleDiv2.style.width = "200px";
exampleDiv2.style.margin = "5px";
exampleDiv2.style.backgroundColor = "#808080";
exampleDiv2.style.display = "inline-block";

exampleDiv2.addEventListener("click",dothing);

let exampleDiv3 = document.getElementById("example3");

exampleDiv3.style.height = "200px";
exampleDiv3.style.width = "200px";
exampleDiv3.style.margin = "5px";
exampleDiv3.style.backgroundColor = "#808080";
exampleDiv3.style.display = "inline-block";

exampleDiv3.addEventListener("click",dothing);

function dothing(event)
{
    let response = event.target.getAttribute("color");
    if(response == exampleDiv.getAttribute("color"))
    {
        exampleDiv.style.backgroundColor = response;
    }
    if(response == exampleDiv2.getAttribute("color"))
    {
        exampleDiv2.style.backgroundColor = response;
    }
    if(response == exampleDiv3.getAttribute("color"))
    {
        exampleDiv3.style.backgroundColor = response;
    }
}