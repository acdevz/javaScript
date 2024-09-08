// Create a canvas element
const canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

// Get the 2D rendering context
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Variables for pen color and width
let penColor = 'black';
let penWidth = 2;

// Event listener for mouse movement
canvas.addEventListener('mousemove', draw);

// Event listener for pen color change
document.getElementById('colorButton').addEventListener('input', changePenColor);

// Event listener for pen width change
document.getElementById('widthSlider').addEventListener('input', changePenWidth);

// Function to draw on the canvas
function draw(event) {
    if (event.buttons !== 1) return; // Only draw when left mouse button is pressed
    ctx.beginPath();
    ctx.lineWidth = penWidth;
    ctx.lineCap = 'round';
    ctx.strokeStyle = penColor;
    ctx.moveTo(event.offsetX, event.offsetY);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

// Function to change pen color
function changePenColor() {
    penColor = document.getElementById('colorInput').value;
    console.log(penColor);
}

// Function to change pen width
function changePenWidth() {
    penWidth = document.getElementById('widthSlider').value;
}
