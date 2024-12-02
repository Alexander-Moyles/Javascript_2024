"use strict"
const $ = (selector) => document.querySelector(selector);

const questions = ["Which of the 13 Primes first appeared in the Generation 2 Comic?", "Which of the 13 Primes is the true identity of the barkeep Maccaddam?"];
const questionOne = ["Prima", "The Fallen", "Liege Maximo", "Solus Prime", "c"];
const questionTwo = ["Amalgamous Prime", "Quintus Prime", "Micronus Prime", "Alchemist Prime", "d"];
const questionThree = ["", "", "", ""];
const questionFour = ["", "", "", ""];
const questionFive = ["", "", "", ""];
const questionSix = ["", "", "", ""];
const answers = [questionOne, questionTwo/*, questionThree, questionFour, questionFive, questionSix*/];

let currentQuestion = 1;
let totalQuestions = questions.length;
let points = 0;

const answerlist = document.querySelectorAll("button");

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
    if (answers[currentQuestion - 1][5] != null) {
        //TODO: image setting code
    }
};

const wrongHelper = () => {
    for(let i = 0; i < 4; i++) {
        if (answerlist[i].id != answers[currentQuestion - 1][4]) {
            $(`#${answerlist[i].id}`).addEventListener("click", () => {
                answerlist[i].classList.toggle("wrong");
                answerlist[i].parentElement.classList.toggle("wrong");
                correctHelper();
            });
        } //TODO: Disable buttons after answer is chosen
        else {
            $(`#${answerlist[i].id}`).addEventListener("click", () => {
            answerlist[i].classList.toggle("correct");
            answerlist[i].parentElement.classList.toggle("correct");
            points++;
            setStats();
            });
        }
    }
};

const correctHelper = () => {
    for(let i = 0; i < 4; i++) {
        if (answerlist[i].id == answers[currentQuestion - 1][4]) {
            answerlist[i].classList.toggle("correct");
            answerlist[i].parentElement.classList.toggle("correct");
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    //TODO: preload images
    setStats();
    nextQuestion();

    if (currentQuestion = 1) {
        wrongHelper();
    }

    
})
