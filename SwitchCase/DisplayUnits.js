//Calculating Units of Numbers
let number = Math.round(Math.random() * 10 + 1);
switch(number){
    case 1: {
        console.log('The' + number + ' is ones units');
    }
    break;
    case 10: {
        console.log('The' + number + ' is tens units');
    }
    break;
    case 100: {
        console.log('The' + number + ' is Hundred units');
    }
    break;
    case 1000: {
        console.log('The' + number + ' is Thousands units');
    }
    break;
    case 10000: {
        console.log('The' + number + ' is Ten Thousands units');
    }
    break;
    case 100000: {
        console.log('The' + number + " is Lakhs units");
    }
    break;
}
