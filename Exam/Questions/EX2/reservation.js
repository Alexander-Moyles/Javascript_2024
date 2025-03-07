"use strict"

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", ()=> {
    $("#calc").addEventListener("click", () => {
        let adults = parseInt($("#adults").value);
        let children = parseInt($("#children").value);

        if (isNaN(adults) || adults < 0) {
            adults = 0;
        }
        if (isNaN(children) || children < 0) {
            children = 0;
        }

        let price = (500 * adults) + (350 * children);
        if ($("#code").value == "Eric") {
            price -= (price * 0.3);
        }

        if (price > 0) {
            $("#price").value = price;
        }
    });

    $("#submitButton").addEventListener("click", (event) => {
        let isValid = true;
        $("#arrival_date").nextElementSibling.textContent = "*";
        $("#adults").nextElementSibling.textContent = "*";
        $("#children").nextElementSibling.textContent = "*";
        $("#name").nextElementSibling.textContent = "*"
        $("#email").nextElementSibling.textContent = "*"

        const flightDate = $("#arrival_date").value.split("/");
        if (flightDate.length != 3) {
            $("#arrival_date").nextElementSibling.textContent = "Need to enter a valid date";
            isValid = false;
        }
        else {
            const month = flightDate[0];
            const day = flightDate[1];
            const year = flightDate[2];

            if (month > 12 || month < 1 || isNaN(month)) {
                $("#arrival_date").nextElementSibling.textContent = "Need to enter a valid date";
                isValid = false;
            }
            else if (day > 31 || day < 1 || isNaN(day)) {
                $("#arrival_date").nextElementSibling.textContent = "Need to enter a valid date";
                isValid = false;
            }
            else if (year < 1 || isNaN(year)) {
                $("#arrival_date").nextElementSibling.textContent = "Need to enter a valid date";
                isValid = false;
            }
        }

        if (isNaN(parseInt($("#adults").value))) {
            $("#adults").nextElementSibling.textContent = "Need to enter a valid integer for adults";
            isValid = false;
        }

        if (isNaN(parseInt($("#children").value))) {
            $("#children").nextElementSibling.textContent = "Need to enter a valid integer for children";
            isValid = false;
        }

        if ($("#name").value == "") {
            $("#name").nextElementSibling.textContent = "Need to enter the name"
            isValid = false;
        }

        if ($("#email").value == "") {
            $("#email").nextElementSibling.textContent = "Need to enter the email"
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
        else {
            $("#reservation_form").submit();
        }
    });
});
