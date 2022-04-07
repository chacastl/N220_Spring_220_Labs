//Charlie Castle

let maincolor = document.getElementById("maincolor");
maincolor.style.height = "100px";
maincolor.style.width = "200px";
maincolor.style.margin = "5px";
maincolor.style.backgroundColor = "#000000";
maincolor.style.display = "inline-block";

var r = parseInt(maincolor.getAttribute("r"));
var g = parseInt(maincolor.getAttribute("g"));
var b = parseInt(maincolor.getAttribute("b"));

console.log(r);

maincolor.style.backgroundColor = "rgb(" +r + "," + g + "," + b +")";


let rgbVal = document.getElementById("rgbVal");

rgbVal.style.height = "100px";
rgbVal.style.width = "200px";
rgbVal.style.margin = "5px";
rgbVal.style.backgroundColor = "#808080";
rgbVal.style.display = "inline-block";



function red1()
{
    
    
    r++;
    maincolor.style.backgroundColor = "rgb(" +r + "," + g + "," + b +")";
    document.getElementById("rgbVal").innerHTML = "rgb(" +r + "," + g + "," + b +")"
}
function red5()
{
    r += 5;
    maincolor.style.backgroundColor = "rgb(" +r + "," + g + "," + b +")";
    document.getElementById("rgbVal").innerHTML = "rgb(" +r + "," + g + "," + b +")"

}
function red10()
{
    r += 10;
    maincolor.style.backgroundColor = "rgb(" +r + "," + g + "," + b +")";
    document.getElementById("rgbVal").innerHTML = "rgb(" +r + "," + g + "," + b +")"

}

function green1()
{
    g++;
    maincolor.style.backgroundColor = "rgb(" +r + "," + g + "," + b +")";
    document.getElementById("rgbVal").innerHTML = "rgb(" +r + "," + g + "," + b +")"

}
function green5()
{
    g += 5;
    maincolor.style.backgroundColor = "rgb(" +r + "," + g + "," + b +")";
    document.getElementById("rgbVal").innerHTML = "rgb(" +r + "," + g + "," + b +")"

}
function green10()
{
    g += 10;
    maincolor.style.backgroundColor = "rgb(" +r + "," + g + "," + b +")";
    document.getElementById("rgbVal").innerHTML = "rgb(" +r + "," + g + "," + b +")"

}

function blue1()
{
    b++;
    maincolor.style.backgroundColor = "rgb(" +r + "," + g + "," + b +")";
    document.getElementById("rgbVal").innerHTML = "rgb(" +r + "," + g + "," + b +")"
}
function blue5()
{
    b += 5;
    maincolor.style.backgroundColor = "rgb(" +r + "," + g + "," + b +")";
    document.getElementById("rgbVal").innerHTML = "rgb(" +r + "," + g + "," + b +")"

}
function blue10()
{
    b += 10;
    maincolor.style.backgroundColor = "rgb(" +r + "," + g + "," + b +")";
    document.getElementById("rgbVal").innerHTML = "rgb(" +r + "," + g + "," + b +")"


}