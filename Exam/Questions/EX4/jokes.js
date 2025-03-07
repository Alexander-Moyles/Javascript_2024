"use strict"

const $ = (selector) => document.querySelector(selector);

//Why did the bicycle fall over?   Because it was two tired

//What did the triangle say to the circle?   You're pointless


let jokeList = [
    "What did the horse say after it tripped?",
    "What do you call an angry carrot?",
    "Where do polar bears keep their money?"
]

let punchLineList = [
    "Help! I've fallen and I can't giddyup!",
    "A steamed veggie",
    "In a snowbank"
]

const randomNumber = () => {
    let randomInt = Math.round(Math.random() * (jokeList.length - 1));
    return randomInt;
}

document.addEventListener("DOMContentLoaded", ()=> {
    $("#add").addEventListener("click", () => { //Checking to make sure both fields have text in them to prevent adding jokes with no joke and/or puchline.
        if ($("#joke").value != "" && $("#punchline").value != "") {
            jokeList[jokeList.length] = $("#joke").value;
            punchLineList[punchLineList.length] = $("#punchline").value;
            $("#joke").value = "";
            $("#punchline").value = "";
        }
    });

    $("#tell").addEventListener("click", () => {
        const number = randomNumber();
        $("#joke_text").textContent = jokeList[number];
        $("#tell").disabled = true;
        setTimeout(() => {
            $("#joke_text").textContent = punchLineList[number];
            $("#tell").disabled = false;
        }, 3000);
    })
});
