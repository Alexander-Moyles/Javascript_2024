"use strict";

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded",  () => {
	$("#email").textContent = sessionStorage.getItem("email");
	$("#phone").textContent = sessionStorage.getItem("phone");
	$("#zip").textContent = sessionStorage.getItem("zip");
	$("#dob").textContent = sessionStorage.getItem("dob");
	
	$("#back").addEventListener("click", () => {
		history.back();
	}); // end of click()
	
}); // end of ready()
