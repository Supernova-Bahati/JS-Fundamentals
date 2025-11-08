// Exercise 2: Calculate Year of Birth

// Prompt the user for their name and age
let userName = prompt("What is your name?");
let userAge = prompt("How old are you?");

// Convert the age input to a number
userAge = Number(userAge);

// Get the current year
let currentYear = new Date().getFullYear();

// Calculate the year of birth
let yearOfBirth = currentYear - userAge;

// Display the result
alert(`Hello, ${userName}! You were born in ${yearOfBirth}.`);
