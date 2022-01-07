var mouseEvent="";
var Last_position_of_x,Last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var colour="black";
var width_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    colour=document.getElementById("Colour").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    Current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    Current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=width_of_line;
        console.log("Last position of x aand y coordinates = ");
        console.log("x ="+Last_position_of_x+"y ="+Last_position_of_y);
        ctx.moveTo(Last_position_of_x,Last_position_of_y);
        console.log("Current position of x aand y coordinates = ");
        console.log("x ="+Current_position_of_mouse_x+"y ="+Current_position_of_mouse_y);
        ctx.lineTo(Current_position_of_mouse_x,Current_position_of_mouse_y);
        ctx.stroke();
    }
    Last_position_of_x=Current_position_of_mouse_x;
    Last_position_of_y=Current_position_of_mouse_y;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}