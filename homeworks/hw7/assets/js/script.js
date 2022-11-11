function getRandomNum () {
   return Math.floor (Math.random() * 100);
}

let x = getRandomNum();
let y = getRandomNum();
let z = getRandomNum();

function averageThreeNumbers(a, b, c) { 
    let sum = a+b+c;
    let avg = sum/3; 
    return avg;
}

let avg = averageThreeNumbers(x, y, x);

function createSentence (num, noun) {
    let sentence = "On average, a Berkeley student has" + " " + num + " " + noun;
    return sentence;
}

let sentence = createSentence (9, "apples");

