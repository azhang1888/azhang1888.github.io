function getRandomNum {
    Math.max(Infinity)
    Math.random()
}

console.log (getRandomNum)

function averageThreeNumbers(a, b, c) { 
    let sum = x+y+x;
    let avg= sum; 
    return avg/3;
}
let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

console.log (averageThreeNumbers);

let num = 9; 
let noun = "apples";

function createSentence (num=9, noun="apples") {
    let sentence = "On average, a Berkeley student has" + num + noun;
    return sentence 
}
console.log (createSentence)
