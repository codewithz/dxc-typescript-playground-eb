class BPoint {
    private x: number;
    private y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log(`Drawing points for coordinate X:${this.x} | Y: ${this.y}`);
    }
}


let point8 = new BPoint(10, 20);
// point8.x = 10;
// point8.y = 8;
point8.draw();

let point9 = new BPoint();
// point9.x = 2;
// point9.y = 3;
point9.draw();