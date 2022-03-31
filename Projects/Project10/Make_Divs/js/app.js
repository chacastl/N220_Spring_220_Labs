let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];
   const divArray = []
function Submit()
{
    for(var i = 0;i<objects.length;i++)
    {
       divArray[i] =  document.createElement("div"+ i);
       divArray[i].setAttribute("div" + i, objects[1]);
       divArray[i].innerHTML = "test";
        document.body.appendChild(divArray[i]);
    }
}