"use strict";

document.addEventListener("DOMContentLoaded", () => { //checks to ensure html is loaded first
    document.querySelector("#button1").addEventListener( "click", () => {
        const today = new Date();
        const year = today.getFullYear();
        let day = today.getDate().toString();
        let month = (today.getMonth() + 1).toString();

        alert(`Today's date:\n${year}**${month.padEnd(2,0)}**${day.padEnd(2,0)}`);
    })
    document.querySelector("#firstName").addEventListener( "dblclick", (event) => {
        event.currentTarget.value = "";
        // or document.querySelector("#firstName").value = "";
    })
});
