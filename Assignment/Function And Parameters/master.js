// Task 1

function sayHello(theName, theGender) {
  theGender === "Male"
    ? console.log(`Hello Mr ${theName}`)
    : theGender === "Female"
    ? console.log(`Hello Mrs ${theName}`)
    : console.log(`Hello ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//  Task 2

function calculate(firstNum, secondNum, operation = `add`) {
  if (secondNum !== undefined) {
    operation === "add"
      ? console.log(firstNum + secondNum)
      : operation === "subtract"
      ? console.log(firstNum - secondNum)
      : operation === "multiply"
      ? console.log(firstNum * secondNum)
      : console("Error");
  } else console.log("Second Number Not Found");
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

// Task 3

function ageInTime(theAge) {
  if (theAge > 10 && theAge < 110) {
    console.log(
      `Years = ${theAge} , Months = ${(theAge *= 12)} , Days = ${(theAge *= 12)} , Hours = ${(theAge *= 24)} , Minutes = ${(theAge *= 60)} , Seconds = ${(theAge *= 60)}`
    );
  } else console.log("Age Out Of Range");
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

// Task 4 (Challenge)

function checkStatus(a, b, c) {
  if (typeof a !== "string") {
    temp = a;
    if (typeof b === "string") {
      a = b;
      b = temp;
    } else {
      if (typeof c === "string") {
        a = c;
        c = temp;
      }
    }
  }
  if (typeof b !== "number") {
    temp = b;
    if (typeof a === "number") {
      b = a;
      a = temp;
    } else {
      if (typeof c === "number") {
        b = c;
        c = temp;
      }
    }
  }

  c === true
    ? console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`)
    : console.log(
        `Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`
      );
}

// Needed Output
checkStatus("Abdelrahman", 38, true); // "Hello Abdelrahman, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Mohamed", true); // "Hello Mohamed, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Mahmoud"); // "Hello Mahmoud, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Morsy", 38); // "Hello Morsy, Your Age Is 38, You Are Not Available For Hire"

// Task 5

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value = {${i}}>${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

// Task 6

function multiply(...numbers) {
  result = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") result *= Math.floor(numbers[i]);
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
