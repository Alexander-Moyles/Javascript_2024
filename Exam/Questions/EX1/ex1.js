"use strict"

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const fullName = prompt("Enter the full name");
    const email = prompt("Enter the email");

    const today = new Date();
    const day = today.getDate();
    const month = (today.getMonth() + 1);
    const year = (today.getFullYear());

    const name = fullName.split(" ");
    const spam = `Dear ${name[0]}\nEric's Snake Game is being released in two weeks time!\nWe have registered your email: ` + 
        `${email} and will be sending you updates!\n${day}/${month}/${year}\n\nSincerely,\n  Eric's Snake Game Team`
    alert(spam);
});
