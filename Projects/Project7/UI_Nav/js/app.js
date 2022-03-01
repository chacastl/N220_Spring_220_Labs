//Charlie Castle
//N220 Spring 2022
//2/17/2022

//testing and making dv objects
let maindv = document.getElementById("maindv");
let dv1 = document.getElementById("dv1");
let dv2 = document.getElementById("dv2");
let dv3 = document.getElementById("dv3");
let dv4 = document.getElementById("dv4");
let dv5 = document.getElementById("dv5");
let dv6 = document.getElementById("dv6");
dv1.innerHTML = "This";
dv2.innerHTML = "Is";
dv3.innerHTML = "A";
dv4.innerHTML = "Test";
dv5.innerHTML = "Please";
dv6.innerHTML = "Work.";

dv1.onmousedown = function()
{
    maindv.innerHTML = dv1.innerHTML;
    dv1.style.background = "red";
    dv2.style.background = "white";
    dv3.style.background = "white";
    dv4.style.background = "white";
    dv5.style.background = "white";
    dv6.style.background = "white";
};

//if the dv is clicked it changes everything to white except the on getting clicked and sets the innerHTML of the first to the one being clicked
dv2.onmousedown = function()
{
    maindv.innerHTML = dv2.innerHTML;
    dv1.style.background = "white";
    dv2.style.background = "red";
    dv3.style.background = "white";
    dv4.style.background = "white";
    dv5.style.background = "white";
    dv6.style.background = "white";
};

dv3.onmousedown = function()
{
    maindv.innerHTML = dv3.innerHTML;
    dv1.style.background = "white";
    dv2.style.background = "white";
    dv3.style.background = "red";
    dv4.style.background = "white";
    dv5.style.background = "white";
    dv6.style.background = "white";
};

dv4.onmousedown = function()
{
    maindv.innerHTML = dv4.innerHTML;
    dv1.style.background = "white";
    dv2.style.background = "white";
    dv3.style.background = "white";
    dv4.style.background = "red";
    dv5.style.background = "white";
    dv6.style.background = "white";
};

dv5.onmousedown = function()
{
    maindv.innerHTML = dv5.innerHTML;
    dv1.style.background = "white";
    dv2.style.background = "white";
    dv3.style.background = "white";
    dv4.style.background = "white";
    dv5.style.background = "red";
    dv6.style.background = "white";
};

dv6.onmousedown = function()
{
    maindv.innerHTML = dv6.innerHTML;
    dv1.style.background = "white";
    dv2.style.background = "white";
    dv3.style.background = "white";
    dv4.style.background = "white";
    dv5.style.background = "white";
    dv6.style.background = "red";
};