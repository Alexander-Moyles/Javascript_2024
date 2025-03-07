"use strict";

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const imageCache = [];

    const images = document.querySelectorAll("a");

    let newImage;
    for (let image of images) {
        newImage = new Image();
        newImage.src = image.href;
        newImage.alt = image.title;

        imageCache[imageCache.length] = newImage;
    }

    let currentImage = 0;
    const imageDisplay = () => {
        $("#display").src = imageCache[currentImage].src;
        $("#description").textContent = imageCache[currentImage].alt;
    }
    imageDisplay();

    const nextImage = () => {
        currentImage++;
        if (currentImage >= imageCache.length) {
            currentImage = 0;
        }
        imageDisplay();
    }

    $("#next_button").addEventListener("click", () => {
        nextImage();
    });

    let slideshow = null;

    $("#slideshow").addEventListener("click", () => {
        if ($("#slideshow").textContent == "Start Slideshow") {
            slideshow = setInterval(nextImage, 1000);
            $("#slideshow").textContent = "Stop Slideshow"
            $("#next_button").disabled = true;
            $("#last_button").disabled = true;
        }
        else {
            clearInterval(slideshow);
            $("#slideshow").textContent = "Start Slideshow"
            $("#next_button").disabled = false;
            $("#last_button").disabled = false;
        }
    });

    $("#last_button").addEventListener("click", () => {
        currentImage--;
        if (currentImage < 0) {
            currentImage = (imageCache.length - 1);
        }
        imageDisplay();
    });
});
