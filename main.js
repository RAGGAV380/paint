canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");


color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e){
    Mousex=e.clientX - canvas.offsetLeft;
    Mousey=e.clientY - canvas.offsetTop;
    
    circle(Mousex,Mousey);
    
    }
    function circle(Mousex,Mousey){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=2;
        ctx.arc(Mousex,Mousey,40,0,2*Math.PI);
        ctx.stroke();
    }