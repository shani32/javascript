function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
const welcome = () => 'Welcome to Appleseeds Bootcamp!'

function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}
const power =(a) => Math.pow(a);

// From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);
(function (a){
    return Math.sqrt(a);
})()

const randomNumbers = (a, b) => Math.random() * (a - b) + b;
(function(a,b){
    return Math.random() * (a - b) + b;
})()
