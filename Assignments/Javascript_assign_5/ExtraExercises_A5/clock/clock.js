"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    const time = new Date();

    let Meridiem = "AM";
    let hour = time.getHours().toString();
    if (hour >= 12) {
        if (hour > 12) {
            hour -= 12;
        }
        Meridiem = "PM"
    }
    else if (hour = 0) {
        hour = 12;
    }
    $("#hours").textContent = hour;
    $("#minutes").textContent = padSingleDigit(time.getMinutes().toString());
    $("#seconds").textContent = padSingleDigit(time.getSeconds().toString());
    $("#ampm").textContent = Meridiem;
};

document.addEventListener("DOMContentLoaded", () => {
    displayCurrentTime(); //Ensures time displays as soon as page loads
    setInterval(displayCurrentTime, 1000)
});
