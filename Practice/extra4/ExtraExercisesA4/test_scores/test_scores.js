"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const addScore = () => {
	$("#name").nextElementSibling.textContent = "";

	let isValid = true;

	if ($("#name").value == "") {
		$("#name").nextElementSibling.textContent = "Please enter a name";
		isValid = false;
	}

	if (isNaN(parseInt($("#score").value)) || parseInt($("#score").value) > 100 || parseInt($("#score").value) < 0) {
		$("#score").nextElementSibling.textContent = "Score must be between 0 and 100";
		isValid = false;
	}
	
	if (isValid) {
		names[names.length] = $("#name").value;
		scores[scores.length] = parseInt($("#score").value);
	}
}

const displayResults = () => {
	let avg = 0;
	for (let score of scores) {
		avg += score;
	}
	const averageScore = (avg / scores.length);

	let high = 0;
	let highScore;
	for (let i = 0; i < scores.length; i++) {
		if (scores[i] > high) {
			high = scores[i];
			highScore = i;
		}
	}
	$("#results").innerHTML = "";

	const h2 = document.createElement("h2");
	const resultsText = document.createTextNode(`Results`);
	h2.appendChild(resultsText);
	$("#results").appendChild(h2);

	const p = document.createElement("p");
	const averageText = document.createTextNode(`Average Score = ${averageScore}`);
	p.appendChild(averageText);
	$("#results").appendChild(p);

	const p2 = document.createElement("p");
	const highScoreText = document.createTextNode(`High Score = ${names[highScore]} with a score of ${scores[highScore]}`);
	p2.appendChild(highScoreText);
	$("#results").appendChild(p2);
}

const displayScores = () => {
	$("#scores").innerHTML = "";

	const h2 = document.createElement("h2");
	const resultsText = document.createTextNode(`Scores`);
	h2.appendChild(resultsText);
	$("#scores").appendChild(h2);

	for (let i = 0; i < scores.length; i++) {
		const p = document.createElement("p");
		const averageText = document.createTextNode(`${names[i]} - ${scores[i]}`);
		p.appendChild(averageText);
		$("#scores").appendChild(p);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});
