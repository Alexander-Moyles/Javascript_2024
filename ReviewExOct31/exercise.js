"use strict";

const $ = (selector) => document.querySelector(selector);

let timer = null;

const counter = () => {
    if (timer == null) {
        $("#timer_button").textContent = "Stop"
        timer = setInterval(() => {
            let number = parseInt($("#number").textContent);
            number += 1;
            $("#number").textContent = number;
        }, 1000);
    }
    else {
        $("#timer_button").textContent = "Start";
        clearInterval(timer);
        timer = null;
}};

document.addEventListener("DOMContentLoaded", () => {
    $("#timer_button").addEventListener("click", counter);
});
