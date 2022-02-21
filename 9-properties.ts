class DPoint {
    constructor(private _x?: number, private _y?: number) {

    }
    set x(value) {
        if (value < 0) {
            throw new Error("Value of x cannot be less than 0");
        }
        this._x = value;
    }

    get x() {
        return this._x;
    }

    set y(value) {
        if (value < 0) {
            throw new Error("Value of y cannot be less than 0");
        }
        this._y = value;
    }

    get y() {
        return this._y;
    }

    draw() {
        console.log(`Drawing points for coordinate X:${this.x} | Y: ${this.y}`);
    }
}


let point3 = new DPoint(10, 20);
point3.x = 4;
point3.y = 6;
point3.draw();

let point4 = new DPoint();
// point4.x = 2;
// point4.y = 3;
point4.draw();