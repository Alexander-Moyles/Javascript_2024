"use strict"
const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const score = sessionStorage.getItem("score");
    $("#final_score").textContent = `You scored ${score} points out of 10`;
    if (score > 9) {
        $("#picture").src = "images/Omega_Prime_BoxArt.png";
        $("#caption").textContent = `! - OMEGA LEVEL VICTORY - !`;
        $("#message").textContent = `You got every question right!! Did you read the Covenant of Primus before this?`;
        $("#caption").classList.toggle("high_score", true);
        $("#message").classList.toggle("high_score", true);
    }
    else if (score > 5) {
        $("#picture").src = "images/Optimus_thumbs_up.png";
        $("#caption").textContent = `"Good work, Autobot!"`;
        $("#message").textContent = `You correctly answered the majority of the questions, good job!`;
        $("#caption").classList.toggle("good_score", true);
        $("#message").classList.toggle("good_score", true);
    }
    else if (score > 1) {
        $("#picture").src = "images/Megatron_yelling.png";
        $("#caption").textContent = `"This is YOUR fault Starscream!"`;
        $("#message").textContent = `You didn't get every question right, but they weren't all wrong either! Consider trying again with what you know now!`;
        $("#caption").classList.toggle("low_score", true);
        $("#message").classList.toggle("low_score", true);
    }
    else {
        $("#picture").src = "images/Thefallen2.jpg";
        $("#caption").textContent = `"It's been a long time."`;
        $("#message").textContent = `You may have done poorly, but learning from faliure is how you rise again.`;
        $("#caption").classList.toggle("no_score", true);
        $("#message").classList.toggle("no_score", true);
    }

    $("#retry").addEventListener("click", () => {
        location.replace("index.html");
    })
});
