// Replace ? With Arithmetic Operators
console.log(10 * 20 + (15 % 3) + 190 + 10 - 400); // 0

let num = 3;
// Task 2

// Solution One
console.log(num + true + true + true); // 6

// Solution Two
console.log(num + num); // 6

// Soultion Three
console.log(num * num - num++); // 6

// Soultion Four
console.log(++num + true); // 6

// Solution Five
console.log(num + (true % num++)); // 6

// Solution Six
console.log(num); // 6

// Task 3

let Num2 = "10";

// Solution One
console.log(+Num2 + +Num2); // 20

// Solution Two
console.log(Num2-- + Num2-- + true); // 20

// Solution Three
console.log(+Num2-- + Num2++ + --Num2 - true - true); // 20

// Solution Four
console.log(Num2 * Num2-- - Num2 * --Num2 + true); // 20

// Task 4
let points = 10;

points += 3;

console.log(points); // 13

points -= 5;

console.log(points); // 8;

/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a] [+] +[b++] [+] +[c++] [-] +[a++]
  11    +   20  +   80  -   11  =   100   
  - Explain:
  [++a]-> prefix , +[b++]->Unary plus , postfix , +[c++]->Unary plus , postfix , +[a++]->Unary plus , postfix

  [++a] [+] -[b++] [+] +[c++] [-] -[a++] [+] a
  13    +   -21  +   81  +   13 + 14  =   100   
  - Explain:
  [++a]-> prefix , -[b++]->Negation , postfix , +[c++]->Unary plus , postfix , +[a++]->Unary plus , postfix ,-[a++]->Negation , postfix

  [--c] [+] [+b] [+] [--a] [*] +[b++] [-] +[b] [*] [a] [+] [--a] [-] +[true]
    81 + 21 + 13 * 21 - 22 * 13 + 12 - 1
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * e); // 2000
console.log(++g * -(--d) + -(--f)); // 173
