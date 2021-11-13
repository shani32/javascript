//5.4
function theWeirdCase (str){
   const newStr = str
   .split("")
   .map((word, index) => {
      if(index % 2 === 0){
         return word.toLowerCase();
      }else{
         return word.toUpperCase();
      }
   })
   .join("");
   return newStr;
};
console.log(theWeirdCase('hello how are you today'));

//4.1function fiboNazi(num) {

    let i = 2;
    if (num === 0)
      return 0;
    if (num === 1 || num === 2)
      return 1;
    let val1 = 1;
    let val2 = 1;
    let val3 = 0;
    while (i <= num) {
      val3 = val1;
      val1 = val1 + val2;
      val2 = val3;
      i += 1;
    }
    return val2;

