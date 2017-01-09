
/**
 * Defines a Text shape for the canvas
 * @constructor
 * @param {number} x - X postion.
 * @param {number} y - Y postion.
 * @param {number} Size - Text size.
 * @param {string} text - Text.
 * @param {string} color - Color for the shape.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function TextBox(x, y, size, text, color, context) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.text = text;
    this.color = color;
    this.context = context;
}

TextBox.prototype.render = function () {
    this.context.fillStyle = this.color;
    this.context.font = '' + this.size + 'px Lato';
    this.context.textAlign = 'left';
    this.context.fillText(this.text, this.x, this.y);
}

TextBox.prototype.update = function () {
    this.render();
}

