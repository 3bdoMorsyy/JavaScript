// Task 1
// let num = 10;
// num < 10
//   ? console.log(`00${num}`)
//   : num >= 10 && num < 100
//   ? console.log(`0${num}`)
//   : num >= 100
//   ? console.log(`${num}`)
//   : console.log(`Out Of Range`);

// Task 2

// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if (num1 == str){
//     if(num1 === str){
//         console.log("{num1} Is The Same Value As {str}");
//     }
//     else{
//         console.log("{num1} Is The Same Value As {str} But Not The Same Type");
//     }
// }
// if(num1!= str2 && typeof(num1)!= typeof(str2)){
//     console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
// }
// if(str!= str2 && typeof(str)== typeof(str2)){
//     console.log("{str} Is The Same Type As {str2} But Not The Same Value");
// }

// Task 3

// let Num1 = 10;
// let Num2 = 30;
// let Num3 = "30";

// Num3 > Num1 && typeof Num3 != typeof Num2
//   ? console.log(
//       `${Num3} Is Larger Than ${Num1} And Type ${typeof Num3} Not The Same Type As ${typeof Num2}`
//     )
//   : Num3 > Num1 && Num3 == Num2 && typeof Num3 != typeof Num2
//   ? console.log(
//       `${Num3} Is Larger Than ${Num1} And Value Is The Same As ${Num2} And Type ${typeof Num3} Not The Same Type As ${typeof Num2}`
//     )
//   : Num3 != Num1 && typeof Num3 != typeof Num1 && typeof Num3 != typeof Num2
//   ? console.log(
//       `${Num3} Value And Type Is Not The Same As ${Num1} And Type Is Not The Same As ${Num2}`
//     )
//   : console.log("Other");

// Task 4

// Edit What You Want Here

let num1 = 10;
let num2 = 1;
let num3 = 10;
let num4 = 40;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

/*
  If Condition Challenge
*/

let a = 10;

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

// W Position May Change
if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("Good");
}

if (st.length !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}
if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
