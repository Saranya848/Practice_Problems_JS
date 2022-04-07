let sum = 0
let number
for (diceno = 1; diceno <= 5; diceno++) {
    number = Math.floor(Math.random() * 6 + 1);
    console.log("Number" + diceno + " = " + number);
    sum = sum + sum + number;
}
console.log("The sum of 5 random 2 digit value is = " + sum);
console.log("The average of 5 random 2 digit value is = " + sum / 5);

let maxNumber = 999;
let minNumber = 100;

// check the condition
if(number >= maxNumber) {
    maxNumber = number;
}
else{
    minNumber = number;
}
console.log("The Maxmum value is = " + maxNumber);
console.log("The Minmum value is = " + minNumber);