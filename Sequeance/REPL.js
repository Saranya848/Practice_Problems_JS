//Randomn Function
console.log(Math.floor(Math.random() * 10));

//Question 2: Randomn to get number between 1 and 6

console.log(Math.floor(Math.random() * 6 + 1));

//Question 3: Add 2 random dice numbers
let number = Math.floor(Math.random() * 6 + 1)
console.log("The number of dice 1 is " + number);
let number1 = Math.floor(Math.random() * 6 + 1)
console.log("The number of dice 2 is " + number1);
let sum = number + number1;
console.log("The sum of two dice is : " + sum);