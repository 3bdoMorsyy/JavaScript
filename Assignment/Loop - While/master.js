let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
  if (friends[index][+false] !== "A" && typeof friends[index] !== "number")
    console.log(`${++counter} => ${friends[index]}`);
  index++;
}

// Output
("1 => Sayed");
("2 => Mahmoud");

/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];
let adminsCount = 3;
document.write(`<div>We Have ${adminsCount} Admins</div>`);

for (let i = 0; i < adminsCount; i++) {
  document.write("<hr>");
  document.write(`<div> The Admin For Team ${i + 1} Is ${myAdmins[i]}</div>`);
  document.write("<h3>Team Members:</h3>");
  let counter = 1;
  for (let j = 0; j < myEmployees.length; j++) {
    if (myAdmins[i][0] === myEmployees[j][0]) document.write(`<p>- ${counter++} ${myEmployees[j]}</p>`);
  }
}
