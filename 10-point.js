"use strict";
exports.__esModule = true;
exports.MyPoint = void 0;
var MyPoint = /** @class */ (function () {
    function MyPoint(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(MyPoint.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Value of x cannot be less than 0");
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyPoint.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Value of y cannot be less than 0");
            }
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    MyPoint.prototype.draw = function () {
        console.log("Drawing points for coordinate X:".concat(this.x, " | Y: ").concat(this.y));
    };
    return MyPoint;
}());
exports.MyPoint = MyPoint;
