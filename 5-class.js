var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("Drawing points for coordinate X:".concat(this.x, " | Y: ").concat(this.y));
    };
    return Point;
}());
var point1 = new Point();
point1.x = 10;
point1.y = 8;
point1.draw();
