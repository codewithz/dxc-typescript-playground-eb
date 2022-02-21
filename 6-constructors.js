var APoint = /** @class */ (function () {
    function APoint(x, y) {
        this.x = x;
        this.y = y;
    }
    APoint.prototype.draw = function () {
        console.log("Drawing points for coordinate X:".concat(this.x, " | Y: ").concat(this.y));
    };
    return APoint;
}());
var point10 = new APoint(10, 20);
// point10.x = 10;
// point10.y = 8;
point10.draw();
