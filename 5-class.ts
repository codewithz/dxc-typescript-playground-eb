class Point {
    x: number;
    y: number;

    draw() {
        console.log(`Drawing points for coordinate X:${this.x} | Y: ${this.y}`);
    }
}


let point1 = new Point();
point1.x = 10;
point1.y = 8;
point1.draw();



