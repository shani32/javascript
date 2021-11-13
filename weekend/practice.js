function fib(arr) {
    let sum = 0;
    let l=arr.length;
    for (let i = 0; i <= arr[l-1]; i++) {
        sum = sum+((arr[i] + arr[i + 1] + arr[i + 2]));
    }
    return sum;
}

let arr = [1, 1, 1, 3, 5];
console.log(fib( arr))