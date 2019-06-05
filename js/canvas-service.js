'use strict'

function drawTriangle(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 150);
    ctx.lineTo(100, 100);
    ctx.closePath()

    ctx.lineWidth = 5;
    ctx.strokeStyle = 'blue'
    ctx.fillStyle = '#ff0000'

    ctx.stroke();
    ctx.fill()

}


function drawSquare(x, y) {
    ctx.rect(x, y, 100, 100)
    ctx.fillStyle = 'green'
    ctx.fillRect(x, y, 100, 100)
    ctx.stroke()
    ctx.fill()
}