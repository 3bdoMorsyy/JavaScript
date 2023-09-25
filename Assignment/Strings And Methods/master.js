// Task 1

let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.split("", 1).toString().toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee

// Task 2

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(userName.includes(letterZ)); // True
console.log(userName.startsWith(letterE.toUpperCase())); // True
console.log(userName.endsWith(letterO.toLowerCase())); // True

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.slice(a.indexOf(a.charAt(2)), 6)); // Zero

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 10)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
  a.slice(0, 1).toLowerCase() +
    a.slice(1, length - 1).toUpperCase() +
    a.slice(length - 1).toLowerCase()
); // eLZERO WEB SCHOOl
