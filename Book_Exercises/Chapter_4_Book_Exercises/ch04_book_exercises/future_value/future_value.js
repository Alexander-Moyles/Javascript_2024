"use strict";

const $ = selector => document.querySelector(selector);

const futureCalc = () => {
    let futureValue = parseInt($("#investment").value);
    let rate = parseFloat($("#rate").value);
    let years = parseInt($("#years").value);

    if (!isNaN(futureValue)) {
        if (!isNaN(rate)) {
            if (!isNaN(years)) {
                for (let i = 1; i <= years; i++ ) {
                    futureValue += futureValue * rate / 100;
                }
        
                $("#future_value").value = futureValue.toFixed(2);
            }
            else {
                alert("years must be valid number")
            }
        }
        else {
            alert("rate must be valid number")
            }
    }
    else {
        alert("investment must be valid number")
    }
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", futureCalc);
});
