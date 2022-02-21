// --- > too many parameters
// let drawPoint = (x, y, a, b, c, d) => {

//     console.log(`Drawing points for coordinate X:${x} | Y: ${y}`);

// }

// // drawPoint(5, 6);

// ---> Type Issue
// let drawPoint = (point) => {
//     console.log(`Drawing points for coordinate X:${point.x} | Y: ${point.y}`);
// }

// drawPoint({ x: 10, y: 5 });
// drawPoint({ x: 'Z', y: 'N' });

//------> Inline Assertions
// let drawPoint = (point: { x: number, y: number }) => {
//     console.log(`Drawing points for coordinate X:${point.x} | Y: ${point.y}`);
// }

// drawPoint({ x: 10, y: 5 });
// // drawPoint({ x: 'Z', y: 'N' });

// let getDifference = (pointA: { x: number, y: number }, pointB: { x: number, y: number }) => {

// }

//----------- Solution ------------------

interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {
    console.log(`Drawing points for coordinate X:${point.x} | Y: ${point.y}`);
}

let getDifference = (pointA: Point, pointB: Point) => {

}

drawPoint({ x: 5, y: 10 });

// drawPoint({ x: 'A', b: 'Y' });



