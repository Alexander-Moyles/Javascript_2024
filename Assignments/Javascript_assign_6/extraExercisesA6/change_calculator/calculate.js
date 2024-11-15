"use strict";
const $ = (selector) => document.querySelector(selector);
document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", () => {
        
    }); // end click() method
    
    // set focus on cents text box on initial load
    $("#cents").focus();
            
}); // end ready() method