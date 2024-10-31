"use strict";

const $ = selector => document.querySelector(selector);

let timer = null;
const imageCache = [];

const toggleSlideShow = (evt) => {
    const caption = $("#caption");        // the h2 element for the caption
    const mainImage = $("#main_image");   // the img element for the show

    if (timer == null) {
        $("#slide_show").textContent = "Stop";
        
        // Start slide show
        let imageCounter = 0;
        timer = setInterval( () => { 
        // calculate the index for the current image
        imageCounter += 1;
        imageCounter %= imageCache.length;
        // get image from array
        let image = imageCache[imageCounter];
        // set HTML img and h2 with values from image object
        mainImage.src = image.src;
        mainImage.alt = image.alt;
        caption.textContent = image.alt;
       },
    1500);  // 1.5 second interval
    }
    else {
        $("#slide_show").textContent = "Start";
        clearInterval(timer);
        timer = null;
    }
};

document.addEventListener("DOMContentLoaded", () => {        
    // get all the <a> tags in the ul element
    const links = $("#image_list").querySelectorAll("a");
    
    // Process image links
    let image = null;
    for ( let link of links ) {
        // Preload image and copy title properties
        image = new Image();
        image.src = link.href;
        image.alt = link.title;
        // add image to array 
        imageCache[imageCache.length] = image;
    }

    const slideButton = $("#slide_show");
    slideButton.addEventListener("click", toggleSlideShow);
});
