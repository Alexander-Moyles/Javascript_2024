"use strict";

let cont = "y";
do {
    // get investment amount - loop until user enters a number
    let investment = 0;
    do {
        investment = parseFloat(
            prompt("Enter investment amount as xxxxx.xx", 10000));
    }
    while ( isNaN(investment) || investment <= 0);

    // get interest rate - loop until user enters a number
    let rate = 0;
    do {
        rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
    }
    while ( isNaN(rate) || rate <= 0 || rate >= 15);

    // get number of years - loop until user enters a number
    let years = 0;
    do {
        years = parseInt(prompt("Enter number of years", 10));
    }
    while ( isNaN(years) || years <= 0);

    // display user input
    let user_entries = `<h4><label>Investment amount = </label> ${investment} <label>Interest Rate = </label> ${rate} <label>Years = </label> ${years}</h4>`;
    document.write(user_entries)

    // calulate future value and display results
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
        let interest = (futureValue * rate / 100);
        futureValue = futureValue + (interest);
        let year_values = `<p><label>Year=</label>${i} <label>Interest=</label>${interest.toFixed(2)} <label>Value=</label>${futureValue.toFixed(2)}</p>`;
        document.write(year_values)
    }

    // asks user permission to continue
    cont = prompt("Add More Entries? (y/n)", "y");
}
while (cont == "y");
