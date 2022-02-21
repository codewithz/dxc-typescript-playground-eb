var CPoint = /** @class */ (function () {
    function CPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    CPoint.prototype.draw = function () {
        console.log("Drawing points for coordinate X:".concat(this.x, " | Y: ").concat(this.y));
    };
    return CPoint;
}());
var point6 = new CPoint(10, 20);
// point8.x = 10;
// point8.y = 8;
point6.draw();
var point7 = new CPoint();
// point9.x = 2;
// point9.y = 3;
point7.draw();
