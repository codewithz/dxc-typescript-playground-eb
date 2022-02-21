var DPoint = /** @class */ (function () {
    function DPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    DPoint.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error("Value of x cannot be less than 0");
        }
        this.x = value;
    };
    DPoint.prototype.getX = function () {
        return this.x;
    };
    DPoint.prototype.setY = function (value) {
        if (value < 0) {
            throw new Error("Value of y cannot be less than 0");
        }
        this.y = value;
    };
    DPoint.prototype.getY = function () {
        return this.y;
    };
    DPoint.prototype.draw = function () {
        console.log("Drawing points for coordinate X:".concat(this.x, " | Y: ").concat(this.y));
    };
    return DPoint;
}());
var point3 = new DPoint(10, 20);
point3.setX(4);
point3.setY(6);
point3.draw();
var point4 = new DPoint();
// point4.x = 2;
// point4.y = 3;
point4.draw();
