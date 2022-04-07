// Generating Random Years from 1900 to 2900
function generateYear() {
    return Math.round(Math.random() * 1000 + 1900);
}

let year = generateYear();
leapYear(year);

function leapYear(year) {

    if ((year % 4 == 0) && ((year % 100 == 0) || (year % 400 == 0))) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}