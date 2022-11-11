function getRandomNum (max) {
   let x = Math.floor (Math.random()*100);
   let y = Math.floor (Math.random()*100);
   let z = Math.floor (Math.random()*100);
   return x, y, z;
}

console.log (getRandomNum);

function averageThreeNumbers(a, b, c) { 
    let sum = a+b+c;
    let avg = sum/3; 
    return avg;
}

console.log (averageThreeNumbers);

/*
let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);
*/

/*function createSentence () {
    let num = 9;
    let noun = "apples";
    let sentence = "On average, a Berkeley student has" + num + noun;
    return sentence;
}*/

function createSentence (12, "squirrel") {
    let  sentence = "On average, a Berkeley student has" + num + noun; 
    return sentence
}

console.log (createSentence)
