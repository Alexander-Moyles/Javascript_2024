"use strict"

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("a");
    const imageCache = [];
    for (let image of images) {
        let img = new Image();
        img.src = image.href;
        img.alt = image.title;

        imageCache[imageCache.length] = img;
    }
    let current = 1;

    const randomNumber = () => {
        let randomInt = Math.round(Math.random() * (imageCache.length - 1));
        return randomInt;
    }

    $("#press").addEventListener("click", () => {
        let number = randomNumber();
        while (number == current) {
            number = randomNumber();
        }
        $("#title").textContent = imageCache[number].alt;
        $("#cat").src = imageCache[number].src;
        current = number;
    })
});
