//Charlie Castle

let Indiana = document.getElementById("Indiana");

Indiana.addEventListener("click",dothing);

let USA = document.getElementById("USA");

USA.addEventListener("click",dothing);

let Florida = document.getElementById("Florida");

Florida.addEventListener("click",dothing);

function dothing(event)
{
    let response = event.target.getAttribute("answer");
    document.getElementById("Answer").innerHTML = response;
}