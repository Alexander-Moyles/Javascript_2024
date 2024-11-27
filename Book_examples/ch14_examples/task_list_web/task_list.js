"use strict";

const $ = (selector) => document.querySelector(selector);

document.addEventListener( "DOMContentLoaded", ()=> {

    $("#add_task").addEventListener("click", () => {   
        const textbox = $("#task");
        const task = textbox.value;
        if (task === "") {
            alert("Please enter a task.");
            textbox.focus();
        } else {
            // add task to web storage 
            let tasks = localStorage.myTasks || "";  // "" is default
            localStorage.myTasks = tasks.concat(task, "\n");

            // clear task text box and re-display tasks
            textbox.value = "";
            $("#task_list").value = localStorage.myTasks;
            textbox.focus();
        }
    });
    
    $("#clear_tasks").addEventListener("click", () => {
        localStorage.removeItem("myTasks");
        $("#task_list").value = "";
        $("#task").focus();
    }); 
    
    // display tasks on initial load
    $("#task_list").value = localStorage.myTasks;
    $("#task").focus();
});