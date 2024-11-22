"use strict";

const $ = (selector) => document.querySelector(selector);

const getMonthText = currentMonth => {
	if (currentMonth === 0) { return "January"; }
	else if (currentMonth === 1) { return "February"; }
	else if (currentMonth === 2) { return "March"; }
	else if (currentMonth === 3) { return "April"; }
	else if (currentMonth === 4) { return "May"; }
	else if (currentMonth === 5) { return "June"; }
	else if (currentMonth === 6) { return "July"; }
	else if (currentMonth === 7) { return "August"; }
	else if (currentMonth === 8) { return "September"; }
	else if (currentMonth === 9) { return "October"; }
	else if (currentMonth === 10) { return "November"; }
	else if (currentMonth === 11) { return "December"; }
};

const getLastDayofMonth = currentDate => {
	if (currentDate.getMonth() === 0 || currentDate.getMonth() === 2 || currentDate.getMonth() === 4 || currentDate.getMonth() === 6 || currentDate.getMonth() === 7 || currentDate.getMonth() === 9 || currentDate.getMonth() === 11) {
		return 31;
	}
	else if (currentDate.getMonth() === 3 || currentDate.getMonth() === 5 || currentDate.getMonth() === 8 || currentDate.getMonth() === 10) {
		return 30;
	}
	else if (currentDate.getMonth() === 1) {
		if (parseInt(currentDate.getFullYear()) % 400 == 0 || parseInt(currentDate.getFullYear()) % 100 != 0 && parseInt(currentDate.getFullYear()) % 4 == 0) {
			return 29;
		}
		else {
			return 28;
		}
	}
};

document.addEventListener("DOMContentLoaded", ()=> {
	const today = new Date("Dec 2024");
	const currentMonth = new Date(`${getMonthText(today.getMonth())} 1 ${today.getFullYear()}`);

	$("#month_year").textContent = `${getMonthText(today.getMonth())} ${today.getFullYear()}`;

	const days = getLastDayofMonth(today);

	let i = 1;
	const daysOfMonth = [];
	while (i <= days) {
		daysOfMonth[daysOfMonth.length] = i;
		i++;
	}

	const week1 = [];
	const week2 = [];
	const week3 = [];
	const week4 = [];
	const week5 = [];
	
	let currentDay = 0;
	// First week
	let j = 0;
	while (j < currentMonth.getDay()) {
		week1[week1.length] = "";
		j++;
	}
	while (week1.length < 7) {
		week1[week1.length] = daysOfMonth[currentDay];
		currentDay++;
	}
	// Second week
	while (week2.length < 7) {
		week2[week2.length] = daysOfMonth[currentDay];
		currentDay++;
	}
	// Third week
	while (week3.length < 7) {
		week3[week3.length] = daysOfMonth[currentDay];
		currentDay++;
	}
	// Fourth week
	while (week4.length < 7) {
		week4[week4.length] = daysOfMonth[currentDay];
		currentDay++;
	}
	// Fifth week
	while (currentDay < daysOfMonth.length) {
		week5[week5.length] = daysOfMonth[currentDay];
		currentDay++;
	}
	while (week5.length < 7) {
		week5[week5.length] = "";
	}

	let tableHeader = "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>"
	let firstWeek = `<tr><td>${week1[0]}</td><td>${week1[1]}</td><td>${week1[2]}</td><td>${week1[3]}</td><td>${week1[4]}</td><td>${week1[5]}</td><td>${week1[6]}</td></tr>`;
	let secondWeek = `<tr><td>${week2[0]}</td><td>${week2[1]}</td><td>${week2[2]}</td><td>${week2[3]}</td><td>${week2[4]}</td><td>${week2[5]}</td><td>${week2[6]}</td></tr>`;
	let thirdWeek = `<tr><td>${week3[0]}</td><td>${week3[1]}</td><td>${week3[2]}</td><td>${week3[3]}</td><td>${week3[4]}</td><td>${week3[5]}</td><td>${week3[6]}</td></tr>`;
	let fourthWeek = `<tr><td>${week4[0]}</td><td>${week4[1]}</td><td>${week4[2]}</td><td>${week4[3]}</td><td>${week4[4]}</td><td>${week4[5]}</td><td>${week4[6]}</td></tr>`;
	let fifthWeek = `<tr><td>${week5[0]}</td><td>${week5[1]}</td><td>${week5[2]}</td><td>${week5[3]}</td><td>${week5[4]}</td><td>${week5[5]}</td><td>${week5[6]}</td></tr>`;

	$("#calendar").innerHTML = tableHeader + firstWeek + secondWeek + thirdWeek + fourthWeek + fifthWeek;
});
