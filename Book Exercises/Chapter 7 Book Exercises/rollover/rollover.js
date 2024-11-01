"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    var image1 = $("#image1");
    var image2 = $("#image2");
    const imageCache = [];


    // preload images
    let image = null;
    var links = $("#image_list").querySelectorAll("a");
    for (let link of links) {
        image = new Image();
        image.src = link.href;
        image.alt = link.title;
        // add image to array 
        imageCache[imageCache.length] = image;
    }

    // attach mouseover and mouseout events for each image
    image1.addEventListener("mouseover", () => {
        let image = imageCache[0];
        image1.src = image.src;
        image1.alt = image.alt;
    });
    image1.addEventListener("mouseout", () => {
        let image = imageCache[2];
        image1.src = image.src;
        image1.alt = image.alt;
    });
    image2.addEventListener("mouseover", () => {
        let image = imageCache[1];
        image2.src = image.src;
        image2.alt = image.alt;
    });
    image2.addEventListener("mouseout", () => {
        let image = imageCache[3];
        image2.src = image.src;
        image2.alt = image.alt;
    });           
});
