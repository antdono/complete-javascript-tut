console.log("Values and Variables");

const country = "United States";
const continent = "North America";
let population = 328.2;

console.log(country, continent, population);

let isIsland = false;
let language;

language = "English";

// country = "Mexico";  TypeError: Assignment to constant variable.

console.log(isIsland, population, country, language);

let populationHalf = population / 2;
population += 1;
console.log(populationHalf, population);
// console.log(population);
