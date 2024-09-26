"use strict";

let number;
const array = [];

// Prompts user for numbers to add to array.
do {
    number = parseInt(prompt("Enter a number: (Enter -999 to end)"));
    if (!isNaN(number) && number != -999) {
        array[array.length] = number;
    }
    else if (isNaN(number)) {
        alert("Invalid entry, try again.");
    }
} while(number != -999);

// Calculates total sum of array numbers.
let total = 0;
for (let i in array) {
    total += array[i];
}


// Calculates odd numbers from the array.
const oddArray = [];
for (let j of array) {
    let odd = j % 2;
    if (odd != 0) {
        oddArray[oddArray.length] = j;
    }
}

// Displays total sum and odd numbers.
alert(`Total: ${total}\nOdd numbers: ${oddArray}`)

document.write(`<p>Total:&emsp;&emsp;&emsp;&emsp; ${total}</p>`)
document.write(`<p>Odd numbers: ${oddArray}</p>`)
