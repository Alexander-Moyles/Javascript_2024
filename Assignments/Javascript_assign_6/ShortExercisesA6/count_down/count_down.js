"use strict";

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => { 
    $("#countdown").addEventListener("click", () => {
        const eventName = $("#event").value;
        const eventDate = $("#date").value;  
        const messageLbl = $("#message");  
        
        // make sure user entered task and event date 
        if (eventName.length == 0 || eventDate.length == 0) {
            messageLbl.textContent = "Please enter both a name and a date.";
            return;
        }  
      
        // make sure event date string has two slashes 
        const dateParts = eventDate.split("/");
        if (dateParts.length != 3) {   
            messageLbl.textContent = "Please enter the date in MM/DD/YYYY format.";
            return;
        }
        // make sure event date string has a 4-digit year
        const year = eventDate.substring(eventDate.length - 4); 
        if (isNaN(year)) {
            messageLbl.textContent = "Please enter the date in MM/DD/YYYY format.";
            return;
        }

        const month = dateParts[0];
        const day = dateParts[1];

        // make sure days are valid
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            if (day > 31) {
                messageLbl.textContent = `Month ${month} does not have ${day} days.`
                return;
            }
        }
        else if (month == 4 || month == 6 || month == 9 || month == 11) {
            if (day > 30) {
                messageLbl.textContent = `Month ${month} does not have ${day} days.`
                return;
            }
        }
        else if (month == 2) {
            if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0) {
                if (day > 29) {
                    messageLbl.textContent = `Month ${month} does not have ${day} days.`
                    return;
                }
            }
            else {
                if (day > 28) {
                    messageLbl.textContent = `Month ${month} does not have ${day} days.`
                    return;
                }
            }
        }

        // make sure months are valid
        if (month > 12 || month < 1) {
            messageLbl.textContent = "Please enter a valid month (1-12)"
            return;
        }

        // convert event date string to Date object and check for validity
        let date = new Date(eventDate);
        if (date == "Invalid Date") {
            messageLbl.textContent = "Please enter the date in MM/DD/YYYY format." ;
            return;
        }

        // capitalize each word of event name
        let formattedName = "";
        const words = eventName.split(" ");
        for (const i in words) {
            const firstLetter = words[i].substring(0,1).toUpperCase();
            const word = firstLetter + words[i].substring(1).toLowerCase();
            formattedName += word.padEnd(word.length + 1);
        } 
        formattedName = formattedName.trimEnd();     

        // calculate days
        const today = new Date();
        const msFromToday = date.getTime() - today.getTime();
        const msForOneDay = 24 * 60 * 60 * 1000; // hrs * mins * secs * milliseconds  
        let daysToDate = Math.ceil( msFromToday / msForOneDay ); 

        // create and display message 
        let msg = "";
        date = date.toDateString();
        if (daysToDate == 0) {
            msg = `Hooray! Today is ${formattedName}! (${date})`;
        }
        else if (daysToDate > 0) {
            msg = `${daysToDate} day(s) until ${formattedName}! (${date})`;
        }
        else if (daysToDate < 0) {
            daysToDate = Math.abs(daysToDate);
            msg = `${formattedName} happened ${daysToDate} day(s) ago. 
                  (${date})`;
        }
        messageLbl.textContent = msg;
    });
    
    $("#event").focus();
});