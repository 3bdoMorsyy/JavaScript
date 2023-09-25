// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(10 ** 5); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(10 ** 3 * 10 ** 2); // 100000
console.log(Number("100000")); // 100000
console.log(Math.trunc(100000.9)); // 100000
console.log(50000 + 50000); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000
console.log(Math.round(100000.44)); // 100000
console.log(Math.floor(100000.548)); // 100000

//Task 2
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// Task 3
console.log(`${Number.MAX_SAFE_INTEGER}`.length); // 9007199254740991

// Task 4
let myVar = "100.56789 Views";

console.log(Number.parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

// Task 5

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

// Task 6

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(flt.toFixed(0)); // 10
console.log(parseInt(flt)); // 10

// Task 7

console.log(Math.floor(Math.random() * 10) % 5); // 0 || 1 || 2 || 3 || 4

/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.min(a, b, c, d));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, 2) * Math.round(--d)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(++d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Number(d.toFixed(0)));

// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(Math.floor(b) / Math.ceil(d))); // 67 => Number
