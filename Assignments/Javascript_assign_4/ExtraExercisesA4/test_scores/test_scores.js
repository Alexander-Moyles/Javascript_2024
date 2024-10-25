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
	const resultsText = document.createTextNode(`Results`);
	h2.appendChild(resultsText);

	const pAverage = document.createElement("p");
	const averageScoreText = document.createTextNode(`Average Score = ${average}`);
	pAverage.appendChild(averageScoreText);
	
	const pHighScore = document.createElement("p");
	const highScoreText = document.createTextNode(`High score = ${topStudent} with a score of ${highestScore}`);
	pHighScore.appendChild(highScoreText);

	const divElement = document.createElement("div");
	divElement.setAttribute("id", "results");
	$("#results").parentNode.replaceChild(divElement, $("#results"));
	$("#results").appendChild(h2);
	
	// Different ways to append to #results:
	h2.parentNode.appendChild(pAverage);
	$("#results").appendChild(pHighScore);
};

const displayScores = () => {
	console.log("displayScore")
}

const addScore = () => {
	console.log("addScore")
}

document.addEventListener("DOMContentLoaded", () => {
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});
