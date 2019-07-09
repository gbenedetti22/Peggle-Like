
let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');

//Ball options
let x = 500;
let y = 40;
let startAngle = 10;
let endAngle = 0;
let anticlockwise = Math.PI*2;

//Arrow option
let dirArrowX = 500;
let dirArrowY = 160;

function draw(){

ctx.clearRect(0, 0, 900, 600)

ctx.beginPath();
ctx.arc(x, y, startAngle, endAngle, anticlockwise);
ctx.fill();

ctx.beginPath();
ctx.arc(500, 0, 60, 0, anticlockwise);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(500, 60);
ctx.lineTo(dirArrowX, dirArrowY);
ctx.stroke();

}
draw()

setInterval(draw, 10);

canvas.addEventListener("mousemove", mouseMouvement);

function mouseMouvement(event){
        dirArrowX = event.pageX;
}