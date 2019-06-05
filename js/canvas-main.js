'use strict'
console.log('paint me, i am ready!')

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


function drawTriangle(x, y) {
    // TODO: isFill if yes to make it fill
    // TODO: USER CHOOSE lineWidth 
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x-50, y-30);
    ctx.lineTo(x+30, y+50);
    ctx.closePath()
    ctx.lineWidth = 1;
    ctx.strokeStyle = getColor()
    // ctx.fillStyle = getColor() //'#ff0000'
    ctx.stroke();
    // ctx.fill()

}
function clearCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

function drawSquare(x, y) {
    //TODO: isFill if yes to make it fill
    ctx.rect(x, y, 100, 100)
    ctx.fillStyle = getColor()
    // ctx.fillRect(x, y, 100, 100)
    ctx.stroke()
    // ctx.fill()
}