"use strict";
const $ = (selector) => document.querySelector(selector);
const getRandomNumber = max => {
	let random = null;
	if (!isNaN(max)) {
		random = Math.random();             // value >= 0.0 and < 1.0
		random = Math.floor(random * max);  // value is an integer between 0 and max - 1
		random = random + 1;                // value is an integer between 1 and max
	}
	return random;
};
document.addEventListener("DOMContentLoaded", () => {
    $("#generate").addEventListener("click", () => {
        $("#password").value = ""; // clear previous entry
    
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
        
    }); // end click()
    
    $("#clear").addEventListener("click", () => {
        $("#num").value = "";
        $("#password").value = "";
        $("#num").focus();
    }); // end click()
    
    // set focus on initial load
    $("#num").focus();
}); // end ready()