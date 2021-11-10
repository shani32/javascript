const array1= {
    first:'dani',
    last: 'gal',
    age: 32
}
console.log(array1);

function swap(array1){
    let array2={};
    for(let i in array1){
        array2[array1[i]]=i;
    }
    return array2;
}

console.log(swap(array1))

const fruits={
    apple: 2,
    orange: 6,
    banana:4,
    lemon: 5,
    mango:3
}
console.log(fruits);

function swipping (fruits){
    let veggi={};
    for(let i in fruits){
        veggi[fruits[i]]=i;

    }
    return veggi;
}
console.log(swipping(fruits))

// const clone = JSON.parse(JSON.stringify(array1));
// console.log(clone)

// let array2 = Object.assign({}, array1);

