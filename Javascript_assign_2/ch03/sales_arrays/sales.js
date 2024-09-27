"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

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
let total = 0;
for (let i of region1) {
    total += i;
}
document.write(`Region 1: $${total}<br>`);
total = 0;
for (let i of region2) {
    total += i;
}
document.write(`Region 2: $${total}<br>`);
total = 0;
for (let i of region3) {
    total += i;
}
document.write(`Region 3: $${total}<br>`);
total = 0;
for (let i of region4) {
    total += i;
}
document.write(`Region 4: $${total}<br>`);
total = 0;
for (let i of region5) {
    total += i;
}
document.write(`Region 5: $${total}<br>`);

// Display Total Sales
document.write(`<h2>Total Sales</h2>`);
