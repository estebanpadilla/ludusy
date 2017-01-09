/**
 * Defines a Triangle shape for the canvas
 * @constructor
 * @param {number} x - x position.
 * @param {number} y - y position.
 * @param {number} size - Size for the shape.
 * @param {string} color - Color for the shape.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function Triangle(x, y, size, color, context) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.context = context;
}

Triangle.prototype.render = function () {
    this.context.fillStyle = this.color;
    this.context.beginPath();
    this.context.moveTo((this.x + this.size / 2), this.y);
    this.context.lineTo((this.x + this.size), (this.y + this.size));
    this.context.lineTo(this.x, (this.y + this.size));
    this.context.closePath();
    this.context.fill();
}

Triangle.prototype.update = function () {
    this.render();
}
