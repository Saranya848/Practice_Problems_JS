//Selecting numbers
let number = Math.round(Math.random() * 10 + 1);
let option = parseInt(prompt("1-feet to inch 2-inch to feet 3-feet to meter 4-meter to feet "));
//let option = Math.round(Math.random() % 4);
switch(number){
    case 1: {
        console.log("The Unit Conversion is : " + number * 12);
    }
    break;
    case 2: {
        console.log("The Unit Conversion is : " + number / 12);
    }
    break;
    case 3: {
        console.log("The Unit Conversion is : " + number/3.25);
    }
    break;
    case 4: {
        console.log("The Unit Conversion is : " + number*3.28);
    }
    break;
}