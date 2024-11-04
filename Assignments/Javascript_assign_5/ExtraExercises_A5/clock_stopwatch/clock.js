"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let ampm = "AM"; // set default value
    
    // correct hours and AM/PM value for display
    if (hours > 12) { // convert from military time
        hours = hours - 12;
        ampm = "PM";
    } else { // adjust 12 noon and 12 midnight
         switch (hours) {
            case 12: // noon
                ampm = "PM";
                break;
            case 0:  // midnight
                hours = 12;
                ampm = "AM";
        }
    }
    
    $("#hours").textContent = hours;
    $("#minutes").textContent = padSingleDigit(now.getMinutes());
    $("#seconds").textContent = padSingleDigit(now.getSeconds());
    $("#ampm").textContent = ampm;
};


//global stop watch timer variable and elapsed time object
let stopwatchTimer = null;
let elapsedMinutes = 0;
let elapsedSeconds = 0;
let elapsedMilliseconds = 0;


// Reducing code duplication
const stopTimer = () => {
    if (stopwatchTimer != null) {
        clearInterval(stopwatchTimer);
        stopwatchTimer = null;
    }
};

const timerDisplay = (elapsedMinutes, elapsedSeconds, elapsedMilliseconds) => {
    $("#s_minutes").textContent = padSingleDigit(elapsedMinutes);
    $("#s_seconds").textContent = padSingleDigit(elapsedSeconds);
    $("#s_ms").textContent = elapsedMilliseconds.toString().padStart(3, "0");
}

// Stopwatch
const tickStopwatch = () => {    
    // increment milliseconds by 10 milliseconds
    elapsedMilliseconds += 10;
    
    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    if (elapsedMilliseconds == 1000) {
        elapsedMilliseconds = 0;
        elapsedSeconds += 1;
    }
    
    // if seconds total 60, increment minutes by one and reset seconds to zero
    if (elapsedSeconds == 60) {
        elapsedSeconds = 0;
        elapsedMinutes += 1;
    }
    
    //display new stopwatch time
    timerDisplay(elapsedMinutes, elapsedSeconds, elapsedMilliseconds);
};

// event handler functions
const startStopwatch = evt => {
    evt.preventDefault;
    if (stopwatchTimer == null) {
        tickStopwatch();
        stopwatchTimer = setInterval(tickStopwatch, 10);
    }
};

const stopStopwatch = evt => {
    evt.preventDefault;
    stopTimer();
};

const resetStopwatch = evt => {
    evt.preventDefault;
    stopTimer();
        
    elapsedMinutes = 0;
    elapsedSeconds = 0;
    elapsedMilliseconds = 0;
    timerDisplay(elapsedMinutes, elapsedSeconds, elapsedMilliseconds);
};

document.addEventListener("DOMContentLoaded", () => {
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
	
    $("#start").addEventListener("click", startStopwatch);
    $("#stop").addEventListener("click", stopStopwatch);
    $("#reset").addEventListener("click", resetStopwatch);
});
