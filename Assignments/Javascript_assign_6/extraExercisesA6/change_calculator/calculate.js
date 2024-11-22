"use strict";
const $ = (selector) => document.querySelector(selector);
document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", () => {
        if ($("#cents").value > 99 || $("#cents").value < 1 || isNaN($("#cents").value)) {
            alert("Please enter a valid integer amount (1-99)")
            $("#cents").value = "";
            $("#cents").focus();
            return;
        }

        let cents = $("#cents").value;
        let quarter = Math.floor(cents / 25);
        cents = Math.floor(cents % 25);
        let dime = Math.floor(cents / 10);
        cents = Math.floor(cents % 10);
        let nickel = Math.floor(cents / 5);
        cents = Math.floor(cents % 5);
        let penny = Math.floor(cents / 1);

        $("#quarters").value = quarter;
        $("#dimes").value = dime;
        $("#nickels").value = nickel;
        $("#pennies").value = penny;
        $("#cents").focus();
    });
    
    // set focus on cents text box on initial load
    $("#cents").focus();
            
});