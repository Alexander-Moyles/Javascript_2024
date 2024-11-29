"use strict";

const $ = (selector) => document.querySelector(selector);

const isDate = (date, datePattern) => {
    if (!datePattern.test(date)) { return false; }

    const dateParts = date.split("/");
    const month = parseInt( dateParts[0] );
    const day = parseInt( dateParts[1] );

    if ( month < 1 || month > 12 ) { return false; }
    // if ( day > 31 ) { return false; }
    else {
        switch( month ) {
            case 2:
                if ( day > 28 ) { return false; } // doesn't handle leap year
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                if ( day > 30 ) { return false; }
                break;
            default:
                if ( day > 31 ) { return false; }
                break;
        }
    }
    return true;
};

document.addEventListener("DOMContentLoaded",  () => {

    $( "#save" ).addEventListener("click", () => {
        
        // get values entered by user
        const email = $("#email").value;
        const phone = $("#phone").value;
        const zip = $("#zip").value;
        const dob = $("#dob").value;

        // regular expressions for validity testing
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const zipPattern = /^\d{5}(-\d{4})?$/;
        const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;
        
        // check user entries for validity
        let isValid = true;
        if ( email === "" || !emailPattern.test(email) ) {
            isValid = false;
            $("#email").nextElementSibling.textContent = "Please enter a valid email.";
        }
        else {
            $("#email").nextElementSibling.textContent = "";
        }
        if ( phone === "" || !phonePattern.test(phone) ) {
            isValid = false;
            $("#phone").nextElementSibling.textContent = "Please enter a phone number in NNN-NNN-NNNN format.";
        }
        else {
            $("#phone").nextElementSibling.textContent = "";
        }
        if ( zip === "" || !zipPattern.test(zip) ) {
            isValid = false;
            $("#zip").nextElementSibling.textContent = "Please enter a valid zip code.";
        }
        else {
            $("#zip").nextElementSibling.textContent = "";
        }
        if ( dob === "" || !isDate(dob, datePattern) ) {
            isValid = false;
            $("#dob").nextElementSibling.textContent = "Please enter a valid date in MM/DD/YYYY format.";
        }
        else {
            $("#dob").nextElementSibling.textContent = "";
        }
        
        if ( isValid ) { 
            $("#profile_form").submit();
        }
        
        $("#email").focus(); 
    });
    
    // set focus on initial load
    $("#email").focus();
});