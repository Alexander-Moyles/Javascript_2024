"use strict"

const $ = (selector) => document.querySelector(selector);

const clearSpan = () => {
    $("#email_address1").nextElementSibling.textContent = "*";
    $("#password").nextElementSibling.textContent = "*";
    $("#robot").nextElementSibling.textContent = "*";
}

const loginButton = () => {
    let errors = 0;
    clearSpan();

    if ($("#email_address1").value == "") {
        $("#email_address1").nextElementSibling.textContent = "Invalid Email"
        errors++;
    }
    if ($("#password").value == "") {
        $("#password").nextElementSibling.textContent = "Invalid Password"
        errors++;
    }
    if ($("#robot").checked == false) {
        $("#robot").nextElementSibling.textContent = "Need to check box"
        errors++;
    }

    if (errors == 0) {
        $("#email_form").submit();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    $("#login").addEventListener("click", loginButton);
    $("#resetButton").addEventListener("click", clearSpan);
});
