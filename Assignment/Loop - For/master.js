// Task 1

let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += 10) {
  if (i == 40) {
    continue;
  }
  console.log(i);
}

// Task 2

start = 10;
end = 0;
let stop = 3;
for (let i = start; i > end; i--) {
  i < 10 ? console.log(`0${i}`) : console.log(`${i}`);
  if (i == 3) break;
}

// Task 3

start = 1;
end = 6;
let breaker = 2;

for (let i = start; i <= end; i++) {
  console.log(i);
  for (let j = 2; j < end; j += breaker) {
    console.log(`-- ${j}`);
  }
}

// Task 4

let index = 10;
let jump = 2;

for (;;) {
  console.log(index);
  if (index == 4) break;
  index -= jump;
}

// Task 5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let newFriends = [];

for (let i = +false; i < friends.length; i++) {
  if (friends[i][+false].toLowerCase() == letter) continue;
  newFriends.push(friends[i]);
}
for (let i = +false; i < newFriends.length; i++) {
  console.log(`${i + +true} => ${newFriends[i]}`);
}

// Task 6

start = 0;
swappedName = "elZerO";
swappedNameRev = [];
for (let i = start; i < swappedName.length; i++) {
    if (swappedName.charAt(i) === swappedName.charAt(i).toLowerCase()) {
        swappedNameRev.push(swappedName[i].toUpperCase());
    } else swappedNameRev.push(swappedName[i].toLowerCase());
}
console.log(swappedNameRev.join(""));
//Output
//("ELzERo");

// Task 6

start = 0;
mix = [1, 2, 3, "A", "B", "C", 4];

for(let i = ++start; i < mix.length;i++){
    if(typeof mix[i] === "number")
    console.log(mix[i])
}

