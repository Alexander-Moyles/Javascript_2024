"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#image_rollovers img");

    // process each img tag
    for (let image of images) {
        const oldURL = image.src;
        const newURL = image.id;

        // preload rollover image
        const newImage = new Image();
        newImage.src = newURL;

        const setNew = () => {image.src = newImage.src;};
        const setOld = () => {image.src = oldURL;};
        
        // set up event handlers for hovering an image
        image.addEventListener("mouseover", () => {
            setNew();
        });
        image.addEventListener("mouseout", () => {
            setOld();
        });

        // set to rollover images 1 second after page loads
        setTimeout(setNew, 1000);
        // set to original images 2 seconds after page loads
        setTimeout(setOld, 2000);
    }
});
