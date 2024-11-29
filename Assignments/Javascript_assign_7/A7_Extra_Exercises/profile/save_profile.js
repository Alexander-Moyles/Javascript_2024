"use strict";

const $ = (selector) => document.querySelector(selector);

const isDate = text => {
	if ( ! /^[01]?\d\/[0-3]\d\/\d{4}$/.test(text) ) { return false; }
	
	const index1 = text.indexOf( "/" );
	const index2 = text.indexOf( "/", index1 + 1 );
	const month = parseInt( text.substring( 0, index1 ) );
	const day = parseInt( text.substring( index1 + 1, index2 ) );
	
	if( month < 1 || month > 12 ) { 
		return false; 
	} else {
        switch(month) {
            case 2:
                return (day > 28) ? false : true;
            case 4:
            case 6:
            case 9:
            case 11:
                return (day > 30) ? false : true;
            default:
                return (day > 31) ? false : true;
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    $( "#save" ).addEventListener("click", () => {
        
        let isValid = true;   // initialize isValid flag
        
        const email = $("#email").value;
        const phone = $("#phone").value;
        const zip = $("#zip").value;
        const dob = $("#dob").value;
        
        if ( email === "" || !email.match(/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/) ) {
            isValid = false;
            $("#email").nextElementSibling.textContent = "Please enter a valid email.";
        }
        else {
            $("#email").nextElementSibling.textContent = "";
        }
        if ( phone === "" || !phone.match(/^\d{3}-\d{3}-\d{4}$/) ) {
            isValid = false;
            $("#phone").nextElementSibling.textContent = "Please enter a phone number in NNN-NNN-NNNN format.";
        }
        else {
            $("#phone").nextElementSibling.textContent = ""
        }
        if ( zip === "" || !zip.match(/^\d{5}(-\d{4})?$/) ) {
            isValid = false;
            $("#zip").nextElementSibling.textContent = "Please enter a valid zip code.";
        }
        else {
            $("#zip").nextElementSibling.textContent = "";
        }
        if ( dob === "" || !isDate(dob) ) {
            isValid = false;
            $("#dob").nextElementSibling.textContent = "Please enter a valid date in MM/DD/YYYY format.";
        }
        else {
            $("#dob").nextElementSibling.textContent = "";
        }
        
        if (isValid) { 
            // code that saves profile info goes here
        }
        
        $("#email").focus(); 
    });
    
    // set focus on initial load
    $("#email").focus();
}); 