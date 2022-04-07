const prompt = require('prompt-sync')();

const number = prompt('The number');

if(number >=1 && num < 10){
    console.log('The' + number + ' is ones units');
}
else if(number >=10 && num < 100){
    console.log('The' + number + ' is tens units');
}
else if(number >=100 && num < 1000){
    console.log('The' + number + ' is Hundred units');
}
else if(number >=1000 && num < 10000){
    console.log('The' + number + ' is Thousands units');
}
else if(number >=10000 && num < 100000){
    console.log('The' + number + ' is Ten Thousands units');
}
else{
    console.log('The' + number + " is Lakhs units");
}