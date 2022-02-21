"use strict";
exports.__esModule = true;
exports.LikeComponent = void 0;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_noOfLikes, _isSelected) {
        this._noOfLikes = _noOfLikes;
        this._isSelected = _isSelected;
    }
    Object.defineProperty(LikeComponent.prototype, "noOfLikes", {
        get: function () {
            return this._noOfLikes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: false,
        configurable: true
    });
    LikeComponent.prototype.displayState = function () {
        console.log("No of likes: ".concat(this._noOfLikes, " | Selected Status: ").concat(this._isSelected));
    };
    LikeComponent.prototype.onClick = function () {
        // if (this._isSelected) {
        //     this._isSelected = !this._isSelected;
        //     this._noOfLikes--;
        // }
        // else {
        //     this._isSelected = !this._isSelected;
        //     this._noOfLikes++;
        // }
        this._noOfLikes += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
