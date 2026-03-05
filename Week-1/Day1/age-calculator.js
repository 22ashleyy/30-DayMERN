const currentYear = new Date().getFullYear();
const birthYear = prompt("Please enter your birth year:");

const age = currentYear - birthYear;

console.log(`You are ${age} years old.`);