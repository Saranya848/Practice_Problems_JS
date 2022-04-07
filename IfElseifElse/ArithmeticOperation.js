//Checking Arithmetic Operation And Finding Max

//Random Single numbers
let a = Math.round(Math.random() * 1 + 1);
let b = Math.round(Math.random() * 1 + 1);
let c = Math.round(Math.random() * 1 + 1);

let choice = Math.round(Math.random() * 4);

if(choice == 1){
    console.log("The value of a: " + a);
    console.log("The value of b: " + b);
    console.log("The value of c: " + c);
    console.log("The Arithmetic Operation of a + b * c is : " + (a + b * c));
}
else if(choice == 2){
    console.log("The value of a: " + a);
    console.log("The value of b: " + b);
    console.log("The value of c: " + c);
    console.log("The Arithmetic Operation of a % b + c is : " + (a % b + c));
}
else if(choice == 3){
    console.log("The value of a: " + a);
    console.log("The value of b: " + b);
    console.log("The value of c: " + c);
    console.log("The Arithmetic Operation of c + a / b is : " + (c + a / b));
}
else{
    console.log("The value of a: " + a);
    console.log("The value of b: " + b);
    console.log("The value of c: " + c);
    console.log("The Arithmetic Operation of a * b + c is : " + (a * b + c));
}