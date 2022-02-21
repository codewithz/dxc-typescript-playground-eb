// --- > too many parameters
// let drawPoint = (x, y, a, b, c, d) => {
//     console.log(`Drawing points for coordinate X:${x} | Y: ${y}`);
// }
// // drawPoint(5, 6);
var drawPoint = function (point) {
    console.log("Drawing points for coordinate X:".concat(point.x, " | Y: ").concat(point.y));
};
drawPoint({ x: 10, y: 5 });
drawPoint({ x: 'Z', y: 'N' });
