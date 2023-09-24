// Task 1

let NumberOne = 10,
  NumberTwo = 20;
// Ouput
console.log(String(NumberOne) + String(NumberTwo)); // Normal Concatenate => 1020
console.log(typeof (String(NumberOne) + String(NumberTwo))); // Normal Concatenate => String
console.log(`${NumberOne}${NumberTwo}`); // Template Literals Way => 1020
console.log(typeof `${NumberOne}${NumberTwo}`); // Template Literals Way => String

console.log(NumberTwo + "\n" + NumberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${NumberTwo}
${NumberOne}`);
/*
  Template Literals Way
  20
  10
*/

// Task 2
//Look at Html <<
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// Task 3
console.log(
  '`I\'m In\n\
\\\\\n\
Love \\\\ """ \'\'\'\n\
++ With ++\n\
\\"""\\""" \n\
""JavaScript""``'
);
// Task 4
let a = 21;
let b = 20;
let c = "_2021";
console.log(`_${a}${c.repeat(3)}_${b}_`); // _21_2021_2021_2021_20_

/* 
===========================================
== Variables And Concatenation Challenge ==
===========================================

[1] Create 3 Variables [Title, Desctiption, Date]
-- All In One Statement
-- Variable Name Must Be Two Words
-- Title Content Is "Elzero"
-- Description Content Is "Elzero Web School"
-- Date Content Is "25/10"
[2] Create Variable Contains Div And This Div Contains
-- H3 For Title
-- P For Paragraph
-- Span For Time
[3] Add This Card To Page 4 Times
[4] Use Template Literals For Concatenate

Extra
- Use ES6 Repeat
*/ 

let theTitle = "Elzero",
  theDesctiption = "Elzero Web School",
  theDate = "25/10";
let card = `
<div class="parent">
        <div class="child">
            <h3>Hello ${theTitle}</h3>
            <p>${theDesctiption}</p>
            <span>${theDate}</span>
        </div>
    </div>
`;
document.write(card.repeat(4));