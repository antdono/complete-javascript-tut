"use strict"; // Strict mode

//* strict mode is a way to write secure code

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

/*
//* Functions

function logger() {
  console.log("My name is Jonas");
}

//* calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23"); // type conversion : string to number also type num in console



//* Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//* Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);



//* Arrow function

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));



//* Functions calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


// reviewing functions

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
  return retirement;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));



//* Coding Challenge #1

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoala = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoala);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgKoalas) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoala);

checkWinner(576, 111);

// Test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoala = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoala);
checkWinner(scoreDolphins, scoreKoala);

//* Array

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

//* Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);


//* Basic Array Operations (Methods)

//* Add elements
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//* Remove elements
friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

friends.push(23);
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("bob"));

//* includes
console.log(friends.includes("bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

//* Coding Challenge #2
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(bills, tips, totals);

//* Introduction to Objects
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

//* Dot vs. Bracket Notation
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas.'last' + nameKey);
const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
  );
  
  if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
  } else {
    console.log(
      "Wrong request! Choose between firstName, lastName, age, job, and friends"
      );
    }
    
    //* bracket & dot notation
    jonas.location = "Portugal";
    jonas["twitter"] = "@jonasschmedtman";
    console.log(jonas);
    
    //* challenge
    console.log(
      `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
      );
      
      */

//* Object Methods
