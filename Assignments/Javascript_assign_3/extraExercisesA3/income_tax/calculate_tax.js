"use strict";
const $ = selector => document.querySelector(selector);

const processEntry = () => {
	const entry = parseInt($("#income").value);

	if (isNaN(entry) || entry <= 0) {
		alert(`Income must be greater than 0.`);
	}
	else {
		const taxAmount = calculateTax(entry);
	}
	$("#income").focus();
};

const calculateTax = (income) => {
	if (income > 0) {
		if (income < 9875) {
			
		}
	}
};

document.addEventListener("DOMContentLoaded", () => {
	$("#calculate").addEventListener("click", processEntry);
});
