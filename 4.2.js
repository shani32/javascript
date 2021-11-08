function grade(numScore){
    if (numScore>=90){
        return 'A';
    } else if (numScore>=80){
        return 'B';
    } else if (numScore>=70){
        return 'C';
    } else if (numScore>=65){
        return 'D';
    } else {
        return 'F'
    }
}
console.log('your grade is' +" "+ grade(90));
console.log('your grade is' +" "+ grade(72));
console.log('your grade is' +" "+ grade(100));
console.log('your grade is' +" "+ grade(20));