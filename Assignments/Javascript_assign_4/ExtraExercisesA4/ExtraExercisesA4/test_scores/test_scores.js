"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const displayResults = () => {
	let count = 0;
	let average = 0;
	let highestScore = 0;
	let topStudent;

	for (let i = 0; i < scores.length; i++) {
		average += scores[i];
	}
	average = (average / scores.length);

	while (count < scores.length) {
		if (scores[count] > highestScore) {
			highestScore = scores[count];
			topStudent = names[count];
		}
		count++;
	}
	const h2 = document.createElement("h2");
	const p = document.createElement("p");

	$("#results").appendChild(h2);	
	$("#results").firstChild.textContent = `Results`

	$("#results").appendChild(p);
	$("#results").firstChild.nextElementSibling.textContent = `Average Score = ${average}`

	//$("#results").appendChild(p);
	//$("#results").firstChild.nextElementSibling.nextElementSibling.textContent = `High score = ${topStudent} with a score of ${highestScore}`;
};

const addScore = () => {
	console.log("addScore")
}

const displayScores = () => {
	console.log("displayScore")
}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});
