"use strict"

const questions = ["Which of the 13 Primes first appeared in the Generation 2 Comic?"];
const questionOne = ["Prima", "The Fallen", "Liege Maximo", "Solus Prime"];
const questionTwo = ["", "", "", ""];
const questionThree = ["", "", "", ""];
const questionFour = ["", "", "", ""];
const questionFive = ["", "", "", ""];
const answers = [questionOne, questionTwo, questionThree, questionFour, questionFive];

let currentQuestion = 1;
let totalQuestions = questions.length;
let points = 0;

const $ = (selector) => document.querySelector(selector);

const setStats = () => {
    $("#points").textContent = points;
    $("#question_count").textContent = `${currentQuestion} / ${totalQuestions}`;
};

const nextQuestion = () => {
    $("#question").firstChild.nextElementSibling.textContent = questions[currentQuestion - 1];
    $("#a").textContent = answers[currentQuestion - 1][0];
    $("#b").textContent = answers[currentQuestion - 1][1];
    $("#c").textContent = answers[currentQuestion - 1][2];
    $("#d").textContent = answers[currentQuestion - 1][3];
};

document.addEventListener("DOMContentLoaded", () => {
    setStats();
    nextQuestion();
});
