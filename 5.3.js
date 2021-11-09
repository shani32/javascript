function valid(password){
    if(password.length > 7 ){
        return 'strong';
    } else{
        return 'weak';
    }
}

console.log(valid('vghhdv'))

const pass = (password) => {
    if(password.length > 7 ){
        return 'strong';
    } else{
        return 'weak';
    }
}

console.log(pass('vghdedehdv'))

function pessi (password1){
password1.length>7 ?  console.log('strong') :  console.log('weak') ;
}

pessi('hsxvhsx')





