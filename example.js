// node example.js
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
