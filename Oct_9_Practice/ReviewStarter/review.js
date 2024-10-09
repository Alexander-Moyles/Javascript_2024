"use strict";

const today = new Date();
const year = today.getFullYear();
const day = today.getDate();
const month = 1 + today.getMonth();


document.querySelector("#dateButton");
alert(`Today's date:\n${year}**${month}**${day}`);
