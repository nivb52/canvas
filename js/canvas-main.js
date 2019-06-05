'use strict'
console.log('CANVAS!')

let canvas
let ctx

let currElement = ''

function changeEl(elName) {
    currElement = elName
}

function init() {
    canvas = document.querySelector('#my-canvas');
    ctx = canvas.getContext('2d')

    canvas.width = window.innerWidth - 50
    canvas.height = window.innerHeight - 100
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