"use strict";
const $ = selector => document.querySelector(selector);

// the event handler for the click event of each h2 element
const toggle = evt => {
	const h2Element = evt.currentTarget;               // get the clicked h2
	const divElement = h2Element.nextElementSibling;   // get h2's sibling div

	
	// Before I rechecked the question to see it required an array, I found this solution.
	// Mostly left it here as I liked how it was shorter, simpler code which accomplished the same effect.
	// Still works if you uncomment it and comment out everything between it and the empty comment below.
	/*
	const h2Elements = document.querySelectorAll("h2.minus");
	for (let h2 of h2Elements) {
		if (h2 != h2Element) {
			h2.classList.toggle("minus")
			h2.nextElementSibling.classList.toggle("open")
		}
	}
	*/

	const h2Elements = document.querySelectorAll("#faqs h2");
	let elementArray = [];
	for (let h2 of h2Elements) {
		elementArray[elementArray.length] = h2
	}

	for (let h2 of elementArray) {
		if (h2 != h2Element) {
			h2.removeAttribute("class");
			h2.nextElementSibling.removeAttribute("class");
		}
	}
	//

	h2Element.classList.toggle("minus");
	divElement.classList.toggle("open");
	
	evt.preventDefault();           // cancel default action of h2's child <a>
};

document.addEventListener("DOMContentLoaded", () => {
	// get the h2 tags
	const h2Elements = document.querySelectorAll("#faqs h2");
	
	// attach event handler for each h2 tag
	for (let h2Element of h2Elements) {
		h2Element.addEventListener("click", toggle);
	}
	
	// set focus on first h2 tag's <a> tag
	h2Elements[0].firstChild.focus();
});