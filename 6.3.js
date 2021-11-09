let array= ['boo', 'doooo', 'hoo', 'ro'];
let counting = 0;
countArray=[];
function counted (arr){
    for(word of arr) {
        for (let i=0; i<word.length; i++) {
            counting++;
        }
        countArray.push(counting);
        counting=0;
    }
    return countArray;
}
console.log(counted(array));