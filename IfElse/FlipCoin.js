// Generating Random Years from 1900 to 2900
function generateFlip() {
    return Math.round(Math.random() * 1 + 1);
}

let coin = generateFlip();
flipCoin(coin);

function flipCoin(coin) {

    if (coin % 2 == 0) {
        console.log(coin + ' is a Tails');
    } else {
        console.log(coin + ' is a Head');
    }
}