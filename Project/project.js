"use strict"
const $ = (selector) => document.querySelector(selector);

// Only ten questions will actually be used, the extras are here for some added variety
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
        "Solus Prime", "Liege Maximo", "Micronus Prime", "Vector Prime", "a", 3],
    ["Which of the 13 Primes does this symbol represent?",
        "Solus Prime", "The Fallen", "Micronus Prime", "Prima", "c", 2],
    ["What is the name of Prima Prime's Sword?",
        "The Cyber Calibre", "The Vorpal Blade", "Rhisling", "The Star Saber", "d", 6],
    ["Which of the 13 Primes was killed by Galvatron, and the first prime to be killed by a non-prime in the 2005 IDW Comic run?",
        "Nexus Prime", "Alchemist Prime", "Solus Prime", "Micronus Prime", "a"],
    ["Which of the 13 Primes typically holds the Requiem Blaster?",
        "Onyx Prime", "Quintus Prime", "The Fallen", "Alpha Trion", "c", 7],
    ["Which of these characters is not one of the 13 in most Transformers media",
        "Amalgamous Prime", "Liege Maximo", "Alpha Trion", "Logos Prime", "d"],
    ["In most Transformers media, which of the 13 is usually still found on Cybertron in the modern day?",
        "Micronus Prime", "Alpha Trion", "Prima", "Solus Prime", "b"
    ]
];

// Randomizing the question order
const shuffleQuestions = (array) => {
    for (let i = (array.length - 1); i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
const questions = shuffleQuestions(questionList);

let currentQuestion = 1;
let totalQuestions = questions.length;
let points = 0;

const answerlist = document.querySelectorAll("button");

const setStats = () => {
    $("#points").textContent = points;
    $("#question_count").textContent = `${currentQuestion} / 10`;
};

const correctHelper = () => {
    for(let i = 0; i < 4; i++) {
        if (answerlist[i].id == questions[currentQuestion - 1][5]) {
            answerlist[i].classList.toggle("correct", true);
            answerlist[i].parentElement.classList.toggle("correct", true);
        }
    }
};

const buttonDisabler = () => {
    for(let i = 0; i < 4; i++) {
        answerlist[i].disabled = true;
    }
};

const buttonEnabler = () => {
    for(let i = 0; i < 4; i++) {
        answerlist[i].disabled = false;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("a");
    const imageCache = [];
    let img;
    for (let image of images) {
        img = new Image();
        img.src = image.href;
        img.alt = image.alt;

        imageCache[imageCache.length] = img;
    };

    const nextQuestion = (result) => {
        currentQuestion++;
        if (currentQuestion < 11) {
            let timer = 5;
            const countDown = () => {
                $("#question").firstChild.nextElementSibling.textContent = `${result} Next Question in ${timer}...`;
                timer--;
            };
            const zero = () => {
                for(let i = 0; i < 4; i++) {
                    answerlist[i].classList.toggle("wrong", false);
                    answerlist[i].parentElement.classList.toggle("wrong", false);
                    answerlist[i].classList.toggle("correct", false);
                    answerlist[i].parentElement.classList.toggle("correct", false);
                    nextQuestionHelper();
                    setStats();
                }
            };
            
            countDown();
            setTimeout(countDown, 1000);
            setTimeout(countDown, 2000);
            setTimeout(countDown, 3000);
            setTimeout(countDown, 4000);
            setTimeout(zero, 5000);
        }
        else {
            clearInterval(answerChecker);
            let timer = 3;
            const countDown = () => {
                $("#question").firstChild.nextElementSibling.textContent = `${result} Quiz Ending in ${timer}...`;
                timer--;
            };
            setTimeout(countDown, 1000);
            setTimeout(countDown, 2000);
            setTimeout(countDown, 3000);
            quizEnd();
        }
    };

    const nextQuestionHelper = () => {
        $("#question").firstChild.nextElementSibling.textContent = questions[currentQuestion - 1][0];
        $("#a").textContent = questions[currentQuestion - 1][1];
        $("#b").textContent = questions[currentQuestion - 1][2];
        $("#c").textContent = questions[currentQuestion - 1][3];
        $("#d").textContent = questions[currentQuestion - 1][4];
        if (!isNaN(questions[currentQuestion - 1][6])) {
            $("#picture").src = `${imageCache[questions[currentQuestion - 1][6]].src}`;
            $("#picture").alt = `${imageCache[questions[currentQuestion - 1][6]].alt}`;
        }
        else {
            $("#picture").src = "images/none.png";
            setStats();
        }
        buttonEnabler();
    };

    let answer = "";

    $("#a").addEventListener("click", () => {
        answer = "a";
    });
    $("#b").addEventListener("click", () => {
        answer = "b";
    });
    $("#c").addEventListener("click", () => {
        answer = "c";
    });
    $("#d").addEventListener("click", () => {
        answer = "d";
    });

    const answerChecker = setInterval(() => {
        if (answer != "") {
            if (answer != questions[currentQuestion - 1][5]) {
                $(`#${answer}`).classList.toggle("wrong", true);
                $(`#${answer}`).parentElement.classList.toggle("wrong", true);
                correctHelper();
                nextQuestion("Wrong!");
                answer = "";
            }
            else {
                points++;
                setStats();
                correctHelper();
                nextQuestion("Correct!");
                answer = "";
            }
        }
    }, 90);

    nextQuestionHelper();
    setStats();

    const quizEnd = () => {
        sessionStorage.setItem("score", points);
        setTimeout(location.replace("quiz_end.html"), 3000);
    };
});
