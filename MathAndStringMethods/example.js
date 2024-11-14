// cmd to run in console terminal/powershell: node example.js
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

let value = Number.MAX_VALUE + Number.MAX_SAFE_INTEGER; //Does nothing
console.log(value);

value = Number.MAX_VALUE + Number.MAX_VALUE; //Infinity
console.log(value);

// Any value which exceeds the maximum range is Infinity

if(value === Infinity) {
    console.log("This is true")
}
else {
    console.log("This is false")
}

// truncation and rounding
let amount = 45.5666;
console.log(Math.round(amount));
console.log(Math.ceil(amount)); // always rounds up
console.log(Math.floor(amount)); // always rounds down
console.log(Math.trunc(amount)); // removes decimals without rounding

console.log(Math.max(56.66, 34, 100, 1)); // gives max value (in this case 100)

// random
let numb = Math.random();
console.log(numb);

const getRandomRange = (maxValue) => { //gives a value between 1 and maxValue (inclusive)
    let val = Math.random();
    val *= maxValue;
    val = Math.floor(val);
    val += 1;
    return val;
}

for (let i=0; i<10; i++) {
    console.log(getRandomRange(10));
}

// substr and substring
let fullName = "Phil Swift";
let firstName = fullName.substr(0,4); // same for substring
let lastName1 = fullName.substr(5,5);
let lastName2 = fullName.substring(5, 10);
console.log(firstName);
console.log(lastName1);
console.log(lastName2);

// pad and repeat
console.log(fullName.padStart(100, "!.$!"));
console.log(fullName.padEnd(200, "**,@"));
console.log(fullName.repeat(3));

// trim
fullName = "     Phil Swift      ";
console.log(fullName.repeat(2));
console.log(fullName.trim().repeat(2));

// split
let sentance = "Now that's a lotta damage!"
let wordList = sentance.split(" ");
for (let word of wordList) {
    console.log(word);
}

letters = firstName.split("");
for (let letter of letters) {
    console.log(letter);
}

// date
let today = new Date(); // "11/14/2024"   2024, 10, 14, 12, 24, 20, 500
console.log(today);

let nextMonth = new Date(today);
nextMonth.setMonth( today.getMonth() + 1);
console.log(nextMonth);

console.log(today.toDateString());
console.log(today.toTimeString());

// format
let val = 34245.56;
const us = new Intl.NumberFormat("en-US");
const de = new Intl.NumberFormat("de-DE");
console.log(us.format(val));
console.log(de.format(val));


const us2 = new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"});
console.log(us2.format(val));
const de2 = new Intl.NumberFormat("de-DE", {style:"currency", currency:"EUR"});
console.log(de2.format(val));


const dt = new Date();

const usTime = new Intl.DateTimeFormat("en-US");
const deTime = new Intl.DateTimeFormat("de-DE");

const result3a = usTime.format(dt);
const result3b = deTime.format(dt);

console.log(result3a);
console.log(result3b);
