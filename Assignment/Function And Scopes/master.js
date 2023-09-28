function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    return `${zName.slice(0, zName.indexOf(" "))} ${zName
      .charAt(zName.indexOf(" ") + 1)
      .toUpperCase()}.`;
  }
  function ageWithMessage(zAge) {
    return `Your Age Is ${parseInt(zAge)}`;
  }
  function countryTwoLetters(zCountry) {
    return `You live in ${zCountry.slice(0, 2).toUpperCase()}`;
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)},${ageWithMessage(
      zAge
    )},${countryTwoLetters(zCountry)}`;
  }
  return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));

// Task 2

itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function

urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// Task 3

function checker(zName) {
  return (status) => {
    return (salary) => {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// Task 4

function specialMix(...data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    if (!isNaN(parseInt(data[i]))) sum += parseInt(data[i]);
  }
  if (sum == 0) return "All Is Strings";
  else return sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...names){
//     return(`[${names.join("], [")}] => Done !`);
// };
let names = (...names) => `[${names.join("], [")}] => Done !`;
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => {
  sum = 0;
  for (let i = 0; i < nums.length; i++) sum += nums[i];
  return one + two + sum;
};
// let calc = function (one, two, ...nums) {
//     sum = 0;
//     for(let i = 0 ;i<nums.length;i++ ) sum +=nums[i]
//     return one + two + sum;
// };

console.log(calc(10, myNumbers[0], myNumbers[1])); // 80
