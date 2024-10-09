"use strict";

function testVariables() {
    for (let i=0; i<5; i++) {
        console.log(i)
    }
}

testVariables();

// var can be referenced before it is declared (will be undefined)

const TAX_RATE = 5;

function financialCalc() {
    const greeting = "Performing calculations";

    console.log(greeting);
    console.log("Tax rate:", TAX_RATE);

    const finished = "Done calculations";

    console.log(finished);
}

financialCalc();
