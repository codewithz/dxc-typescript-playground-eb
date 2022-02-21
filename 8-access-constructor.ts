class CPoint {

    constructor(private x?: number, private y?: number) {

    }

    draw() {
        console.log(`Drawing points for coordinate X:${this.x} | Y: ${this.y}`);
    }
}


let point6 = new CPoint(10, 20);
// point8.x = 10;
// point8.y = 8;
point6.draw();

let point7 = new CPoint();
// point9.x = 2;
// point9.y = 3;
point7.draw();