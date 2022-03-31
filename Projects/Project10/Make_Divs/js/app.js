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
       
       divArray[i].style.color = objects[i].color;
       divArray[i].style.height = objects[i].height;
       divArray[i].style.width = objects[i].width;
       divArray[i].innerHTML = " test ";
        document.body.appendChild(divArray[i]);
    }
}