"use strict";

const $ = (selector) => document.querySelector(selector);

const getRandomNumber = max => {
    let rand = null;
    if (!isNaN(max)) {
        rand = Math.random();
        rand = Math.floor(rand * max);
        rand = rand + 1;
    }
    return rand;
};

const calculateFutureValue = (investment, rate, years) => {
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
        futureValue += futureValue * rate / 100;
        if( futureValue == Number.POSITIVE_INFINITY) {
            alert(`Future value = Infinity i = ${i}`)
            i = years;
        }
    }
    //alert( `Maximum value in Javascript is ${Number.MAX_VALUE}`)
    return futureValue.toFixed(2);
};

const getFormattedValue = value => {
    console.log(value);

    let periodIndex = value.indexOf('.');

    let cents = value.substring(periodIndex + 1);

    console.log(cents);

    value = value.substring(0, value.length -3);
    console.log(value);

    let hundreds = value.substring( value.length - 3);
    console.log(hundreds);

    value = value.substring(0, value.length - 3);
    console.log(value);

    if( value.length > 0) {
        let thousands = value.substring( value.length - 3);
        console.log(thousands);
        value = value.substring(0, value.length - 3);

        if( value.length > 0 ) {
            let millions = value.substring( value.length  -3);
            console.log(millions);

            return `\$${millions},${thousands},${hundreds}.${cents}`;

        }
        else {
            return `\$${thousands},${hundreds}.${cents}`;

        }
    }
    else {
        return `\$${hundreds}.${cents}`;
    }
}

const padWithZero = (value) => {
    return value.toString().padStart(2,"0");
}

document.addEventListener("DOMContentLoaded", () => {

    const today = new Date();
    const day = today.getDay();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const hours = today.getHours();
    const minutes = today.getMinutes();

    const dateString = `Today is ${padWithZero(month)}/${padWithZero(day)}/${padWithZero(year)} at ${padWithZero(hours)}:${padWithZero(minutes)}`;
    $("#date").textContent = dateString;

    $("#calculate").addEventListener("click", () => {
        const investment = getRandomNumber(50000); //parseFloat($("#investment").value);
        const rate = getRandomNumber(15);//parseFloat($("#rate").value);
        const years = getRandomNumber(50);//parseFloat($("#years").value);

        $("#investment").value = investment;
        $("#rate").value = rate;
        $("#years").value = years;

        let isValid = true;
        if (isNaN(investment) || investment <= 0) {
            $("#investment").nextElementSibling.textContent = "Must be a valid number greater than 0.";
            isValid = false;
        } else {
            $("#investment").nextElementSibling.textContent = "";
        }

        if (isNaN(rate) || rate <= 0) {
            $("#rate").nextElementSibling.textContent = "Must be a valid number greater than 0.";
            isValid = false;
        } else {
            $("#rate").nextElementSibling.textContent = "";
        }

        if (isNaN(years) || years <= 0) {
            $("#years").nextElementSibling.textContent = "Must be a valid number greater than 0.";
            isValid = false;
        } else {
            $("#years").nextElementSibling.textContent = "";
        }

        if (isValid) {
            let futureValue = calculateFutureValue(investment, rate, years);
            
            let formattedValue = getFormattedValue(futureValue.toString());
            $("#future_value").value = formattedValue;//calculateFutureValue(investment, rate, years);
        }
    });
    $("#investment").focus();
});