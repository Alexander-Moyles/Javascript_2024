"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("a");

    const imageCache = [];
    let img;
    for (let image of images) {
        img = new Image();
        img.src = image.href;
        img.title = image.title;

        imageCache[imageCache.length] = img;
    }

    $("#deer").addEventListener("click", () => {
        $("#image1").src = imageCache[1].src;
        $("#caption").textContent = imageCache[1].title;
    });
    $("#release").addEventListener("click", () => {
        $("#image1").src = imageCache[0].src;
        $("#caption").textContent = imageCache[0].title;
    });
    $("#hero").addEventListener("click", () => {
        $("#image1").src = imageCache[2].src;
        $("#caption").textContent = imageCache[2].title;
    });
});
