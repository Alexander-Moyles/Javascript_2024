"use strict"
const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const score = sessionStorage.getItem("score");
    $("#final_score").textContent = `You scored ${score} points out of 10`;
    if (score > 9) {
        $("#picture").src = "images/Omega_Prime_BoxArt.png";
        $("#caption").textContent = `""`;
        $("#message").textContent = ``;
        $("#caption").classList.toggle("high_score", true);
        $("#message").classList.toggle("high_score", true);
    }
    else if (score > 5) {
        $("#picture").src = "images/Optimus_thumbs_up.png";
        $("#caption").textContent = `"Good work, Autobot!"`;
        $("#message").textContent = ``;
        $("#caption").classList.toggle("good_score", true);
        $("#message").classList.toggle("good_score", true);
    }
    else if (score > 1) {
        $("#picture").src = "images/Megatron_yelling.png";
        $("#caption").textContent = `"This is YOU'RE fault Starscream!"`;
        $("#message").textContent = ``;
        $("#caption").classList.toggle("low_score", true);
        $("#message").classList.toggle("low_score", true);
    }
    else {
        $("#picture").src = "";
        $("#caption").textContent = `""`;
        $("#message").textContent = ``;
    }
});