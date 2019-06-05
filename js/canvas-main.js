'use strict'

function draw(ev) {
    console.log(ev)
    ctx.save()
        // const offsetX = ev.offsetX
        // const offsetY = ev.offsetY
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