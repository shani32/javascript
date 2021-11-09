const arr = [1,7,3,0,-5,7,3,9];


function arrLength (arr) {
    let counter = 0;
    for (let i of arr) {
        counter++;
    }
    return counter;
};
// console.log(arrLength(arr));
let sum = 0;
function arrSum (array) {
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};
// console.log(arrSum(arr));
multiscore = 1;
function multi(array) {
    for (let i = 0; i < array.length; i++) {
        multiscore *= array[i];
    }
    return multiscore;
};
console.log(multi(arr));

