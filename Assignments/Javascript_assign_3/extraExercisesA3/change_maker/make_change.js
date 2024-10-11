"use strict"; //wasn't here by default -?-

const $ = selector => document.querySelector(selector);

const processEntry = () => {
    let entry = parseInt($("#cents").value);
    if (isNaN(entry) || entry <= 0 || entry > 99) {
        alert(`Cents must be > 0 and < 99`);
    }
    else {
        makeChange(entry);
    }
};

const makeChange = (cents) => {
    let quarter = parseInt(cents / 25);
    cents = parseInt(cents % 25);
    let dime = parseInt(cents / 10);
    cents = parseInt(cents % 10);
    let nickel = parseInt(cents / 5);
    cents = parseInt(cents % 5);
    let penny = parseInt(cents / 1);

    $("#quarters").value = quarter;
    $("#dimes").value = dime;
    $("#nickels").value = nickel;
    $("#pennies").value = penny;
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntry);
});
