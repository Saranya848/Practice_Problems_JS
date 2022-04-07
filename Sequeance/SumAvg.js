//Question 4: Finding Sum and Average random dice numbers
let sum = 0
for (diceno = 1; diceno <= 5; diceno++) {
    let number = Math.floor(Math.random() * 6 + 1)
    console.log("Number" + diceno + " = " + number);
    sum = sum + number;
}
console.log("The sum of 5 random 2 digit value is = " + sum);
console.log("The average of 5 random 2 digit value is = " + sum / 5);