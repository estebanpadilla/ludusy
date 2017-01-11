/**
 * Point
 * This is a simple class to define a point in space.
 * Version 1.0.0
 * @param {number} x - X position.
 * @param {number} y - Y position.
 */
function Point(x, y) {
    if (!(this instanceof Point)) {
        return new Point(x, y);
    }
    this.x = x;
    this.y = y;
}

/**
 * Vector
 * This class is divide in two types of methods, creation and operations.
 * Creation methods will create or change the values of this vector.
 * Operations will calculate this vector.
 * Version 1.0.0
 * @param {number} x - X position.
 * @param {number} y - Y position.
 */
function Vector(x, y) {
    if (!(this instanceof Vector)) {
        return new Vector(x, y);
    }
    this.x = x || 0;
    this.y = y || 0;
}

/**
 * Adds the values of the vector passed on the param to this vector.
 * @param {Vector} v - Vector to be added.
 * @return {Vector} this - Returns this vector with the new values.
 */
Vector.prototype.add = function (v) {
    this.x += v.x;
    this.y += v.y;
    return this;
};

/**
 * Adds to the x component of the vector the value passed on the param.
 * @param {number} x - The value to be added.
 * @return {Vector} this - Returns this vector with the new values.
 */
Vector.prototype.addX = function (x) {
    this.x += x;
    return this;
};

/**
 * Adds to the y component of the vector the value passed on the param.
 * @param {number} y - The value to be added.
 * @return {Vector} this - Returns this vector with the new values.
 */
Vector.prototype.addY = function (v) {
    this.y += v.y;
    return this;
};

/**
 * Multiplies this vector's components to the vector's components passed as the param.
 * @param {Vector} v - The value to multiply for.
 * @return {Vector} this - Returns this vector with the new values.
 */
Vector.prototype.multiply = function (v) {
    this.x = (this.x * v.x);
    this.y = (this.y * v.y);
    return this;
};

/**
 * Multiplies the X component of the vector to the value passed on the param.
 * @param {number} x - The value to be added.
 * @return {Vector} this - Returns this vector with the new values.
 */
Vector.prototype.multiplyX = function (x) {
    this.x = (this.x * x);
    return this;
};

/**
 * Multiplies the Y component of the vector to the value passed on the param.
 * @param {number} y - The value to be added.
 * @return {Vector} this - Returns this vector with the new values.
 */
Vector.prototype.multiplyY = function (y) {
    this.y = (this.y * y);
    return this;
};

/**
 * Scales this vector's components by value passed as the param.
 * @param {Vector} v - The value to scale for.
 * @return {Vector} this - Returns this vector with the new values.
 */
Vector.prototype.scale = function (v) {
    this.x = (this.x * v);
    this.y = (this.y * v);
    return this;
};

/**
 * Calculates this vector's maginitude.
 * @return {number} value - Returns this vector maginitude.
 */
Vector.prototype.magnitude = function () {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
};

/**
 * Calculates this vector's angle.
 * @return {number} value - Returns this vector angle in radians.
 */
Vector.prototype.angle = function angle() {
    return Math.atan2(this.y, this.x);
};

/*
* Normalizes this vector, to normaliza a vector just divide its components by its magnintud.
@return {Vector} this - Returns this vectore with it's components normalized keeping the same angle.
**/
Vector.prototype.normalize = function () {
    var mag = this.magnitude();
    return Vector(this.x / mag, this.y / mag);
};

/** 
 * Calculates and creates a the vectors using an angle and a magnitude.
 * @param {number} angle - The vectors angle in radias.
 * @param {number} maginitude - The vectors maginitude.
 * @return {Vector} vector - Return a new vector with the component's value set.
 */
Vector.prototype.components = function (angle, maginitude) {
    var r = angle * Math.PI / 180;
    var o = (magnitud * Math.sin(r)) + this.y;
    var a = (magnitud * Math.cos(r)) + this.x;
    return new Vector(a, o);
};

/**
 * Divides this vector's components to the vector's components passed as the param.
 * @param {Vector} v - The value to divide for.
 * @return {Vector} this - Returns this vector with the new values.
 */
Vector.prototype.divide = function (v) {
    this.x = (this.x / v.x);
    this.y = (this.y / v.y);
    return this;
};















//position: sets the position on the shape where the normal will start to project.
Vector.prototype.getNormal = function getNormal(angle, position) {
    var start = this.endPoint(angle, position);
    return new Vector(start.x, start.y).endPoint(angle - 90, this.normalLength);
};

//Finds an angle to another vector.
Vector.prototype.angleTo = function (v) {
    var a = v.x - this.x;
    var o = v.y - this.y;
    return Math.atan2(o, a);
};

Vector.prototype.findAngle = function findAngle(v) {
    var a = this.x - v.x;
    var o = this.y - v.y;
    return Math.atan2(o, a);
};

//Finds the distance to another vector.
Vector.prototype.findDistance = function findDistance(v) {
    var a = this.x - v.x;
    var o = this.y - v.y;
    return Math.sqrt((a * a) + (o * o));
};

Vector.prototype.findOposite = function findOposite(v, angle) {

};

function toDegrees(radians) {
    return radians * 180 / Math.PI;
}

function toRadians(degrees) {
    return degrees * Math.PI / 180;
}
