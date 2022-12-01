// s1 outfit

function noClothes() {
	document.getElementById('o1').classList.add('hidden');
	document.getElementById('o2').classList.add('hidden');
	document.getElementById('o3').classList.add('hidden');
	document.getElementById('o4').classList.add('hidden');
	document.getElementById('o5').classList.add('hidden');
};

let strip = document.getElementById('strip-button');

strip.onclick = noClothes;


document.getElementsByClassName('outfit');

let s1 = document.getElementById('o1'); 
	/* get #s1 outfit */

/* the process: */

/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/

function out1 () {
	document.getElementById('o2').classList.add('hidden');
	document.getElementById('o3').classList.add('hidden');
	document.getElementById('o4').classList.add('hidden');
	document.getElementById('o5').classList.add('hidden');
	document.getElementById('body').classList.add('hidden');
	document.getElementById('o1').classList.add('show');
}

document.getElementById('s1').onclick = out1;

// s2 outfit
/* get #s2 outfit */

function out2 () {
	document.getElementById('o1').classList.add('hidden');
	document.getElementById('o3').classList.add('hidden');
	document.getElementById('o4').classList.add('hidden');
	document.getElementById('o5').classList.add('hidden');
	document.getElementById('body').classList.add('hidden');
	document.getElementById('o2').classList.add('show');
}

document.getElementById('s2').onclick = out2;

// s3 outfit
/* get #s3 outfit */

function out3 () {
	document.getElementById('o1').classList.add('hidden');
	document.getElementById('o2').classList.add('hidden');
	document.getElementById('o4').classList.add('hidden');
	document.getElementById('o5').classList.add('hidden');
	document.getElementById('body').classList.add('hidden');
	document.getElementById('o3').classList.add('show');
}

document.getElementById('s3').onclick = out3;

// s4 outfit
/* get #s4 outfit */

function out4 () {
	document.getElementById('o1').classList.add('hidden');
	document.getElementById('o2').classList.add('hidden');
	document.getElementById('o3').classList.add('hidden');
	document.getElementById('o5').classList.add('hidden');
	document.getElementById('body').classList.add('hidden');
	document.getElementById('o4').classList.add('show');
}

document.getElementById('s4').onclick = out4;

// s5 outfit
/* get #s5 outfit */

function out5 () {
	document.getElementById('o1').classList.add('hidden');
	document.getElementById('o2').classList.add('hidden');
	document.getElementById('o3').classList.add('hidden');
	document.getElementById('o4').classList.add('hidden');
	document.getElementById('body').classList.add('hidden');
	document.getElementById('o5').classList.add('show');
}

document.getElementById('s5').onclick = out5;

// strip outfit


/* call the function you created to hide all the outfits */
	/* show #body */