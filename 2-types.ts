let a:number;

let b:boolean;

let c:string;

let d:any;

let e:number[]=[1,2,3];

let f:any[]=[1,2,3,'a',false,'b'];

const colorRed=0;
const colorGreen=1;
const colorBlue=2;

enum Color{Red=0,Green=1,Purple=3,Blue=2};

// let bgColor=colorGreen;

let bgColor=Color.Blue;

console.log('Backgground Color Value:',Color.Blue);