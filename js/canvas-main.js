'use strict'

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
    return fillColor
}

function changeEl(elName) {
    currElement = elName
}

function draw(ev) {
    if (!gIsDraw) return
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
        case 'arc':
            drawArc(offsetX, offsetY)
            break;
        case 'line':
            drawLine(offsetX, offsetY)
            break;
        case 'dots':
            drawDots(offsetX, offsetY)
            break;
    }
    ctx.restore()
}

let gIsDraw = false

function onStartDraw() {
    gIsDraw = true
}

function onStopDraw() {
    gIsDraw = false
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}


function drawTriangle(x, y) {
    // TODO: isFill if yes to make it fill
    // TODO: USER CHOOSE lineWidth 
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 50, y - 30);
    ctx.lineTo(x + 10, y + 60);
    ctx.closePath()
    ctx.lineWidth = 1;
    ctx.strokeStyle = getColor()
        // ctx.fillStyle = getColor() //'#ff0000'
    ctx.stroke();
    // ctx.fill()
}

function drawLine(x, y) {
    ctx.beginPath()
    ctx.lineTo(x, y)
    ctx.lineTo(x + 20, y + 40)
    ctx.closePath()
    ctx.lineWidth = 1
    ctx.strokeStyle = getColor()
    ctx.stroke();
}

function drawDots(x, y) {
    ctx.beginPath()
    ctx.lineTo(x, y)
    ctx.lineTo(x + 2, y + 2)
    ctx.closePath()
    ctx.lineWidth = 1
    ctx.strokeStyle = getColor()
    ctx.stroke();
}

function drawSquare(x, y) {
    //TODO: isFill if yes to make it fill
    ctx.rect(x, y, 100, 100)
    ctx.fillStyle = getColor()
        // ctx.fillRect(x, y, 100, 100)
    ctx.stroke()
        // ctx.fill()
}

function drawArc(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 1 * Math.PI);
    ctx.strokeStyle = getColor()
    ctx.stroke();
}

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.strokeStyle = getColor()
    ctx.stroke();
}

function downloadCanvas(elLink) {
    const data = canvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-img.jpg'
}