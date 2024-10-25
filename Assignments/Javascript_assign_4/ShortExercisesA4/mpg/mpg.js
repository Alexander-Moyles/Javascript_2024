"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const calculateMPG = (miles, gallons) => (miles / gallons).toFixed(1);

const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if ((!isNaN(gallons) && gallons > 0) && (!isNaN(miles) && miles > 0)) {
        $("#mpg").value = calculateMPG(miles, gallons);
        clearGallonsSpan();
        clearMilesSpan();
    }
    else {
        if (isNaN(gallons) || gallons <= 0) {
            $("#gallons").nextElementSibling.firstChild.nodeValue = "Must be a valid number greater than zero";
            focusAndSelect("#gallons");
        }
        else {
            clearGallonsSpan();
        }

        if (isNaN(miles) || miles <= 0) {
            $("#miles").nextElementSibling.firstChild.nodeValue = "Must be a valid number greater than zero";
            focusAndSelect("#miles");
        }
        else {
            clearMilesSpan();
        }
    }
};

const clearGallonsSpan = () => {
    $("#gallons").nextElementSibling.firstChild.nodeValue = "*";
}

const clearMilesSpan = () => {
    $("#miles").nextElementSibling.firstChild.nodeValue = "*";
}

const clearEntries = () => {
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";

    clearGallonsSpan();
    clearMilesSpan();
}

document.addEventListener("DOMContentLoaded", () => {
    // Testing:
    // $("#miles").nextElementSibling.textContent = "Need to fill this out";
    // $("#miles").nextElementSibling.firstChild.nodeValue = "Must be a valid number greater than zero";

    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#miles").focus();
});
