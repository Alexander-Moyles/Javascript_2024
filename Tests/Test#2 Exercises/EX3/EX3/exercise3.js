"use strict"

const $ = selector => document.querySelector(selector);

let currentImage = 0;
let slideShow;

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

    const nextImage = () => {
        currentImage += 1;
        if (currentImage == imageCache.length) {
            currentImage = 0;
        }
        $("#image").src = imageCache[currentImage].src;
        $("#caption").textContent = imageCache[currentImage].title;
    }

    $("#start").addEventListener("click", () => {
        if ($("#start").value == "Start") {
            slideShow = setInterval(nextImage, 50);
            $("#start").value = "Stop"
            $("#title").textContent = "Hockey Card Prize Machine";
            
        }
        else {
            clearInterval(slideShow);
            $("#start").value = "Start"
            $("#title").textContent = "YOU WIN!";
        }
    });

    $("#reset").addEventListener("click", () => {
        if ($("#start").value == "Start") {
            $("#title").textContent = "Hockey Card Prize Machine";
            $("#caption").textContent = "???????";
            $("#image").src = "images/question.jpg"
        }
    });
});
