"use strict"
const $ = (selector) => document.querySelector(selector);

const questionList = [
    ["Which of the 13 Primes first appeared in the Generation 2 Comic?",
        "Prima", "The Fallen", "Liege Maximo", "Solus Prime", "c"],
    ["Which of the 13 Primes is the true identity of the barkeep Maccadam?",
        "Amalgamous Prime", "Quintus Prime", "Micronus Prime", "Alchemist Prime", "d", 0],
    ["Who was the third of the original 13 Primes?",
        "Alpha Trion", "Vector Prime", "Onyx Prime", "The Arisen", "a"],
    ["Which of the Primes is this?",
        "The Fallen", "Micronus Prime", "Solus Prime", "Onyx Prime", "d", 1],
    ["What is The Fallen's true name?",
        "Shockwave", "Megatronus", "Jetfire", "Twinferno", "b", 4],
    ["Which of these Autobots does the Mistress of Flame believe to be the reincarnated Thirteenth Prime/The Arisen?",
        "Bumblebee", "Optimus Prime", "Windblade", "Skytop", "b", 5],
    ["Which of the 13 Primes does this symbol represent?",
        "Solus Prime", "Liege Maximo", "Micronus Prime", "Vector Prime", "a", 3
    ],
    ["Which of the 13 Primes does this symbol represent?",
        "Solus Prime", "The Fallen", "Micronus Prime", "Prima", "c", 2
    ],
    ["What is the name of Prima Prime's Sword?",
        "The Cyber Calibre", "The Vorpal Blade", "Rhisling", "The Star Saber", "d", 6
    ],
    ["Which of the 13 Primes was killed by Galvatron, and the first prime to be killed by a non-prime in the 2005 IDW Comic run?",
        "Nexus Prime", "Alchemist Prime", "Solus Prime", "Micronus Prime", "a"
    ]
];

const shuffleQuestions = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
const questions = shuffleQuestions(questionList);
console.log(questions);

let currentQuestion = 1;
let totalQuestions = questions.length;
let points = 0;

const answerlist = document.querySelectorAll("button");

const setStats = () => {
    $("#points").textContent = points;
    $("#question_count").textContent = `${currentQuestion} / ${totalQuestions}`;
};

const wrongHelper = () => {
    for(let i = 0; i < 4; i++) {
        if (answerlist[i].id != questions[currentQuestion - 1][5]) {
            $(`#${answerlist[i].id}`).addEventListener("click", () => {
                answerlist[i].classList.toggle("wrong");
                answerlist[i].parentElement.classList.toggle("wrong");
                correctHelper();
            });
        } //TODO: Disable buttons after pressing
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
        if (answerlist[i].id == questions[currentQuestion - 1][5]) {
            answerlist[i].classList.toggle("correct");
            answerlist[i].parentElement.classList.toggle("correct");
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("a");
    const imageCache = [];
    let img;
    for (let image of images) {
        img = new Image();
        img.src = image.href;
        img.alt = image.alt;

        imageCache[imageCache.length] = img;
    }

    const nextQuestion = () => {
        $("#question").firstChild.nextElementSibling.textContent = questions[currentQuestion - 1][0];
        $("#a").textContent = questions[currentQuestion - 1][1];
        $("#b").textContent = questions[currentQuestion - 1][2];
        $("#c").textContent = questions[currentQuestion - 1][3];
        $("#d").textContent = questions[currentQuestion - 1][4];
        if (questions[currentQuestion - 1][6] != null) {
            $("#picture").src = `${imageCache[questions[currentQuestion - 1][6]].src}`;
            $("#picture").alt = `${imageCache[questions[currentQuestion - 1][6]].alt}`;
        }
        else {
            $("#picture").src = "";
        }
    };

    setStats();
    nextQuestion();

    if (currentQuestion = 1) {
        wrongHelper();
    }
})
