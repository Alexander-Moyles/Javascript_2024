const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    let startNumber = parseInt(prompt("Enter the start number"));
    let endNumber = parseInt(prompt("Enter the end number"));
    let numberRange = [];

    for (let index = startNumber; index <= endNumber; index++) {
        numberRange.push(index);
    }
    
    let total = 0;

    for (let i = 0; i < numberRange.length; i++) {
        total += parseInt(numberRange[i]);
    }

    alert(`The total of the values from ${startNumber} to ${endNumber} is ${total}`)
});