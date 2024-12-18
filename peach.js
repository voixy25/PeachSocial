const canvas = document.getElementById('peachCanvas');
const ctx = canvas.getContext('2d');

// Set up canvas background (optional, for visibility)

// Draw peach body
function drawPeachBody() {
    ctx.beginPath();
    ctx.moveTo(545, 158.25);
    ctx.bezierCurveTo(716.25, 289.88, 627.33, 615, 313.71, 653.75);
    ctx.bezierCurveTo(124, 641, -119, 400, 77.33, 173.36);
    ctx.bezierCurveTo(77, 173, 141.33, 224.67, 255.33, 168);
    ctx.bezierCurveTo(294, 149, 319.75, 136, 328.5, 146.75);
    ctx.bezierCurveTo(360.29, 109.85, 499.33, 116.67, 545, 158.25);
    ctx.closePath();
    ctx.fillStyle = "#f95700";  // Peach body color
    ctx.fill();
    ctx.lineWidth = 1;  // Stroke width
    ctx.strokeStyle = "black";  // Stroke color
    ctx.stroke();
}

// Draw peach stem
function drawPeachStem() {
    ctx.beginPath();
    ctx.moveTo(328.38, 146.38); // Starting point
    ctx.bezierCurveTo(328.58, 146.80, 335.18, 141.73, 334.75, 140.88);
    ctx.bezierCurveTo(334.75, 140.88, 318.25, 73.75, 353.18, 30.64);
    ctx.bezierCurveTo(354.50, 17.62, 337.50, 6.25, 325.25, 7.88);
    ctx.bezierCurveTo(313.00, 9.50, 302.91, 77.82, 313.27, 133.82);
    ctx.bezierCurveTo(312.28, 134.45, 325.00, 148.18, 328.38, 146.38);
    ctx.closePath();
    ctx.fillStyle = "#563517";  // Stem color
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
}

// Draw right peach leaf
function drawPeachLeafRight() {
    ctx.beginPath();
    ctx.moveTo(335.27, 141.09); // Starting point of right leaf
    ctx.bezierCurveTo(335.27, 141.18, 434.45, 91.15, 542.5, 156.88);
    ctx.bezierCurveTo(543.47, 157.73, 578.85, 119.91, 575.75, 115.25);
    ctx.bezierCurveTo(574.75, 110.5, 465.76, -3.82, 331.55, 97.09);
    ctx.bezierCurveTo(330.6, 95.53, 330.08, 133.8, 335.27, 141.09);
    ctx.closePath();
    ctx.fillStyle = "green";  // Leaf color
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
}

// Draw left peach leaf
function drawPeachLeafLeft() {
    ctx.beginPath();
    ctx.moveTo(29.38, 111.38); // Starting point of left leaf
    ctx.bezierCurveTo(29.38, 111.38, 75, 254.33, 257, 167.33);
    ctx.bezierCurveTo(275.33, 158, 296.88, 149.75, 321.12, 143);
    ctx.bezierCurveTo(303.62, 115, 188.52, 1.46, 29.38, 111.38);
    ctx.closePath();
    ctx.fillStyle = "green";  // Leaf color
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
}

// Drawing sequence
function drawPeach() {
    drawPeachBody(); // Draw peach body first
    drawPeachStem(); // Draw stem last to appear on top
    drawPeachLeafLeft(); // Draw left leaf
    drawPeachLeafRight(); // Draw right leaf
}

// Call the drawing function
drawPeach();
