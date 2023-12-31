var mouseEvent = "empty";
var lastX, lastY;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var color = "black";
var width = 1;
canvas.addEventListener("mousedown", my_mouse_down);
function my_mouse_down(e){
    mouseEvent = "mousedown";
    color = document.getElementById("color").value;
    width = document.getElementById("width_of_line").value;
}
canvas.addEventListener("mouseleave", my_mouse_leave);
function my_mouse_leave(e){
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouse_up);
function my_mouse_up(e){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mousemove", my_mouse_move);
function my_mouse_move(e){
    currentX = e.clientX-canvas.offsetLeft;
    currentY = e.clientY-canvas.offsetTop;
    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("Last positions of x and y coordinates are = ");
        console.log("lastX = "+ lastX +" ,LastY = "+lastY);
        ctx.moveTo(lastX,lastY);
        console.log("Current positions of x and y coordinates are = ");
        console.log("CurrentX = "+ currentX+" ,CurrentY"+currentY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    }
    lastX = currentX;
    lastY = currentY;
}
current_position_of_x, current_position_of_y;
last_position_of_x, last_position_of_y;

canvas.addEventListener("touchmove", my_touchmove);

    function my_touchmove(e)
    {

         current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        ctx.moveTo(last_position_of_x, last_position_of_y);

        
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;

    }

