"use strict";

// Secret Number
const secret = 4;

let number = 0;
let tries = 0;

// Prompt user for their guess
do {
    do {
        number = parseInt(prompt("Enter a number between 1 and 10:"));
    } while (isNaN(number) || number <=0 || number > 10);

    tries = (tries + 1);
} while (number != secret);

// Congrats text display
const congrats = `Congratulations, you guessed the secret number.`;
alert(congrats);

let attempt = ``;
if (tries > 1) {
    attempt = `<p>You guessed the number in ${tries} tries!</p>`;
    }
else {
    attempt = `<p>You guessed the number in ${tries} try!</p>`;
    }
document.write(attempt);
