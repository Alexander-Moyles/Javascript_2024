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

const getLastDayofMonth = currentMonth => {
	if (currentMonth === 0 || currentMonth === 2 || currentMonth === 4 || currentMonth === 6 || currentMonth === 7 || currentMonth === 9 || currentMonth === 11) {
		return 31;
	}
	else if (currentMonth === 3 || currentMonth === 5 || currentMonth === 8 || currentMonth === 10) {
		return 30;
	}
	else if (currentMonth === 1) {
		if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0) {
			return 29;
		}
		else {
			return 28;
		}
	}
};

document.addEventListener("DOMContentLoaded", ()=> {
	const today = new Date();
	const November2024 = new Date("Nov 2024");
	if (today.getMonth() == November2024.getMonth()) {
		console.log("True");
	}

	$("#month_year").textContent = `${getMonthText(today.getMonth())} ${today.getFullYear()}`;

	const days = getLastDayofMonth(today.getMonth());

	let i = 1;
	const daysOfMonth = [];
	while (i <= days) {
		daysOfMonth[daysOfMonth.length] = i;
		i++;
	}

	let tableHeader = "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>"
	let firstWeek = `<tr><td></td><td></td><td></td><td></td><td></td><td>${daysOfMonth[0]}</td><td>${daysOfMonth[1]}</td></tr>`;
	let secondWeek = `<tr><td>${daysOfMonth[2]}</td><td>${daysOfMonth[3]}</td><td>${daysOfMonth[4]}</td><td>${daysOfMonth[5]}</td><td>${daysOfMonth[6]}</td><td>${daysOfMonth[7]}</td><td>${daysOfMonth[8]}</td></tr>`;
	let thirdWeek = `<tr><td>${daysOfMonth[9]}</td><td>${daysOfMonth[10]}</td><td>${daysOfMonth[11]}</td><td>${daysOfMonth[12]}</td><td>${daysOfMonth[13]}</td><td>${daysOfMonth[14]}</td><td>${daysOfMonth[15]}</td></tr>`;
	let fourthWeek = `<tr><td>${daysOfMonth[16]}</td><td>${daysOfMonth[17]}</td><td>${daysOfMonth[18]}</td><td>${daysOfMonth[19]}</td><td>${daysOfMonth[20]}</td><td>${daysOfMonth[21]}</td><td>${daysOfMonth[22]}</td></tr>`;
	let fifthWeek = `<tr><td>${daysOfMonth[23]}</td><td>${daysOfMonth[24]}</td><td>${daysOfMonth[25]}</td><td>${daysOfMonth[26]}</td><td>${daysOfMonth[27]}</td><td>${daysOfMonth[28]}</td><td>${daysOfMonth[29]}</td></tr>`;

	$("#calendar").innerHTML = tableHeader + firstWeek + secondWeek + thirdWeek + fourthWeek + fifthWeek;
});
