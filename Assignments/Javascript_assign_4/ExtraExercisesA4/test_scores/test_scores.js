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
	const averageScoreText = document.createTextNode(`Average Score = ${average.toFixed(0)}`);
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
	const h2 = document.createElement("h2");
	const scoresText = document.createTextNode(`Scores`);
	h2.appendChild(scoresText);

	const divElement = document.createElement("div");
	divElement.setAttribute("id", "scores");
	$("#scores").parentNode.replaceChild(divElement, $("#scores"));
	$("#scores").appendChild(h2);

	for (let i = 0; i < names.length; i++) {
		let studentName = names[i];
		let studentScore = scores[i];

		const nameLabel = document.createElement("label");
		nameLabel.appendChild(document.createTextNode(`${studentName}`))

		const scoreLabel = document.createElement("label");
		scoreLabel.appendChild(document.createTextNode(`${studentScore}`))

		const br = document.createElement("br")

		h2.parentNode.appendChild(nameLabel);
		h2.parentNode.appendChild(scoreLabel);
		h2.parentNode.appendChild(br);
	}
}

const addScore = () => {
	let studentName = $("#name").value;
	let studentScore = parseInt($("#score").value);

	names[names.length] = studentName;
	scores[scores.length] = studentScore;

	$("#name").focus();
}

document.addEventListener("DOMContentLoaded", () => {
	$("#name").focus();
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});
