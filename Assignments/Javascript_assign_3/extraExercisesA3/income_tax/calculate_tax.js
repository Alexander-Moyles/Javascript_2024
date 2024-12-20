"use strict";
const $ = selector => document.querySelector(selector);

const processEntry = () => {
	const entry = parseInt($("#income").value);

	if (isNaN(entry) || entry <= 0) {
		alert(`Income must be greater than 0.`);
		$("#tax").value = "";
	}
	else {
		const tax = calculateTax(entry);
		$("#tax").value = tax.toFixed(2);
	}
	$("#income").focus();
};

const calculateTax = (income) => {
	// Probably redundant as it already is one,
	// but the assignment said that calculateTax()
	// should convert user input to an integer.
	income = parseInt(income);

	let taxAmount;
	if (income <= 9875) {
		taxAmount = (income * 0.10);
	}
	else if (income <= 40125) {
		let remainder = (income - 9875);
		taxAmount = ((remainder * 0.12) + 987.50);
	}
	else if (income <= 85525) {
		let remainder = (income - 40125);
		taxAmount = ((remainder * 0.22) + 4617.50);
	}
	else if (income <= 163300) {
		let remainder = (income - 85525);
		taxAmount = ((remainder * 0.24) + 14605.50);
	}
	else if (income <= 207350) {
		let remainder = (income - 163300);
		taxAmount = ((remainder * 0.32) + 33271.50);
	}
	else if (income <= 518400) {
		let remainder = (income - 207350);
		taxAmount = ((remainder * 0.35) + 47367.50);
	}
	else {
		let remainder = (income - 518400);
		taxAmount = ((remainder * 0.37) + 156235.00)
	}

	return taxAmount;
};

document.addEventListener("DOMContentLoaded", () => {
	$("#calculate").addEventListener("click", processEntry);
});
