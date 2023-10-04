// Task 1

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero
let mixAns = mix
  .map((ele) => (typeof ele === "string" ? ele : ""))
  .reduce((acc, curr) => `${acc}${curr}`);
console.log(mixAns);

//  Task 2

let myString = "EElllzzzzzzzeroo";

// Elzero

let myStringAns = myString
  .split("")
  .filter((ele, index) => myString.indexOf(ele) === index)
  .reduce((acc, curr) => `${acc}${curr}`);
console.log(myStringAns);

//  Task 3

let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero
let newArr = myArray
  .reduce(function (acc, curr, index) {
    return `${acc}${curr}`;
  })
  .replace(",", "");
console.log(newArr);

// Task 4

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let newNums = numsAndStrings
  .filter((ele) => typeof ele !== "string")
  .map((ele) => -ele);
console.log(newNums);

// Task 5

let nums = [2, 12, 11, 5, 10, 1, 99];
let numsAns = nums.reduce(
  (acc, curr) => (curr % 2 !== 0 ? acc + curr : acc * curr),
  1
);
console.log(numsAns);
// 500

/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let MyString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = MyString.split("").map((ele)=> ele === "_" ? " " : ele)
  .filter((ele) => ele !== "," && isNaN(parseInt(ele)))
  .reduce((acc, curr) => `${acc}${curr}`)
  .slice(1,--length);
  

console.log(solution); // Elzero Web School
