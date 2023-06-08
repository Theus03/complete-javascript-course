// CLASS

/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let myFirstJob = "Programemr";
let myCurretJob = "Teacher";

let job1 = "programmer";
let job2 = "techer";

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun)

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

console.log()


let age = 30; // LET = pode ser alterada 
age = 31;

const birthYear = 1991; // CONST - Não pode ser alterada, também não pode ser declarada vazia
//birthYear = 1990; 
//const job; VAI DAR ERRO AQUI, POIS NÃO PODE SER DECLARADA VAZIA

var job = 'programmer'; // VAR - Basicamente serve igual ao var, porém é um pouco
job = 'teacher';

lastName = 'Leite'; // Não é uma boa prática
console.log(lastName);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Matheus';
const lastName = 'Leite';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 
x--;
x--;
console.log(x);

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

*/

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(`String with
multiple
lines`);

// PRACTICE

let country = "Brazil";
let continent = "South America";
let population = 214.3;
let isIsland = true;
let language;

if (country === "Island"){
    console.log(isIsland)
} else {
    isIsland = false;
    console.log('The country is island? ' + isIsland)
    console.log(`Country: ${country} - Continent: ${continent} - Poppulation: ${population} milions`);
}
console.log(typeof isIsland, typeof population, typeof country, typeof language);

