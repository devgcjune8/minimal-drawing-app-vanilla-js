const DRAWING_BOARD = document.querySelector("#drawing-board");
const CONTEXT = DRAWING_BOARD.getContext('2d');

const INCREASE_SIZE_BTN = document.querySelector('.inc');
const DECREASE_SIZE_BTN = document.querySelector('.dec');
const PEN_SIZE = document.querySelector('.pen-size');
const COLOR_PICKER = document.querySelector('.color-picker')

const DELETE_BTN = document.querySelector('.delete');

let penSize = 12;
let color
let isDrawing = false;
let x
let y



DRAWING_BOARD.addEventListener('mousedown', (event) => {
    isDrawing = true;

    x = event.offsetX;  //if you delete this two events there a feature
    y = event.offsetY;
    console.log(isDrawing)
})


DRAWING_BOARD.addEventListener('mouseup', (event) => {
    isDrawing = false;

    x = undefined;
    y = undefined;
    changeColor()
});


DRAWING_BOARD.addEventListener('mousemove', (event) => {
    if(isDrawing) {
        const x2 = event.offsetX;
        const y2 = event.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }

})

function drawCircle(x, y) {
    CONTEXT.beginPath();
    CONTEXT.arc(x, y, penSize, 0, Math.PI * 2);
    CONTEXT.fillStyle = color
    CONTEXT.fill()
    changeColor()
}

function drawLine(x1, y1, x2, y2) {
    CONTEXT.beginPath();
    CONTEXT.moveTo(x1, y1);
    CONTEXT.lineTo(x2, y2);
    CONTEXT.strokeStyle = color;
    CONTEXT.lineWidth = penSize * 2;
    CONTEXT.stroke()
    changeColor()
    
}


INCREASE_SIZE_BTN.addEventListener('click', () => {
    penSize ++;
    if (penSize > 25) {
        penSize = 25;
    }
    PEN_SIZE.innerHTML = penSize;

})

DECREASE_SIZE_BTN.addEventListener('click', () => {
    penSize --;
    if (penSize < 1) {
        penSize = 1;
    }
    PEN_SIZE.innerHTML = penSize;

})

function changeColor() {
    color = COLOR_PICKER.value
}


DELETE_BTN.addEventListener('click', () => {
    CONTEXT.clearRect(0, 0, DRAWING_BOARD.width, DRAWING_BOARD.height)
})
