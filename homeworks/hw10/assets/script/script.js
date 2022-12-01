// s1 outfit

document.getElementsByClassName("outfit");

let s1 = document.getElementById("o1"); 
	/* get #s1 outfit */

/* the process: */

/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/

s1.onclick = function() {
	let fit = document.getElementsByClassName("fit");
	fit.classList.add("hidden");
	s1.classList.toggle("show");
};

// s2 outfit
/* get #s2 outfit */
/* repeat process */

// s3 outfit
/* get #s3 outfit */
/* repeat process */

// s4 outfit
/* get #s4 outfit */
/* repeat process */

// s5 outfit
/* get #s5 outfit */
/* repeat process */

// strip outfit
let strip = document.getElementsByClassName("strip-button"); /* get #strip-button */
strip.onclick = function() {
	let fit = document.getElementsByClassName("outfit");
	fit.classList.add("hidden");
};

/* call the function you created to hide all the outfits */
	/* show #body */