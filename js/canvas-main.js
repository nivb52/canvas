'use strict'
console.log('CANVAS!')

let canvas
let ctx

let currElement = ''


function init() {
    canvas = document.querySelector('#my-canvas');
    ctx = canvas.getContext('2d')
    
    canvas.width = window.innerWidth - 100
    canvas.height = window.innerHeight - 200
}

function getColor() {
    let fillColor = document.querySelector('#fill-color').value
    console.log(fillColor);
    return fillColor
}

function changeEl(elName) {
    currElement = elName
}

function draw(ev) {
    ctx.save()
    const { offsetX, offsetY } = ev
    switch (currElement) {
        case 'triangle':
            drawTriangle(offsetX, offsetY)
            break;
        case 'square':
            drawSquare(offsetX, offsetY)
            break;
        case 'circle':
            drawCircle(offsetX, offsetY)
            break;
    }
    ctx.restore()
}




function drawTriangle(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 150);
    ctx.lineTo(100, 100);
    ctx.closePath()

    ctx.lineWidth = 5;
    ctx.strokeStyle = getColor()
    ctx.fillStyle = getColor() //'#ff0000'

    ctx.stroke();
    ctx.fill()

}


function drawSquare(x, y) {
    ctx.rect(x, y, 100, 100)
    ctx.fillStyle = getColor()
    ctx.fillRect(x, y, 100, 100)
    ctx.stroke()
    ctx.fill()
}