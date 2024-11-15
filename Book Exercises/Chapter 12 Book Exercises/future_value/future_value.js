"use strict";

//TODO finish

const $ = selector => document.querySelector(selector);

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
        if (futureValue == Number.POSITIVE_INFINITY) {
            alert(`Future value = Infinity\ni = ${i}`);
            i = years;
        }
    }
    //alert(`Maximum value in JavaScript is ${Number.MAX_SAFE_INTEGER}`);
    return futureValue.toFixed(2);
};

const getFormattedValue = (value) => {
    let periodIndex = value.indexOF('.');
    console.log(value);

    let cents = value.substring(periodIndex + 1);
    console.log(cents);

    value = value.substring(value.length - 3);
    console.log(value);

    let hundreds = value.substring(value.length - 3);
    console.log(hundreds);

    value = value.substring(0, value.length - 3);
    console.log(value);

    let thousands = value.substring(value.length - 3);
    console.log(thousands);

    value = value.substring(0, value.length - 3);

    if (value.length > 0) {
        let millions = value.substring(value.length - 3);
        console.log(millions);
        $("#future_value")
    }
}

$(document).ready( () => {
    $("#calculate").click( () => {
        const investment = getRandomNumber(10000);//parseFloat($("#investment").val());
        const rate = getRandomNumber(15);//parseFloat($("#rate").val());
        const years = Math.random(50);//parseFloat($("#years").val());

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
            $("#future_value").value = calculateFutureValue(investment, rate, years);
        }
    });
    $("#investment").focus();
});
