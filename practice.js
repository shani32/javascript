// function percentageOfWorld(population){
//     let perct= population/7900*100;
//     return perct;
// }

// const israel= percentageOfWorld(3244);
// const india= percentageOfWorld(244);
// const Greece= percentageOfWorld(3258);
// console.log(israel);

// const perc2 = function (population){
//     let per= population/7900*100;
//     return per;
   
// }

// const israel2= perc2(3244);
// const india2= perc2(244);
// const Greece2= perc2(3258);
// console.log(israel2);

// let relative =prompt('hoe many sibling you have?');
//  relative= parseInt(relative);
//  if(relative=1){
//      console.log('you have 1 relative')
//  }else if(relative>1){
//     console.log ('tou have more then 1 relative')
//  } else{
//      console.log('no siblings')
//  }
//  relative(1);
 function grades (grade){
     if (grade>=90){
         return 'A';
     }else if (grade>=80){
         return 'B';
     }else if (grade<=70){
         return 'C';
     }else if (grade<69 && grade>65){
         return 'D';

     }else {
         return 'F';
     
 }
}
console.log(grades(85));
console.log(grades(65));
console.log(grades(100));
console.log(grades(78));

let mary=(120+93+85)/3;//99.3
let john=(111+98+95)/3;//98
let mike=(120+92+75)/3;//95
console.log(mary, john, mike);

function win(){
if (mary>john & mary>mike){
    console.log('mary team is the winner with score of'+ ' '+ mary)
} else if( john>mike & john>mary){
    console.log('john team is the winner with score of'+ ' '+ john)
}else if (mike>john && mike>mary){
console.log('mike team is the winner with score of'+ ' '+ mike)
} else{
    console.log('its a tie')
}
}
 win();
 win();

 function boom (n){
     for (let i=1; i<n; i++){
         if(i % 7 === 0 && i.toString().includes(7)){
            console.log('boom boom')
         } else if (i % 7 ===0){
             console.log('boom')
         } else{
             console.log(i)
         }
     }
 }
 boom(17);
 boom(27);
 boom(87);