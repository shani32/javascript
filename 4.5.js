function isLeap(year) {
    if (year % 4 !== 0 || (year % 100 === 0 && year % 400!==0)){
        console.log('Not Leap year')
        return;
      }  
    
    console.log('Leap year')     
}

console.log(isLeap(250))
console.log(isLeap(300))
console.log(isLeap(400))
console.log(isLeap(1100))