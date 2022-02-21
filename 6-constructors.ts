class APoint {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log(`Drawing points for coordinate X:${this.x} | Y: ${this.y}`);
    }
}


let point10 = new APoint(10, 20);
// point10.x = 10;
// point10.y = 8;
point10.draw();

let point20 = new APoint();
point20.x = 2;
point20.y = 3;
point20.draw();