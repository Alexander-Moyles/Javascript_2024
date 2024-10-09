"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

let allRegions = [region1, region2, region3, region4, region5];

// Display Sales by Quarter
document.write(`<h2>Sales by Quarter</h2>`);

let quarter = 0;
do {
    let quarterSales;
    quarterSales = region1[quarter] + region2[quarter] + region3[quarter] + region4[quarter] + region5[quarter];
    quarter += 1;
    document.write(`Q${quarter}: $${quarterSales}<br>`)
} while (quarter < 4);

// Display Sales by Region
document.write(`<h2>Sales by Region</h2>`);

for (let region of allRegions) {
    let regionNumber = 1;
    let total = 0;
    for (let i of region) {
        total += i;
    }
    document.write(`Region ${regionNumber}: $${total}<br>`);
    regionNumber += 1;
}

// Display Total Sales
document.write(`<h2>Total Sales</h2>`);

let saleTotal = 0;

for (let region of allRegions) {
    for (let i of region) {
        saleTotal += i;
    }
}
document.write(`$${saleTotal}`);
