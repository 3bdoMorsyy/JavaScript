// Task 1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
//myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
//myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Task 2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]

// Task 3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = arrTwo.concat(arrOne);

// Write One Single Line Of Code

console.log(finalArr.sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

// Task 4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.pop()[0].slice(website.length).toUpperCase()); // ZERO

// Task 5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
haystack.indexOf(needle) != -1
  ? console.log("Found")
  : console.log("Not Found");
haystack.lastIndexOf(needle) != -1
  ? console.log("Found")
  : console.log("Not Found");
haystack.includes(needle) != 0
  ? console.log("Found")
  : console.log("Not Found");

// Task 6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = allArrs.concat(arr2.pop(), arr1.pop(), arr2.pop());

console.log(allArrs.reverse().join("").toLowerCase()); // fxy

/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my = my.splice(zero, ++counter).reverse();

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, --counter)); // ["Elham", "Mazero"]

console.log(
  my[zero].slice(--zero, --counter).toLowerCase() + my[counter].slice(counter)
); // "Elzero"
console.log(
  my[counter].slice(my.length, my.length + --counter) +
    my[++counter].slice(my.length + ++zero).toUpperCase()
); // "rO"

//counter = 2 , zero = 1
